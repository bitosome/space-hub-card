/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { acPulseColors } from '../glow';

export function renderACTile(host: any, entityId: string): TemplateResult {
  const mode = (host?.hass?.states?.[entityId]?.state || '').toLowerCase();
  const active = !!mode && mode !== 'off';
  const { bg, icon } = typeof host?._acBadge === 'function' ? host._acBadge(mode) : { bg: 'rgba(0,0,0,0.06)', icon: 'mdi:air-conditioner' };
  const color = typeof host?._acModeColor === 'function' ? host._acModeColor(mode) : 'gray';
  const fanStyle = `color:${color}; ${active ? 'animation:spin 1.5s linear infinite;' : ''}`;
  const pulse = acPulseColors(mode);
  const wrapStyle = `${active ? `--pulse-weak:${pulse.weak}; --pulse-strong:${pulse.strong};` : ''}`;
  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onACAction === 'function') host._onACAction(ev, entityId);
  };
  return html`
    <ha-control-button
      class="square ac-tile ${active ? 'on' : ''}"
      style=${wrapStyle}
      @action=${onAction}
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

