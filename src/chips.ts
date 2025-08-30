/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler, handleAction, fireEvent } from 'custom-card-helpers';

function haptic(type: any): void {
  try { fireEvent(window as any, 'haptic', type); } catch (_e) { /* no-op */ }
}

// Chips and badges rendering helpers extracted from room-card

export function renderIlluminanceBadge(host: any, b: any): TemplateResult {
  const entity: string | undefined = b?.entity || b?.tap_entity;
  const icon = b?.icon || 'mdi:brightness-5';
  const val = typeof host?._fmt2 === 'function' ? host._fmt2(entity, 0, ' lx') : '— lx';
  const hasHAAction = !!(b?.tap_action || b?.hold_action || b?.double_tap_action);
  const onAction = (ev: CustomEvent) => {
    const act = (ev.detail && (ev.detail as any).action) || 'tap';
    if (hasHAAction) {
      handleAction(host, host?.hass, b as any, act);
      return;
    }
    if (act === 'hold') { haptic('medium'); if (typeof host?._openMoreInfo === 'function') host._openMoreInfo(entity); }
    else { if (typeof host?._openMoreInfo === 'function') host._openMoreInfo(entity); }
  };
  return html`
    <div class="illum-badge"
         @action=${onAction}
         .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!b?.double_tap_action })}
         role="button" tabindex="0">
      <ha-icon .icon=${icon}></ha-icon>
      <span class="illum-val">${val}</span>
    </div>
  `;
}

export function renderExtraBadge(host: any, b: any): TemplateResult | typeof nothing {
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

  const hasDbl = !!b?.double_tap_action;

  const onAction = (ev: CustomEvent) => {
    const act = (ev.detail && (ev.detail as any).action) || 'tap';
    if (host?.hass && b && (b.tap_action || b.hold_action || b.double_tap_action)) {
      handleAction(host, host.hass, b as any, act);
      return;
    }
    const tap = b?.tap_entity || b?.entity;
    const hold = b?.hold_entity || b?.entity;
    if (act === 'hold') { haptic('medium'); if (typeof host?._openMoreInfo === 'function') host._openMoreInfo(hold || tap); return; }
    const domain = (tap || '').split('.')[0];
    if (domain === 'lock') {
      if (typeof host?._openMoreInfo === 'function') host._openMoreInfo(hold || tap);
      return;
    }
    if (typeof host?._toggleByDomain === 'function') host._toggleByDomain(tap);
  };

  return html`
    <div class="badge clickable"
         style=${`background:${bg}`}
         @action=${onAction}
         .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: hasDbl })}
         role="button" tabindex="0">
      <ha-icon .icon=${icon} style=${`color:${icoColor}`}></ha-icon>
    </div>
  `;
}
