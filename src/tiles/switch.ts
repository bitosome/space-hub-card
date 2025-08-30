/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { buildGlow, STATIC_GLOW, SMART_PLUG_GLOW } from '../glow';

export function renderSwitchRows(host: any, rows?: any[]): TemplateResult | typeof nothing {
  if (!rows || !rows.length) return nothing;
  return html`${rows.map((row) => {
    const r: any = row as any;
    const items = Array.isArray(row) ? row : (Array.isArray(r?.row) ? r.row : []);
    const cols = Math.max(1, items.length || 1);
    return html`<div class="switch-row" style=${`--cols:${cols}`}>${items.map((sw) => renderSwitchTile(host, sw))}</div>`;
  })}`;
}

export function renderSwitchTile(host: any, sw: any): TemplateResult {
  const tap = sw?.entity || '';
  const icon = sw?.icon || '';
  const name = sw?.name || '';
  const type = String(sw?.type || 'switch').toLowerCase();
  const isSmart = type === 'smart_plug';
  const on = typeof host?._isOn === 'function' ? host._isOn(tap) : false;
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

  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onSwitchAction === 'function') host._onSwitchAction(ev, sw);
  };

  // Glow mode per-switch (static|pulse|none). Default to 'static'.
  const glowMode = sw?.glow_mode || 'static';
  const pulse = isSmart ? SMART_PLUG_GLOW : STATIC_GLOW;
  const { style: glowStyle, overlay: glowOverlay } = buildGlow(pulse, glowMode as any, on && glowMode !== 'none');

  if (hasControlBtn) {
    const btnCls = `switch-tile-btn ${isSmart ? 'smart' : ''} ${on ? 'on' : ''}`;
    return html`
      <div class="tile-wrap">
        <div class="glow-under" style=${glowStyle}>${glowOverlay}</div>
        <ha-control-button
          class=${btnCls}
          @action=${onAction}
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
      </div>
    `;
  }

  return html`
    <div class="tile-wrap ${cls}"
         style=${glowStyle}
         @action=${onAction}
         .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!sw?.double_tap_action })}
         role="button" tabindex="0">
      <div class="glow-under">${glowOverlay}</div>
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

