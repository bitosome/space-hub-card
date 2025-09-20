/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { renderIlluminanceChip, renderInteractiveChip } from '../chips';
import { buildGlow, STATIC_GLOW } from '../glow';

export function renderMainTile(host: any, h: any): TemplateResult {
  const icon = h?.icon || 'mdi:sofa-outline';
  const name = h?.name || '';
  const temperatureValue = typeof host?._fmt2 === 'function' ? host._fmt2(h?.temp_sensor, 2, '°') : '—°';
  const humidityValue = typeof host?._fmt2 === 'function' ? host._fmt2(h?.humidity_sensor, 2, '%') : '—%';
  const hasDbl = !!(h?.double_tap_action || host?._config?.double_tap_action);
  const hasBulb = !!h?.light_group_entity;
  const ctrl = h?.light_group_entity || h?.tap_entity || h?.entity;
  const isOn = hasBulb && (typeof host?._isOn === 'function' ? host._isOn(ctrl) : false);
  const bulbBg = isOn ? 'linear-gradient(135deg,#ffcf57,#ffb200)' : 'rgba(0,0,0,0.06)';
  const defaultToggleTarget = h?.light_group_entity || h?.tap_entity || h?.entity;

  // Glow mode (static|pulse|none). Default to 'static' when absent.
  const glowMode = h?.glow_mode || 'static';
  const glowActive = !!h?.light_group_entity && isOn && glowMode !== 'none';
  const pulse = STATIC_GLOW; // main defaults to amber glow
  const { style: wrapStyle, overlay: glowOverlay } = buildGlow(pulse, glowMode as any, glowActive);

  const allChips: any[] = Array.isArray(h?.chips) ? (h.chips as any[]) : [];
  const illumChip = allChips.find((c) => String(c?.type || '').toLowerCase() === 'illuminance');
  const interactiveChips = allChips
    .filter((c) => String(c?.type || '').toLowerCase() !== 'illuminance')
    .map((c) => renderInteractiveChip(host, c));
  const illumTpl = illumChip ? renderIlluminanceChip(host, illumChip) : nothing;

  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onMainAction === 'function') host._onMainAction(ev, h, h?.tap_entity, h?.hold_entity, defaultToggleTarget);
  };

  return html`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${wrapStyle}>${glowOverlay}</div>
      <ha-control-button
        class="main-tile ${isOn ? 'on' : ''}"
        @action=${onAction}
        .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: hasDbl })}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${icon}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${temperatureValue}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${humidityValue}</span>
        </div>
        ${illumTpl}
        <div class="main-chips-bottom-right" data-role="chips">
          ${hasBulb
            ? html`<div class="chip" style=${`background:${bulbBg}`}>
                <ha-icon .icon=${'mdi:lightbulb'} style=${`color:${isOn ? '#ffffff' : 'var(--secondary-text-color)'}`}></ha-icon>
              </div>`
            : nothing}
          ${interactiveChips.length ? html`${interactiveChips}` : nothing}
        </div>
        <div class="main-name">${name}</div>
  </ha-control-button>
    </div>
  `;
}
