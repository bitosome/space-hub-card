import { html, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';

export function renderACTile(ctx: any, entityId: string): TemplateResult {
  const mode = (ctx.hass?.states?.[entityId]?.state || '').toLowerCase();
  const active = !!mode && mode !== 'off';
  const { bg, icon } = ctx._acBadge(mode);
  const fanStyle = `color:${ctx._acModeColor(mode)}; ${active ? 'animation:spin 1.5s linear infinite;' : ''}`;
  return html`
    <ha-control-button
      class="square ac-tile ${active ? 'on' : ''}"
      @action=${(ev: CustomEvent) => ctx._onACAction(ev, entityId)}
      .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
      role="button" tabindex="0"
    >
      <div class="chip-tr">
        <ha-chip style=${`--ha-chip-background-color:${bg};--chip-background-color:${bg};--ha-chip-text-color:#fff;color:#fff;`}>
          <ha-icon .icon=${icon}></ha-icon>
        </ha-chip>
      </div>
      <div class="center-xy">
        <ha-icon class="ac-fan" icon="mdi:fan" style=${fanStyle}></ha-icon>
      </div>
    </ha-control-button>
  `;
}
