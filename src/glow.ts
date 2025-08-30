// Helpers for glow pulse colors used by AC and thermostat tiles
export interface PulseColors { weak: string; strong: string }

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

