/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { renderIlluminanceBadge, renderExtraBadge } from '../chips';

export function renderMainTile(host: any, h: any): TemplateResult {
  const icon = h?.icon || 'mdi:sofa-outline';
  const name = h?.name || '';
  const tval = typeof host?._fmt2 === 'function' ? host._fmt2(h?.temp_sensor, 2, '°') : '—°';
  const hval = typeof host?._fmt2 === 'function' ? host._fmt2(h?.humidity_sensor, 2, '%') : '—%';
  const hasDbl = !!(h?.double_tap_action || host?._config?.double_tap_action);
  const hasBulb = !!h?.light_group_entity;
  const ctrl = h?.light_group_entity || h?.tap_entity || h?.entity;
  const isOn = hasBulb && (typeof host?._isOn === 'function' ? host._isOn(ctrl) : false);
  const bulbBg = isOn ? 'linear-gradient(135deg,#ffcf57,#ffb200)' : 'rgba(0,0,0,0.06)';
  const defaultToggleTarget = h?.light_group_entity || h?.tap_entity || h?.entity;

  const illumBadge = Array.isArray(h?.badges)
    ? (h.badges as any[]).find((b) => String(b?.type || '').toLowerCase() === 'illuminance')
    : undefined;
  const illumTpl = illumBadge ? renderIlluminanceBadge(host, illumBadge) : nothing;

  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onMainAction === 'function') host._onMainAction(ev, h, h?.tap_entity, h?.hold_entity, defaultToggleTarget);
  };

  return html`
    <ha-control-button
      class="main-tile"
      @action=${onAction}
      .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: hasDbl })}
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
        ${hasBulb
          ? html`<div class="badge" style=${`background:${bulbBg}`}>
              <ha-icon .icon=${'mdi:lightbulb'} style=${`color:${isOn ? '#ffffff' : 'var(--secondary-text-color)'}`}></ha-icon>
            </div>`
          : nothing}
        ${Array.isArray(h?.badges) && h.badges.length
          ? html`${h.badges
              .filter((b: any) => String(b?.type || '').toLowerCase() !== 'illuminance')
              .map((b: any) => renderExtraBadge(host, b))}`
          : nothing}
      </div>
      <div class="main-name">${name}</div>
    </ha-control-button>
  `;
}
