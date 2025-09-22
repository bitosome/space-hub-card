/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import type { HomeAssistant } from 'custom-card-helpers';

// ==============================================
// CHIP SYSTEM INTERFACES
// ==============================================

// Lightweight host interface used by chips renderers
interface CardHost extends HTMLElement {
  hass?: HomeAssistant;
  _fmt2?: (entity?: string | undefined, digits?: number, suffix?: string) => string;
  _openMoreInfo?: (entity?: string | null) => void;
  _toggleByDomain?: (entity?: string | null) => void;
}

// Minimal chip config interface (only fields used by chips)
interface ChipConfig {
  entity?: string;
  tap_entity?: string;
  hold_entity?: string;
  icon?: string;
  icon_active?: string;
  icon_inactive?: string;
  icon_unavailable?: string;
  icon_color?: string;
  icon_color_active?: string;
  icon_color_inactive?: string;
  icon_color_unavailable?: string;
  background?: string;
  background_active?: string;
  background_inactive?: string;
  background_unavailable?: string;
  type?: string;
  tap_action?: unknown;
  hold_action?: unknown;
  double_tap_action?: unknown;
}

// ==============================================
// CHIP UTILITY FUNCTIONS
// ==============================================

/**
 * Determines if an entity is in an active state based on its type and current state
 */
function isEntityActive(entity: string | undefined, state: string, type?: string): boolean {
  if (!state) return false;
  
  if (type === 'lock' || (entity?.startsWith('lock.') ?? false)) {
    return state === 'locked';
  }
  
  return state === 'on' || state === 'open' || state === 'opening';
}

const DEFAULT_UNAVAILABLE_ICON = 'mdi:alert-circle-outline';

type ChipAppearance = { bg: string; iconColor: string };

function applyStylingOverrides(base: ChipAppearance, config: ChipConfig | undefined, isActive: boolean): ChipAppearance {
  if (!config) return base;
  return {
    bg: (isActive ? config.background_active : config.background_inactive) ?? config.background ?? base.bg,
    iconColor: (isActive ? config.icon_color_active : config.icon_color_inactive) ?? config.icon_color ?? base.iconColor,
  };
}

function getUnavailableAppearance(config?: ChipConfig): ChipAppearance {
  const fallbackBg = 'var(--chip-unavailable-background, rgba(0,0,0,0.12))';
  const fallbackIconColor = 'var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))';
  return {
    bg: config?.background_unavailable ?? config?.background_inactive ?? config?.background ?? fallbackBg,
    iconColor: config?.icon_color_unavailable ?? config?.icon_color_inactive ?? config?.icon_color ?? fallbackIconColor,
  };
}

function isLockType(type: string, entity?: string): boolean {
  return type === 'lock' || (entity?.startsWith('lock.') ?? false);
}

/**
 * Gets appropriate icon for chip based on type, entity, and state
 */
function getChipIcon(
  type: string,
  entity: string | undefined,
  state: string,
  config: ChipConfig | undefined,
  isActive: boolean,
  isUnavailable: boolean
): string {
  if (isUnavailable) {
    return config?.icon_unavailable ?? config?.icon_inactive ?? config?.icon ?? DEFAULT_UNAVAILABLE_ICON;
  }

  if (isActive && config?.icon_active) return config.icon_active;
  if (!isActive && config?.icon_inactive) return config.icon_inactive;
  if (config?.icon) return config.icon;

  if (isLockType(type, entity)) {
    return isActive ? 'mdi:lock' : 'mdi:lock-open-variant';
  }

  if (type === 'door') {
    return isActive ? 'mdi:door-open' : 'mdi:door';
  }

  if (type === 'presence') {
    return state === 'on' ? 'mdi:human-greeting' : 'mdi:human-handsdown';
  }

  if (type === 'smart_plug') {
    if (state === 'on') return 'mdi:power-plug';
    if (!state || state === 'off') return 'mdi:power-plug-off';
    return 'mdi:power-plug-outline';
  }

  if (type === 'sliding_gate') {
    return isActive ? 'mdi:gate-open' : 'mdi:gate-arrow-left';
  }
  
  if (type === 'gate') {
    return isActive ? 'mdi:gate-open' : 'mdi:gate';
  }
  
  return isActive ? 'mdi:check-circle' : 'mdi:checkbox-blank-circle-outline';
}

/**
 * Gets chip styling (background and icon color) based on state
 */
