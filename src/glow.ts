import { html, nothing, TemplateResult } from 'lit';

// Helpers for glow pulse colors used by tiles
export interface PulseColors {
  weak: string;
  strong: string;
}

// Default pulse (used for switches and main fallback)
export const STATIC_GLOW: PulseColors = {
  weak: 'rgba(255,193,7,0.16)',
  strong: 'rgba(255,193,7,0.30)',
};

// Smart plug glow (green)
export const SMART_PLUG_GLOW: PulseColors = {
  weak: 'rgba(0,200,83,0.16)',
  strong: 'rgba(0,200,83,0.30)',
};

// Map AC hvac mode to pulse colors
export function acPulseColors(modeRaw: string | undefined): PulseColors {
  const mode = (modeRaw || '').toLowerCase();
  if (!mode || mode === 'off') return { weak: 'rgba(0,0,0,0.00)', strong: 'rgba(0,0,0,0.00)' };
  if (mode.includes('cool')) return { weak: 'rgba(0,170,255,0.12)', strong: 'rgba(0,170,255,0.26)' };
  if (mode.includes('heat')) return { weak: 'rgba(255,112,67,0.12)', strong: 'rgba(255,112,67,0.26)' };
  if (mode.includes('dry'))  return { weak: 'rgba(255,202,40,0.12)', strong: 'rgba(255,202,40,0.26)' };
  if (mode.includes('fan'))  return { weak: 'rgba(102,187,106,0.12)', strong: 'rgba(102,187,106,0.26)' };
  if (mode.includes('auto')) return { weak: 'rgba(38,198,218,0.12)', strong: 'rgba(38,198,218,0.26)' };
  return { weak: 'rgba(0,0,0,0.06)', strong: 'rgba(0,0,0,0.12)' };
}

// Thermostat heating pulse colors
export const THERMO_HEAT_PULSE: PulseColors = {
  weak: 'rgba(255,112,67,0.12)',
  strong: 'rgba(255,112,67,0.26)',
};

// Build a unified glow wrapper for tiles.
// Returns an object with `style` (string) to set on the tile element and
// `overlay` (TemplateResult | nothing) which is an animated overlay element when active.
export type GlowMode = 'static' | 'pulse' | 'none';

export function buildGlow(pulse: PulseColors | undefined, mode: GlowMode = 'static', active = false): { style: string; overlay: TemplateResult | typeof nothing } {
  if (!pulse || mode === 'none' || !active) return { style: '', overlay: nothing };
  const vars = `--pulse-weak: ${pulse.weak}; --pulse-strong: ${pulse.strong};`;
  const box = `box-shadow: 0 18px 40px var(--pulse-strong, ${pulse.strong}), 0 6px 18px var(--pulse-weak, ${pulse.weak});`;
  const animation = mode === 'pulse' ? `animation: glowPulse 2.4s ease-in-out infinite;` : '';
  const style = `${vars} ${animation} ${box}`;
  const overlay = html`<div class="glow-overlay" aria-hidden="true"></div>`;
  return { style, overlay };
}

