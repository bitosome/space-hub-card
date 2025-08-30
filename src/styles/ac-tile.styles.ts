import { css, CSSResultGroup } from 'lit';

export const acTileStyles: CSSResultGroup = css`
  .ac-tile.on { border-radius: var(--ha-card-border-radius, 12px); }
  .ac-tile::part(button) { border-radius: var(--ha-card-border-radius, 12px); }
  .badge-tr { position: absolute; right: 8px; top: 8px; z-index: 3; }
`;

