import { css, CSSResultGroup } from 'lit';

export const acTileStyles: CSSResultGroup = css`
  .ac-tile.on { border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 18px 40px var(--pulse-strong, rgba(0,170,255,0.30)), 0 6px 18px var(--pulse-weak, rgba(0,170,255,0.16)); animation: glowPulse 2.4s ease-in-out infinite; }
  .badge-tr { position: absolute; right: 8px; top: 8px; z-index: 3; }
`;

