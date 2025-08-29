export interface PulseColors { weak: string; strong: string }
export const THERMOSTAT_HEAT_PULSE: PulseColors = {
  weak: 'rgba(255,112,67,0.12)',
  strong: 'rgba(255,112,67,0.26)',
};
export interface ThermostatGlow {
  active: boolean;
  colors: PulseColors;
}
export function thermostatGlow(hvacActionRaw?: string, stateRaw?: string): ThermostatGlow {
  const action = (hvacActionRaw || '').toLowerCase();
  const state = (stateRaw || '').toLowerCase();
  const isHeating = action === 'heating' || state === 'heating';
  if (isHeating) return { active: true, colors: THERMOSTAT_HEAT_PULSE };
  return { active: false, colors: { weak: 'rgba(0,0,0,0.00)', strong: 'rgba(0,0,0,0.00)' } };
}
export function thermostatPulseColors(hvacActionRaw?: string, stateRaw?: string): PulseColors {
  return thermostatGlow(hvacActionRaw, stateRaw).colors;
}

const TRANSPARENT: PulseColors = Object.freeze({ weak: 'rgba(0,0,0,0.00)', strong: 'rgba(0,0,0,0.00)' });
const FALLBACK: PulseColors = Object.freeze({ weak: 'rgba(0,0,0,0.06)', strong: 'rgba(0,0,0,0.12)' });
const AC_MODE_MAP: Readonly<Record<string, PulseColors>> = Object.freeze({
  cool: { weak: 'rgba(0,170,255,0.12)', strong: 'rgba(0,170,255,0.26)' },
  heat: { weak: 'rgba(255,112,67,0.12)', strong: 'rgba(255,112,67,0.26)' },
  dry:  { weak: 'rgba(255,202,40,0.12)', strong: 'rgba(255,202,40,0.26)' },
  fan:  { weak: 'rgba(102,187,106,0.12)', strong: 'rgba(102,187,106,0.26)' },
  auto: { weak: 'rgba(38,198,218,0.12)', strong: 'rgba(38,198,218,0.26)' },
});

export function acPulseColors(modeRaw: string | undefined): PulseColors {
  const mode = (modeRaw || '').toLowerCase();
  if (!mode || mode === 'off') return TRANSPARENT;
  const key = (Object.keys(AC_MODE_MAP) as Array<keyof typeof AC_MODE_MAP>).find(k => mode.includes(k));
  return key ? AC_MODE_MAP[key] : FALLBACK;
}

export function acGlow(modeRaw?: string): ThermostatGlow {
  const colors = acPulseColors(modeRaw);
  const mode = (modeRaw || '').toLowerCase();
  const active = !!mode && mode !== 'off' && (colors.weak !== TRANSPARENT.weak || colors.strong !== TRANSPARENT.strong);
  return { active, colors };
}

const TRANSPARENT_GLOW = 'rgba(0,0,0,0.00)';
export const SWITCH_YELLOW_GLOW = 'rgba(255,193,7,0.30)';
export const SWITCH_GREEN_GLOW = 'rgba(0,200,83,0.30)';

export function switchGlowColor(typeRaw?: string, on?: boolean): string {
  if (!on) return TRANSPARENT_GLOW;
  const t = (typeRaw || '').toLowerCase();
  const smart = t.includes('smart') || t.includes('plug') || t === 'smart_plug';
  return smart ? SWITCH_GREEN_GLOW : SWITCH_YELLOW_GLOW;
}

export interface SwitchGlow { active: boolean; color: string }

export function switchGlow(typeRaw?: string, on?: boolean): SwitchGlow {
  const color = switchGlowColor(typeRaw, on);
  return { active: !!on, color };
}

export type GlowStrategy = 'pulse' | 'glow' | 'none';
let STRATEGY: GlowStrategy = 'pulse';
export function setGlowStrategy(mode: GlowStrategy) { STRATEGY = mode; }
export function getGlowStrategy(): GlowStrategy { return STRATEGY; }
export function applyGlowConfig(config: { glow_mode?: GlowStrategy; glow_effect?: GlowStrategy } | undefined) {
  if (!config) return;
  const mode = config.glow_mode ?? config.glow_effect;
  if (mode === 'pulse' || mode === 'glow' || mode === 'none') STRATEGY = mode;
}

export type GlowStyle =
  | { type: 'pulse'; active: boolean; colors: PulseColors }
  | { type: 'glow'; active: boolean; color: string };

function parseHexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const h = hex.replace('#', '').trim();
  const to255 = (v: string) => parseInt(v, 16);
  if (h.length === 3) {
    return { r: to255(h[0] + h[0]), g: to255(h[1] + h[1]), b: to255(h[2] + h[2]) };
  }
  if (h.length >= 6) {
    return { r: to255(h.slice(0, 2)), g: to255(h.slice(2, 4)), b: to255(h.slice(4, 6)) };
  }
  return null;
}

export function colorWithAlpha(color: string, alpha: number): string {
  const a = Math.max(0, Math.min(1, Number(alpha)));
  const c = (color || '').trim();
  if (!c) return `rgba(0,0,0,${a})`;
  if (c.startsWith('#')) {
    const rgb = parseHexToRgb(c);
    if (rgb) return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
  }
  const m = c.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+)\s*)?\)/i);
  if (m) {
    const r = Number(m[1]); const g = Number(m[2]); const b = Number(m[3]);
    return `rgba(${r},${g},${b},${a})`;
  }
  // Fallback: return as-is (may be var() or hsl())
  return c;
}

export function acStyle(modeRaw?: string, mode?: GlowStrategy): GlowStyle {
  const strat = mode ?? STRATEGY;
  if (strat === 'none') {
    return { type: 'pulse', active: false, colors: TRANSPARENT };
  }
  if (strat === 'glow') {
    const mode = (modeRaw || '').toLowerCase();
    const active = !!mode && mode !== 'off';
    const pc = acPulseColors(modeRaw);
    const color = pc.strong || pc.weak || TRANSPARENT_GLOW;
    return { type: 'glow', active, color };
  }
  const g = acGlow(modeRaw); return { type: 'pulse', active: g.active, colors: g.colors };
}

export function thermostatStyle(hvacActionRaw?: string, stateRaw?: string, mode?: GlowStrategy): GlowStyle {
  const g = thermostatGlow(hvacActionRaw, stateRaw);
  const strat = mode ?? STRATEGY;
  if (strat === 'none') {
    return { type: 'pulse', active: false, colors: TRANSPARENT };
  }
  if (strat === 'glow') {
    const color = g.active ? THERMOSTAT_HEAT_PULSE.strong : TRANSPARENT_GLOW;
    return { type: 'glow', active: g.active, color };
  }
  return { type: 'pulse', active: g.active, colors: g.colors };
}

export function switchStyle(typeRaw?: string, on?: boolean, mode?: GlowStrategy): GlowStyle {
  const strat = mode ?? STRATEGY;
  if (strat === 'none') {
    return { type: 'pulse', active: false, colors: TRANSPARENT };
  }
  if (strat === 'pulse') {
    const t = (typeRaw || '').toLowerCase();
    const smart = t.includes('smart') || t.includes('plug') || t === 'smart_plug';
    if (!on) return { type: 'pulse', active: false, colors: TRANSPARENT };
    const base = smart ? SWITCH_GREEN_GLOW : SWITCH_YELLOW_GLOW;
    const colors: PulseColors = { weak: colorWithAlpha(base, 0.16), strong: colorWithAlpha(base, 0.30) };
    return { type: 'pulse', active: !!on, colors };
  }
  const s = switchGlow(typeRaw, on); return { type: 'glow', active: s.active, color: s.color };
}

// Unavailable/offline card glow
export const DEFAULT_UNAVAIL_COLOR = '#ff3b30';

function pulseFromBaseColor(base: string, weakAlpha = 0.18, strongAlpha = 0.36): PulseColors {
  return {
    weak: colorWithAlpha(base, weakAlpha),
    strong: colorWithAlpha(base, strongAlpha),
  };
}

export function cardUnavailableStyle(active: boolean, baseColor?: string, mode?: GlowStrategy): GlowStyle {
  const color = baseColor || DEFAULT_UNAVAIL_COLOR;
  const strat = mode ?? STRATEGY;
  if (strat === 'none' || !active) {
    return strat === 'pulse'
      ? { type: 'pulse', active: false, colors: TRANSPARENT }
      : { type: 'glow', active: false, color: TRANSPARENT_GLOW };
  }
  if (strat === 'glow') {
    // Use the stronger value for a visible static glow ring
    const c = pulseFromBaseColor(color).strong;
    return { type: 'glow', active: true, color: c };
  }
  const colors = pulseFromBaseColor(color);
  return { type: 'pulse', active: true, colors };
}
