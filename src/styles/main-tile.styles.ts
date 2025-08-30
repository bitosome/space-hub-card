import { css, CSSResultGroup } from 'lit';

export const mainTileStyles: CSSResultGroup = css`
  .main-tile { position: relative; width: 100%; height: var(--tile-h); border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 6px 18px rgba(0,0,0,0.10); background: var(--ha-card-background, var(--card-background-color)); overflow: hidden; transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; }
  .main-tile::part(button) { width: 100%; height: 100%; display:block; padding:0; margin:0; box-sizing:border-box; border-radius: inherit; }
  .main-tile:hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }

  .main-icon { position: absolute; left: 12px; top: 8px; width: var(--main-icon-size, 48px); height: var(--main-icon-size, 48px); line-height: 0; --mdc-icon-size: var(--main-icon-size, 48px); color: var(--primary-text-color); }

  .main-badges-br { position: absolute; right: 8px; bottom: 8px; z-index: 3; display:inline-flex; align-items:center; justify-content:flex-end; gap:6px; flex-wrap:wrap; max-width: calc(100% - 16px); }
  .main-name { position: absolute; left: 12px; bottom: 8px; font-weight: 500; font-size: 14px; color: var(--primary-text-color); }

  .illum-badge { position: absolute; right: 8px; top: 50%; z-index: 3; transform: translateY(-50%); display: inline-flex; align-items: center; gap: 6px; padding: 2px 8px; border-radius: var(--ha-chip-border-radius, 999px); background: rgba(0,0,0,0.06); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap; }
  .illum-badge ha-icon { width: 12px; height: 12px; line-height:0; --mdc-icon-size:12px; }
`;

