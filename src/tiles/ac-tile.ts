import { html, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { acStyle } from '../glow';

export function renderACTile(ctx: any, entityId: string, glowMode?: 'pulse' | 'glow'): TemplateResult {
  const mode = (ctx.hass?.states?.[entityId]?.state || '').toLowerCase();
  const active = !!mode && mode !== 'off';
  const { bg, icon } = ctx._acBadge(mode);
  const fanStyle = `color:${ctx._acModeColor(mode)}; ${active ? 'animation:spin 1.5s linear infinite;' : ''}`;
  // Glow style from glow.ts
  const glow = acStyle(mode, glowMode);
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
      class="square ac-tile ${active ? 'on' : ''}${glowCls}"
      @action=${(ev: CustomEvent) => ctx._onACAction(ev, entityId)}
      .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
      role="button" tabindex="0"
      style=${glowStyle}
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
