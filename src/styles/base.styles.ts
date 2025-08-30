import { css, CSSResultGroup } from 'lit';

export const baseStyles: CSSResultGroup = css`
  :host { display:block; }
  .metrics, .metrics * { box-sizing: border-box; }

  ha-card {
    border-radius: var(--ha-card-border-radius, 16px);
    background: var(--ha-card-background, var(--card-background-color));
    box-shadow: 0 10px 30px var(--panel-shadow-color);
    padding: 12px;
    color: var(--primary-text-color);
    transition: filter 0.12s ease, box-shadow 0.12s ease;
    position: relative;
    overflow: visible;
  }
  ha-card.unavailable { animation: cardPulse 2.8s ease-in-out infinite; }

  .root { display: grid; gap: 12px; }

  /* Shared visual atoms */
  .chip {
    width: var(--chip-size); height: var(--chip-size);
    border-radius: var(--ha-badge-border-radius, 999px);
    display:flex; align-items:center; justify-content:center;
    line-height:0; background: rgba(0,0,0,0.06);
  }
  .chip ha-icon { --mdc-icon-size: var(--chip-icon-size); width: var(--chip-icon-size); height: var(--chip-icon-size); display:block; margin:0; padding:0; line-height:0; pointer-events:none; color: var(--secondary-text-color); }

  /* Ensure native HA elements pick up theme border radiuses */
  ha-chip, ha-badge { border-radius: var(--ha-chip-border-radius, 999px); }

  .chip-tr { position: absolute; right: 8px; top: 8px; z-index: 3; display: inline-flex; align-items: center; gap: 2px; padding: 2px 6px; border-radius: var(--ha-chip-border-radius, 999px); background: rgba(0,0,0,0.06); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap; }
  .chip-tr ha-icon { width: var(--chip-icon-size); height: var(--chip-icon-size); line-height:0; --mdc-icon-size: var(--chip-icon-size); }
  .chip-tr .tval, .chip-tr .hval { font-weight: 700; }

  /* Shared tile container for AC/Thermostat */
  .square { position: relative; width: var(--tile-h); height: var(--tile-h); aspect-ratio: 1/1; border-radius: var(--ha-card-border-radius, 12px); background: var(--ha-card-background, var(--card-background-color)); backdrop-filter: blur(10px); transition: transform 0.18s ease, box-shadow 0.28s ease, filter 0.12s ease; box-shadow: 0 6px 18px rgba(0,0,0,0.10); overflow: visible; display: grid; place-items: center; }
  .square::part(button) { width: 100%; height: 100%; padding: 0; margin: 0; box-sizing: border-box; border-radius: var(--ha-card-border-radius, 12px); }
  .square:hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }

  .center-xy { position: static; transform: none; display:flex; align-items:center; justify-content:center; pointer-events:none; user-select:none; line-height:0; }
  .ac-fan, .thermostat-icon { width: var(--ac-thermostat-icon); height: var(--ac-thermostat-icon); --mdc-icon-size: var(--ac-thermostat-icon); display:block; margin:0; padding:0; line-height:0; transform-origin: 50% 50%; pointer-events:none; }

  /* Header row grid */
  .header-row { display:grid; grid-template-columns: 1fr auto auto; gap:12px; align-items:stretch; }
  .header-row.only-main { grid-template-columns: 1fr; }
  .header-row.main-plus-one { grid-template-columns: 1fr auto; }
  .header-row > * { height: var(--tile-h); }

  /* Animations */
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes glowPulse { 0% { box-shadow: 0 10px 20px var(--pulse-weak); } 50% { box-shadow: 0 28px 56px var(--pulse-strong); } 100% { box-shadow: 0 10px 20px var(--pulse-weak); } }
  @keyframes cardPulse { 0% { box-shadow: 0 10px 30px var(--panel-shadow-color); } 50% { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); } 100% { box-shadow: 0 10px 30px var(--panel-shadow-color); } }

  .clickable { cursor: pointer; }
`;

