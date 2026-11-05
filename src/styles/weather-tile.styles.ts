import { css, CSSResultGroup } from 'lit';

export const weatherTileStyles: CSSResultGroup = css`
  .weather-tile-container {
    height: auto;
    align-self: start;
    overflow: visible;
  }

  .weather-tile-wrap {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    align-self: start;
    border-radius: var(--tile-border-radius);
    background: var(--space-hub-tile-background, var(--family-tile));
    backdrop-filter: blur(10px);
    box-shadow: var(--tile-shadow-default);
    overflow: hidden;
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    mask-image: radial-gradient(circle, white 99%, transparent 100%);
    --weather-temp-size: 31px;
    --weather-icon-size: 42px;
    --weather-icon-bg-size: 58px;
    --control-button-border-radius: var(--tile-border-radius);
  }

  .weather-tile {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: inherit;
    box-shadow: none;
    background: transparent;
    backdrop-filter: none;
    overflow: visible;
    clip-path: none;
    background-clip: border-box;
    --ha-ripple-color: transparent;
    --control-button-border-radius: inherit;
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
  }

  .weather-tile:hover,
  .weather-tile::part(button):hover {
    background: transparent;
    transform: none;
    filter: none;
  }

  .weather-tile::part(button) {
    width: 100%;
    height: auto;
    display: block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: var(--tile-border-radius);
    overflow: hidden;
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
  }

  .weather-content {
    position: relative;
    padding: var(--tile-padding-large);
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    color: var(--primary-text-color);
    pointer-events: auto;
  }

  .weather-clickable {
    pointer-events: auto;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.12s ease, box-shadow 0.12s ease, color 0.12s ease;
  }

  .weather-clickable:hover {
    background: color-mix(in srgb, var(--primary-color) 12%, transparent);
  }

  /* Outline rather than box-shadow, so active metrics keep a visible ring. */
  .weather-clickable:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
  }

  .weather-top {
    position: relative;
    display: block;
    min-width: 0;
  }

  .weather-icon-wrap {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: grid;
    place-items: center;
    width: var(--weather-icon-bg-size);
    height: var(--weather-icon-bg-size);
    color: var(--state-weather-sunny-color, #f6a000);
    background: transparent;
    pointer-events: none;
    transform: translate(var(--weather-icon-x, 0px), var(--weather-icon-y, 0px));
  }

  .weather-icon {
    width: var(--weather-icon-size);
    height: var(--weather-icon-size);
    --mdc-icon-size: var(--weather-icon-size);
    color: inherit;
    transform-origin: 50% 50%;
    overflow: visible;
    border: 0;
    will-change: transform;
  }

  .weather-icon,
  .weather-conditions-icon,
  .weather-conditions-selected-icon,
  .weather-daily-icon,
  .weather-metric-icon {
    display: block;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }

  .weather-icon > svg,
  .weather-conditions-icon > svg,
  .weather-conditions-selected-icon > svg,
  .weather-daily-icon > svg,
  .weather-metric-icon > svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
    background: transparent;
  }

  .weather-heading {
    position: relative;
    z-index: 3;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    gap: 3px;
    padding: 3px 4px;
    margin: -3px -4px;
  }

  .weather-condition {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    font-size: 11px;
    line-height: 1.2;
    color: var(--secondary-text-color);
  }

  .weather-source-picker {
    width: fit-content;
    max-width: 100%;
    min-width: 0;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    box-sizing: border-box;
    overflow: hidden;
  }

  .weather-source-row {
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }

  .weather-forecast-outage {
    min-width: 0;
  }

  /* A source that stopped updating keeps its label and gets a warning dot. */
  .weather-source-down::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-left: 4px;
    border-radius: 50%;
    vertical-align: middle;
    background: var(--family-warning);
  }

  .weather-forecast-source-picker {
    margin-top: 1px;
    margin-bottom: -1px;
  }

  .weather-source-option {
    min-width: 0;
    max-width: 92px;
    border: 0;
    border-radius: 6px;
    padding: 3px 7px;
    background: transparent;
    color: var(--secondary-text-color);
    font: inherit;
    font-size: 10px;
    line-height: 1.1;
    font-weight: 750;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .weather-source-option:hover {
    background: color-mix(in srgb, var(--primary-color) 12%, transparent);
  }

  .weather-source-option.active {
    background: color-mix(in srgb, var(--primary-color) 24%, transparent);
    color: var(--primary-text-color);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 28%, transparent);
  }

  /* The picker clips overflow, so the ring sits inside the option. */
  .weather-source-option:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: -3px;
  }

  .weather-primary {
    display: inline-flex;
    align-items: baseline;
    justify-content: start;
    gap: 7px;
    white-space: nowrap;
    color: var(--primary-text-color);
    padding-top: 1px;
  }

  /* 44px targets: text sits on the shared baseline at the bottom of each target. */
  .weather-temp,
  .weather-humidity {
    display: inline-flex;
    align-items: flex-end;
    min-width: 44px;
    min-height: 44px;
    box-sizing: border-box;
    margin: 0 -3px;
  }

  .weather-temp {
    font-size: var(--weather-temp-size);
    line-height: 1;
    font-weight: 700;
    padding: 2px 3px;
  }

  .weather-humidity {
    font-size: calc(var(--weather-temp-size) * 0.43);
    line-height: 1;
    font-weight: 700;
    color: var(--secondary-text-color);
    padding: 2px 3px;
  }

  .weather-feels {
    width: fit-content;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-color);
    font-size: 11px;
    line-height: 1.1;
    font-weight: 650;
    /* Vertical padding makes a 44px target around the single line. */
    padding: calc((44px - 1.1em) / 2) 3px;
    margin: 0 -3px;
  }

  .weather-stale {
    justify-self: start;
  }

  .weather-grid {
    position: relative;
    z-index: 4;
    display: grid;
    grid-template-columns: repeat(var(--weather-metric-columns, 2), minmax(0, 1fr));
    gap: 5px;
    min-width: 0;
  }

  .weather-conditions-panel {
    width: 100%;
    min-width: 0;
    display: grid;
    gap: 8px;
    overflow: hidden;
    pointer-events: auto;
    /* The shared chart frame (chartStyles) draws the graph card; inside the tile its
       corners follow the daily forecast panel. */
    --family-chart-radius: calc(var(--tile-border-radius) - 4px);
  }

  .weather-conditions-selected-icon {
    flex: 0 0 auto;
    align-self: center;
    width: var(--weather-conditions-selected-icon-size, 15px);
    height: var(--weather-conditions-selected-icon-size, 15px);
    --mdc-icon-size: var(--weather-conditions-selected-icon-size, 15px);
    color: var(--state-weather-sunny-color, #f6a000);
    transform: scale(var(--weather-conditions-selected-icon-scale, 1));
    transform-origin: 50% 50%;
  }

  /* Condition icons above the temperature graph, placed with the chart's xPercent. */
  .weather-conditions-icons {
    position: relative;
    width: 100%;
    min-width: 0;
    height: var(--weather-conditions-icon-size, 15px);
    box-sizing: border-box;
    color: var(--state-weather-sunny-color, #f6a000);
    pointer-events: none;
  }

  .weather-conditions-icon-slot {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weather-conditions-icon {
    flex: 0 0 auto;
    width: var(--weather-conditions-icon-size, 15px);
    height: var(--weather-conditions-icon-size, 15px);
    --mdc-icon-size: var(--weather-conditions-icon-size, 15px);
    color: inherit;
    transform: scale(var(--weather-conditions-icon-scale, 1));
    transform-origin: 50% 50%;
  }

  .weather-daily-forecast {
    min-width: 0;
    display: grid;
    gap: 1px;
    padding: 6px 8px 7px;
    border-radius: calc(var(--tile-border-radius) - 4px);
    background: rgba(3, 169, 244, 0.08);
    color: var(--secondary-text-color);
    pointer-events: auto;
  }

  .weather-daily-forecast-heading {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    min-height: 18px;
    color: var(--primary-text-color);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 850;
    letter-spacing: 0;
  }

  .weather-daily-row {
    min-width: 0;
    min-height: 30px;
    display: grid;
    grid-template-columns: minmax(58px, 0.9fr) minmax(34px, 0.52fr) minmax(30px, auto) minmax(56px, 1fr) minmax(30px, auto);
    align-items: center;
    gap: 4px;
    border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }

  .weather-daily-forecast-heading + .weather-daily-row {
    border-top: 0;
  }

  .weather-daily-day {
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 1px;
  }

  .weather-daily-day-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  .weather-daily-date {
    color: var(--secondary-text-color);
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
  }

  .weather-daily-day-name,
  .weather-daily-low span,
  .weather-daily-high span {
    color: var(--primary-text-color);
    font-size: 12px;
    line-height: 1;
    font-weight: 800;
  }

  .weather-daily-condition,
  .weather-daily-low,
  .weather-daily-high {
    min-width: 0;
    display: grid;
    justify-items: center;
    gap: 1px;
  }

  .weather-daily-high {
    justify-items: end;
  }

  .weather-daily-condition span,
  .weather-daily-low small,
  .weather-daily-high small {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--secondary-text-color);
    font-size: 7.6px;
    line-height: 1;
    font-weight: 750;
  }

  .weather-daily-icon {
    width: var(--weather-daily-icon-size, 16px);
    height: var(--weather-daily-icon-size, 16px);
    --mdc-icon-size: var(--weather-daily-icon-size, 16px);
    color: var(--state-weather-sunny-color, #f6a000);
  }

  .weather-daily-range {
    position: relative;
    height: 18px;
    min-width: 0;
  }

  .weather-daily-track,
  .weather-daily-segment {
    position: absolute;
    top: 7px;
    height: 4px;
    border-radius: 999px;
  }

  .weather-daily-track {
    inset-inline: 0;
    background: color-mix(in srgb, var(--primary-text-color) 12%, transparent);
  }

  .weather-daily-segment {
    box-shadow: 0 0 8px rgba(255, 211, 74, 0.22);
  }

  .weather-daily-current-dot {
    position: absolute;
    top: 4px;
    width: 9px;
    height: 9px;
    border: 2px solid rgba(255, 255, 255, 0.82);
    border-radius: 50%;
    background: var(--primary-text-color);
    transform: translateX(-50%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.26);
  }

  .weather-metric {
    min-width: 0;
    min-height: 44px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: 5px;
    row-gap: 1px;
    align-items: center;
    padding: 4px 6px;
    border-radius: calc(var(--tile-border-radius) - 4px);
    background: var(--chip-background-color);
    color: var(--secondary-text-color);
  }

  .weather-metric.weather-clickable:hover {
    background: color-mix(in srgb, var(--primary-color) 16%, transparent);
  }

  .weather-metric.active {
    background: rgba(33, 150, 243, 0.28);
    color: var(--primary-text-color);
    box-shadow: inset 0 0 0 1px rgba(56, 199, 243, 0.6), 0 0 10px rgba(56, 199, 243, 0.28);
  }

  .weather-metric.active .weather-metric-icon {
    color: #38c7f3;
  }

  .weather-metric.active .weather-metric-value {
    color: var(--primary-text-color);
  }

  .weather-metric ha-icon,
  .weather-metric .weather-metric-icon {
    grid-row: 1 / span 2;
    width: 22px;
    height: 22px;
    --mdc-icon-size: 22px;
    color: currentColor;
  }

  .weather-metric-label,
  .weather-metric-value {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.05;
  }

  .weather-metric-label {
    font-size: 9px;
    font-weight: 600;
    color: var(--secondary-text-color);
  }

  .weather-metric-value {
    font-size: 11px;
    font-weight: 700;
    color: var(--primary-text-color);
  }

  /* Adjacent 44px chip targets touch without overlapping. The strip stays
   * 5px inside the rounded, clipped tile edge, so no target corner is trimmed;
   * the chip (icon + 2px chip padding) sits centred in its target. */
  .weather-tile-wrap {
    --weather-chip-inset: max(5px, calc(var(--tile-padding) - (44px - var(--chip-icon-size, 14px) - 4px) / 2));
  }

  .weather-chips-bottom-right {
    position: absolute;
    right: var(--weather-chip-inset);
    bottom: var(--weather-chip-inset);
    z-index: var(--chip-z-index);
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: 0;
    flex-wrap: wrap;
    max-width: calc(100% - 16px);
  }

  /* Reserve the strip's row so chip targets never sit over the last metrics
   * or forecast row. */
  .weather-content.weather-content-chips {
    padding-bottom: calc(var(--weather-chip-inset) + 44px);
  }

  .weather-chip-hit {
    display: inline-grid;
    place-items: center;
    min-width: 44px;
    min-height: 44px;
    line-height: 0;
  }

  /* The ring surrounds the visible chip, which keeps it inside the tile clip. */
  .weather-chip-hit.weather-clickable:focus-visible {
    outline: none;
  }

  .weather-chip-hit:focus-visible > .chip {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
  }

`;
