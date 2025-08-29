import { html, TemplateResult, nothing } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { switchStyle } from '../glow';

export function renderSwitchTile(ctx: any, sw: any): TemplateResult {
  const tap = sw?.entity || '';
  const icon = sw?.icon || '';
  const name = sw?.name || '';
  const type = String(sw?.type || 'switch').toLowerCase();
  const isSmart = type === 'smart_plug';
  const on = ctx._isOn(tap);
  const iconSize = sw?.icon_size || sw?.['icon-size'] || sw?.['icon_size'];
  const nameWeight = sw?.font_weight || sw?.['font-weight'];
  const nameSize = sw?.font_size || sw?.['font-size'];
  const toPx = (v: any) => (v === undefined || v === null || v === '') ? '' : (String(v).match(/px|em|rem|%$/) ? String(v) : `${Number(v)}px`);
  const iconDim = toPx(iconSize);
  const iconStyle = iconDim ? `width:${iconDim};height:${iconDim};--mdc-icon-size:${iconDim};` : '';
  const nameStyle = `${nameWeight ? `font-weight:${nameWeight};` : ''}${nameSize ? `font-size:${toPx(nameSize)};` : ''}`;
  const hasChip = typeof customElements !== 'undefined' && !!customElements.get('ha-chip');
  // Glow style from glow.ts
  const glow = switchStyle(type, on, (sw?.glow_mode as any));
  let glowCls = '';
  let glowStyle = '';
  if (glow.type === 'pulse' && glow.active) {
    glowCls = ' tile-pulse';
    glowStyle = `--pulse-weak:${glow.colors.weak};--pulse-strong:${glow.colors.strong};`;
  } else if (glow.type === 'glow' && glow.active) {
    glowCls = ' tile-glow';
    glowStyle = `--tile-glow-color:${glow.color};`;
  }
  const btnCls = `switch-tile-btn ${isSmart ? 'smart' : ''} ${on ? 'on' : ''}${glowCls}`;
  return html`
    <ha-control-button
      class=${btnCls}
      @action=${(ev: CustomEvent) => ctx._onSwitchAction(ev, sw)}
      .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!sw?.double_tap_action })}
      role="button" tabindex="0"
      style=${glowStyle}
    >
      <div class="tile-inner">
        ${hasChip
          ? html`<ha-chip>
              ${icon ? html`<ha-icon .icon=${icon} style=${`margin-right:6px;${iconStyle}`}></ha-icon>` : nothing}
              ${name || tap}
            </ha-chip>`
          : html`
              ${icon ? html`<ha-icon class="switch-icon" .icon=${icon} style=${iconStyle}></ha-icon>` : nothing}
              ${name ? html`<div class="name" style=${nameStyle}>${name}</div>` : nothing}
            `}
      </div>
    </ha-control-button>
  `;
}
