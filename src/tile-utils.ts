/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { actionHandler } from './action-handler-directive';

// ==============================================
// TYPES AND INTERFACES
// ==============================================

interface FormattingHost {
  _fmt2?: (entity?: string, digits?: number, suffix?: string) => string;
}

// ==============================================
// TILE UTILITIES
// ==============================================

/**
 * Common tile wrapper with glow support
 */
export function renderTileWrapper(
  content: TemplateResult,
  glowOverlay?: TemplateResult,
  className = 'tile-wrap'
): TemplateResult {
  return html`
    <div class="${className}">
      <div class="glow-under">
        ${glowOverlay || nothing}
      </div>
      ${content}
    </div>
  `;
}

/**
 * Standard action handler configuration for tiles
 */
export function getTileActionHandler(hasHold = true, hasDoubleClick = false): any {
  return actionHandler({ 
    hasHold, 
    hasDoubleClick 
  });
}

/**
 * Common tile button attributes
 */
export function getTileButtonAttributes(
  className: string,
  active: boolean,
  wrapStyle: string,
  onAction: (ev: CustomEvent) => void,
  hasHold = true,
  hasDoubleClick = false
): any {
  return {
    class: `${className} ${active ? 'on' : ''}`,
    style: wrapStyle,
    '@action': onAction,
    '.actionHandler': getTileActionHandler(hasHold, hasDoubleClick),
    role: 'button',
    tabindex: '0'
  };
}

// ==============================================
// ICON UTILITIES  
// ==============================================

/**
 * Renders centered icon with standard styling
 */
export function renderCenteredIcon(
  icon: string,
  className = 'center-xy',
  style?: string
): TemplateResult {
  return html`
    <div class="${className}">
      <ha-icon icon="${icon}" style="${style || ''}"></ha-icon>
    </div>
  `;
}

/**
 * Renders main tile icon with positioning
 */
export function renderMainIcon(icon: string, size?: string): TemplateResult {
  const iconStyle = size ? `--mdc-icon-size: ${size}; width: ${size}; height: ${size};` : '';
  return html`
    <ha-icon class="main-icon" icon="${icon}" style="${iconStyle}"></ha-icon>
  `;
}

// ==============================================
// TEXT UTILITIES
// ==============================================

/**
 * Renders main tile name
 */
export function renderMainName(name: string): TemplateResult {
  return html`
    <div class="main-name">${name}</div>
  `;
}

/**
 * Format entity value with fallback
 */
export function formatEntityValue(
  host: FormattingHost,
  entity?: string,
  digits = 0,
  suffix = ''
): string {
  if (typeof host?._fmt2 === 'function') {
    return host._fmt2(entity, digits, suffix);
  }
  return `—${suffix}`;
}

// ==============================================
// ANIMATION UTILITIES
// ==============================================

/**
 * Generate spinning animation style for fans, etc.
 */
export function getSpinningStyle(color: string, isActive: boolean): string {
  const baseStyle = `color: ${color};`;
  const animationStyle = isActive ? 'animation: spin 1.5s linear infinite;' : '';
  return `${baseStyle} ${animationStyle}`;
}

/**
 * CSS keyframes for spin animation (should be added to CSS)
 */
export const spinKeyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
