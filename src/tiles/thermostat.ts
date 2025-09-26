/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { THERMOSTAT_HEAT_PULSE, buildGlow, GlowMode } from '../glow';

export function renderThermostatTile(host: any, entityId: string, glowMode?: GlowMode): TemplateResult {
  const st = host?.hass?.states?.[entityId];
  const fmt = typeof host?._fmtNumber === 'function' ? host._fmtNumber.bind(host) : (v: any) => (v === undefined || v === null ? '—' : String(v));
  const target = st?.attributes?.temperature ?? st?.attributes?.target_temp ?? st?.attributes?.target_temperature;
  const tStr = fmt(target, 1) + '°';
  const hvacAction = (st?.attributes?.hvac_action || '').toLowerCase();
  const state = (st?.state || '').toLowerCase();
  const isHeating = (hvacAction === 'heating');
  const thermostatState = state === 'off' ? 'off' : (isHeating ? 'heating' : 'idle');
  const chipClass = `thermostat-chip ${thermostatState}`;
  const pillClass = `temperature-chip ${thermostatState}`;
  const iconClass = `thermostat-icon ${thermostatState}`;
  const hasHaChip = typeof customElements !== 'undefined' && !!customElements.get('ha-chip');
  const finalGlowMode = glowMode ?? 'static';
  const pulse = THERMOSTAT_HEAT_PULSE;
  const { style: wrapStyle, overlay: glowOverlay } = buildGlow(pulse, finalGlowMode as any, isHeating);
  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onThermostatAction === 'function') host._onThermostatAction(ev, entityId);
  };
  return html`
    <div class="tile-wrap">
      <div class="glow-under" style=${wrapStyle}>${glowOverlay}</div>
      <ha-control-button
        class="square thermostat-tile ${isHeating ? 'on' : ''}"
        @action=${onAction}
        .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${hasHaChip
            ? html`<ha-chip class=${chipClass}>${tStr}</ha-chip>`
            : html`<div class=${pillClass}><span class="thermostat-target">${tStr}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class=${iconClass} icon="mdi:thermostat"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `;
}
