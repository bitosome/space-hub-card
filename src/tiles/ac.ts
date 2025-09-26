/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { acPulseColors, buildGlow, GlowMode } from '../glow';

type AcModeClass = 'off' | 'cool' | 'heat' | 'dry' | 'fan' | 'auto' | 'default';

function normalizeAcMode(modeRaw: string): AcModeClass {
  if (!modeRaw || modeRaw === 'off') return 'off';
  if (modeRaw.includes('cool')) return 'cool';
  if (modeRaw.includes('heat')) return 'heat';
  if (modeRaw.includes('dry')) return 'dry';
  if (modeRaw.includes('fan')) return 'fan';
  if (modeRaw.includes('auto')) return 'auto';
  return 'default';
}

export function renderACTile(host: any, entityId: string, glowMode?: GlowMode): TemplateResult {
  const mode = (host?.hass?.states?.[entityId]?.state || '').toLowerCase();
  const active = !!mode && mode !== 'off';
  const chipDef = typeof host?._acChip === 'function'
    ? host._acChip(mode)
    : { icon: 'mdi:air-conditioner' };
  const icon = chipDef?.icon || 'mdi:air-conditioner';
  const modeClass = `ac-mode-${normalizeAcMode(mode)}`;
  const chipClasses = `chip chip-temperature-humidity ac-chip ${modeClass}`;
  const fanClasses = `ac-fan ${modeClass}${active ? ' spinning' : ''}`;
  const pulse = acPulseColors(mode);
  const finalGlowMode = glowMode ?? 'static';
  const { style: wrapStyle, overlay: glowOverlay } = buildGlow(pulse, finalGlowMode as any, active);
  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onACAction === 'function') host._onACAction(ev, entityId);
  };
  return html`
    <div class="tile-wrap">
      <div class="glow-under" style=${wrapStyle}>${glowOverlay}</div>
      <ha-control-button
        class="square ac-tile ${active ? 'on' : ''}"
        @action=${onAction}
        .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
        role="button" tabindex="0"
      >
        <div class=${chipClasses}>
          <ha-icon .icon=${icon}></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class=${fanClasses} icon="mdi:fan"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `;
}
