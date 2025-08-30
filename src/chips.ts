/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import type { HomeAssistant } from 'custom-card-helpers';

// Lightweight host interface used by chips renderers
interface CardHost extends HTMLElement {
  hass?: HomeAssistant;
  _fmt2?: (entity?: string | undefined, digits?: number, suffix?: string) => string;
  _openMoreInfo?: (entity?: string | null) => void;
  _toggleByDomain?: (entity?: string | null) => void;
}

// Minimal badge config interface (only fields used by chips)
interface BadgeConfig {
  entity?: string;
  tap_entity?: string;
  hold_entity?: string;
  icon?: string;
  type?: string;
  tap_action?: unknown;
  hold_action?: unknown;
  double_tap_action?: unknown;
}

// Chips and badges rendering helpers extracted from room-card

export function renderIlluminanceBadge(host: CardHost, b: BadgeConfig): TemplateResult {
  const entity: string | undefined = b?.entity || b?.tap_entity;
  const icon = b?.icon || 'mdi:brightness-5';
  const val = typeof host?._fmt2 === 'function' ? host._fmt2(entity, 0, ' lx') : '— lx';
  return html`
  <div class="illum-badge">
      <ha-icon .icon=${icon}></ha-icon>
      <span class="illum-val">${val}</span>
    </div>
  `;
}

export function renderExtraBadge(host: CardHost, b: BadgeConfig): TemplateResult | typeof nothing {
  const entity: string | undefined = b?.entity || b?.tap_entity;
  const type = String(b?.type || '').toLowerCase();
  const iconFromCfg: string | undefined = b?.icon;
  const st = entity && host?.hass ? host.hass.states[entity] : undefined;
  const state = (st?.state || '').toLowerCase();

  let bg = 'rgba(0,0,0,0.06)';
  let icon = iconFromCfg || 'mdi:checkbox-blank-circle-outline';
  let icoColor = 'var(--secondary-text-color)';

  const isActive = (s: string): boolean => {
    if (!s) return false;
    if (type === 'lock' || (entity?.startsWith('lock.') ?? false)) return s === 'locked';
    if (entity?.startsWith('cover.') ?? false) return s !== 'closed' && s !== 'closing';
    return s === 'on' || s === 'open' || s === 'opening';
  };

  const active = isActive(state);

  if (type === 'lock' || (entity?.startsWith('lock.') ?? false)) {
    icon = iconFromCfg || (active ? 'mdi:lock' : 'mdi:lock-open-variant');
    if (active) { bg = '#66bb6a'; icoColor = '#ffffff'; }
  } else if (type === 'gate' || (entity?.startsWith('cover.') ?? false) || (entity?.startsWith('binary_sensor.') ?? false)) {
    const domain = (entity || '').split('.')[0];
    const dc = (st?.attributes?.device_class || '').toLowerCase();
    const gateLike = type === 'gate' || domain === 'cover' || (domain === 'binary_sensor' && /(door|window|garage|opening|gate)/.test(dc));
    if (gateLike) {
      const s = state;
      let isOpen = false;
      if (domain === 'cover') {
        isOpen = s === 'open' || s === 'opening' || (s !== 'closed' && s !== 'closing' && s !== 'unknown' && s !== 'unavailable');
      } else if (domain === 'binary_sensor') {
        isOpen = s === 'on' || s === 'open' || s === 'opening';
      } else {
        isOpen = s === 'open' || s === 'opening' || s === 'on';
      }
      icon = iconFromCfg || (isOpen ? 'mdi:gate-open' : 'mdi:gate');
      if (isOpen) { bg = '#e53935'; icoColor = '#ffffff'; }
      else { bg = '#66bb6a'; icoColor = '#ffffff'; }
    }
  } else {
    icon = iconFromCfg || (active ? 'mdi:check-circle' : 'mdi:checkbox-blank-circle-outline');
    if (active) { bg = '#42a5f5'; icoColor = '#ffffff'; }
  }

  return html`
  <div class="badge"
         style=${`background:${bg}`}
     >
      <ha-icon .icon=${icon} style=${`color:${icoColor}`}></ha-icon>
    </div>
  `;
}
