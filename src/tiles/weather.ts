/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, svg, TemplateResult } from 'lit';
import { renderInteractiveChip } from '../chips';
import { METEOCON_ICONS } from '../assets/meteocons';
import type { MeteoconIconKey } from '../assets/meteocons';

interface WeatherTileConfig {
  entity?: string;
  name?: string;
  icon?: string;
  height?: number;
  temp_size?: number;
  temperature_size?: number;
  icon_size?: number;
  graph_height?: number;
  animated_icons?: boolean;
  show_forecast?: boolean;
  forecast_type?: string;
  forecast_slots?: number;
  forecast_fields?: string[] | string;
  time_format?: string;
  forecast_graph_key?: string;
  forecast?: unknown[];
  daily_forecast?: unknown[];
  temp_sensor?: string;
  temp_min_24h_sensor?: string;
  temp_max_24h_sensor?: string;
  humidity_sensor?: string;
  feels_like_sensor?: string;
  dewpoint_sensor?: string;
  wind_speed_sensor?: string;
  wind_gust_sensor?: string;
  wind_direction_sensor?: string;
  rain_state_sensor?: string;
  rain_today_sensor?: string;
  rain_rate_sensor?: string;
  rain_rate_threshold?: number;
  stale_minutes?: number;
  sync_graphs?: boolean;
  uv_sensor?: string;
  solar_lux_sensor?: string;
  pressure_sensor?: string;
  metrics?: Array<{ entity?: string; name?: string; icon?: string }>;
  chips?: unknown[];
  double_tap_action?: unknown;
}

interface MetricConfig {
  icon?: MeteoconIconKey;
  mdi?: string;
  stateEntity?: string;
  label: string;
  value: string;
  entity?: string;
  active?: boolean;
}

interface ForecastItem {
  condition?: string;
  datetime?: string;
  temperature?: number | string;
  precipitation_probability?: number | string;
  precipitation?: number | string;
  humidity?: number | string;
  wind_speed?: number | string;
  wind_gust_speed?: number | string;
  uv_index?: number | string;
  cloud_coverage?: number | string;
  templow?: number | string;
}

type ForecastFieldKey =
  | 'temperature'
  | 'precipitation_probability'
  | 'precipitation'
  | 'humidity'
  | 'wind_speed'
  | 'wind_gust_speed'
  | 'uv_index'
  | 'cloud_coverage';

interface ForecastGraphPoint {
  item: ForecastItem;
  value: number;
  x: number;
  y: number;
  index: number;
}

interface DayTemperatureStats {
  low?: ForecastGraphPoint;
  high?: ForecastGraphPoint;
}

