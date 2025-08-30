import { css, CSSResultGroup } from 'lit';

export const thermostatTileStyles: CSSResultGroup = css`
  .thermostat-tile.on { border-radius: var(--tile-border-radius); }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .temperature-chip-container { 
    position: absolute; 
    right: var(--tile-padding); 
    top: var(--tile-padding); 
    z-index: var(--chip-z-index); 
    display:inline-flex; 
    align-items:center; 
  }
  .temperature-chip-container ha-chip { font-size: var(--chip-text-font-size); }
`;

