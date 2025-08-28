/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import type { HomeAssistant } from 'custom-card-helpers';
import { handleAction } from 'custom-card-helpers';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';

export interface HeaderMain {
  entity?: string;
  name?: string;
  icon?: string;
  temp_sensor?: string;
  humidity_sensor?: string;
  badges?: unknown[];
}

export interface HeaderAC { entity?: string }
export interface HeaderThermostat { entity?: string }

export interface RoomCardHeader {
  // New structured format
  main?: HeaderMain;
  ac?: HeaderAC;
  thermostat?: HeaderThermostat;

  // Back-compat (legacy flat fields supported during transition)
  layout?: 'all' | 'main_ac' | 'main_thermo' | 'main_only';
  main_entity?: string;
  main_name?: string;
  main_icon?: string;
  temp_sensor?: string;
  humidity_sensor?: string;
  ac_entity?: string;
  thermo_entity?: string;
  badges?: unknown[];
}

export interface RoomCardConfig {
  type?: string;
  title?: string;
  tile_height?: number;
  badge_size?: number;
  badge_icon_size?: number;
  main_icon_size?: number;
  chip_font_size?: number;
  card_shadow_color?: string;
  card_shadow_intensity?: number;
  unavailable_pulse_color?: string;
  header?: RoomCardHeader;
  switch_rows?: unknown[];
  // Main tile actions (boilerplate-style)
  tap_action?: import('custom-card-helpers').ActionConfig;
  hold_action?: import('custom-card-helpers').ActionConfig;
  double_tap_action?: import('custom-card-helpers').ActionConfig;
}

function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

