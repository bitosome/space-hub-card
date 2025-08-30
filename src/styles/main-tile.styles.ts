import { css, CSSResultGroup } from 'lit';

export const mainTileStyles: CSSResultGroup = css`
  .main-tile { 
    position: relative; 
    width: 100%; 
    height: var(--tile-h); 
  border-radius: var(--tile-border-radius); 
    box-shadow: var(--tile-shadow-default); 
    background: var(--ha-card-background, var(--card-background-color)); 
    overflow: hidden; 
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; 
  }
  .main-tile::part(button) { width: 100%; height: 100%; display:block; padding:0; margin:0; box-sizing:border-box; border-radius: var(--tile-border-radius); }
  .main-tile:hover { transform: translateY(-1px); box-shadow: var(--tile-shadow-hover); border-radius: var(--tile-border-radius); }

  .main-icon { 
    position: absolute; 
    left: var(--tile-padding-large); 
    top: var(--tile-padding); 
    width: var(--main-icon-size, 48px); 
    height: var(--main-icon-size, 48px); 
    line-height: 0; 
    --mdc-icon-size: var(--main-icon-size, 48px); 
    color: var(--primary-text-color); 
  }

  .main-chips-bottom-right { 
    position: absolute; 
    right: var(--tile-padding); 
    bottom: var(--tile-padding); 
    z-index: var(--chip-z-index); 
    display:inline-flex; 
    align-items:center; 
    justify-content:flex-end; 
    gap: var(--chip-gap); 
    flex-wrap:wrap; 
    max-width: calc(100% - 16px); 
  }
  .main-name { 
    position: absolute; 
    left: var(--tile-padding-large); 
    bottom: var(--tile-padding); 
    font-weight: 500; 
    font-size: 14px; 
    color: var(--primary-text-color); 
  }

  .main-tile.on { border-radius: var(--tile-border-radius); box-shadow: var(--tile-shadow-active); }

  /* Container for main tile to allow rendering glow under / around the control */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  /* Generic tile-wrap used by main and switch tiles. Glow is rendered in the
    .glow-under sibling and therefore always sits beneath the tile control
    (which has higher z-index), but above the card background so it can
    overflow visually without floating over neighboring tiles. */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  .tile-wrap .glow-under { position: absolute; inset: 0; pointer-events: none; z-index: var(--glow-z-index); display:block; }
  .tile-wrap .glow-under .glow-overlay { position: absolute; inset: -6px; border-radius: inherit; pointer-events: none; mix-blend-mode: screen; opacity: 0.95; }
  .tile-wrap > .main-tile,
  .tile-wrap > .switch-tile,
  .tile-wrap > .switch-tile-btn,
  .tile-wrap > ha-control-button { position: relative; z-index: var(--tile-z-index); }
`;

