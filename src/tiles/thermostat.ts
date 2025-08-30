/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { THERMO_HEAT_PULSE } from '../glow';

export function renderThermoTile(host: any, entityId: string): TemplateResult {
  const st = host?.hass?.states?.[entityId];
  const fmt = typeof host?._fmtNumber === 'function' ? host._fmtNumber.bind(host) : (v: any) => (v === undefined || v === null ? '—' : String(v));
  const target = st?.attributes?.temperature ?? st?.attributes?.target_temp ?? st?.attributes?.target_temperature;
  const tStr = fmt(target, 1) + '°';
  const hvacAction = (st?.attributes?.hvac_action || '').toLowerCase();
  const state = (st?.state || '').toLowerCase();
  const color = state === 'off' ? 'gray' : (hvacAction === 'heating' || state === 'heating') ? '#ff7043' : '#66bb6a';
  const isHeating = (hvacAction === 'heating');
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
  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onThermoAction === 'function') host._onThermoAction(ev, entityId);
  };
  return html`
    <ha-control-button
      class="square thermo-tile ${isHeating ? 'on' : ''}"
      style=${wrapStyle}
      @action=${onAction}
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

