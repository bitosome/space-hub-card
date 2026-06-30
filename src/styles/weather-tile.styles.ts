import { css, CSSResultGroup } from 'lit';

export const weatherTileStyles: CSSResultGroup = css`
  .weather-tile-wrap {
    height: auto;
    align-self: start;
    --weather-temp-size: 31px;
    --weather-icon-size: 42px;
    --weather-icon-bg-size: 58px;
    --weather-graph-height: 118px;
  }

  .weather-tile {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-default);
    background: var(--ha-card-background, var(--card-background-color));
    backdrop-filter: blur(10px);
    overflow: hidden;
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
    --ha-ripple-color: transparent;
    --control-button-border-radius: var(--tile-border-radius);
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
  }

  .weather-tile:hover,
  .weather-tile::part(button):hover {
    background: var(--ha-card-background, var(--card-background-color));
    transform: none;
    filter: none;
  }

  .weather-tile.weather-tile-stale {
    box-shadow: var(--tile-shadow-default), 0 0 22px 4px rgba(244, 67, 54, 0.55);
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
    background: rgba(3, 169, 244, 0.12);
  }

  .weather-clickable:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color, #03a9f4);
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
  .weather-daily-icon,
  .weather-metric-icon {
    display: block;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }

  .weather-icon > svg,
  .weather-conditions-icon > svg,
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
    display: grid;
    gap: 3px;
    padding: 3px 4px;
    margin: -3px -4px;
  }

  .weather-headline-row {
    justify-self: start;
    min-width: 0;
    width: fit-content;
    max-width: calc(100% - var(--weather-icon-bg-size) - 8px);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-name {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.15;
    color: var(--primary-text-color);
  }

  .weather-source-badge {
    flex: 0 0 auto;
    display: inline-block;
    width: 7px;
    height: 7px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.38);
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    box-shadow: 0 0 0 3px rgba(3, 169, 244, 0.14);
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

  .weather-primary {
    display: inline-flex;
    align-items: baseline;
    justify-content: start;
    gap: 7px;
    white-space: nowrap;
    color: var(--primary-text-color);
    padding-top: 1px;
  }

  .weather-temp {
    font-size: var(--weather-temp-size);
    line-height: 1;
    font-weight: 700;
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-humidity {
    font-size: calc(var(--weather-temp-size) * 0.43);
    line-height: 1;
    font-weight: 700;
    color: var(--secondary-text-color);
    padding: 2px 3px;
    margin: -2px -3px;
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
    padding: 1px 3px;
    margin: -1px -3px 0;
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
  }

  .weather-conditions-card {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    display: grid;
    align-content: start;
    gap: 5px;
    padding: 7px 8px 6px;
    border-radius: calc(var(--tile-border-radius) - 4px);
    background: linear-gradient(180deg, rgba(3, 169, 244, 0.13), rgba(3, 169, 244, 0.055));
    color: var(--secondary-text-color);
    overflow: hidden;
    touch-action: pan-y;
  }

  .weather-conditions-temp {
    min-height: calc(var(--weather-graph-height) + 54px);
  }

  .weather-conditions-rain {
    min-height: calc(var(--weather-graph-height) + 50px);
  }

  .weather-conditions-head {
    min-width: 0;
    min-height: 18px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 8px;
  }

  .weather-conditions-title,
  .weather-conditions-selected,
  .weather-conditions-subtitle {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .weather-conditions-title {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--primary-text-color);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 850;
  }

  .weather-conditions-selected {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: baseline;
    justify-content: end;
    gap: 5px;
    max-width: min(58%, 172px);
    color: var(--secondary-text-color);
    font-size: 9px;
    line-height: 1;
    font-weight: 750;
  }

  .weather-conditions-selected strong {
    color: var(--primary-text-color);
    font-size: 14px;
    line-height: 1;
    font-weight: 850;
  }

  .weather-conditions-subtitle {
    margin-top: -2px;
    font-size: 10px;
    line-height: 1.1;
    font-weight: 700;
    color: var(--secondary-text-color);
  }

  .weather-conditions-icons {
    position: relative;
    width: 100%;
    min-width: 0;
    height: var(--weather-conditions-icon-size, 15px);
    box-sizing: border-box;
    color: var(--state-weather-sunny-color, #f6a000);
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
    transform-origin: 50% 50%;
  }

  .weather-conditions-chart-frame {
    position: relative;
    width: 100%;
    min-width: 0;
    height: var(--weather-graph-height);
    overflow: visible;
  }

  .weather-conditions-chart {
    width: 100%;
    height: 100%;
    min-width: 0;
    display: block;
    cursor: pointer;
    touch-action: none;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
  }

  .weather-conditions-chart text {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .weather-conditions-temp .weather-conditions-chart {
    height: 100%;
  }

  .weather-conditions-rain .weather-conditions-chart {
    height: 100%;
  }

  .weather-conditions-grid-line,
  .weather-conditions-time-line {
    stroke: rgba(255, 255, 255, 0.13);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-time-line {
    stroke-dasharray: 3 3;
  }

  .weather-conditions-area,
  .weather-conditions-rain-area {
    opacity: 0.96;
  }

  .weather-conditions-line-shadow {
    fill: none;
    stroke: rgba(0, 0, 0, 0.24);
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-temp-line,
  .weather-conditions-rain-line {
    fill: none;
    stroke-width: 4.3;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-rain-line {
    stroke: #38c7f3;
  }

  .weather-conditions-selected-line {
    stroke: rgba(255, 255, 255, 0.36);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-selected-dot {
    position: absolute;
    z-index: 3;
    width: 15px;
    height: 15px;
    min-width: 15px;
    min-height: 15px;
    box-sizing: border-box;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(255, 255, 255, 0.54);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.28);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.18);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .weather-conditions-selected-dot::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: var(--primary-text-color);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  }

  .weather-conditions-axis,
  .weather-conditions-time-label,
  .weather-conditions-extreme {
    fill: var(--secondary-text-color);
    font-size: 9px;
    font-weight: 750;
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
  }

  .weather-conditions-axis {
    text-anchor: end;
  }

  .weather-conditions-time-label {
    font-size: 7.6px;
  }

  .weather-conditions-time-label-start {
    text-anchor: start;
  }

  .weather-conditions-time-label-end {
    text-anchor: end;
  }

  .weather-conditions-extreme {
    fill: var(--primary-text-color);
    font-size: 11px;
    font-weight: 850;
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
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    height: 17px;
    color: var(--secondary-text-color);
    font-size: 10px;
    line-height: 1;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .weather-daily-forecast-heading ha-icon {
    width: 13px;
    height: 13px;
    --mdc-icon-size: 13px;
  }

  .weather-daily-row {
    min-width: 0;
    min-height: 30px;
    display: grid;
    grid-template-columns: 88px 52px 40px minmax(84px, 1fr) 40px;
    align-items: center;
    gap: 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
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
    background: rgba(255, 255, 255, 0.12);
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
    min-height: 29px;
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
    background: rgba(3, 169, 244, 0.16);
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
    color: #d6f3ff;
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

  .weather-chips-bottom-right {
    position: absolute;
    right: var(--tile-padding);
    bottom: var(--tile-padding);
    z-index: var(--chip-z-index);
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: var(--chip-gap);
    flex-wrap: wrap;
    max-width: calc(100% - 16px);
  }

  .weather-chip-hit {
    display: inline-flex;
    line-height: 0;
    padding: 2px;
    margin: -2px;
  }

`;
