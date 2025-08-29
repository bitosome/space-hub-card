import { html, TemplateResult, nothing } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { switchStyle } from '../glow';

export function renderMainTile(ctx: any, h: any): TemplateResult {
  const icon = h.icon || 'mdi:sofa-outline';
  const name = h.name || '';
  const tval = ctx._fmt2(h.temp_sensor, 2, '°');
  const hval = ctx._fmt2(h.humidity_sensor, 2, '%');
  const hasHold = true;
  const hasDbl = !!(h?.double_tap_action || ctx._config?.double_tap_action);
  const hasBulb = !!h.light_group_entity;
  const ctrl = h.light_group_entity || h.tap_entity || h.entity;
  const isOn = hasBulb && ctx._isOn(ctrl);
  const bulbBg = isOn ? 'linear-gradient(135deg,#ffcf57,#ffb200)' : 'rgba(0,0,0,0.06)';
  const bulbIconColor = isOn ? '#ffffff' : 'var(--secondary-text-color)';
  const defaultToggleTarget = h.light_group_entity || h.tap_entity || h.entity;
  const illumBadge = Array.isArray(h?.badges)
    ? (h.badges as any[]).find((b) => String(b?.type || '').toLowerCase() === 'illuminance')
    : undefined;
  const illumTpl = illumBadge ? ctx._renderIlluminanceBadge(illumBadge) : nothing;
  // Apply glow based on switch-like state of the main tile
  const glow = switchStyle('switch', hasBulb && isOn, (h?.glow_mode ?? h?.glow_effect));
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
      class="main-tile${glowCls}"
      @action=${(ev: CustomEvent) => ctx._onMainAction(ev, h, h.tap_entity, h.hold_entity, defaultToggleTarget)}
      .actionHandler=${actionHandler({ hasHold, hasDoubleClick: hasDbl })}
      role="button" tabindex="0"
      style=${glowStyle}
    >
      <ha-icon class="main-icon" .icon=${icon}></ha-icon>
      <div class="chip-tr" data-role="chip">
        <ha-chip style=${`font-size:var(--chip-font-size,12px);`}>
          <ha-icon icon="mdi:thermometer" style="--mdc-icon-size:12px;margin-right:4px"></ha-icon>
          <span class="tval">${tval}</span>
          <span style="opacity:.6;margin:0 4px;">|</span>
          <ha-icon icon="mdi:water-percent" style="--mdc-icon-size:12px;margin-right:4px"></ha-icon>
          <span class="hval">${hval}</span>
        </ha-chip>
      </div>
      ${illumTpl}
      <div class="main-badges-br" data-role="badges">
        ${hasBulb ? html`
          <ha-chip style=${`--ha-chip-background-color:${bulbBg};--chip-background-color:${bulbBg};--ha-chip-text-color:${bulbIconColor};color:${bulbIconColor};`}>
            <ha-icon .icon=${'mdi:lightbulb'}></ha-icon>
          </ha-chip>` : nothing}
        ${Array.isArray(h?.badges) && h.badges.length
          ? html`${h.badges
              .filter((b: any) => String(b?.type || '').toLowerCase() !== 'illuminance')
              .map((b: any) => ctx._renderExtraBadge(b))}`
          : nothing}
      </div>
      <div class="main-name">${name}</div>
    </ha-control-button>
  `;
}
