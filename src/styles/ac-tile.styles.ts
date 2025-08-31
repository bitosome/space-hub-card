import { css, CSSResultGroup } from 'lit';

export const acTileStyles: CSSResultGroup = css`
  .ac-tile.on { border-radius: var(--tile-border-radius); }
  .ac-tile::part(button) { border-radius: var(--tile-border-radius); }
  .ac-tile.on { box-shadow: var(--tile-shadow-active); }
  .ac-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }
`;

