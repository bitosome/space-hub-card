import { css, CSSResultGroup } from 'lit';

export const mainTileStyles: CSSResultGroup = css`
  .main-tile { position: relative; width: 100%; height: var(--tile-h); border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 6px 18px rgba(0,0,0,0.10); background: var(--ha-card-background, var(--card-background-color)); overflow: hidden; transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; }
  .main-tile::part(button) { width: 100%; height: 100%; display:block; padding:0; margin:0; box-sizing:border-box; border-radius: var(--ha-card-border-radius, 12px); }
  .main-tile:hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }

  .main-icon { position: absolute; left: 12px; top: 8px; width: var(--main-icon-size, 48px); height: var(--main-icon-size, 48px); line-height: 0; --mdc-icon-size: var(--main-icon-size, 48px); color: var(--primary-text-color); }

  .main-badges-br { position: absolute; right: 8px; bottom: 8px; z-index: 3; display:inline-flex; align-items:center; justify-content:flex-end; gap:6px; flex-wrap:wrap; max-width: calc(100% - 16px); }
  .main-name { position: absolute; left: 12px; bottom: 8px; font-weight: 500; font-size: 14px; color: var(--primary-text-color); }

  /* Glow variant applies a subtle pulsing shadow when active. Pulse colors are
    provided by the tile via --pulse-weak / --pulse-strong variables (see
    src/tiles/*.ts which set these when appropriate). */
  .main-tile.on { border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 18px 40px var(--pulse-strong, rgba(0,0,0,0.18)), 0 6px 18px var(--pulse-weak, rgba(0,0,0,0.10)); }
  .main-tile.on.glow { animation: glowPulse 2.4s ease-in-out infinite; }

  /* Fallback overlay to ensure glow is visible even when box-shadow is clipped
    or overridden by the host environment. Uses the same pulse variables. */
  .main-tile .glow-overlay { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; background: transparent; box-shadow: 0 18px 40px var(--pulse-strong, rgba(255,193,7,0.30)), 0 6px 18px var(--pulse-weak, rgba(255,193,7,0.16)); opacity: 0.95; mix-blend-mode: screen; }
  .main-tile.on.glow .glow-overlay { animation: glowPulse 2.4s ease-in-out infinite; }

  /* Generic container appended at the end of tile templates to render overlays
    such that the glow visually appears above the tile content but beneath
    badges and other controls with higher z-index. */
  .tile-end { position: absolute; inset: 0; pointer-events: none; z-index: 2; display: block; }
  .tile-end .glow-overlay { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; mix-blend-mode: screen; opacity: 0.95; }

  /* Container for main tile to allow rendering glow under / around the control */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  /* Generic tile-wrap used by main and switch tiles. Glow is rendered in the
    .glow-under sibling and therefore always sits beneath the tile control
    (which has higher z-index), but above the card background so it can
    overflow visually without floating over neighboring tiles. */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  .tile-wrap .glow-under { position: absolute; inset: 0; pointer-events: none; z-index: 1; display:block; }
  .tile-wrap .glow-under .glow-overlay { position: absolute; inset: -6px; border-radius: inherit; pointer-events: none; mix-blend-mode: screen; opacity: 0.95; }
  .tile-wrap > .main-tile,
  .tile-wrap > .switch-tile,
  .tile-wrap > .switch-tile-btn,
  .tile-wrap > ha-control-button { position: relative; z-index: 2; }

  /* place illuminance badge beneath the temp/humidity chip (moved closer) */
  .illum-badge { position: absolute; right: 8px; top: 24px; z-index: 3; display: inline-flex; align-items: center; gap: 6px; padding: 2px 8px; border-radius: var(--ha-chip-border-radius, 999px); background: rgba(0,0,0,0.06); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap; }
  .illum-badge ha-icon { width: 12px; height: 12px; line-height:0; --mdc-icon-size:12px; }
`;

