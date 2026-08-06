/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { actionHandler } from '../action-handler-directive';
import { acPulseColors, buildTileGlow, GlowMode } from '../glow';
import { isEntityUnavailable } from '../shared/availability';
import { normalizeAcMode } from '../shared/state';

export function renderACTile(host: any, config: { entity?: string; glow_mode?: GlowMode }): TemplateResult {
  const entityId = config?.entity || '';
  const glowMode = config?.glow_mode;
  const mode = (host?.hass?.states?.[entityId]?.state || '').toLowerCase();
  const climateUnavailable = isEntityUnavailable(host, entityId);
  const active = !climateUnavailable && !!mode && mode !== 'off';
  const chipDef = typeof host?._acChip === 'function'
    ? host._acChip(mode)
    : { icon: 'mdi:air-conditioner' };
  const icon = climateUnavailable ? 'mdi:alert-circle-outline' : (chipDef?.icon || 'mdi:air-conditioner');
  const modeClass = `ac-mode-${normalizeAcMode(mode)}`;
  const chipClasses = `chip chip-temperature-humidity ac-chip ${climateUnavailable ? 'ac-status-unavailable' : modeClass}`;
  const fanClasses = `ac-fan ${modeClass}${active ? ' spinning' : ''}`;
  const centerIcon = climateUnavailable ? 'mdi:air-conditioner' : 'mdi:fan';
  const centerClasses = `center-xy${climateUnavailable ? ' ac-center-unavailable' : ''}`;
  const pulse = acPulseColors(mode);
  const finalGlowMode = glowMode ?? 'static';
  const { style: wrapStyle, overlay: glowOverlay, unavailable } = buildTileGlow(host, config, pulse, finalGlowMode as any, active);
  const onAction = (ev: CustomEvent) => {
    if (typeof host?._onACAction === 'function') host._onACAction(ev, config);
  };
  return html`
    <div class=${`tile-wrap${unavailable ? ' tile-unavailable' : ''}`}>
      <div class="glow-under" style=${wrapStyle}>${glowOverlay}</div>
      <ha-control-button
        class=${`square ac-tile${active ? ' on' : ''}${climateUnavailable ? ' ac-unavailable' : ''}`}
        @hass-action=${onAction}
        .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: false })}
        role="button" tabindex="0"
      >
        <div class=${chipClasses}>
          <ha-icon .icon=${icon}></ha-icon>
        </div>
        <div class=${centerClasses}>
          <ha-icon class=${fanClasses} .icon=${centerIcon}></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `;
}
