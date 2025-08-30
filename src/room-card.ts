/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, CSSResultGroup, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import type { HomeAssistant } from 'custom-card-helpers';
import { handleAction, fireEvent } from 'custom-card-helpers';
import { CARD_VERSION } from './const';
// glow utilities used by tiles
import { renderMainTile } from './tiles/main';
import { renderACTile } from './tiles/ac';
import { renderThermostatTile } from './tiles/thermostat';
import { renderSwitchRows } from './tiles/switch';
import { baseStyles } from './styles/base.styles';
import { chipStyles } from './styles/chip.styles';
import { animationStyles } from './styles/animation.styles';
import { mainTileStyles } from './styles/main-tile.styles';
import { acTileStyles } from './styles/ac-tile.styles';
import { thermostatTileStyles } from './styles/thermostat-tile.styles';
import { switchTileStyles } from './styles/switch-tile.styles';

export interface HeaderMain {
  // Core configuration
  tap_entity?: string;
  hold_entity?: string;
  light_group_entity?: string;
  glow_mode?: string;
  main_name?: string;
  main_icon?: string;
  // Sensors
  temp_sensor?: string;
  humidity_sensor?: string;
  badges?: unknown[];
  // Actions
  tap_action?: import('custom-card-helpers').ActionConfig;
  hold_action?: import('custom-card-helpers').ActionConfig;
  double_tap_action?: import('custom-card-helpers').ActionConfig;
}

export interface HeaderAC {
  entity?: string;
  glow_mode?: string;
  tap_action?: import('custom-card-helpers').ActionConfig;
  hold_action?: import('custom-card-helpers').ActionConfig;
  double_tap_action?: import('custom-card-helpers').ActionConfig;
}
export interface HeaderThermostat {
  entity?: string;
  glow_mode?: string;
  tap_action?: import('custom-card-helpers').ActionConfig;
  hold_action?: import('custom-card-helpers').ActionConfig;
  double_tap_action?: import('custom-card-helpers').ActionConfig;
}

export interface RoomCardHeader {
  // New structured format
  main?: HeaderMain;
  ac?: HeaderAC;
  thermostat?: HeaderThermostat;
  // No legacy fields
  // Optional per-header icon sizing override
  main_icon_size?: number;
  // Typo tolerance (maicon_size)
  maicon_size?: number;
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
  headers?: RoomCardHeader[];
  switch_rows?: unknown[];
  // Main tile actions (boilerplate-style)
  tap_action?: import('custom-card-helpers').ActionConfig;
  hold_action?: import('custom-card-helpers').ActionConfig;
  double_tap_action?: import('custom-card-helpers').ActionConfig;
}

function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// Haptic feedback helper (dispatches HA's global 'haptic' event)
function haptic(type: any): void {
  try {
    // `type` can be a string like 'success' | 'warning' | 'failure' | 'light' | 'medium' | 'heavy'
    fireEvent(window as any, 'haptic', type);
  } catch (_e) {
    // no-op
  }
}