interface ConditionsChartBox {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const BAD_STATES = new Set(['', 'unknown', 'unavailable']);
const DEFAULT_FORECAST_FIELDS: ForecastFieldKey[] = ['temperature', 'precipitation_probability'];
const FORECAST_FIELD_ALIASES: Record<string, ForecastFieldKey> = {
  temp: 'temperature',
  temperature: 'temperature',
  rain_chance: 'precipitation_probability',
  precipitation_probability: 'precipitation_probability',
  precip_probability: 'precipitation_probability',
  probability: 'precipitation_probability',
  pop: 'precipitation_probability',
  rain: 'precipitation',
  precipitation: 'precipitation',
  humidity: 'humidity',
  hum: 'humidity',
  wind: 'wind_speed',
  wind_speed: 'wind_speed',
  gust: 'wind_gust_speed',
  wind_gust: 'wind_gust_speed',
  wind_gust_speed: 'wind_gust_speed',
  uv: 'uv_index',
  uv_index: 'uv_index',
  cloud: 'cloud_coverage',
  clouds: 'cloud_coverage',
  cloud_coverage: 'cloud_coverage',
};

const CONDITION_METEOCONS: Record<string, MeteoconIconKey> = {
  'clear-night': 'clear-night',
  cloudy: 'cloudy',
  exceptional: 'weather-alarm',
  fog: 'fog',
  hail: 'hail',
  lightning: 'thunderstorms',
  'lightning-rainy': 'thunderstorms-rain',
  partlycloudy: 'partly-cloudy-day',
  pouring: 'rain',
  rainy: 'rain',
  snowy: 'snow',
  'snowy-rainy': 'sleet',
  sunny: 'clear-day',
  windy: 'wind',
  'windy-variant': 'wind-alert',
};

function temperatureColor(value: number): string {
  if (value <= 0) return '#3aa7ff';
  if (value <= 8) return '#50c5d8';
  if (value <= 15) return '#9bd57b';
  if (value <= 22) return '#ffd34a';
  if (value <= 28) return '#ff9d24';
  return '#ff5d38';
}

function stateObj(host: any, entityId?: string): any | undefined {
  if (!entityId || !host?.hass) return undefined;
  return host.hass.states?.[entityId];
}

function isWeatherStale(host: any, config: WeatherTileConfig): boolean {
  const minutes = Number(config.stale_minutes);
  if (!Number.isFinite(minutes) || minutes <= 0) return false;
  const ids = [config.entity, config.temp_sensor, config.humidity_sensor, config.feels_like_sensor].filter(Boolean);
  let newest = 0;
  ids.forEach((id) => {
    const st = stateObj(host, id);
    const t = st?.last_updated ? Date.parse(st.last_updated) : NaN;
    if (Number.isFinite(t)) newest = Math.max(newest, t);
  });
  if (!newest) return false;
  return Date.now() - newest > minutes * 60000;
}

function cleanState(st: any | undefined): string {
  const value = st?.state === undefined || st?.state === null ? '' : String(st.state);
  return BAD_STATES.has(value.toLowerCase()) ? '' : value;
}

function numericState(host: any, entityId?: string): number | undefined {
  const state = cleanState(stateObj(host, entityId));
  if (!state) return undefined;
  const value = Number(state);
  return Number.isFinite(value) ? value : undefined;
}

function formatNumber(value: string | number | undefined, digits: number, compact = false): string {
  if (value === undefined || value === null || value === '') return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return String(value);
  if (compact && Math.abs(n) >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toFixed(digits);
}

function formatEntity(host: any, entityId: string | undefined, digits: number, compact = false): string {
  const st = stateObj(host, entityId);
  const value = cleanState(st);
  if (!value) return '—';
  const unit = st?.attributes?.unit_of_measurement || '';
  const formatted = formatNumber(value, digits, compact);
  return unit ? `${formatted} ${unit}` : formatted;
}

function formatEntityAuto(host: any, entityId: string | undefined): string {
  const st = stateObj(host, entityId);
  const value = cleanState(st);
  if (!value) return '—';
  const unit = st?.attributes?.unit_of_measurement || '';
  const num = Number(value);
  if (!Number.isFinite(num)) return unit ? `${value} ${unit}` : value;
  const digits = Number.isInteger(num) ? 0 : 1;
  const formatted = formatNumber(num, digits);
  return unit ? `${formatted} ${unit}` : formatted;
}

function formatTemperature(host: any, entityId?: string): string {
  const value = numericState(host, entityId);
  return value === undefined ? '—°' : `${value.toFixed(1)}°`;
}

function formatHumidity(host: any, entityId?: string): string {
  const value = numericState(host, entityId);
  return value === undefined ? '—%' : `${value.toFixed(0)}%`;
}

function configNumber(raw: unknown, min: number, max: number): number | undefined {
  const value = Number(raw);
  if (!Number.isFinite(value) || value <= 0) return undefined;
  return Math.max(min, Math.min(max, value));
}

function windDirectionLabel(host: any, entityId?: string): string {
  const degrees = numericState(host, entityId);
  if (degrees === undefined) return '';
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round((((degrees % 360) + 360) % 360) / 22.5) % directions.length;
  return directions[index];
}

function formatWind(host: any, speedEntity?: string, directionEntity?: string): string {
  const wind = formatEntity(host, speedEntity, 1);
  const direction = windDirectionLabel(host, directionEntity);
  if (wind === '—') return direction || '—';
  return direction ? `${wind} ${direction}` : wind;
}

function conditionLabel(rawState: string): string {
  if (!rawState) return 'Weather';
  const mapped: Record<string, string> = {
    'clear-night': 'Clear night',
    partlycloudy: 'Partly cloudy',
    'lightning-rainy': 'Storm rain',
    'snowy-rainy': 'Sleet',
    'windy-variant': 'Windy',
  };
  if (mapped[rawState]) return mapped[rawState];
  return rawState
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function conditionClass(rawState: string): string {
  return (rawState || 'unknown').replace(/[^a-z0-9_-]/gi, '-').toLowerCase();
}

function isRainActive(host: any, config: WeatherTileConfig): boolean {
  const threshold = Number.isFinite(Number(config.rain_rate_threshold)) ? Number(config.rain_rate_threshold) : 0;
  const rainRate = numericState(host, config.rain_rate_sensor);
  // Active precipitation requires a measurable rate above the threshold.
  if (rainRate !== undefined) return rainRate > threshold;
  // Fall back to a binary rain state only when there is no rate sensor.
  const rainState = cleanState(stateObj(host, config.rain_state_sensor)).toLowerCase();
  return rainState === 'on';
}

function precipitationKind(host: any, config: WeatherTileConfig): 'snow' | 'rain' {
  const condition = cleanState(stateObj(host, config.entity)).toLowerCase();
  return condition.includes('snow') || condition.includes('hail') ? 'snow' : 'rain';
}

function rainStateLabel(host: any, config: WeatherTileConfig): string {
  const active = isRainActive(host, config);
  if (!config.rain_state_sensor && !config.rain_rate_sensor) return '';
  const kind = precipitationKind(host, config);
  if (!active) return kind === 'snow' ? 'No snow' : 'No rain';
  const rate = formatEntity(host, config.rain_rate_sensor, 1);
  const verb = kind === 'snow' ? 'Snowing' : 'Raining';
  return rate === '—' || rate === '0.0 mm/h' ? verb : `${verb} ${rate}`;
}

function metric(icon: MeteoconIconKey, label: string, value: string, entity?: string, active = false): MetricConfig | undefined {
  if (!entity && value === '—') return undefined;
  return { icon, label, value, entity, active };
}

function conditionMeteocon(rawState: string): MeteoconIconKey {
  return CONDITION_METEOCONS[rawState] || 'partly-cloudy-day';
}

function renderMeteoconIcon(icon: MeteoconIconKey, className: string, label: string): TemplateResult {
  return html`
    <img
      class=${className}
      src=${METEOCON_ICONS[icon]}
      alt=${label}
      draggable="false"
    />
  `;
}

function buildMetrics(host: any, config: WeatherTileConfig): MetricConfig[] {
  if (Array.isArray(config.metrics) && config.metrics.length) {
    return config.metrics
      .filter((m) => m && m.entity)
      .map((m) => {
        const st = stateObj(host, m.entity);
        const label = m.name || st?.attributes?.friendly_name || m.entity || '';
        return {
          label,
          value: formatEntityAuto(host, m.entity),
          entity: m.entity,
          mdi: m.icon || undefined,
          stateEntity: m.entity,
        } as MetricConfig;
      });
  }
  const raining = isRainActive(host, config);
  const kind = precipitationKind(host, config);
  const rainEntity = config.rain_state_sensor || config.rain_rate_sensor || config.rain_today_sensor;
  const rainValue = rainStateLabel(host, config) || formatEntity(host, config.rain_today_sensor, 1);
  const rainLabel = kind === 'snow' ? 'Snow' : 'Rain';
  const rainIcon: MeteoconIconKey = raining ? (kind === 'snow' ? 'snow' : 'rain') : 'raindrop';

  return [
    metric('wind', 'Wind', formatWind(host, config.wind_speed_sensor, config.wind_direction_sensor), config.wind_speed_sensor),
    metric('wind-alert', 'Gust', formatEntity(host, config.wind_gust_sensor, 1), config.wind_gust_sensor),
    metric('thermometer-colder', '24h Min', formatTemperature(host, config.temp_min_24h_sensor), config.temp_min_24h_sensor),
    metric('thermometer-warmer', '24h Max', formatTemperature(host, config.temp_max_24h_sensor), config.temp_max_24h_sensor),
    metric(rainIcon, rainLabel, rainValue, rainEntity, raining),
    metric('uv-index', 'UV', formatEntity(host, config.uv_sensor, 0), config.uv_sensor),
    metric('sun-hot', 'Solar', formatEntity(host, config.solar_lux_sensor, 0), config.solar_lux_sensor),
    metric('barometer', 'Pressure', formatEntity(host, config.pressure_sensor, 0), config.pressure_sensor),
  ].filter((item): item is MetricConfig => !!item);
}

function normalizeForecast(forecast: unknown): ForecastItem[] {
  if (!Array.isArray(forecast)) return [];
  return forecast
    .filter((item): item is Record<string, unknown> => !!item && typeof item === 'object')
    .map((item) => ({
      condition: typeof item.condition === 'string' ? item.condition : undefined,
      datetime: typeof item.datetime === 'string' ? item.datetime : undefined,
      temperature: item.temperature as number | string | undefined,
      precipitation_probability: item.precipitation_probability as number | string | undefined,
      precipitation: item.precipitation as number | string | undefined,
      humidity: item.humidity as number | string | undefined,
      wind_speed: item.wind_speed as number | string | undefined,
      wind_gust_speed: item.wind_gust_speed as number | string | undefined,
      uv_index: item.uv_index as number | string | undefined,
      cloud_coverage: item.cloud_coverage as number | string | undefined,
      templow: item.templow as number | string | undefined,
    }));
}

function normalizeTimeFormat(raw: unknown): '12h' | '24h' | undefined {
  const value = String(raw || '').trim().toLowerCase().replace(/[-_\s]/g, '');
  if (['12', '12h', '12hour', '12hours', 'ampm'].includes(value)) return '12h';
  if (['24', '24h', '24hour', '24hours'].includes(value)) return '24h';
  return undefined;
}

function forecastTime(item: ForecastItem, timeFormat?: unknown): string {
  if (!item.datetime) return '';
  const date = new Date(item.datetime);
  if (Number.isNaN(date.getTime())) return '';
  const normalized = normalizeTimeFormat(timeFormat);
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  if (normalized) options.hour12 = normalized === '12h';
  return new Intl.DateTimeFormat(undefined, options).format(date);
}

function forecastTemp(item: ForecastItem): string {
  return `${formatNumber(item.temperature, 0)}°`;
}

function normalizeForecastFields(raw: string[] | string | undefined): ForecastFieldKey[] {
  const values = Array.isArray(raw)
    ? raw
    : (typeof raw === 'string' ? raw.split(',') : DEFAULT_FORECAST_FIELDS);
  const normalized: ForecastFieldKey[] = [];
  values.forEach((value) => {
    const key = FORECAST_FIELD_ALIASES[String(value || '').trim().toLowerCase().replace(/[-\s]/g, '_')];
    if (key && !normalized.includes(key)) normalized.push(key);
  });
  return normalized.length ? normalized : DEFAULT_FORECAST_FIELDS;
}

function forecastGraphValue(item: ForecastItem, field: ForecastFieldKey): number | undefined {
  const value = Number(item[field]);
  return Number.isFinite(value) ? value : undefined;
}

function conditionsScale(field: ForecastFieldKey, values: number[]): { min: number; max: number } {
  if (field === 'precipitation_probability') return { min: 0, max: 100 };
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (field === 'temperature') {
    min = Math.floor((min - 2) / 5) * 5;
    max = Math.ceil((max + 2) / 5) * 5;
  } else {
    const padding = Math.max((max - min) * 0.18, 1);
    min = Math.max(0, min - padding);
    max += padding;
  }
  if (max <= min) max = min + 1;
  return { min, max };
}

function buildConditionsPoints(items: ForecastItem[], field: ForecastFieldKey, box: ConditionsChartBox): { points: ForecastGraphPoint[]; min: number; max: number } {
  const raw = items
    .map((item, index) => ({ item, index, value: forecastGraphValue(item, field) }))
    .filter((point): point is { item: ForecastItem; index: number; value: number } => point.value !== undefined);
  if (!raw.length) return { points: [], min: 0, max: 1 };
  const values = raw.map((point) => point.value);
  const { min, max } = conditionsScale(field, values);
  const chartWidth = box.width - box.left - box.right;
  const chartHeight = box.height - box.top - box.bottom;
  const points = raw.map((point, pointIndex) => {
    const x = raw.length === 1 ? box.left + chartWidth / 2 : box.left + (pointIndex / (raw.length - 1)) * chartWidth;
    const y = box.top + ((max - point.value) / (max - min)) * chartHeight;
    return { ...point, x, y };
  });
  return { points, min, max };
}

function conditionsTickIndexes(length: number): number[] {
  if (length <= 0) return [];
  return Array.from(new Set([
    0,
    Math.floor((length - 1) / 3),
    Math.floor(((length - 1) * 2) / 3),
    length - 1,
  ])).filter((index) => index >= 0 && index < length);
}

function conditionsIconPoints(points: ForecastGraphPoint[]): ForecastGraphPoint[] {
  if (points.length <= 7) return points;
  const step = Math.max(1, Math.ceil(points.length / 7));
  return points.filter((_, index) => index % step === 0).slice(0, 7);
}

function safeIdPart(value: string): string {
  return value.replace(/[^a-z0-9_-]/gi, '-').toLowerCase();
}

function smoothPath(points: ForecastGraphPoint[]): string {
  if (!points.length) return '';
  if (points.length === 1) return `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const previous = points[index - 1] || current;
    const after = points[index + 2] || next;
    const cp1x = current.x + (next.x - previous.x) / 6;
    const cp1y = current.y + (next.y - previous.y) / 6;
    const cp2x = next.x - (after.x - current.x) / 6;
    const cp2y = next.y - (after.y - current.y) / 6;
    path += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${next.x.toFixed(2)} ${next.y.toFixed(2)}`;
  }
  return path;
}

function areaPath(points: ForecastGraphPoint[], baseline: number): string {
  if (!points.length) return '';
  const first = points[0];
  const last = points[points.length - 1];
  return `${smoothPath(points)} L ${last.x.toFixed(2)} ${baseline.toFixed(2)} L ${first.x.toFixed(2)} ${baseline.toFixed(2)} Z`;
}

function dayKey(value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function dayLabel(value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const today = dayKey(new Date().toISOString());
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const key = dayKey(value);
  if (key === today) return 'Today';
  if (key === dayKey(tomorrowDate.toISOString())) return 'Tomorrow';
  return new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(date);
}

function dateLabel(value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' }).format(date);
}

function hourlyTemperatureStats(items: ForecastItem[]): Map<string, DayTemperatureStats> {
  const stats = new Map<string, DayTemperatureStats>();
  items.forEach((item, index) => {
    const key = dayKey(item.datetime);
    const value = forecastGraphValue(item, 'temperature');
    if (!key || value === undefined) return;
    const point: ForecastGraphPoint = { item, value, x: 0, y: 0, index };
    const existing = stats.get(key) || {};
    if (!existing.low || value < existing.low.value) existing.low = point;
    if (!existing.high || value > existing.high.value) existing.high = point;
    stats.set(key, existing);
  });
  return stats;
}

function dailyTemperatureValue(item: ForecastItem, key: 'temperature' | 'templow'): number | undefined {
  const value = Number(item[key]);
  return Number.isFinite(value) ? value : undefined;
}

function dailyTemperatureRange(dailyItems: ForecastItem[], hourlyItems: ForecastItem[]): { min: number; max: number } {
  const values: number[] = [];
  dailyItems.forEach((item) => {
    const low = dailyTemperatureValue(item, 'templow');
    const high = dailyTemperatureValue(item, 'temperature');
    if (low !== undefined) values.push(low);
    if (high !== undefined) values.push(high);
  });
  hourlyItems.forEach((item) => {
    const value = forecastGraphValue(item, 'temperature');
    if (value !== undefined) values.push(value);
  });
  if (!values.length) return { min: 0, max: 1 };
  let min = Math.floor((Math.min(...values) - 2) / 5) * 5;
  let max = Math.ceil((Math.max(...values) + 2) / 5) * 5;
  if (max <= min) max = min + 1;
  return { min, max };
}

function rangePercent(value: number, min: number, max: number): number {
  return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
}

function currentTemperatureValue(host: any, config: WeatherTileConfig): number | undefined {
  return numericState(host, config.temp_sensor);
}

function conditionsGraphHeight(config: WeatherTileConfig): number {
  return configNumber(config.graph_height, 82, 260) || 118;
}

function renderDailyForecast(host: any, config: WeatherTileConfig, dailyItems: ForecastItem[], hourlyItems: ForecastItem[]): TemplateResult | typeof nothing {
  const rows = dailyItems.slice(0, 7);
  if (!rows.length) return nothing;
  const hourlyStats = hourlyTemperatureStats(hourlyItems);
  const { min, max } = dailyTemperatureRange(rows, hourlyItems);
  const today = dayKey(new Date().toISOString());
  const currentTemp = currentTemperatureValue(host, config);

  return html`
    <section class="weather-daily-forecast">
      <div class="weather-daily-forecast-heading">
        <ha-icon icon="mdi:calendar-range-outline"></ha-icon>
        <span>Daily Forecast</span>
        <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
      </div>
      ${rows.map((item) => {
        const key = dayKey(item.datetime);
        const stats = hourlyStats.get(key);
        const low = dailyTemperatureValue(item, 'templow') ?? stats?.low?.value;
        const high = dailyTemperatureValue(item, 'temperature') ?? stats?.high?.value;
        if (low === undefined || high === undefined) return nothing;
        const left = rangePercent(low, min, max);
        const right = rangePercent(high, min, max);
        const width = Math.max(4, right - left);
        const condition = String(item.condition || '');
        const rainProbability = Number(item.precipitation_probability);
        const rainProbabilityLabel = Number.isFinite(rainProbability) ? `Rain ${Math.round(rainProbability)}%` : '';
        const currentLeft = key === today && currentTemp !== undefined ? rangePercent(currentTemp, min, max) : undefined;
        return html`
          <div class="weather-daily-row">
            <div class="weather-daily-day">
              <span class="weather-daily-day-name">${dayLabel(item.datetime)}</span>
              <span class="weather-daily-date">${dateLabel(item.datetime)}</span>
            </div>
            <div class="weather-daily-condition">
              ${renderMeteoconIcon(
                conditionMeteocon(condition),
                `weather-daily-icon weather-condition-${conditionClass(condition)}`,
                conditionLabel(condition),
              )}
              ${rainProbabilityLabel ? html`<span title="Chance of precipitation">${rainProbabilityLabel}</span>` : nothing}
            </div>
            <div class="weather-daily-low">
              <span>${low.toFixed(0)}°</span>
              ${stats?.low ? html`<small>${forecastTime(stats.low.item, config.time_format)}</small>` : nothing}
            </div>
            <div class="weather-daily-range">
              <div class="weather-daily-track"></div>
              <div
                class="weather-daily-segment"
                style=${`left:${left.toFixed(1)}%;width:${width.toFixed(1)}%;background:linear-gradient(90deg, ${temperatureColor(low)}, ${temperatureColor(high)});`}
              ></div>
              ${currentLeft !== undefined ? html`
                <span class="weather-daily-current-dot" style=${`left:${currentLeft.toFixed(1)}%;`}></span>
              ` : nothing}
            </div>
            <div class="weather-daily-high">
              <span>${high.toFixed(0)}°</span>
              ${stats?.high ? html`<small>${forecastTime(stats.high.item, config.time_format)}</small>` : nothing}
            </div>
          </div>
        `;
      })}
    </section>
  `;
}

function forecastSummary(items: ForecastItem[], timeFormat?: unknown): string {
  if (!items.length) return '';
  const next = items[0];
  const upcoming = items.slice(0, 12);
  const wettest = upcoming.reduce((best, item) => {
    const bestProbability = Number(best.precipitation_probability) || 0;
    const itemProbability = Number(item.precipitation_probability) || 0;
    const bestPrecipitation = Number(best.precipitation) || 0;
    const itemPrecipitation = Number(item.precipitation) || 0;
    if (itemPrecipitation > bestPrecipitation) return item;
    if (itemPrecipitation === bestPrecipitation && itemProbability > bestProbability) return item;
    return best;
  }, next);
  const rainProbability = Number(wettest.precipitation_probability) || 0;
  const rainAmount = Number(wettest.precipitation) || 0;
  if (rainProbability >= 25 || rainAmount > 0) {
    const isImminent = wettest === next;
    const time = forecastTime(wettest, timeFormat);
    let intensity: string;
    if (rainProbability >= 80 || rainAmount >= 2) intensity = 'Rain likely';
    else if (rainProbability >= 50 || rainAmount >= 0.5) intensity = 'Showers possible';
    else intensity = 'Slight chance of rain';
    const when = isImminent ? 'shortly' : time ? `around ${time}` : '';
    const detail = rainProbability > 0 ? `${Math.round(rainProbability)}% chance` : `${rainAmount.toFixed(1)} mm`;
    const phrase = when ? `${intensity} ${when}` : intensity;
    return `${phrase} (${detail})`;
  }
  return `${conditionLabel(String(next.condition || ''))}, ${forecastTemp(next)}`;
}

function stopTileAction(ev: Event): void {
  ev.stopPropagation();
}

function openMoreInfo(host: any, ev: Event, entityId?: string): void {
  ev.preventDefault();
  ev.stopPropagation();
  if (!entityId || typeof host?._openMoreInfo !== 'function') return;
  host._openMoreInfo(entityId);
}

function openMoreInfoFromKeyboard(host: any, ev: KeyboardEvent, entityId?: string): void {
  if (ev.key !== 'Enter' && ev.key !== ' ') return;
  openMoreInfo(host, ev, entityId);
}

function selectConditionsPoint(host: any, ev: PointerEvent | MouseEvent, keys: string[], count: number, box: ConditionsChartBox): void {
  ev.stopPropagation();
  if (!count || typeof host?._setWeatherForecastGraphSelection !== 'function') return;
  const rect = (ev.currentTarget as HTMLElement).getBoundingClientRect();
  if (!rect.width) return;
  // Cursor fraction across the full SVG element, then remap to the inset plot area
  const elementRatio = (ev.clientX - rect.left) / rect.width;
  const leftFrac = box.left / box.width;
  const rightFrac = (box.width - box.right) / box.width;
  const plotRatio = Math.max(0, Math.min(1, (elementRatio - leftFrac) / (rightFrac - leftFrac)));
  const index = Math.round(plotRatio * (count - 1));
  keys.forEach((k) => host._setWeatherForecastGraphSelection(k, index));
}

function nearestConditionsPointIndex(points: ForecastGraphPoint[]): number {
  const now = Date.now();
  let bestIndex = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  points.forEach((point, index) => {
    const time = point.item.datetime ? new Date(point.item.datetime).getTime() : Number.NaN;
    if (!Number.isFinite(time)) return;
    const distance = Math.abs(time - now);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });
  return bestIndex;
}

function conditionsSelectedPoint(host: any, key: string, points: ForecastGraphPoint[]): ForecastGraphPoint {
  const selectedIndexRaw = typeof host?._getWeatherForecastGraphSelection === 'function'
    ? host._getWeatherForecastGraphSelection(key)
    : undefined;
  const defaultIndex = nearestConditionsPointIndex(points);
  const selectedIndex = Math.max(0, Math.min(points.length - 1, Number.isFinite(Number(selectedIndexRaw)) ? Number(selectedIndexRaw) : defaultIndex));
  return points[selectedIndex] || points[0];
}

function renderConditionsGrid(box: ConditionsChartBox, ticks: number[], points: ForecastGraphPoint[], timeFormat?: unknown): TemplateResult[] {
  const baseline = box.height - box.bottom;
  return [
    ...[0, 1, 2].map((tick) => {
      const y = box.top + tick * ((baseline - box.top) / 2);
      return svg`<line class="weather-conditions-grid-line" x1=${box.left} x2=${box.width - box.right} y1=${y} y2=${y}></line>`;
    }),
    ...ticks.map((index) => {
      const point = points[index];
      return svg`
        <line class="weather-conditions-time-line" x1=${point.x} x2=${point.x} y1=${box.top} y2=${baseline}></line>
        <text class="weather-conditions-time-label" x=${point.x} y=${box.height - 6}>${forecastTime(point.item, timeFormat)}</text>
      `;
    }),
  ];
}

function renderConditionsTemperature(host: any, config: WeatherTileConfig, items: ForecastItem[], key: string, syncKeys: string[]): TemplateResult | typeof nothing {
  const box: ConditionsChartBox = { width: 360, height: conditionsGraphHeight(config), left: 14, right: 42, top: 15, bottom: 24 };
  const { points, min, max } = buildConditionsPoints(items, 'temperature', box);
  if (points.length < 2) return nothing;

  const baseline = box.height - box.bottom;
  const selected = conditionsSelectedPoint(host, key, points);
  const minPoint = points.reduce((best, point) => point.value < best.value ? point : best, points[0]);
  const maxPoint = points.reduce((best, point) => point.value > best.value ? point : best, points[0]);
  const ticks = conditionsTickIndexes(points.length);
  const icons = conditionsIconPoints(points);
  const path = smoothPath(points);
  const fillPath = areaPath(points, baseline);
  const safeKey = safeIdPart(key);
  const lineGradient = `weather-conditions-temp-line-${safeKey}`;
  const fillGradient = `weather-conditions-temp-fill-${safeKey}`;
  const mid = (min + max) / 2;

  return html`
    <section class="weather-conditions-card weather-conditions-temp">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Temperature</span>
          <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
        </div>
        <div class="weather-conditions-selected">
          <span>${forecastTime(selected.item, config.time_format)}</span>
          <strong>${selected.value.toFixed(0)}°</strong>
        </div>
      </div>

      ${icons.length ? html`
        <div class="weather-conditions-icons">
          ${icons.map((point) => {
            const condition = String(point.item.condition || '');
            return html`
              ${renderMeteoconIcon(
                conditionMeteocon(condition),
                `weather-conditions-icon weather-condition-${conditionClass(condition)}`,
                conditionLabel(condition),
              )}
            `;
          })}
        </div>
      ` : nothing}

      <div class="weather-conditions-chart-frame">
        <svg
          class="weather-conditions-chart"
          viewBox=${`0 0 ${box.width} ${box.height}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Temperature forecast graph"
          @pointerdown=${stopTileAction}
          @pointermove=${(ev: PointerEvent) => selectConditionsPoint(host, ev, syncKeys, points.length, box)}
          @click=${(ev: MouseEvent) => selectConditionsPoint(host, ev, syncKeys, points.length, box)}
        >
          <defs>
            <linearGradient id=${fillGradient} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(255, 179, 28, 0.66)"></stop>
              <stop offset="52%" stop-color="rgba(255, 179, 28, 0.24)"></stop>
              <stop offset="100%" stop-color="rgba(47, 185, 221, 0.38)"></stop>
            </linearGradient>
            <linearGradient id=${lineGradient} x1=${box.left} x2=${box.width - box.right} y1="0" y2="0" gradientUnits="userSpaceOnUse">
              ${points.map((point, index) => svg`
                <stop offset=${`${(index / (points.length - 1)) * 100}%`} stop-color=${temperatureColor(point.value)}></stop>
              `)}
            </linearGradient>
          </defs>
          ${renderConditionsGrid(box, ticks, points, config.time_format)}
          <path class="weather-conditions-area" d=${fillPath} fill=${`url(#${fillGradient})`}></path>
          <path class="weather-conditions-line-shadow" d=${path}></path>
          <path class="weather-conditions-temp-line" d=${path} stroke=${`url(#${lineGradient})`}></path>
          <text class="weather-conditions-extreme" x=${minPoint.x} y=${Math.max(12, minPoint.y - 9)}>L</text>
          <text class="weather-conditions-extreme" x=${maxPoint.x} y=${Math.max(12, maxPoint.y - 9)}>H</text>
          <line class="weather-conditions-selected-line" x1=${selected.x} x2=${selected.x} y1=${box.top} y2=${baseline}></line>
          <text class="weather-conditions-axis" x=${box.width - 5} y=${box.top + 3}>${max.toFixed(0)}°</text>
          <text class="weather-conditions-axis" x=${box.width - 5} y=${box.top + ((baseline - box.top) / 2)}>${mid.toFixed(0)}°</text>
          <text class="weather-conditions-axis" x=${box.width - 5} y=${baseline}>${min.toFixed(0)}°</text>
        </svg>
        <span
          class="weather-conditions-selected-dot"
          style=${`left:${((selected.x / box.width) * 100).toFixed(2)}%;top:${((selected.y / box.height) * 100).toFixed(2)}%;`}
        ></span>
      </div>
    </section>
  `;
}

function renderConditionsPrecipitation(host: any, config: WeatherTileConfig, items: ForecastItem[], key: string, syncKeys: string[]): TemplateResult | typeof nothing {
  const box: ConditionsChartBox = { width: 360, height: conditionsGraphHeight(config), left: 14, right: 42, top: 10, bottom: 22 };
  const { points } = buildConditionsPoints(items, 'precipitation_probability', box);
  if (points.length < 2) return nothing;

  const baseline = box.height - box.bottom;
  const selected = conditionsSelectedPoint(host, key, points);
  const maxPoint = points.reduce((best, point) => point.value > best.value ? point : best, points[0]);
  const ticks = conditionsTickIndexes(points.length);
  const path = smoothPath(points);
  const fillPath = areaPath(points, baseline);
  const safeKey = safeIdPart(key);
  const fillGradient = `weather-conditions-rain-fill-${safeKey}`;

  return html`
    <section class="weather-conditions-card weather-conditions-rain">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Chance of Precipitation</span>
          <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
        </div>
        <div class="weather-conditions-selected">
          <span>${forecastTime(selected.item, config.time_format)}</span>
          <strong>${Math.round(selected.value)}%</strong>
        </div>
      </div>
      <div class="weather-conditions-subtitle">Today's chance: ${Math.round(maxPoint.value)}%</div>
      <div class="weather-conditions-chart-frame">
        <svg
          class="weather-conditions-chart"
          viewBox=${`0 0 ${box.width} ${box.height}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Chance of precipitation forecast graph"
          @pointerdown=${stopTileAction}
          @pointermove=${(ev: PointerEvent) => selectConditionsPoint(host, ev, syncKeys, points.length, box)}
          @click=${(ev: MouseEvent) => selectConditionsPoint(host, ev, syncKeys, points.length, box)}
        >
          <defs>
            <linearGradient id=${fillGradient} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(56, 199, 243, 0.48)"></stop>
              <stop offset="100%" stop-color="rgba(56, 199, 243, 0.10)"></stop>
            </linearGradient>
          </defs>
          ${renderConditionsGrid(box, ticks, points, config.time_format)}
          <path class="weather-conditions-rain-area" d=${fillPath} fill=${`url(#${fillGradient})`}></path>
          <path class="weather-conditions-line-shadow" d=${path}></path>
          <path class="weather-conditions-rain-line" d=${path}></path>
          <line class="weather-conditions-selected-line" x1=${selected.x} x2=${selected.x} y1=${box.top} y2=${baseline}></line>
          <text class="weather-conditions-axis" x=${box.width - 5} y=${box.top + 4}>100%</text>
          <text class="weather-conditions-axis" x=${box.width - 5} y=${box.top + ((baseline - box.top) / 2)}>50%</text>
          <text class="weather-conditions-axis" x=${box.width - 5} y=${baseline}>0%</text>
        </svg>
        <span
          class="weather-conditions-selected-dot"
          style=${`left:${((selected.x / box.width) * 100).toFixed(2)}%;top:${((selected.y / box.height) * 100).toFixed(2)}%;`}
        ></span>
      </div>
    </section>
  `;
}

function renderWeatherConditionsPanel(host: any, config: WeatherTileConfig, items: ForecastItem[], fields: ForecastFieldKey[], key: string, syncGraphs: boolean): TemplateResult | typeof nothing {
  if (items.length < 2) return nothing;
  const tempKey = `${key}-temperature`;
  const precipKey = `${key}-precipitation`;
  const syncKeys = syncGraphs ? [tempKey, precipKey] : null;
  const temperature = fields.includes('temperature')
    ? renderConditionsTemperature(host, config, items, tempKey, syncKeys || [tempKey])
    : nothing;
  const precipitation = fields.includes('precipitation_probability')
    ? renderConditionsPrecipitation(host, config, items, precipKey, syncKeys || [precipKey])
    : nothing;
  if (temperature === nothing && precipitation === nothing) return nothing;
  return html`
    <div class="weather-conditions-panel">
      ${temperature}
      ${precipitation}
    </div>
  `;
}

export function renderWeatherTile(host: any, config: WeatherTileConfig): TemplateResult {
  const conditionState = cleanState(stateObj(host, config.entity)).toLowerCase();
  const name = config.name || 'Weather';
  const temp = formatTemperature(host, config.temp_sensor);
  const humidity = formatHumidity(host, config.humidity_sensor);
  const feels = formatTemperature(host, config.feels_like_sensor);
  const metrics = buildMetrics(host, config);
  const forecastItems = config.show_forecast === false ? [] : normalizeForecast(config.forecast);
  const dailyForecastItems = config.show_forecast === false ? [] : normalizeForecast(config.daily_forecast);
  const forecastSlotsRaw = Number(config.forecast_slots);
  const forecastSlots = Number.isFinite(forecastSlotsRaw) && forecastSlotsRaw > 0
    ? Math.min(Math.floor(forecastSlotsRaw), 72)
    : 8;
  const forecastFields = normalizeForecastFields(config.forecast_fields);
  const visibleForecast = forecastItems.slice(0, forecastSlots);
  const forecastText = forecastSummary(forecastItems, config.time_format);
  const displayConditionState = String(forecastItems[0]?.condition || conditionState || '').toLowerCase();
  const iconCondition = displayConditionState || conditionState;
  const iconClass = `weather-icon weather-condition-${conditionClass(iconCondition)}`;
  const weatherHeadline = forecastText || conditionLabel(displayConditionState || conditionState);
  const forecastSourceBadge = html`<span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>`;
  const conditionsKey = config.forecast_graph_key || `weather-${config.entity || name}`;
  const syncGraphs = config.sync_graphs !== false;
  const conditionsPanel = renderWeatherConditionsPanel(host, config, visibleForecast, forecastFields, conditionsKey, syncGraphs);
  const dailyForecast = renderDailyForecast(host, config, dailyForecastItems, forecastItems);
  const chips = Array.isArray(config.chips) ? config.chips : [];
  const tempSize = configNumber(config.temp_size ?? config.temperature_size, 18, 56);
  const iconSize = configNumber(config.icon_size, 28, 160);
  const graphHeight = configNumber(config.graph_height, 82, 260);
  const stale = isWeatherStale(host, config);
  const styleParts = [
    tempSize ? `--weather-temp-size:${tempSize}px;` : '',
    iconSize ? `--weather-icon-size:${iconSize}px;--weather-icon-bg-size:${iconSize + 16}px;` : '',
    graphHeight ? `--weather-graph-height:${graphHeight}px;` : '',
  ].filter(Boolean);
  const heightStyle = styleParts.join('');

  return html`
    <div class="tile-wrap weather-tile-wrap" style=${heightStyle}>
      <div class=${`weather-tile${stale ? ' weather-tile-stale' : ''}`}>
        <div class="weather-content">
          <div class="weather-top">
            <div class="weather-heading">
              <div class="weather-headline-row">
                <div class="weather-name">${weatherHeadline}</div>
                ${forecastItems.length ? forecastSourceBadge : nothing}
              </div>
              <div class="weather-primary">
                <span
                  class="weather-temp weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open outdoor temperature details"
                  @pointerdown=${stopTileAction}
                  @pointerup=${stopTileAction}
                  @click=${(ev: Event) => openMoreInfo(host, ev, config.temp_sensor)}
                  @keyup=${(ev: KeyboardEvent) => openMoreInfoFromKeyboard(host, ev, config.temp_sensor)}
                >${temp}</span>
                <span
                  class="weather-humidity weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open outdoor humidity details"
                  @pointerdown=${stopTileAction}
                  @pointerup=${stopTileAction}
                  @click=${(ev: Event) => openMoreInfo(host, ev, config.humidity_sensor)}
                  @keyup=${(ev: KeyboardEvent) => openMoreInfoFromKeyboard(host, ev, config.humidity_sensor)}
                >${humidity}</span>
              </div>
              <div
                class="weather-feels weather-clickable"
                role="button"
                tabindex="0"
                aria-label="Open feels like temperature details"
                @pointerdown=${stopTileAction}
                @pointerup=${stopTileAction}
                @click=${(ev: Event) => openMoreInfo(host, ev, config.feels_like_sensor)}
                @keyup=${(ev: KeyboardEvent) => openMoreInfoFromKeyboard(host, ev, config.feels_like_sensor)}
              >Feels like ${feels}</div>
            </div>
            <div class="weather-icon-wrap weather-clickable"
              role="button"
              tabindex="0"
              aria-label=${`Open ${name} weather details`}
              @pointerdown=${stopTileAction}
              @pointerup=${stopTileAction}
              @click=${(ev: Event) => openMoreInfo(host, ev, config.entity)}
              @keyup=${(ev: KeyboardEvent) => openMoreInfoFromKeyboard(host, ev, config.entity)}
            >
              ${config.icon
                ? html`<ha-icon class=${iconClass} .icon=${config.icon}></ha-icon>`
                : renderMeteoconIcon(conditionMeteocon(iconCondition), iconClass, conditionLabel(iconCondition))}
            </div>
          </div>

          <div class="weather-grid">
            ${metrics.map((item) => html`
              <div
                class=${`weather-metric weather-clickable${item.active ? ' active' : ''}`}
                title=${item.entity || item.label}
                role="button"
                tabindex="0"
                aria-label=${`Open ${item.label} details`}
                @pointerdown=${stopTileAction}
                @pointerup=${stopTileAction}
                @click=${(ev: Event) => openMoreInfo(host, ev, item.entity)}
                @keyup=${(ev: KeyboardEvent) => openMoreInfoFromKeyboard(host, ev, item.entity)}
              >
                ${item.mdi
                  ? html`<ha-icon class="weather-metric-icon" .icon=${item.mdi}></ha-icon>`
                  : item.icon
                    ? renderMeteoconIcon(item.icon, 'weather-metric-icon', item.label)
                    : html`<ha-state-icon class="weather-metric-icon" .hass=${host.hass} .stateObj=${stateObj(host, item.stateEntity)}></ha-state-icon>`}
                <span class="weather-metric-label">${item.label}</span>
                <span class="weather-metric-value">${item.value}</span>
              </div>
            `)}
          </div>

          ${conditionsPanel}
          ${dailyForecast}
        </div>

        ${chips.length
          ? html`<div class="weather-chips-bottom-right">
              ${chips.map((chip: any) => html`
                <div
                  class="weather-chip-hit weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label=${`Open ${chip?.entity || 'chip'} details`}
                  @pointerdown=${stopTileAction}
                  @pointerup=${stopTileAction}
                  @click=${(ev: Event) => openMoreInfo(host, ev, chip?.entity || chip?.tap_entity)}
                  @keyup=${(ev: KeyboardEvent) => openMoreInfoFromKeyboard(host, ev, chip?.entity || chip?.tap_entity)}
                >
                  ${renderInteractiveChip(host, chip)}
                </div>
              `)}
            </div>`
          : nothing}
      </div>
    </div>
  `;
}
