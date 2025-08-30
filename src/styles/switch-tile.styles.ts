import { css, CSSResultGroup } from 'lit';

export const switchTileStyles: CSSResultGroup = css`
  .switch-row { display:grid; grid-template-columns: repeat(var(--cols,3), 1fr); gap: 12px; }
  .switch-tile-btn { height: var(--tile-h); width: 100%; display: grid; place-items: center; position: relative; overflow: visible; color: var(--secondary-text-color); background: var(--ha-card-background, var(--card-background-color)); border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 6px 18px rgba(0,0,0,0.10); transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; }
  .switch-tile-btn::part(button) { width: 100%; height: 100%; padding: 0; margin: 0; box-sizing: border-box; border-radius: var(--ha-card-border-radius, 12px); background: inherit; }
  .switch-tile-btn:not(.on):hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .switch-tile-btn:not(.on):hover::part(button) { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }

  .switch-tile { position: relative; height: var(--tile-h); border-radius: var(--ha-card-border-radius, 12px); background: var(--ha-card-background, var(--card-background-color)); box-shadow: 0 6px 18px rgba(0,0,0,0.10); transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; display:grid; place-items:center; color: var(--secondary-text-color); }
  .switch-tile:not(.on):hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
  .switch-tile .name { font-weight: 600; font-size: 12px; }
  .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; }
  .tile-inner ha-chip { font-size: var(--chip-font-size, 12px); }
`;