@customElement('space-hub-card')
export class SpaceHubCard extends LitElement {
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
  // Note: stub contains visual defaults only. No default header/main to avoid
  // accidental rendering of a main tile in user configurations.
      switch_rows: [],
    };
  }

  public setConfig(config: RoomCardConfig): void {
    // Keep the provided config as-is and ensure headers is an array
    const c = clone(config || {} as RoomCardConfig);
    if (!Array.isArray(c.headers)) c.headers = [];
    if (!Array.isArray(c.switch_rows)) c.switch_rows = [];
    this._config = c;
  }

  public getCardSize(): number {
    return 6;
  }

  static styles: CSSResultGroup = [
    baseStyles,
    chipStyles,
    animationStyles,
    mainTileStyles,
    acTileStyles,
    thermostatTileStyles,
    switchTileStyles,
  ];

  protected render(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    // Don't merge the full stub (it contains a default header).
    // Apply visual defaults but keep header(s) strictly from user config.
    const defaults = SpaceHubCard.getStubConfig();
    const userCfg = this._config || {} as RoomCardConfig;

    // Build a rendering config that uses defaults for visuals only.
    const c: RoomCardConfig = {
      title: userCfg.title ?? defaults.title,
      tile_height: userCfg.tile_height ?? defaults.tile_height,
      badge_size: userCfg.badge_size ?? defaults.badge_size,
      badge_icon_size: userCfg.badge_icon_size ?? defaults.badge_icon_size,
      main_icon_size: userCfg.main_icon_size ?? defaults.main_icon_size,
      chip_font_size: userCfg.chip_font_size ?? defaults.chip_font_size,
      card_shadow_color: userCfg.card_shadow_color ?? defaults.card_shadow_color,
      card_shadow_intensity: userCfg.card_shadow_intensity ?? defaults.card_shadow_intensity,
      unavailable_pulse_color: userCfg.unavailable_pulse_color ?? defaults.unavailable_pulse_color,
      // Keep headers exactly as provided by user
      headers: Array.isArray(userCfg.headers) && userCfg.headers.length ? userCfg.headers : [],
      switch_rows: Array.isArray(userCfg.switch_rows) ? userCfg.switch_rows : (userCfg.switch_rows || []),
      tap_action: userCfg.tap_action,
      hold_action: userCfg.hold_action,
      double_tap_action: userCfg.double_tap_action,
    } as RoomCardConfig;

    // Use the headers array directly
    const headers: RoomCardHeader[] = Array.isArray(c.headers) && c.headers.length ? c.headers : [];

    const tileH = Number(c.tile_height) || Number(defaults.tile_height) || 80;
    const badgeSize = Number(c.badge_size) || Number(defaults.badge_size) || 22;
    const badgeIcon = Number(c.badge_icon_size) || Number(defaults.badge_icon_size) || 14;
    // Allow header-level override for main icon size (use first header if provided)
    const headerCfg: any = headers[0] || {};
    const headerMainIconSize = Number(headerCfg?.main_icon_size ?? headerCfg?.maicon_size);
    const mainIcon = Number.isFinite(headerMainIconSize) && headerMainIconSize > 0
      ? headerMainIconSize
      : (Number(c.main_icon_size) || Number(defaults.main_icon_size) || 48);
    const panelShadowColor = this._rgbaFromColor(c.card_shadow_color || defaults.card_shadow_color, c.card_shadow_intensity ?? defaults.card_shadow_intensity);
    const chipFont = Number(c.chip_font_size) || Number(defaults.chip_font_size) || 12;
    const unavailColor = c.unavailable_pulse_color || defaults.unavailable_pulse_color || '#ff3b30';
    const hasUnavail = this._hasAnyUnavailable(c, headers);
    const unavailWeak = this._rgbaFromColor(unavailColor, 0.18);
    const unavailStrong = this._rgbaFromColor(unavailColor, 0.36);

    return html`
      <ha-card class=${hasUnavail ? 'unavailable' : ''}
               style=${`--panel-shadow-color:${hasUnavail ? unavailWeak : panelShadowColor}; --unavail-weak:${unavailWeak}; --unavail-strong:${unavailStrong}`}
               .header=${this._config?.title || undefined}>
        <div class="metrics" style=${`--tile-h:${tileH}px; --badge:${badgeSize}px; --badge-icon:${badgeIcon}px; --main-icon-size:${mainIcon}px; --chip-font-size:${chipFont}px;`}>
          <div class="root">
            ${headers.map((h) => this._renderHeaderRow(h))}
            ${renderSwitchRows(this, c.switch_rows as any[])}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderHeaderRow(h: RoomCardHeader): TemplateResult {
    const mainRaw: any = h.main || {};
    const main: any = {
      tap_entity: mainRaw.tap_entity,
      hold_entity: mainRaw.hold_entity || mainRaw.tap_entity,
      glow_mode: mainRaw.glow_mode,
      light_group_entity: mainRaw.light_group_entity,
      name: mainRaw.main_name || mainRaw.name,
      icon: mainRaw.main_icon || mainRaw.icon,
      temp_sensor: mainRaw.temp_sensor,
      humidity_sensor: mainRaw.humidity_sensor,
      badges: Array.isArray(mainRaw.badges) ? mainRaw.badges : [],
      tap_action: mainRaw.tap_action,
      hold_action: mainRaw.hold_action,
      double_tap_action: mainRaw.double_tap_action,
    };
  const ac = h.ac || {} as any;
  const thermostat = h.thermostat || {} as any;
  const initialShowAC = !!ac?.entity;
  const initialShowThermo = !!thermostat?.entity;
    // Determine whether a main is explicitly defined (avoid injecting defaults)
    const hasMain = !!(mainRaw && (mainRaw.main_name || mainRaw.name || mainRaw.light_group_entity || mainRaw.entity || mainRaw.main_icon || mainRaw.icon || mainRaw.temp_sensor || mainRaw.humidity_sensor || (Array.isArray(mainRaw.badges) && mainRaw.badges.length)));

    // AC/Thermostat must be defined only inside a `main` block. If they exist
    // outside of main, ignore them and warn the user in the console.
    const showAC = hasMain && initialShowAC;
    const showThermo = hasMain && initialShowThermo;

    if (!hasMain && (initialShowAC || initialShowThermo)) {
      // eslint-disable-next-line no-console
      console.warn('space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.');
    }

    const cls = hasMain
      ? (!showAC && !showThermo ? 'header-row only-main' : (showAC && showThermo ? 'header-row' : 'header-row main-plus-one'))
      : (showAC && showThermo ? 'header-row main-plus-one' : 'header-row only-main');

    const tpl = html`
      <div class=${cls}>
        ${hasMain ? renderMainTile(this, main as any) : nothing}
        ${showAC ? renderACTile(this, ac.entity as string, ac.glow_mode) : nothing}
        ${showThermo ? renderThermostatTile(this, thermostat.entity as string, thermostat.glow_mode) : nothing}
      </div>
    `;
    return tpl;
  }

  // main tile renderer moved to src/tiles/main.ts

  // illuminance badge moved to src/chips.ts

  // extra badge moved to src/chips.ts

  // badge action handler moved into src/chips.ts

  private _toggleByDomain(entityId?: string | null): void {
    if (!entityId || !this.hass) return;
    const st = this.hass.states[entityId];
    const domain = entityId.split('.')[0];
    const s = (st?.state || '').toLowerCase();
    if (domain === 'lock') {
      const next = s === 'locked' ? 'unlock' : 'lock';
      this.hass.callService('lock', next, { entity_id: entityId });
      return;
    }
    if (domain === 'cover') {
      const next = (s === 'open' || s === 'opening') ? 'close_cover' : 'open_cover';
      this.hass.callService('cover', next, { entity_id: entityId });
      return;
    }
    this._toggleGeneric(entityId);
  }

  // AC tile moved to src/tiles/ac.ts

  // Thermostat tile moved to src/tiles/thermostat.ts

  private _onMainAction(ev: CustomEvent, tileCfg?: any, tap?: string, hold?: string, lightGroup?: string): void {
    const action = (ev.detail && (ev.detail as any).action) || 'tap';
    // Tile-level actions override card-level
    if (this.hass && tileCfg && (tileCfg.tap_action || tileCfg.hold_action || tileCfg.double_tap_action)) {
      handleAction(this, this.hass, tileCfg as any, action);
      return;
    }
    // If configured, use boilerplate handleAction against card-level actions
    if (this.hass && this._config && (this._config.tap_action || this._config.hold_action || this._config.double_tap_action)) {
      handleAction(this, this.hass, this._config as any, action);
      return;
    }
    // Switch-like behavior for main tile
    if (action === 'hold') {
      // Haptic feedback: medium on long press
      haptic('medium');
      this._openMoreInfo(hold || tap);
    } else {
      this._toggleGeneric(lightGroup || tap);
    }
  }

  private _onACAction(ev: CustomEvent, entity: string): void {
    const act = (ev.detail && ev.detail.action) || 'tap';
    if (act === 'hold') {
      // Haptic feedback: medium on long press
      haptic('medium');
      this._openMoreInfo(entity);
    } else {
      // Haptic feedback: success on tap
      haptic('success');
      this._acToggle(entity);
    }
  }

  private _onThermoAction(ev: CustomEvent, entity: string): void {
    const act = (ev.detail && ev.detail.action) || 'tap';
    if (act === 'hold') {
      // Haptic feedback: medium on long press
      haptic('medium');
      this._openMoreInfo(entity);
    } else {
      // Haptic feedback: success on tap
      haptic('success');
      this._thermoToggle(entity);
    }
  }

  // Switch rows moved to src/tiles/switch.ts

  // Switch tile moved to src/tiles/switch.ts

  // (Removed) Embedded Lovelace cards functionality

  private _onSwitchAction(ev: CustomEvent, sw?: any): void {
    const act = (ev.detail && ev.detail.action) || 'tap';
    if (this.hass && sw && (sw.tap_action || sw.hold_action || sw.double_tap_action)) {
      handleAction(this, this.hass, sw as any, act);
      return;
    }
    const tap = sw?.entity;
    const hold = sw?.hold_entity || tap;
    if (act === 'hold') {
      // Haptic feedback: medium on long press
      haptic('medium');
      this._openMoreInfo(hold || tap);
    } else {
      this._toggleGeneric(tap);
    }
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

  // (moved) AC pulse colors are defined in src/glow.ts

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

  private _hasAnyUnavailable(c: RoomCardConfig, h: RoomCardHeader | RoomCardHeader[]): boolean {
    if (!this.hass) return false;
    const ids: Array<string | undefined> = [];
    const headers: RoomCardHeader[] = Array.isArray(h) ? h : [h];
    headers.forEach((hdr) => {
      const mainRaw: any = hdr?.main || {};
      const main: any = {
        tap_entity: mainRaw.tap_entity,
        hold_entity: mainRaw.hold_entity || mainRaw.tap_entity,
        light_group_entity: mainRaw.light_group_entity,
        temp_sensor: mainRaw.temp_sensor,
        humidity_sensor: mainRaw.humidity_sensor,
      };
      const ac = hdr?.ac || ({} as any);
      const thermostat = hdr?.thermostat || ({} as any);
      ids.push(main?.tap_entity, main?.hold_entity, main?.light_group_entity, main?.temp_sensor, main?.humidity_sensor, ac?.entity, thermostat?.entity);
    });
    const rows = (c.switch_rows || []) as any[];
    rows.forEach((row) => {
      const items = Array.isArray(row) ? row : (Array.isArray((row as any)?.row) ? (row as any).row : []);
      items.forEach((sw: any) => ids.push(sw?.entity, sw?.hold_entity));
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
  type: 'space-hub-card',
  name: 'Space Hub Card',
  description: 'Space control hub card',
  preview: false,
  version: CARD_VERSION,
});

// Fancy console banner (logs once)
try {
  const w = window as any;
  if (!w.__SPACE_HUB_CARD_LOGGED__) {
    const l1 = 'background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700';
    const l2 = 'background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;';
    // eslint-disable-next-line no-console
    console.info(`%c🚀 Space hub card%c v${CARD_VERSION} loaded`, l1, l2);
    w.__SPACE_HUB_CARD_LOGGED__ = true;
  }
} catch (e) { /* no-op */ }

export default SpaceHubCard;
