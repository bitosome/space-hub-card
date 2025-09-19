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

/**
 * Gets appropriate icon for chip based on type, entity, and state
 */
function getChipIcon(type: string, entity: string | undefined, state: string, iconFromConfig?: string): string {
  if (iconFromConfig) return iconFromConfig;
  
  if (type === 'lock' || (entity?.startsWith('lock.') ?? false)) {
    const isLocked = state === 'locked';
    return isLocked ? 'mdi:lock' : 'mdi:lock-open-variant';
  }
  
  if (type === 'door') {
    const isOpen = isEntityActive(entity, state, type);
    return isOpen ? 'mdi:door-open' : 'mdi:door';
  }
  
  if (type === 'presence') {
    const hasPresence = state === 'on';
    return hasPresence ? 'mdi:human-greeting' : 'mdi:human-handsdown';
  }

  if (type === 'smart_plug') {
    return 'mdi:power-plug-outline';
  }

  if (type === 'sliding_gate') {
    const isOpen = isEntityActive(entity, state, type);
    return isOpen ? 'mdi:gate-open' : 'mdi:gate-arrow-left';
  }
  
  if (type === 'gate') {
    const isOpen = isEntityActive(entity, state, type);
    return isOpen ? 'mdi:gate-open' : 'mdi:gate';
  }
  
  const isActive = isEntityActive(entity, state, type);
  return isActive ? 'mdi:check-circle' : 'mdi:checkbox-blank-circle-outline';
}

/**
 * Gets chip styling (background and icon color) based on state
 */
function getChipStyling(type: string, entity: string | undefined, state: string): { bg: string; iconColor: string } {
  const isActive = isEntityActive(entity, state, type);
  
  if (type === 'lock' || (entity?.startsWith('lock.') ?? false)) {
    return isActive 
      ? { bg: '#66bb6a', iconColor: '#ffffff' }
      : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' };
  }
  
  if (type === 'door') {
    if (isActive) {
      return { bg: '#e53935', iconColor: '#ffffff' }; // Open/problem state
    } else {
      return { bg: '#66bb6a', iconColor: '#ffffff' }; // Closed/secure state
    }
  }
  
  if (type === 'presence') {
    const hasPresence = state === 'on';
    return hasPresence
      ? { bg: '#42a5f5', iconColor: '#ffffff' } // Presence detected
      : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' }; // No presence
  }

  if (type === 'smart_plug') {
    return isActive
      ? { bg: 'var(--chip-background-color)', iconColor: '#66bb6a' }
      : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' };
  }

  if (type === 'sliding_gate') {
    return isActive 
      ? { bg: '#e53935', iconColor: '#ffffff' } // Open/problem state
      : { bg: '#66bb6a', iconColor: '#ffffff' }; // Closed/secure state
  }
  
  if (type === 'gate') {
    return isActive 
      ? { bg: '#e53935', iconColor: '#ffffff' } // Open/problem state
      : { bg: '#66bb6a', iconColor: '#ffffff' }; // Closed/secure state
  }
  
  return isActive 
    ? { bg: '#42a5f5', iconColor: '#ffffff' }
    : { bg: 'var(--chip-background-color)', iconColor: 'var(--secondary-text-color)' };
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
  const iconFromConfig: string | undefined = c?.icon;
  const entityState = entity && host?.hass ? host.hass.states[entity] : undefined;
  const state = (entityState?.state || '').toLowerCase();

  const icon = getChipIcon(type, entity, state, iconFromConfig);
  const { bg, iconColor } = getChipStyling(type, entity, state);

  return html`
    <div class="chip" style=${`background:${bg}`}>
      <ha-icon .icon=${icon} style=${`color:${iconColor}`}></ha-icon>
    </div>
  `;
}