@customElement('bitosome-room-card')
export class BitosomeRoomCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: RoomCardConfig;

  static getStubConfig(): RoomCardConfig {
    return {
      title: 'Living room',
      tile_height: 80,
      badge_size: 22,
      badge_icon_size: 14,
      main_icon_size: 48,
      chip_font_size: 12,
      card_shadow_color: '#000000',
      card_shadow_intensity: 0.5,
      unavailable_pulse_color: '#ff3b30',
      header: {
        main: {
          entity: 'switch.living_room_light_group',
          name: 'Living room',
          icon: 'mdi:sofa-outline',
          temp_sensor: 'sensor.kitchen_living_room_temparature_average',
          humidity_sensor: 'sensor.kitchen_living_room_humidity_average',
          badges: [],
        },
        ac: { entity: 'climate.living_room_ac' },
        thermostat: { entity: 'climate.thermostat_5_7_group' },
      },
      switch_rows: [],
    };
  }

  public setConfig(config: RoomCardConfig): void {
    const c = clone(config || BitosomeRoomCard.getStubConfig());
    c.header = c.header || {};
    if (!Array.isArray(c.header.badges)) c.header.badges = [];
    if (!Array.isArray(c.switch_rows)) c.switch_rows = [];
    this._config = c;
  }

  public getCardSize(): number {
    return 6;
  }

  static styles: CSSResultGroup = css`
    :host { display:block; }
    .metrics, .metrics * { box-sizing: border-box; }

    .metrics {
      --ac-therm-icon: 50px;
    }

    ha-card {
      border-radius: 16px;
      background: linear-gradient(
        180deg,
        rgba(var(--rgb-card-background-color, 255,255,255), 0.92),
        rgba(var(--rgb-card-background-color, 250,250,250), 0.85)
      );
      box-shadow: 0 10px 30px var(--panel-shadow-color);
      padding: 12px;
      color: var(--primary-text-color);
    }
    ha-card.unavailable {
      animation: cardPulse 2.8s ease-in-out infinite;
    }

    .root { display: grid; gap: 12px; }

    /* Header row */
    .header-row {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 12px;
      align-items: stretch;
    }
    .header-row.only-main { grid-template-columns: 1fr; }
    .header-row.main-plus-one { grid-template-columns: 1fr auto; }
    .header-row > * { height: var(--tile-h); }

    /* MAIN tile */
    .main-tile {
      position: relative;
      height: var(--tile-h);
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      background: var(--ha-card-background, var(--card-background-color));
      padding-left: 16px;
      overflow: hidden;
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    }
    .main-icon {
      position: absolute; left: 12px; top: 8px;
      width: var(--main-icon-size, 48px); height: var(--main-icon-size, 48px); line-height: 0;
      --mdc-icon-size: var(--main-icon-size, 48px);
      color: var(--primary-text-color);
    }
    .chip-tr {
      position: absolute; right: 8px; top: 8px; z-index: 3;
      display: inline-flex; align-items: center; gap: 2px;
      padding: 2px 6px; border-radius: 999px;
      background: rgba(0,0,0,0.06);
      font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap;
    }
    .chip-tr ha-icon { width: 10px; height: 10px; line-height:0; --mdc-icon-size:10px; }
    .chip-tr .tval, .chip-tr .hval { font-weight: 700; }

    /* badge basics (bulb/lock/gate) */
    .badge {
      width: var(--badge); height: var(--badge);
      border-radius: 999px;
      display:flex; align-items:center; justify-content:center;
      line-height:0;
      background: rgba(0,0,0,0.06);
    }
    .badge ha-icon {
      --mdc-icon-size: var(--badge-icon);
      width: var(--badge-icon); height: var(--badge-icon);
      display:block; margin:0; padding:0; line-height:0;
      pointer-events:none;
      color: var(--secondary-text-color);
    }
    .main-badges-br {
      position: absolute; right: 8px; bottom: 8px; z-index: 3;
      display: inline-flex; align-items: center; justify-content: flex-end;
      gap: 6px; flex-wrap: wrap; max-width: calc(100% - 16px);
    }
    .main-name {
      position: absolute; left: 12px; bottom: 8px;
      font-weight: 500; font-size: 14px; color: var(--primary-text-color);
    }

    /* AC & THERMOSTAT squares — width == height == --tile-h */
    .square {
      position: relative;
      width: var(--tile-h); height: var(--tile-h);
      aspect-ratio: 1 / 1;
      border-radius: 12px;
      background: var(--card-background-color);
      backdrop-filter: blur(10px);
      transition: transform 0.18s ease, box-shadow 0.28s ease, filter 0.12s ease;
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      overflow: hidden;
      display: grid; place-items: center;
    }

    .center-xy { position: static; transform: none; display:flex; align-items:center; justify-content:center; pointer-events:none; user-select:none; line-height:0; }
    .ac-fan, .thermo-icon {
      width: var(--ac-therm-icon);
      height: var(--ac-therm-icon);
      --mdc-icon-size: var(--ac-therm-icon);
      display: block; margin: 0; padding: 0; line-height: 0; transform-origin: 50% 50%; pointer-events: none;
    }

    /* AC mode badge (top-right) */
    .badge-tr { position: absolute; right: 8px; top: 8px; z-index: 3; }

    /* Thermostat temp chip (top-right) */
    .temp-chip-tr { position: absolute; right: 8px; top: 8px; z-index: 3; display:inline-flex; align-items:center; }
    .temp-pill { display:inline-flex; align-items:center; justify-content:center; padding: 0 6px; border-radius: 999px; background:#ff7043; font-size: var(--chip-font-size, 12px); color:#fff; line-height:1; white-space:nowrap; font-weight:700; max-width: calc(var(--tile-h) - 16px); min-height: var(--badge); }

    /* Animations */
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes activePulse {
      0%   { box-shadow: 0 10px 20px var(--pulse-weak); transform: translateY(0) scale(1); }
      45%  { box-shadow: 0 28px 56px var(--pulse-strong); transform: translateY(-1px) scale(1.02); }
      100% { box-shadow: 0 10px 20px var(--pulse-weak); transform: translateY(0) scale(1); }
    }
    @keyframes heatingGlow {
      0%   { box-shadow: 0 6px 18px rgba(0,0,0,0.10); }
      50%  { box-shadow: 0 0 30px rgba(255,112,67,0.32); }
      100% { box-shadow: 0 6px 18px rgba(0,0,0,0.10); }
    }
    @keyframes cardPulse {
      0%   { box-shadow: 0 10px 30px var(--panel-shadow-color); }
      50%  { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); }
      100% { box-shadow: 0 10px 30px var(--panel-shadow-color); }
    }

    /* Switch rows */
    .switch-row { display:grid; grid-template-columns: repeat(var(--cols,3), 1fr); gap: 12px; }
    .switch-tile {
      position: relative;
      height: var(--tile-h);
      border-radius: 12px;
      background: var(--card-background-color);
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
      display: grid; place-items: center;
      color: var(--secondary-text-color);
    }
    /* Native-like hover feedback */
    .main-tile:hover,
    .square:hover,
    .switch-tile:hover { filter: brightness(1.03); }
    .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
    .switch-tile .name { font-weight: 600; font-size: 12px; }
    .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; }

    /* ON base style */
    .switch-tile.on {
      background: var(--primary-color);
      color: var(--primary-background-color);
      transform: translateY(2px);
      box-shadow:
        inset 0 6px 14px rgba(0,0,0,0.20),
        0 18px 40px rgba(255,193,7,0.30),
        0 6px 18px rgba(255,193,7,0.16);
      filter: drop-shadow(0 18px 32px rgba(255,193,7,0.22));
      z-index: 2;
    }
    .switch-tile.on .switch-icon { color: var(--primary-background-color); }

    /* Smart plug: animated band + GREEN glow (not yellow) */
    @keyframes chase {
      0%   { background-position: -150% 0, 0 0; }
      50%  { background-position: 50% 0, 0 0; }
      100% { background-position: 250% 0, 0 0; }
    }
    .switch-tile.smart.on {
      background:
        linear-gradient(90deg, rgba(0,200,83,0.00) 0%, rgba(0,200,83,0.45) 50%, rgba(0,200,83,0.00) 100%),
        var(--primary-color);
      background-size: 30% 100%, 100% 100%;
      background-repeat: no-repeat;
      animation: chase 2s linear infinite;

      /* Override the yellow base glow with GREEN */
      box-shadow:
        inset 0 6px 14px rgba(0,0,0,0.20),
        0 18px 40px rgba(0,200,83,0.30),
        0 6px 18px rgba(0,200,83,0.16);
      filter: drop-shadow(0 18px 32px rgba(0,200,83,0.22));
    }

    .clickable { cursor: pointer; }
  `;

  protected render(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    const c = { ...BitosomeRoomCard.getStubConfig(), ...this._config } as RoomCardConfig;
    const h = { ...BitosomeRoomCard.getStubConfig().header, ...(c.header || {}) } as RoomCardHeader;

    const tileH = Number(c.tile_height) || 80;
    const badgeSize = Number(c.badge_size) || 22;
    const badgeIcon = Number(c.badge_icon_size) || 14;
    const mainIcon = Number(c.main_icon_size) || 48;
    const panelShadowColor = this._rgbaFromColor(c.card_shadow_color, c.card_shadow_intensity);
    const chipFont = Number(c.chip_font_size) || 12;
    const unavailColor = c.unavailable_pulse_color || '#ff3b30';
    const hasUnavail = this._hasAnyUnavailable(c, h);
    const unavailWeak = this._rgbaFromColor(unavailColor, 0.18);
    const unavailStrong = this._rgbaFromColor(unavailColor, 0.36);

    return html`
      <ha-card class=${hasUnavail ? 'unavailable' : ''}
               style=${`--panel-shadow-color:${hasUnavail ? unavailWeak : panelShadowColor}; --unavail-weak:${unavailWeak}; --unavail-strong:${unavailStrong}`}
               .header=${this._config?.title || undefined}>
        <div class="metrics" style=${`--tile-h:${tileH}px; --badge:${badgeSize}px; --badge-icon:${badgeIcon}px; --main-icon-size:${mainIcon}px; --chip-font-size:${chipFont}px;`}>
          <div class="root">
            ${this._renderHeaderRow(h)}
            ${this._renderSwitchRows(c.switch_rows as any[])}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderHeaderRow(h: RoomCardHeader): TemplateResult {
    const main = h.main || { entity: h.main_entity, name: h.main_name, icon: h.main_icon, temp_sensor: h.temp_sensor, humidity_sensor: h.humidity_sensor, badges: h.badges };
    const ac = h.ac || { entity: h.ac_entity };
    const thermostat = h.thermostat || { entity: h.thermo_entity };
    const showAC = !!ac?.entity;
    const showThermo = !!thermostat?.entity;
    const cls = !showAC && !showThermo ? 'header-row only-main' : (showAC && showThermo ? 'header-row' : 'header-row main-plus-one');
    return html`
      <div class=${cls}>
        ${this._renderMainTile(main as any)}
        ${showAC ? this._renderACTile(ac.entity as string) : nothing}
        ${showThermo ? this._renderThermoTile(thermostat.entity as string) : nothing}
      </div>
    `;
  }

  private _renderMainTile(h: any): TemplateResult {
    const icon = h.icon || 'mdi:sofa-outline';
    const name = h.name || '';
    const tval = this._fmt2(h.temp_sensor, 2, '°');
    const hval = this._fmt2(h.humidity_sensor, 2, '%');
    const hasHold = !!this._config?.hold_action;
    const hasDbl = !!this._config?.double_tap_action;
    return html`
      <div class="main-tile"
           @action=${(ev: CustomEvent) => this._onMainAction(ev, h.entity)}
           .actionHandler=${actionHandler({ hasHold, hasDoubleClick: hasDbl })}
           role="button" tabindex="0">
        <ha-icon class="main-icon" .icon=${icon}></ha-icon>
        <div class="chip-tr" data-role="chip">
          <ha-icon icon="mdi:thermometer"
                   class="chip-ico"
                   @action=${() => this._openMoreInfo(h.temp_sensor)}
                   .actionHandler=${actionHandler({})}></ha-icon>
          <span class="tval"
                @action=${() => this._openMoreInfo(h.temp_sensor)}
                .actionHandler=${actionHandler({})}>${tval}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent"
                   class="chip-ico"
                   @action=${() => this._openMoreInfo(h.humidity_sensor)}
                   .actionHandler=${actionHandler({})}></ha-icon>
          <span class="hval"
                @action=${() => this._openMoreInfo(h.humidity_sensor)}
                .actionHandler=${actionHandler({})}>${hval}</span>
        </div>
        <div class="main-badges-br" data-role="badges"></div>
        <div class="main-name">${name}</div>
      </div>
    `;
  }

  private _renderACTile(entityId: string): TemplateResult {
    const mode = (this.hass?.states?.[entityId]?.state || '').toLowerCase();
    const active = !!mode && mode !== 'off';
    const { bg, icon } = this._acBadge(mode);
    const fanStyle = `color:${this._acModeColor(mode)}; ${active ? 'animation:spin 1.5s linear infinite;' : ''}`;
    const pulse = this._acPulseColors(mode);
    const tileStyle = `${active ? 'animation:activePulse 2.4s ease-in-out infinite;' : ''} --pulse-weak:${pulse.weak}; --pulse-strong:${pulse.strong};`;
    return html`
      <div class="square ac-tile" style=${tileStyle}
           @action=${(ev: CustomEvent) => this._onACAction(ev, entityId)}
           .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
           role="button" tabindex="0">
        <div class="badge badge-tr" style=${`background:${bg}`}> 
          <ha-icon .icon=${icon} style="color:#fff"></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class="ac-fan" icon="mdi:fan" style=${fanStyle}></ha-icon>
        </div>
      </div>
    `;
  }

  private _renderThermoTile(entityId: string): TemplateResult {
    const st = this.hass?.states?.[entityId];
    const target = st?.attributes?.temperature ?? st?.attributes?.target_temp ?? st?.attributes?.target_temperature;
    const tStr = this._fmtNumber(target, 1) + '°';
    const hvacAction = (st?.attributes?.hvac_action || '').toLowerCase();
    const state = (st?.state || '').toLowerCase();
    const color = state === 'off' ? 'gray' : (hvacAction === 'heating' || state === 'heating') ? '#ff7043' : '#66bb6a';
    const tileStyle = `${(hvacAction === 'heating' || state === 'heating') ? 'animation:heatingGlow 2.4s ease-in-out infinite;' : ''}`;
    return html`
      <div class="square thermo-tile" style=${tileStyle}
           @action=${(ev: CustomEvent) => this._onThermoAction(ev, entityId)}
           .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
           role="button" tabindex="0">
        <div class="temp-chip-tr">
          <div class="temp-pill"><span class="thermo-target">${tStr}</span></div>
        </div>
        <div class="center-xy">
          <ha-icon class="thermo-icon" icon="mdi:thermostat" style=${`color:${color}`}></ha-icon>
        </div>
      </div>
    `;
  }

  private _onMainAction(ev: CustomEvent, entity?: string): void {
    const action = (ev.detail && (ev.detail as any).action) || 'tap';
    // If configured, use boilerplate handleAction against card-level actions
    if (this.hass && this._config && (this._config.tap_action || this._config.hold_action || this._config.double_tap_action)) {
      handleAction(this, this.hass, this._config as any, action);
      return;
    }
    // Fallback: open more-info for the main entity
    if (entity) this._openMoreInfo(entity);
  }

  private _onACAction(ev: CustomEvent, entity: string): void {
    const act = (ev.detail && ev.detail.action) || 'tap';
    if (act === 'hold') this._openMoreInfo(entity);
    else this._acToggle(entity);
  }

  private _onThermoAction(ev: CustomEvent, entity: string): void {
    const act = (ev.detail && ev.detail.action) || 'tap';
    if (act === 'hold') this._openMoreInfo(entity);
    else this._thermoToggle(entity);
  }

  private _renderSwitchRows(rows?: any[]): TemplateResult | typeof nothing {
    if (!rows || !rows.length) return nothing;
    return html`${rows.map((row) => {
      const items = Array.isArray(row) ? row : (Array.isArray((row as any)?.row) ? (row as any).row : []);
      const cols = Math.max(1, items.length || 1);
      return html`<div class="switch-row" style=${`--cols:${cols}`}>${items.map((sw) => this._renderSwitchTile(sw))}</div>`;
    })}`;
  }

  private _renderSwitchTile(sw: any): TemplateResult {
    const tap = sw?.tap_entity || '';
    const hold = sw?.hold_entity || sw?.tap_entity || '';
    const icon = sw?.icon || '';
    const name = sw?.name || '';
    const type = String(sw?.type || 'switch').toLowerCase();
    const isSmart = type === 'smart_plug';
    const on = this._isOn(tap);
    const cls = `switch-tile ${isSmart ? 'smart' : ''} ${on ? 'on' : ''}`;
    return html`
      <div class=${cls}
           @action=${(ev: CustomEvent) => this._onSwitchAction(ev, tap, hold)}
           .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
           role="button" tabindex="0">
        <div class="tile-inner">
          ${icon ? html`<ha-icon class="switch-icon" .icon=${icon}></ha-icon>` : nothing}
          ${name ? html`<div class="name">${name}</div>` : nothing}
        </div>
      </div>
    `;
  }

  private _onSwitchAction(ev: CustomEvent, tap?: string, hold?: string): void {
    const act = (ev.detail && ev.detail.action) || 'tap';
    if (act === 'hold') this._openMoreInfo(hold || tap);
    else this._toggleGeneric(tap);
  }

  private _fmt2(entityId: string | undefined, digits: number, suffix: string): string {
    if (!entityId || !this.hass) return '—' + (suffix || '');
    const st = this.hass.states[entityId];
    if (!st || st.state === '' || st.state === 'unknown' || st.state === 'unavailable') return '—' + (suffix || '');
    const n = Number(st.state);
    return Number.isFinite(n) ? n.toFixed(digits) + (suffix || '') : String(st.state) + (suffix || '');
  }

  private _fmtNumber(v: any, digits: number): string {
    if (v === undefined || v === null || v === '' || v === 'unknown' || v === 'unavailable') return '—';
    const n = Number(v);
    return Number.isFinite(n) ? n.toFixed(digits) : String(v);
  }

  private _acModeColor(mode: string): string {
    if (!mode || mode === 'off') return 'gray';
    if (mode.includes('cool')) return '#00aaff';
    if (mode.includes('heat')) return '#ff7043';
    if (mode.includes('dry')) return '#ffca28';
    if (mode.includes('fan')) return '#66bb6a';
    if (mode.includes('auto')) return '#26c6da';
    return 'var(--paper-item-icon-color)';
  }

  private _acBadge(mode: string): { bg: string; icon: string } {
    if (!mode || mode === 'off') return { bg: 'rgba(158,158,158,0.95)', icon: 'mdi:power' };
    if (mode.includes('cool')) return { bg: '#00aaff', icon: 'mdi:snowflake' };
    if (mode.includes('heat')) return { bg: '#ff7043', icon: 'mdi:fire' };
    if (mode.includes('dry')) return { bg: '#ffca28', icon: 'mdi:water-percent' };
    if (mode.includes('fan')) return { bg: '#66bb6a', icon: 'mdi:fan' };
    if (mode.includes('auto')) return { bg: '#26c6da', icon: 'mdi:autorenew' };
    return { bg: 'rgba(0,0,0,0.06)', icon: 'mdi:air-conditioner' };
  }

  private _acPulseColors(mode: string): { weak: string; strong: string } {
    if (mode?.includes('cool')) return { weak: 'rgba(0,170,255,0.12)', strong: 'rgba(0,170,255,0.26)' };
    if (mode?.includes('heat')) return { weak: 'rgba(255,112,67,0.12)', strong: 'rgba(255,112,67,0.26)' };
    if (mode?.includes('dry'))  return { weak: 'rgba(255,202,40,0.12)', strong: 'rgba(255,202,40,0.26)' };
    if (mode?.includes('fan'))  return { weak: 'rgba(102,187,106,0.12)', strong: 'rgba(102,187,106,0.26)' };
    if (mode?.includes('auto')) return { weak: 'rgba(38,198,218,0.12)', strong: 'rgba(38,198,218,0.26)' };
    return { weak: 'rgba(0,0,0,0.06)', strong: 'rgba(0,0,0,0.12)' };
  }

  private _openMoreInfo(entityId?: string | null): void {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent('hass-more-info', {
      detail: { entityId }, bubbles: true, composed: true,
    }));
  }

  private _acToggle(entityId?: string | null): void {
    if (!entityId || !this.hass) return;
    const st = this.hass.states[entityId];
    const mode = (st?.state || '').toLowerCase();
    const on = !!mode && mode !== 'off';
    this.hass.callService('climate', on ? 'turn_off' : 'turn_on', { entity_id: entityId });
  }

  private _thermoToggle(entityId?: string | null): void {
    if (!entityId || !this.hass) return;
    const st = this.hass.states[entityId];
    const mode = (st?.state || '').toLowerCase();
    const next = (mode === 'off') ? 'heat' : 'off';
    this.hass.callService('climate', 'set_hvac_mode', { entity_id: entityId, hvac_mode: next });
  }

  private _toggleGeneric(entityId?: string | null): void {
    if (!entityId || !this.hass) return;
    const domain = entityId.split('.')[0];
    const svc = (domain === 'switch' || domain === 'light') ? `${domain}.toggle` : 'homeassistant.toggle';
    const [d, s] = svc.split('.');
    this.hass.callService(d, s, { entity_id: entityId });
  }

  private _isOn(entityId?: string | null): boolean {
    if (!entityId || !this.hass) return false;
    const st = this.hass.states[entityId];
    return (st?.state || '').toLowerCase() === 'on';
  }

  private _rgbaFromColor(color: string | undefined, alpha = 0.5): string {
    const a = Math.max(0, Math.min(1, Number(alpha) || 0));
    if (!color || typeof color !== 'string') return `rgba(0,0,0,${a})`;
    const c = color.trim();
    if (c.startsWith('rgba(') || c.startsWith('rgb(') || c.startsWith('hsl(') || c.startsWith('var(')) return c;
    const hex = c.replace('#', '');
    const to255 = (h: string) => parseInt(h, 16);
    if (hex.length === 3) {
      const r = to255(hex[0] + hex[0]), g = to255(hex[1] + hex[1]), b = to255(hex[2] + hex[2]);
      return `rgba(${r},${g},${b},${a})`;
    }
    if (hex.length >= 6) {
      const r = to255(hex.slice(0,2)), g = to255(hex.slice(2,4)), b = to255(hex.slice(4,6));
      return `rgba(${r},${g},${b},${a})`;
    }
    return `rgba(0,0,0,${a})`;
  }

  private _hasAnyUnavailable(c: RoomCardConfig, h: RoomCardHeader): boolean {
    if (!this.hass) return false;
    const ids: Array<string | undefined> = [];
    const main = h.main || { entity: h.main_entity, temp_sensor: h.temp_sensor, humidity_sensor: h.humidity_sensor } as any;
    const ac = h.ac || { entity: h.ac_entity } as any;
    const thermostat = h.thermostat || { entity: h.thermo_entity } as any;
    ids.push(main?.entity, main?.temp_sensor, main?.humidity_sensor, ac?.entity, thermostat?.entity);
    const rows = (c.switch_rows || []) as any[];
    rows.forEach((row) => {
      const items = Array.isArray(row) ? row : (Array.isArray((row as any)?.row) ? (row as any).row : []);
      items.forEach((sw: any) => ids.push(sw?.tap_entity, sw?.hold_entity));
    });
    const bad = new Set(['unavailable', 'unknown', 'offline']);
    return ids.some((id) => {
      if (!id) return false;
      const st = this.hass?.states?.[id];
      const s = (st?.state || '').toLowerCase();
      return bad.has(s);
    });
  }
}

// Card registration (HA UI shows in list)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { customCards?: any[] } }
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'bitosome-room-card',
  name: 'Room card',
  description: 'Room control card',
  preview: false,
  version: CARD_VERSION,
});

// Fancy console banner (logs once)
try {
  const w = window as any;
  if (!w.__BITOSOME_ROOM_CARD_LOGGED__) {
    const l1 = 'background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700';
    const l2 = 'background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;';
    // eslint-disable-next-line no-console
    console.info(`%cbitosome-room-card%c v${CARD_VERSION} loaded`, l1, l2);
    w.__BITOSOME_ROOM_CARD_LOGGED__ = true;
  }
} catch (e) { /* no-op */ }

export default BitosomeRoomCard;
