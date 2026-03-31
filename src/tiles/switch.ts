/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { buildGlow, STATIC_GLOW, SMART_PLUG_GLOW } from '../glow';

const joinClasses = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(' ');

const renderTemplateInfo = (lines: string[], cls: string): TemplateResult | typeof nothing => {
  if (!Array.isArray(lines) || !lines.length) return nothing;
  const normalized = lines
    .map((line) => {
      const text = line === undefined || line === null ? '' : String(line);
      return { text, trimmed: text.trim() };
    })
    .filter((entry) => entry.trimmed.length > 0)
    .slice(0, 2);
  if (!normalized.length) return nothing;
  return html`
    <div class=${cls}>
      ${normalized.map((entry) => html`<span>${entry.text}</span>`)}
    </div>
  `;
};

export function renderSwitchRows(host: any, rows?: any[]): TemplateResult | typeof nothing {
  if (!rows || !rows.length) return nothing;
  return html`${rows.map((row, rowIndex) => renderSwitchRow(host, row, rowIndex))}`;
}

function renderSwitchRow(host: any, row: any, rowIndex: number): TemplateResult {
  const r: any = row as any;
  const items = Array.isArray(row) ? row : (Array.isArray(r?.row) ? r.row : []);
  let extraCards = Array.isArray(r?.cards) ? r.cards : (Array.isArray(r?.extra_cards) ? r.extra_cards : []);
  if (!Array.isArray(extraCards) || !extraCards.length) {
    const single = r?.card || r?.extra_card;
    if (single && typeof single === 'object') extraCards = [single];
  }
  const cols = Math.max(1, items.length || 1);
  const cardsTpl = (Array.isArray(extraCards) && extraCards.length && typeof host?._renderEmbeddedRowCard === 'function')
    ? html`<div class="switch-row-cards">
        ${extraCards.map((cfg: any, cardIndex: number) => host._renderEmbeddedRowCard(cfg, `switch-row-${rowIndex}-card-${cardIndex}`))}
      </div>`
    : nothing;

  return html`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${cols}`}>${items.map((sw: any) => renderSwitchTile(host, sw))}</div>
      ${cardsTpl}
    </div>
  `;
}

export function renderSwitchTile(host: any, sw: any): TemplateResult {
  const tap = sw?.entity || '';
  const icon = sw?.icon || '';
  const name = sw?.name || '';
  const friendlyName = host?.hass?.states?.[tap]?.attributes?.friendly_name || '';
  const displayName = name || friendlyName || tap;
  const type = String(sw?.type || 'switch').toLowerCase();
  const isSmart = type === 'smart_plug';
  const on = typeof host?._isOn === 'function' ? host._isOn(tap) : false;
  const iconSize = sw?.icon_size || sw?.['icon-size'];
  const nameWeight = sw?.font_weight || sw?.['font-weight'];
  const nameSize = sw?.font_size || sw?.['font-size'];
  const toPx = (v: any) => (v === undefined || v === null || v === '') ? '' : (String(v).match(/px|em|rem|%$/) ? String(v) : `${Number(v)}px`);
  const iconDim = toPx(iconSize);
  const iconStyle = iconDim ? `width:${iconDim};height:${iconDim};--mdc-icon-size:${iconDim};` : '';
  const nameStyle = `${nameWeight ? `font-weight:${nameWeight};` : ''}${nameSize ? `font-size:${toPx(nameSize)};` : ''}`;
  const cls = `switch-tile ${isSmart ? 'smart' : ''} ${on ? 'on' : ''}`;
  const hasChip = typeof customElements !== 'undefined' && !!customElements.get('ha-chip');
  const hasControlBtn = typeof customElements !== 'undefined' && !!customElements.get('ha-control-button');
  const typeClass = isSmart ? 'smart' : '';
  const stateClass = on ? 'on' : 'off';
  const chipClass = joinClasses('switch-chip', typeClass, stateClass);
  const iconClass = joinClasses('switch-icon', typeClass, stateClass);
  const nameClass = joinClasses('name', 'switch-name', typeClass, stateClass);
  const resolvedTemplates = typeof host?._resolveSwitchTemplates === 'function'
    ? host._resolveSwitchTemplates(sw)
    : [];
  const templateLines = Array.isArray(resolvedTemplates)
    ? resolvedTemplates.map((entry: any) => (entry && typeof entry === 'object' ? entry.value : entry)).slice(0, 2)
    : [];
  const infoOverlay = renderTemplateInfo(templateLines, joinClasses('switch-info', typeClass, stateClass));

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
      ${infoOverlay}
      <ha-control-button
        class=${btnCls}
        @action=${onAction}
        .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!sw?.double_tap_action })}
        role="button" tabindex="0"
      >
          <div class="tile-inner">
            ${hasChip
            ? html`<ha-chip class=${chipClass}>
                  ${icon ? html`<ha-icon class=${iconClass} .icon=${icon} style=${iconStyle || nothing}></ha-icon>` : nothing}
                  ${displayName}
                </ha-chip>`
              : html`
                  ${icon ? html`<ha-icon class=${iconClass} .icon=${icon} style=${iconStyle || nothing}></ha-icon>` : nothing}
                  ${displayName ? html`<div class=${nameClass} style=${nameStyle}>${displayName}</div>` : nothing}
                `}
          </div>
        </ha-control-button>
      </div>
    `;
  }

  return html`
    <div class="tile-wrap ${cls}"
         @action=${onAction}
         .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!sw?.double_tap_action })}
         role="button" tabindex="0">
      <div class="glow-under" style=${glowStyle}>${glowOverlay}</div>
      ${infoOverlay}
      <div class="tile-inner">
        ${hasChip
          ? html`<ha-chip class=${chipClass}>
              ${icon ? html`<ha-icon class=${iconClass} .icon=${icon} style=${iconStyle || nothing}></ha-icon>` : nothing}
              ${displayName}
            </ha-chip>`
          : html`
              ${icon ? html`<ha-icon class=${iconClass} .icon=${icon} style=${iconStyle || nothing}></ha-icon>` : nothing}
              ${displayName ? html`<div class=${nameClass} style=${nameStyle}>${displayName}</div>` : nothing}
            `}
      </div>
    </div>
  `;
}
