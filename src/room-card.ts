/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import type { HomeAssistant } from 'custom-card-helpers';
import { handleAction, fireEvent } from 'custom-card-helpers';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';
import { acPulseColors, THERMO_HEAT_PULSE } from './glow';

export interface HeaderMain {
  // Legacy
  entity?: string;
  name?: string;
  icon?: string;
  // Switch-like config
  tap_entity?: string;
  hold_entity?: string;
  light_group_entity?: string;
  main_name?: string;
  main_icon?: string;
  // Sensors (can be at header level as well)
  temp_sensor?: string;
  humidity_sensor?: string;
  badges?: unknown[];
  // Optional per-tile HA actions
  tap_action?: import('custom-card-helpers').ActionConfig;
  hold_action?: import('custom-card-helpers').ActionConfig;
  double_tap_action?: import('custom-card-helpers').ActionConfig;
}

export interface HeaderAC {
  entity?: string;
  tap_action?: import('custom-card-helpers').ActionConfig;
  hold_action?: import('custom-card-helpers').ActionConfig;
  double_tap_action?: import('custom-card-helpers').ActionConfig;
}
export interface HeaderThermostat {
  entity?: string;
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
  header?: RoomCardHeader; // legacy single header
  headers?: RoomCardHeader[]; // new: multiple headers
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
          tap_entity: 'switch.living_room_light_group',
          main_name: 'Living room',
          main_icon: 'mdi:sofa-outline',
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
    // Normalize headers: support both `header` and `headers`
    if (Array.isArray((c as any).headers)) {
      // keep as-is, but also expose first as legacy header for backward references
      const arr = (c as any).headers as RoomCardHeader[];
      (c as any).header = arr[0] || c.header || {};
    } else {
      c.header = c.header || {};
      (c as any).headers = c.header ? [c.header] : [];
    }
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
      border-radius: var(--ha-card-border-radius, 16px);
      background: var(--ha-card-background, var(--card-background-color));
      box-shadow: 0 10px 30px var(--panel-shadow-color);
      padding: 12px;
      color: var(--primary-text-color);
      transition: filter 0.12s ease, box-shadow 0.12s ease;
      position: relative;
      /* Allow pulsing glows to spill outside to neighboring cards */
      overflow: visible;
    }
    ha-card.unavailable {
      animation: cardPulse 2.8s ease-in-out infinite;
    }

    .root { display: grid; gap: 12px; }

    /* Removed surface wrapper to rely on ha-card styling */

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
      /* Ensure full-width layout even inside flex hosts like ha-control-button */
      width: 100%;
      height: var(--tile-h);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      background: var(--ha-card-background, var(--card-background-color));
      overflow: hidden;
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    }
    /* Ensure the internal HA button element matches the tile size when main-tile is the host */
    .main-tile::part(button) {
      width: 100%;
      height: 100%;
      display: block;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border-radius: inherit;
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
      padding: 2px 6px; border-radius: var(--ha-chip-border-radius, 999px);
      background: rgba(0,0,0,0.06);
      font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap;
    }
    .chip-tr ha-icon { width: 10px; height: 10px; line-height:0; --mdc-icon-size:10px; }
    .chip-tr .tval, .chip-tr .hval { font-weight: 700; }

    /* badge basics (bulb/lock/gate) */
    .badge {
      width: var(--badge); height: var(--badge);
      border-radius: var(--ha-badge-border-radius, 999px);
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

    /* Illuminance badge on main tile (right-center, same chip pattern) */
    .illum-badge {
      position: absolute; right: 8px; top: 50%; z-index: 3;
      transform: translateY(-50%);
      display: inline-flex; align-items: center; gap: 6px;
      padding: 2px 8px; border-radius: var(--ha-chip-border-radius, 999px);
      background: rgba(0,0,0,0.06);
      font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap;
    }
    .illum-badge ha-icon { width: 12px; height: 12px; line-height:0; --mdc-icon-size:12px; }

    /* AC & THERMOSTAT squares — width == height == --tile-h */
    .square {
      position: relative;
      width: var(--tile-h); height: var(--tile-h);
      aspect-ratio: 1 / 1;
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--ha-card-background, var(--card-background-color));
      backdrop-filter: blur(10px);
      transition: transform 0.18s ease, box-shadow 0.28s ease, filter 0.12s ease;
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      overflow: hidden;
      display: grid; place-items: center;
    }
    /* Make the native button inside ha-control-button stretch/take the tile radius when used with .square */
    .square::part(button) {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border-radius: inherit;
    }
    /* State glows applied directly to tile button host */
    .thermo-tile.on {
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow:
        0 18px 40px var(--pulse-strong, rgba(255,112,67,0.30)),
        0 6px 18px var(--pulse-weak, rgba(255,112,67,0.16));
      animation: glowPulse 2.4s ease-in-out infinite;
    }
    .ac-tile.on {
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow:
        0 18px 40px var(--pulse-strong, rgba(0,170,255,0.30)),
        0 6px 18px var(--pulse-weak, rgba(0,170,255,0.16));
      animation: glowPulse 2.4s ease-in-out infinite;
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
    .temp-pill { display:inline-flex; align-items:center; justify-content:center; padding: 0 6px; border-radius: var(--ha-chip-border-radius, 999px); background: var(--chip-background-color, rgba(0,0,0,0.06)); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height:1; white-space:nowrap; font-weight:700; max-width: calc(var(--tile-h) - 16px); min-height: var(--badge); }
    .temp-chip-tr ha-chip { font-size: var(--chip-font-size, 12px); }

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
    /* Pure glow (no movement/scale) */
    @keyframes glowPulse {
      0%   { box-shadow: 0 10px 20px var(--pulse-weak); }
      50%  { box-shadow: 0 28px 56px var(--pulse-strong); }
      100% { box-shadow: 0 10px 20px var(--pulse-weak); }
    }
    @keyframes cardPulse {
      0%   { box-shadow: 0 10px 30px var(--panel-shadow-color); }
      50%  { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); }
      100% { box-shadow: 0 10px 30px var(--panel-shadow-color); }
    }

    /* Switch rows */
    .switch-row { display:grid; grid-template-columns: repeat(var(--cols,3), 1fr); gap: 12px; }
    /* Native HA control button variant for switch tiles */
    .switch-tile-btn {
      height: var(--tile-h);
      width: 100%;
      display: grid; place-items: center;
      position: relative;
      overflow: visible;
      color: var(--secondary-text-color);
      /* Give button variant a visible surface like tiles */
      background: var(--ha-card-background, var(--card-background-color));
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    }
    /* Ensure inner native button fully matches host size/radius */
    .switch-tile-btn::part(button) {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border-radius: inherit;
      background: inherit;
    }
    /* Hover feedback (align with tile hover); do not override ON glow */
    .switch-tile-btn:not(.on):hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.16);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    /* Mirror hover on inner native button to ensure visual consistency */
    .switch-tile-btn:not(.on):hover::part(button) {
      transform: translateY(-1px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.16);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    /* ON state for native HA button: persistent glow on same layer as hover (no brightness) */
    .switch-tile-btn.on {
      border-radius: var(--ha-card-border-radius, 12px);
      position: relative;
      /* Ensure glow animation has defined colors */
      --pulse-weak: rgba(255,193,7,0.16);
      --pulse-strong: rgba(255,193,7,0.30);
      box-shadow:
        0 18px 40px rgba(255,193,7,0.30),
        0 6px 18px rgba(255,193,7,0.16);
      /* Static glow (no pulsing for switches) */
      will-change: box-shadow, filter;
    }
    /* Apply glow to inner button too for browsers/themes that render shadow on the part */
    .switch-tile-btn.on::part(button) {
      box-shadow:
        0 18px 40px rgba(255,193,7,0.30),
        0 6px 18px rgba(255,193,7,0.16);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    .switch-tile-btn.on:hover,
    .switch-tile-btn.on:hover > .tile-inner {
      /* Ensure ON hover keeps glow even if generic hover sets a shadow */
      border-radius: var(--ha-card-border-radius, 12px);
      transform: translateY(-1px);
      box-shadow:
        0 18px 40px rgba(255,193,7,0.30) !important,
        0 6px 18px rgba(255,193,7,0.16) !important;
      /* Use only box-shadow to ensure radius consistency */
    }
    /* Mirror ON hover on inner native button */
    .switch-tile-btn.on:hover::part(button) {
      border-radius: var(--ha-card-border-radius, 12px);
      transform: translateY(-1px);
      box-shadow:
        0 18px 40px rgba(255,193,7,0.30) !important,
        0 6px 18px rgba(255,193,7,0.16) !important;
    }
    /* Smart plug ON: persistent green glow on same layer as hover (no brightness) */
    .switch-tile-btn.smart.on {
      /* Ensure glow animation has defined colors (green for smart plugs) */
      --pulse-weak: rgba(0,200,83,0.16);
      --pulse-strong: rgba(0,200,83,0.30);
      box-shadow:
        0 18px 40px rgba(0,200,83,0.30),
        0 6px 18px rgba(0,200,83,0.16);
      /* Static glow (no pulsing for switches) */
      will-change: box-shadow, filter;
    }
    .switch-tile-btn.smart.on::part(button) {
      box-shadow:
        0 18px 40px rgba(0,200,83,0.30),
        0 6px 18px rgba(0,200,83,0.16);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    .switch-tile-btn.smart.on:hover,
    .switch-tile-btn.smart.on:hover > .tile-inner {
      /* Ensure SMART ON hover keeps GREEN glow */
      border-radius: var(--ha-card-border-radius, 12px);
      transform: translateY(-1px);
      box-shadow:
        0 18px 40px rgba(0,200,83,0.30) !important,
        0 6px 18px rgba(0,200,83,0.16) !important;
      /* Use only box-shadow to ensure radius consistency */
    }
    .switch-tile-btn.smart.on:hover::part(button) {
      border-radius: var(--ha-card-border-radius, 12px);
      transform: translateY(-1px);
      box-shadow:
        0 18px 40px rgba(0,200,83,0.30) !important,
        0 6px 18px rgba(0,200,83,0.16) !important;
    }
    .switch-tile {
      position: relative;
      height: var(--tile-h);
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--ha-card-background, var(--card-background-color));
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
      display: grid; place-items: center;
      color: var(--secondary-text-color);
    }
    /* (Removed) embedded card styles */
    /* Native-like hover feedback per-tile: slight lift + stronger shadow */
    .main-tile:hover,
    .square:hover,
    .switch-tile:not(.on):hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.16);
      border-radius: var(--ha-card-border-radius, 12px);
    }
    /* Match hover for ha-control-button hosts (AC/Thermo) */
    .switch-tile-btn:not(.on):hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.16);
    }
    /* (moved) Thermo/AC glow states handled on .thermo-tile.on / .ac-tile.on */
    .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
    .switch-tile .name { font-weight: 600; font-size: 12px; }
    .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; }
    .tile-inner ha-chip { font-size: var(--chip-font-size, 12px); }

    /* ON base style (non-button): persistent glow on same layer as hover (no brightness) */
    .switch-tile.on {
      /* Ensure glow animation has defined colors */
      --pulse-weak: rgba(255,193,7,0.16);
      --pulse-strong: rgba(255,193,7,0.30);
      box-shadow:
        0 18px 40px rgba(255,193,7,0.30),
        0 6px 18px rgba(255,193,7,0.16);
      /* Glow visible even without hover */
      border-radius: var(--ha-card-border-radius, 12px);
    }
    .switch-tile.on:hover {
      /* Ensure ON hover keeps glow even if generic hover sets a shadow */
      transform: translateY(-1px);
      box-shadow:
        0 18px 40px rgba(255,193,7,0.30) !important,
        0 6px 18px rgba(255,193,7,0.16) !important;
      border-radius: var(--ha-card-border-radius, 12px);
    }

    /* Smart plug: animated band + GREEN glow (not yellow) */
    @keyframes chase {
      0%   { background-position: -150% 0, 0 0; }
      50%  { background-position: 50% 0, 0 0; }
      100% { background-position: 250% 0, 0 0; }
    }
    .switch-tile.smart.on {
      /* Ensure glow animation has defined colors (green for smart plugs) */
      --pulse-weak: rgba(0,200,83,0.16);
      --pulse-strong: rgba(0,200,83,0.30);
      box-shadow:
        0 18px 40px rgba(0,200,83,0.30),
        0 6px 18px rgba(0,200,83,0.16);
      /* Glow visible even without hover */
      border-radius: var(--ha-card-border-radius, 12px);
    }
    .switch-tile.smart.on:hover {
      /* Ensure SMART ON hover keeps GREEN glow */
      transform: translateY(-1px);
      box-shadow:
        0 18px 40px rgba(0,200,83,0.30) !important,
        0 6px 18px rgba(0,200,83,0.16) !important;
      border-radius: var(--ha-card-border-radius, 12px);
    }

    .clickable { cursor: pointer; }
  `;

  protected render(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    const c = { ...BitosomeRoomCard.getStubConfig(), ...this._config } as RoomCardConfig;
    // Prefer multiple headers; fall back to single
    const headers: RoomCardHeader[] = Array.isArray((c as any).headers) && (c as any).headers.length
      ? ((c as any).headers as RoomCardHeader[])
      : [((c.header || {}) as RoomCardHeader)];

    const tileH = Number(c.tile_height) || 80;
    const badgeSize = Number(c.badge_size) || 22;
    const badgeIcon = Number(c.badge_icon_size) || 14;
    // Allow header-level override for main icon size (use first header if provided)
    const headerCfg: any = headers[0] || {};
    const headerMainIconSize = Number(headerCfg?.main_icon_size ?? headerCfg?.maicon_size);
    const mainIcon = Number.isFinite(headerMainIconSize) && headerMainIconSize > 0
      ? headerMainIconSize
      : (Number(c.main_icon_size) || 48);
    const panelShadowColor = this._rgbaFromColor(c.card_shadow_color, c.card_shadow_intensity);
    const chipFont = Number(c.chip_font_size) || 12;
    const unavailColor = c.unavailable_pulse_color || '#ff3b30';
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
            ${this._renderSwitchRows(c.switch_rows as any[])}
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
    const hasHold = true; // main supports hold by default (for more-info)
    const hasDbl = !!(h?.double_tap_action || this._config?.double_tap_action);
    // Entity driving the bulb state (and default toggling when no HA actions)
    const hasBulb = !!h.light_group_entity;
    const ctrl = h.light_group_entity || h.tap_entity || h.entity;
    const isOn = hasBulb && this._isOn(ctrl);
    const bulbBg = isOn ? 'linear-gradient(135deg,#ffcf57,#ffb200)' : 'rgba(0,0,0,0.06)';
    const bulbIconColor = isOn ? '#ffffff' : 'var(--secondary-text-color)';
    const defaultToggleTarget = h.light_group_entity || h.tap_entity || h.entity;
    // Optional vertical illuminance badge: allow via badges array using type: 'illuminance'
    const illumBadge = Array.isArray(h?.badges)
      ? (h.badges as any[]).find((b) => String(b?.type || '').toLowerCase() === 'illuminance')
      : undefined;
    const illumTpl = illumBadge ? this._renderIlluminanceBadge(illumBadge) : nothing;
    return html`
      <ha-control-button
        class="main-tile"
        @action=${(ev: CustomEvent) => this._onMainAction(ev, h, h.tap_entity, h.hold_entity, defaultToggleTarget)}
        .actionHandler=${actionHandler({ hasHold, hasDoubleClick: hasDbl })}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${icon}></ha-icon>
        <div class="chip-tr" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="tval">${tval}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="hval">${hval}</span>
        </div>
        ${illumTpl}
        <div class="main-badges-br" data-role="badges">
          ${hasBulb ? html`
            <div class="badge" style=${`background:${bulbBg}`}>
              <ha-icon .icon=${'mdi:lightbulb'} style=${`color:${bulbIconColor}`}></ha-icon>
            </div>` : nothing}
          ${Array.isArray(h?.badges) && h.badges.length
            ? html`${h.badges
                .filter((b: any) => String(b?.type || '').toLowerCase() !== 'illuminance')
                .map((b: any) => this._renderExtraBadge(b))}`
            : nothing}
        </div>
        <div class="main-name">${name}</div>
      </ha-control-button>
    `;
  }

  private _renderIlluminanceBadge(b: any): TemplateResult {
    const entity: string | undefined = b?.entity || b?.tap_entity;
    const icon = b?.icon || 'mdi:brightness-5';
    const val = this._fmt2(entity, 0, ' lx');
    // Click: open more-info by default, or if actions supplied, use them
    const hasHAAction = !!(b?.tap_action || b?.hold_action || b?.double_tap_action);
    const onAction = (ev: CustomEvent) => {
      const act = (ev.detail && ev.detail.action) || 'tap';
      if (hasHAAction) {
        handleAction(this, this.hass, b as any, act);
        return;
      }
      if (act === 'hold') { haptic('medium'); this._openMoreInfo(entity); }
      else this._openMoreInfo(entity);
    };
    return html`
      <div class="illum-badge"
           @action=${onAction}
           .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!b?.double_tap_action })}
           role="button" tabindex="0">
        <ha-icon .icon=${icon}></ha-icon>
        <span class="illum-val">${val}</span>
      </div>
    `;
  }

  private _renderExtraBadge(b: any): TemplateResult | typeof nothing {
    const entity: string | undefined = b?.entity || b?.tap_entity;
    const type = String(b?.type || '').toLowerCase();
    const iconFromCfg: string | undefined = b?.icon;
    const st = entity && this.hass ? this.hass.states[entity] : undefined;
    const state = (st?.state || '').toLowerCase();

    // Determine visuals
    let bg = 'rgba(0,0,0,0.06)';
    let icon = iconFromCfg || 'mdi:checkbox-blank-circle-outline';
    let icoColor = 'var(--secondary-text-color)';

    const isActive = (s: string): boolean => {
      if (!s) return false;
      if (type === 'lock' || (entity?.startsWith('lock.') ?? false)) return s === 'locked';
      if (entity?.startsWith('cover.') ?? false) return s !== 'closed' && s !== 'closing';
      return s === 'on' || s === 'open' || s === 'opening';
    };

    const active = isActive(state);

    if (type === 'lock' || (entity?.startsWith('lock.') ?? false)) {
      icon = iconFromCfg || (active ? 'mdi:lock' : 'mdi:lock-open-variant');
      if (active) { bg = '#66bb6a'; icoColor = '#ffffff'; }
    } else if (type === 'gate' || (entity?.startsWith('cover.') ?? false) || (entity?.startsWith('binary_sensor.') ?? false)) {
      const domain = (entity || '').split('.')[0];
      const dc = (st?.attributes?.device_class || '').toLowerCase();
      const gateLike = type === 'gate' || domain === 'cover' || (domain === 'binary_sensor' && /(door|window|garage|opening|gate)/.test(dc));
      if (gateLike) {
        const s = state;
        let isOpen = false;
        if (domain === 'cover') {
          isOpen = s === 'open' || s === 'opening' || (s !== 'closed' && s !== 'closing' && s !== 'unknown' && s !== 'unavailable');
        } else if (domain === 'binary_sensor') {
          // For contact sensors, on/open => open; off/closed => closed
          isOpen = s === 'on' || s === 'open' || s === 'opening';
        } else {
          isOpen = s === 'open' || s === 'opening' || s === 'on';
        }
        icon = iconFromCfg || (isOpen ? 'mdi:gate-open' : 'mdi:gate');
        // Color rule: closed -> green, open -> red
        if (isOpen) { bg = '#e53935'; icoColor = '#ffffff'; }
        else { bg = '#66bb6a'; icoColor = '#ffffff'; }
      } else {
        // Not a gate-like entity; fall back to generic handling below
      }
    } else {
      // Generic on/off-like badge
      icon = iconFromCfg || (active ? 'mdi:check-circle' : 'mdi:checkbox-blank-circle-outline');
      if (active) { bg = '#42a5f5'; icoColor = '#ffffff'; }
    }

    const hasDbl = !!b?.double_tap_action;

    return html`
      <div class="badge clickable"
           style=${`background:${bg}`}
           @action=${(ev: CustomEvent) => this._onBadgeAction(ev, b)}
           .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: hasDbl })}
           role="button" tabindex="0">
        <ha-icon .icon=${icon} style=${`color:${icoColor}`}></ha-icon>
      </div>
    `;
  }

  private _onBadgeAction(ev: CustomEvent, b?: any): void {
    const act = (ev.detail && ev.detail.action) || 'tap';
    // If HA-native actions are provided, use them
    if (this.hass && b && (b.tap_action || b.hold_action || b.double_tap_action)) {
      handleAction(this, this.hass, b as any, act);
      return;
    }
    const tap = b?.tap_entity || b?.entity;
    const hold = b?.hold_entity || b?.entity;
    if (act === 'hold') {
      // Haptic feedback: medium on long press
      haptic('medium');
      this._openMoreInfo(hold || tap);
      return;
    }
    const domain = (tap || '').split('.')[0];
    // Safety default: lock badges open more-info on tap unless actions are explicitly provided
    if (domain === 'lock') {
      this._openMoreInfo(hold || tap);
      return;
    }
    this._toggleByDomain(tap);
  }

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

  private _renderACTile(entityId: string): TemplateResult {
    const mode = (this.hass?.states?.[entityId]?.state || '').toLowerCase();
    const active = !!mode && mode !== 'off';
    const { bg, icon } = this._acBadge(mode);
    const fanStyle = `color:${this._acModeColor(mode)}; ${active ? 'animation:spin 1.5s linear infinite;' : ''}`;
    const pulse = acPulseColors(mode);
    const wrapStyle = `${active ? `--pulse-weak:${pulse.weak}; --pulse-strong:${pulse.strong};` : ''}`;
    return html`
      <ha-control-button
        class="square ac-tile ${active ? 'on' : ''}"
        style=${wrapStyle}
        @action=${(ev: CustomEvent) => this._onACAction(ev, entityId)}
        .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
        role="button" tabindex="0"
      >
        <div class="badge badge-tr" style=${`background:${bg}`}> 
          <ha-icon .icon=${icon} style="color:#fff"></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class="ac-fan" icon="mdi:fan" style=${fanStyle}></ha-icon>
        </div>
      </ha-control-button>
    `;
  }

  private _renderThermoTile(entityId: string): TemplateResult {
    const st = this.hass?.states?.[entityId];
    const target = st?.attributes?.temperature ?? st?.attributes?.target_temp ?? st?.attributes?.target_temperature;
    const tStr = this._fmtNumber(target, 1) + '°';
    const hvacAction = (st?.attributes?.hvac_action || '').toLowerCase();
    const state = (st?.state || '').toLowerCase();
    const color = state === 'off' ? 'gray' : (hvacAction === 'heating' || state === 'heating') ? '#ff7043' : '#66bb6a';
    // Glow strictly when actively heating. No glow when idle or just in heat mode.
    const isHeating = (hvacAction === 'heating');
    // Glow handled by CSS on .thermo-tile.on; provide pulse vars via host style
    const pillBg = isHeating
      ? 'var(--state-climate-heat-color, #ff7043)'
      : 'var(--chip-background-color, rgba(0,0,0,0.06))';
    const pillFg = isHeating
      ? 'var(--primary-background-color, #fff)'
      : 'var(--secondary-text-color)';
    const hasHaChip = typeof customElements !== 'undefined' && !!customElements.get('ha-chip');
    const wrapStyle = isHeating
      ? `--pulse-weak: ${THERMO_HEAT_PULSE.weak}; --pulse-strong: ${THERMO_HEAT_PULSE.strong};`
      : '';
    return html`
      <ha-control-button
        class="square thermo-tile ${isHeating ? 'on' : ''}"
        style=${wrapStyle}
        @action=${(ev: CustomEvent) => this._onThermoAction(ev, entityId)}
        .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
        role="button" tabindex="0"
      >
        <div class="temp-chip-tr">
          ${hasHaChip
            ? html`<ha-chip style=${`--ha-chip-background-color:${pillBg};--chip-background-color:${pillBg};--ha-chip-text-color:${pillFg};color:${pillFg};font-weight:700;`}>${tStr}</ha-chip>`
            : html`<div class="temp-pill" style=${`background:${pillBg};color:${pillFg};`}><span class="thermo-target">${tStr}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class="thermo-icon" icon="mdi:thermostat" style=${`color:${color}`}></ha-icon>
        </div>
      </ha-control-button>
    `;
  }

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

  private _renderSwitchRows(rows?: any[]): TemplateResult | typeof nothing {
    if (!rows || !rows.length) return nothing;
    return html`${rows.map((row) => {
      const r: any = row as any;
      const items = Array.isArray(row) ? row : (Array.isArray(r?.row) ? r.row : []);
      const cols = Math.max(1, items.length || 1);
      return html`<div class="switch-row" style=${`--cols:${cols}`}>${items.map((sw) => this._renderSwitchTile(sw))}</div>`;
    })}`;
  }

  private _renderSwitchTile(sw: any): TemplateResult {
    const tap = sw?.entity || '';
    const icon = sw?.icon || '';
    const name = sw?.name || '';
    const type = String(sw?.type || 'switch').toLowerCase();
    const isSmart = type === 'smart_plug';
    const on = this._isOn(tap);
    const iconSize = sw?.icon_size || sw?.['icon-size'] || sw?.['icon_size'];
    const nameWeight = sw?.font_weight || sw?.['font-weight'];
    const nameSize = sw?.font_size || sw?.['font-size'];
    const toPx = (v: any) => (v === undefined || v === null || v === '') ? '' : (String(v).match(/px|em|rem|%$/) ? String(v) : `${Number(v)}px`);
    const iconDim = toPx(iconSize);
    const iconStyle = iconDim ? `width:${iconDim};height:${iconDim};--mdc-icon-size:${iconDim};` : '';
    const nameStyle = `${nameWeight ? `font-weight:${nameWeight};` : ''}${nameSize ? `font-size:${toPx(nameSize)};` : ''}`;
    const cls = `switch-tile ${isSmart ? 'smart' : ''} ${on ? 'on' : ''}`;
    const hasChip = typeof customElements !== 'undefined' && !!customElements.get('ha-chip');
    const hasControlBtn = typeof customElements !== 'undefined' && !!customElements.get('ha-control-button');
    const onColor = isSmart ? 'var(--switch-on-green, #00c853)' : 'var(--switch-on-yellow, #ffc107)';
    const chipBg = 'var(--chip-background-color, rgba(0,0,0,0.06))';
    const chipFg = on ? onColor : 'var(--secondary-text-color)';
    // Prefer native HA control button styling when available
    if (hasControlBtn) {
      const btnCls = `switch-tile-btn ${isSmart ? 'smart' : ''} ${on ? 'on' : ''}`;
      return html`
        <ha-control-button
          class=${btnCls}
          @action=${(ev: CustomEvent) => this._onSwitchAction(ev, sw)}
          .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!sw?.double_tap_action })}
          role="button" tabindex="0"
        >
          <div class="tile-inner">
            ${hasChip
              ? html`<ha-chip style=${`--ha-chip-background-color:${chipBg};--chip-background-color:${chipBg};--ha-chip-text-color:${chipFg};color:${chipFg};font-weight:600;`}>
                  ${icon ? html`<ha-icon .icon=${icon} style=${`margin-right:6px;${iconStyle}color:${chipFg};`}></ha-icon>` : nothing}
                  ${name || tap}
                </ha-chip>`
              : html`
                  ${icon ? html`<ha-icon class="switch-icon" .icon=${icon} style=${`${iconStyle}${on ? `color:${onColor};` : ''}`}></ha-icon>` : nothing}
                  ${name ? html`<div class="name" style=${`${nameStyle}${on ? `color:${onColor};` : ''}`}>${name}</div>` : nothing}
                `}
          </div>
        </ha-control-button>
      `;
    }
    // Fallback: tile container (previous styling)
    return html`
      <div class=${cls}
           @action=${(ev: CustomEvent) => this._onSwitchAction(ev, sw)}
           .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!sw?.double_tap_action })}
           role="button" tabindex="0">
        <div class="tile-inner">
          ${hasChip
            ? html`<ha-chip style=${`--ha-chip-background-color:${chipBg};--chip-background-color:${chipBg};--ha-chip-text-color:${chipFg};color:${chipFg};font-weight:600;`}>
                ${icon ? html`<ha-icon .icon=${icon} style=${`margin-right:6px;${iconStyle}color:${chipFg};`}></ha-icon>` : nothing}
                ${name || tap}
              </ha-chip>`
            : html`
                ${icon ? html`<ha-icon class="switch-icon" .icon=${icon} style=${`${iconStyle}${on ? `color:${onColor};` : ''}`}></ha-icon>` : nothing}
                ${name ? html`<div class="name" style=${`${nameStyle}${on ? `color:${onColor};` : ''}`}>${name}</div>` : nothing}
              `}
        </div>
      </div>
    `;
  }

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
