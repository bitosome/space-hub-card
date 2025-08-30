import { css, CSSResultGroup } from 'lit';

export const thermostatTileStyles: CSSResultGroup = css`
  .thermostat-tile.on { border-radius: var(--ha-card-border-radius, 12px); }
  .thermostat-tile::part(button) { border-radius: var(--ha-card-border-radius, 12px); }
  .temp-chip-tr { position: absolute; right: 8px; top: 8px; z-index: 3; display:inline-flex; align-items:center; }
  .temp-pill { display:inline-flex; align-items:center; justify-content:center; padding: 0 6px; border-radius: var(--ha-chip-border-radius, 999px); background: var(--chip-background-color, rgba(0,0,0,0.06)); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height:1; white-space:nowrap; font-weight:700; max-width: calc(var(--tile-h) - 16px); min-height: var(--chip-size); }
  .temp-chip-tr ha-chip { font-size: var(--chip-font-size, 12px); }
`;

