import { html, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { thermostatStyle } from '../glow';

export function renderThermostatTile(ctx: any, entityId: string, glowMode?: 'pulse' | 'glow'): TemplateResult {
  const st = ctx.hass?.states?.[entityId];
  const target = st?.attributes?.temperature ?? st?.attributes?.target_temp ?? st?.attributes?.target_temperature;
  const tStr = ctx._fmtNumber(target, 1) + '°';
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
  // Glow style from glow.ts
  const glow = thermostatStyle(hvacAction, state, glowMode);
  let glowCls = '';
  let glowStyle = '';
  if (glow.type === 'pulse' && glow.active) {
    glowCls = ' tile-pulse';
    glowStyle = `--pulse-weak:${glow.colors.weak};--pulse-strong:${glow.colors.strong};`;
  } else if (glow.type === 'glow' && glow.active) {
    glowCls = ' tile-glow';
    glowStyle = `--tile-glow-color:${glow.color};`;
  }

  return html`
    <ha-control-button
      class="square thermostat-tile ${isHeating ? 'on' : ''}${glowCls}"
      @action=${(ev: CustomEvent) => ctx._onThermoAction(ev, entityId)}
      .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
      role="button" tabindex="0"
      style=${glowStyle}
    >
      <div class="temp-chip-tr">
        ${hasHaChip
          ? html`<ha-chip style=${`--ha-chip-background-color:${pillBg};--chip-background-color:${pillBg};--ha-chip-text-color:${pillFg};color:${pillFg};font-weight:700;`}>${tStr}</ha-chip>`
          : html`<div class="temp-pill" style=${`background:${pillBg};color:${pillFg};`}><span class="thermostat-target">${tStr}</span></div>`}
      </div>
      <div class="center-xy">
        <ha-icon class="thermostat-icon" icon="mdi:thermostat" style=${`color:${color}`}></ha-icon>
      </div>
    </ha-control-button>
  `;
}
