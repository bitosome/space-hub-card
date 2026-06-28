import { css, CSSResultGroup } from 'lit';

export const weatherTileStyles: CSSResultGroup = css`
  .weather-tile-wrap {
    --weather-tile-h: calc(var(--tile-h) * 8.75);
  }

  .weather-tile {
    position: relative;
    width: 100%;
    height: var(--weather-tile-h);
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-default);
    background: var(--ha-card-background, var(--card-background-color));
    overflow: hidden;
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
  }

  .weather-tile::part(button) {
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: var(--tile-border-radius);
  }

  .weather-content {
    position: absolute;
    inset: 10px 12px 9px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    overflow-x: hidden;
    overflow-y: hidden;
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
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto auto;
    gap: 10px;
    align-items: start;
    min-width: 0;
  }

  .weather-icon-wrap {
    display: grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: rgba(3, 169, 244, 0.14);
    color: var(--state-weather-sunny-color, #f6a000);
    margin-top: -2px;
  }

  .weather-icon {
    width: 42px;
    height: 42px;
    --mdc-icon-size: 42px;
    color: inherit;
    transform-origin: 50% 50%;
  }

  .weather-icon.animated.weather-condition-sunny,
  .weather-forecast-icon.animated.weather-condition-sunny {
    animation: weatherSunSpin 12s linear infinite;
  }

  .weather-icon.animated.weather-condition-clear-night,
  .weather-forecast-icon.animated.weather-condition-clear-night {
    animation: weatherNightPulse 3.6s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-cloudy,
  .weather-icon.animated.weather-condition-partlycloudy,
  .weather-forecast-icon.animated.weather-condition-cloudy,
  .weather-forecast-icon.animated.weather-condition-partlycloudy {
    animation: weatherCloudDrift 4.8s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-rainy,
  .weather-icon.animated.weather-condition-pouring,
  .weather-icon.animated.weather-condition-lightning-rainy,
  .weather-forecast-icon.animated.weather-condition-rainy,
  .weather-forecast-icon.animated.weather-condition-pouring,
  .weather-forecast-icon.animated.weather-condition-lightning-rainy {
    animation: weatherRainPulse 1.9s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-lightning,
  .weather-forecast-icon.animated.weather-condition-lightning {
    animation: weatherStormFlash 2.4s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-snowy,
  .weather-icon.animated.weather-condition-snowy-rainy,
  .weather-forecast-icon.animated.weather-condition-snowy,
  .weather-forecast-icon.animated.weather-condition-snowy-rainy {
    animation: weatherSnowFloat 3.4s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-windy,
  .weather-icon.animated.weather-condition-windy-variant,
  .weather-forecast-icon.animated.weather-condition-windy,
  .weather-forecast-icon.animated.weather-condition-windy-variant {
    animation: weatherWindFloat 1.8s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-fog,
  .weather-forecast-icon.animated.weather-condition-fog {
    animation: weatherFogFade 4s ease-in-out infinite;
  }

  .weather-heading {
    min-width: 0;
    display: grid;
    gap: 4px;
    padding: 3px 4px;
    margin: -3px -4px;
  }

  .weather-headline-row {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 6px;
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
    gap: 6px;
    white-space: nowrap;
    color: var(--primary-text-color);
    padding-top: 2px;
  }

  .weather-temp {
    font-size: 25px;
    line-height: 1;
    font-weight: 700;
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-humidity {
    font-size: 13px;
    line-height: 1;
    font-weight: 700;
    color: var(--secondary-text-color);
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-secondary {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3px 7px;
    min-width: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    color: var(--secondary-text-color);
    font-size: 10px;
    line-height: 1.08;
    font-weight: 600;
    white-space: normal;
    padding: 0;
  }

  .weather-secondary span {
    flex: 0 1 auto;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 3px;
    margin: 0;
  }

  .weather-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
    height: 158px;
  }

  .weather-conditions-rain {
    height: 118px;
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
    max-width: 112px;
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
    width: 100%;
    min-width: 0;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    padding: 0 6px;
    box-sizing: border-box;
    color: var(--state-weather-sunny-color, #f6a000);
    overflow: hidden;
  }

  .weather-conditions-icon {
    flex: 0 0 auto;
    width: 15px;
    height: 15px;
    --mdc-icon-size: 15px;
    color: inherit;
    transform-origin: 50% 50%;
  }

  .weather-conditions-chart {
    width: 100%;
    min-width: 0;
    display: block;
    cursor: crosshair;
    touch-action: none;
    overflow: hidden;
  }

  .weather-conditions-temp .weather-conditions-chart {
    height: 104px;
  }

  .weather-conditions-rain .weather-conditions-chart {
    height: 76px;
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

  .weather-conditions-dot {
    fill: var(--primary-text-color);
    stroke: rgba(0, 0, 0, 0.48);
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-dot-ring {
    fill: transparent;
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
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
    grid-template-columns: minmax(54px, 0.7fr) 38px 40px minmax(92px, 1fr) 40px;
    align-items: center;
    gap: 6px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .weather-daily-day,
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
    font-size: 8px;
    line-height: 1;
    font-weight: 750;
  }

  .weather-daily-icon {
    width: 16px;
    height: 16px;
    --mdc-icon-size: 16px;
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
    background: rgba(33, 150, 243, 0.18);
    color: var(--primary-text-color);
  }

  .weather-metric ha-icon {
    grid-row: 1 / span 2;
    width: 16px;
    height: 16px;
    --mdc-icon-size: 16px;
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

  @keyframes weatherSunSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes weatherNightPulse {
    0%, 100% { transform: scale(1); opacity: 0.88; }
    50% { transform: scale(1.08); opacity: 1; }
  }

  @keyframes weatherCloudDrift {
    0%, 100% { transform: translateX(-1px); }
    50% { transform: translateX(2px); }
  }

  @keyframes weatherRainPulse {
    0%, 100% { transform: translateY(-1px); opacity: 0.88; }
    50% { transform: translateY(2px); opacity: 1; }
  }

  @keyframes weatherStormFlash {
    0%, 72%, 100% { opacity: 0.88; transform: scale(1); }
    76%, 84% { opacity: 1; transform: scale(1.12); }
  }

  @keyframes weatherSnowFloat {
    0%, 100% { transform: translateY(-1px) rotate(-3deg); }
    50% { transform: translateY(2px) rotate(3deg); }
  }

  @keyframes weatherWindFloat {
    0%, 100% { transform: translateX(-2px); }
    50% { transform: translateX(3px); }
  }

  @keyframes weatherFogFade {
    0%, 100% { opacity: 0.65; transform: translateX(-1px); }
    50% { opacity: 1; transform: translateX(2px); }
  }
`;