function getChipStyling(
  type: string,
  entity: string | undefined,
  state: string,
  config: ChipConfig | undefined,
  isActive: boolean,
  isUnavailable: boolean
): { bg: string; iconColor: string } {
  if (isUnavailable) {
    return getUnavailableAppearance(config);
  }

  if (isLockType(type, entity)) {
    const base = isActive
      ? { bg: '#66bb6a', iconColor: '#ffffff' }
      : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' };
    return applyStylingOverrides(base, config, isActive);
  }
  
  if (type === 'door') {
    const base = isActive
      ? { bg: '#e53935', iconColor: '#ffffff' } // Open/problem state
      : { bg: '#66bb6a', iconColor: '#ffffff' }; // Closed/secure state
    return applyStylingOverrides(base, config, isActive);
  }
  
  if (type === 'presence') {
    const hasPresence = state === 'on';
    const base = hasPresence
      ? { bg: '#42a5f5', iconColor: '#ffffff' } // Presence detected
      : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' }; // No presence
    return applyStylingOverrides(base, config, hasPresence);
  }

  if (type === 'smart_plug') {
    const base = isActive
      ? { bg: '#ff9800', iconColor: '#ffffff' }
      : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' };
    return applyStylingOverrides(base, config, isActive);
  }

  if (type === 'sliding_gate') {
    const base = isActive
      ? { bg: '#e53935', iconColor: '#ffffff' } // Open/problem state
      : { bg: '#66bb6a', iconColor: '#ffffff' }; // Closed/secure state
    return applyStylingOverrides(base, config, isActive);
  }
  
  if (type === 'gate') {
    const base = isActive
      ? { bg: '#e53935', iconColor: '#ffffff' } // Open/problem state
      : { bg: '#66bb6a', iconColor: '#ffffff' }; // Closed/secure state
    return applyStylingOverrides(base, config, isActive);
  }
  
  const base = isActive
    ? { bg: '#42a5f5', iconColor: '#ffffff' }
    : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' };
  return applyStylingOverrides(base, config, isActive);
}

// ==============================================
// CHIP RENDERERS
// ==============================================

/**
 * Renders temperature and humidity chip for main tiles
 */
export function renderTemperatureHumidityChip(host: CardHost, tempEntity?: string, humidityEntity?: string): TemplateResult | typeof nothing {
  if (!tempEntity && !humidityEntity) return nothing;
  
  const temperatureValue = typeof host?._fmt2 === 'function' ? host._fmt2(tempEntity, 2, '°') : '—°';
  const humidityValue = typeof host?._fmt2 === 'function' ? host._fmt2(humidityEntity, 2, '%') : '—%';
  
  return html`
    <div class="chip chip-temperature-humidity" data-role="chip">
      <ha-icon icon="mdi:thermometer"></ha-icon>
      <span class="temperature-value">${temperatureValue}</span>
      <ha-icon icon="mdi:water-percent"></ha-icon>
      <span class="humidity-value">${humidityValue}</span>
    </div>
  `;
}

/**
 * Renders illuminance chip showing light sensor data
 */
export function renderIlluminanceChip(host: CardHost, c: ChipConfig): TemplateResult {
  const entity: string | undefined = c?.entity || c?.tap_entity;
  const icon = c?.icon || 'mdi:brightness-5';
  const val = typeof host?._fmt2 === 'function' ? host._fmt2(entity, 0, ' lx') : '— lx';
  
  return html`
    <div class="illuminance-chip">
      <ha-icon .icon=${icon}></ha-icon>
      <span class="illuminance-value">${val}</span>
    </div>
  `;
}

/**
 * Renders interactive chips for locks, gates, sensors, etc.
 */
export function renderInteractiveChip(host: CardHost, c: ChipConfig): TemplateResult | typeof nothing {
  const entity: string | undefined = c?.entity || c?.tap_entity;
  const type = String(c?.type || '').toLowerCase();
  const entityState = entity && host?.hass ? host.hass.states[entity] : undefined;
  const state = (entityState?.state || '').toLowerCase();
  const isUnavailable = !entityState || state === 'unavailable' || state === 'unknown' || state === '';
  const isActive = !isUnavailable && isEntityActive(entity, state, type);

  const icon = getChipIcon(type, entity, state, c, isActive, isUnavailable);
  const { bg, iconColor } = getChipStyling(type, entity, state, c, isActive, isUnavailable);

  const chipClass = `chip${isUnavailable ? ' chip-unavailable' : ''}`;
  const iconClass = isUnavailable ? 'icon-unavailable' : '';
  const readableState = entityState?.state ?? 'unavailable';
  const ariaLabel = type ? `${type} ${readableState}` : readableState;

  return html`
    <div
      class=${chipClass}
      style=${`background:${bg}`}
      title=${readableState}
      data-state=${state || 'unavailable'}
      role="img"
      aria-label=${ariaLabel}
    >
      <ha-icon .icon=${icon} class=${iconClass} style=${`color:${iconColor}`}></ha-icon>
    </div>
  `;
}
