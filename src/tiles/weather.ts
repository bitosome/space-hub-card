/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, svg, TemplateResult } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { actionHandler } from '../action-handler-directive';
import { renderInteractiveChip } from '../chips';
import { METEOCON_ICONS } from '../assets/meteocons';
import type { MeteoconIconKey } from '../assets/meteocons';

const DEFAULT_GRAPH_HORIZONTAL_LINES = 5;

interface WeatherTileConfig {
  entity?: string;
  forecast_entity?: string;
  forecast_source_key?: string;
  selected_forecast_entity?: string;
  forecast_sources?: WeatherForecastSource[];
  name?: string;
  icon?: string;
  height?: number;
  temp_size?: number;
  temperature_size?: number;
  icon_size?: number;
  icon_offset_x?: number;
  icon_offset_y?: number;
  conditions_icon_size?: number;
  conditions_icon_scale?: number;
  temperature_icon_count?: number;
  temperature_readout_icon_size?: number;
  temperature_readout_icon_scale?: number;
  daily_icon_size?: number;
  graph_height?: number;
  graph_horizontal_lines?: number;
  forecast_graph_mode?: string;
  metric_columns?: number;
  icon_set?: string;
  icon_pack?: WeatherIconPackConfig;
  icon_base_path?: string;
  icon_extension?: string;
  icon_map?: Record<string, string>;
  animated_icons?: boolean;
  show_forecast?: boolean;
  forecast_slots?: number;
  forecast_fields?: string[] | string;
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
  metrics?: MetricSource[];
  chips?: unknown[];
  double_tap_action?: unknown;
}

type WeatherIconSet = 'meteocons' | 'custom';
type ForecastGraphMode = 'separate' | 'combined';

interface WeatherForecastSource {
  entity?: string;
  name?: string;
}

interface WeatherIconPackConfig {
  base_path?: string;
  extension?: string;
  icons?: Record<string, string>;
}

interface MetricSource {
  type?: string;
  entity?: string;
  name?: string;
  icon?: string;
  icon_active?: string;
  icon_inactive?: string;
  rain_state_sensor?: string;
  rain_rate_sensor?: string;
  rain_rate_threshold?: number;
  tap_action?: unknown;
  hold_action?: unknown;
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
  tap_action?: unknown;
  hold_action?: unknown;
  double_tap_action?: unknown;
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
  timestamp?: number;
}

interface ConditionsIconSlot {
  point: ForecastGraphPoint;
  x: number;
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

interface ConditionsRawPoint {
  item: ForecastItem;
  index: number;
  value: number;
  timestamp?: number;
}

const BAD_STATES = new Set(['', 'unknown', 'unavailable']);
const DEFAULT_FORECAST_FIELDS: ForecastFieldKey[] = ['temperature', 'precipitation_probability'];
const DEFAULT_TEMPERATURE_ICON_COUNT = 8;
const DEFAULT_METRIC_COLUMNS = 3;
const WEATHER_ICON_SETS = new Set<WeatherIconSet>(['meteocons', 'custom']);
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

const METEOCON_SVG_CACHE = new Map<MeteoconIconKey, string>();

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

function friendlyName(host: any, entityId?: string): string {
  const st = stateObj(host, entityId);
  const friendly = st?.attributes?.friendly_name;
  if (typeof friendly === 'string' && friendly.trim()) return friendly.trim();
  return String(entityId || '')
    .split('.')
    .pop()
    ?.replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase()) || 'Forecast';
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

function weatherIconSet(config: WeatherTileConfig): WeatherIconSet {
  const raw = String(config.icon_set || '').trim().toLowerCase();
  return WEATHER_ICON_SETS.has(raw as WeatherIconSet) ? raw as WeatherIconSet : 'meteocons';
}

function weatherIconData(icon: MeteoconIconKey): string {
  return METEOCON_ICONS[icon];
}

function weatherIconSvg(icon: MeteoconIconKey): string {
  const cached = METEOCON_SVG_CACHE.get(icon);
  if (cached !== undefined) return cached;
  const [, encoded] = String(weatherIconData(icon) || '').split('base64,');
  let decoded = '';
  if (encoded && typeof atob === 'function') {
    try {
      decoded = atob(encoded);
    } catch (_err) {
      decoded = '';
    }
  }
  METEOCON_SVG_CACHE.set(icon, decoded);
  return decoded;
}

function directIconPath(value: string): boolean {
  return /^(data:|https?:\/\/|\/\/|\/)/i.test(value);
}

function joinIconPath(basePath: string, fileName: string): string {
  const base = basePath.replace(/\/+$/, '');
  const file = fileName.replace(/^\/+/, '');
  return base ? `${base}/${file}` : file;
}

function customWeatherIconUrl(config: WeatherTileConfig, icon: MeteoconIconKey): string {
  const pack = config.icon_pack || {};
  const iconMap = pack.icons || config.icon_map || {};
  const mapped = iconMap[icon];
  const basePath = String(pack.base_path || config.icon_base_path || '').trim();
  if (mapped) {
    const value = String(mapped).trim();
    if (!value) return '';
    return directIconPath(value) || !basePath ? value : joinIconPath(basePath, value);
  }
  if (!basePath) return '';
  const extension = String(pack.extension || config.icon_extension || 'svg').trim().replace(/^\./, '') || 'svg';
  return joinIconPath(basePath, `${icon}.${extension}`);
}

function renderWeatherIcon(configOrSet: WeatherTileConfig | WeatherIconSet, icon: MeteoconIconKey, className: string, label: string, mode: 'img' | 'inline' = 'img'): TemplateResult {
  const config = typeof configOrSet === 'string' ? undefined : configOrSet;
  const iconSet = config ? weatherIconSet(config) : configOrSet as WeatherIconSet;
  const customUrl = config && iconSet === 'custom' ? customWeatherIconUrl(config, icon) : '';
  if (customUrl) {
    return html`
      <img
        class=${className}
        src=${customUrl}
        alt=${label}
        draggable="false"
      />
    `;
  }

  const iconData = weatherIconData(icon);
  if (mode === 'inline') {
    const decoded = weatherIconSvg(icon);
    if (decoded) {
      return html`
        <span class=${className} role="img" aria-label=${label}>
          ${unsafeSVG(decoded)}
        </span>
      `;
    }
    return html`
      <img
        class=${className}
        src=${iconData}
        alt=${label}
        draggable="false"
      />
    `;
  }
  return html`
    <img
      class=${className}
      src=${iconData}
      alt=${label}
      draggable="false"
    />
  `;
}

function renderMetricStateIcon(host: any, item: MetricConfig): TemplateResult {
  const so = stateObj(host, item.stateEntity);
  if (host?.hass && so) {
    return html`<ha-state-icon class="weather-metric-icon" .hass=${host.hass} .stateObj=${so}></ha-state-icon>`;
  }
  return html`<ha-icon class="weather-metric-icon" icon="mdi:gauge"></ha-icon>`;
}

function rainActiveForMetric(host: any, m: MetricSource): boolean {
  const threshold = Number.isFinite(Number(m.rain_rate_threshold)) ? Number(m.rain_rate_threshold) : 0;
  const rate = numericState(host, m.rain_rate_sensor);
  // Active precipitation requires a measurable rate above the threshold.
  // A surface that is merely wet (binary on, rate 0) must NOT count as raining.
  if (rate !== undefined) return rate > threshold;
  // Fall back to a binary rain state only when there is no rate sensor.
  const rainState = cleanState(stateObj(host, m.rain_state_sensor)).toLowerCase();
  return rainState === 'on';
}

function staticMdiIcon(raw: string | undefined, fallback: string): string {
  return raw && raw.includes(':') ? raw : fallback;
}

function buildRainMetric(host: any, m: MetricSource): MetricConfig {
  const active = rainActiveForMetric(host, m);
  const label = m.name || 'Rain';
  const entity = m.rain_rate_sensor || m.rain_state_sensor;
  const stateEntity = m.rain_state_sensor || m.rain_rate_sensor;
  const mdi = active
    ? staticMdiIcon(m.icon_active || m.icon, 'mdi:weather-rainy')
    : staticMdiIcon(m.icon_inactive || m.icon, 'mdi:water-off-outline');
  let value: string;
  if (!active) {
    value = 'No rain';
  } else {
    const rate = formatEntity(host, m.rain_rate_sensor, 1);
    value = rate === '—' ? 'Raining' : rate;
  }
  return {
    label,
    value,
    entity,
    stateEntity,
    active,
    mdi,
    tap_action: m.tap_action,
    hold_action: m.hold_action,
    double_tap_action: m.double_tap_action,
  };
}

function buildMetrics(host: any, config: WeatherTileConfig): MetricConfig[] {
  const source = Array.isArray(config.metrics) && config.metrics.length
    ? config.metrics
    : defaultMetricList(config);
  return source
    .filter((m) => m && (m.type === 'rain' ? (m.rain_state_sensor || m.rain_rate_sensor) : m.entity))
    .map((m) => {
      if (m.type === 'rain') return buildRainMetric(host, m);
      const st = stateObj(host, m.entity);
      const label = m.name || st?.attributes?.friendly_name || m.entity || '';
      return {
        label,
        value: formatEntityAuto(host, m.entity),
        entity: m.entity,
        mdi: m.icon || undefined,
        stateEntity: m.entity,
        tap_action: m.tap_action,
        hold_action: m.hold_action,
        double_tap_action: m.double_tap_action,
      } as MetricConfig;
    });
}

function defaultMetricList(config: WeatherTileConfig): MetricSource[] {
  const metrics: MetricSource[] = [
    { entity: config.wind_speed_sensor, name: 'Wind' },
    { entity: config.wind_gust_sensor, name: 'Gust' },
    { entity: config.temp_min_24h_sensor, name: '24h Min' },
    { entity: config.temp_max_24h_sensor, name: '24h Max' },
    { entity: config.uv_sensor, name: 'UV' },
    { entity: config.solar_lux_sensor, name: 'Solar' },
    { entity: config.pressure_sensor, name: 'Pressure' },
  ].filter((m) => m.entity);
  if (config.rain_state_sensor || config.rain_rate_sensor) {
    metrics.splice(4, 0, {
      type: 'rain',
      name: 'Rain',
      rain_state_sensor: config.rain_state_sensor,
      rain_rate_sensor: config.rain_rate_sensor,
      rain_rate_threshold: config.rain_rate_threshold,
    });
  }
  return metrics;
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

function homeAssistantTimeOptions(host: any): { locale: string | undefined; options: Intl.DateTimeFormatOptions } {
  const locale = host?.hass?.locale;
  const timeFormat = String(locale?.time_format || '').toLowerCase();
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  if (timeFormat === '12') options.hour12 = true;
  if (timeFormat === '24') options.hour12 = false;
  return { locale: locale?.language, options };
}

function forecastTime(host: any, item: ForecastItem): string {
  if (!item.datetime) return '';
  const date = new Date(item.datetime);
  if (Number.isNaN(date.getTime())) return '';
  const { locale, options } = homeAssistantTimeOptions(host);
  return new Intl.DateTimeFormat(locale, options).format(date);
}

function forecastDateTime(host: any, item: ForecastItem): string {
  const date = dateLabel(host, item.datetime);
  const time = forecastTime(host, item);
  if (!date) return time;
  if (!time) return date;
  return `${date} ${time}`;
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

function forecastTimestamp(item: ForecastItem): number | undefined {
  if (!item.datetime) return undefined;
  const time = new Date(item.datetime).getTime();
  return Number.isFinite(time) ? time : undefined;
}

function conditionsScale(field: ForecastFieldKey, values: number[]): { min: number; max: number } {
  if (field === 'precipitation_probability') return { min: 0, max: 100 };
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (field === 'temperature') {
    const range = Math.max(max - min, 1);
    const padding = Math.max(range * 0.06, 0.6);
    min = Math.floor(min - padding);
    max = Math.ceil(max + padding);
  } else {
    const padding = Math.max((max - min) * 0.18, 1);
    min = Math.max(0, min - padding);
    max += padding;
  }
  if (max <= min) max = min + 1;
  return { min, max };
}

function buildConditionsPoints(items: ForecastItem[], field: ForecastFieldKey, box: ConditionsChartBox): { points: ForecastGraphPoint[]; min: number; max: number } {
  const raw = items.reduce<ConditionsRawPoint[]>((acc, item, index) => {
    const value = forecastGraphValue(item, field);
    if (value === undefined) return acc;
    const timestamp = forecastTimestamp(item);
    const point: ConditionsRawPoint = { item, index, value };
    if (timestamp !== undefined) point.timestamp = timestamp;
    acc.push(point);
    return acc;
  }, []);
  if (!raw.length) return { points: [], min: 0, max: 1 };
  const hasTimeScale = raw.every((point) => Number.isFinite(point.timestamp));
  const ordered = hasTimeScale
    ? [...raw].sort((a, b) => Number(a.timestamp) - Number(b.timestamp))
    : raw;
  const firstTime = hasTimeScale ? Number(ordered[0].timestamp) : 0;
  const lastTime = hasTimeScale ? Number(ordered[ordered.length - 1].timestamp) : 0;
  const timeRange = lastTime - firstTime;
  const values = raw.map((point) => point.value);
  const { min, max } = conditionsScale(field, values);
  const chartWidth = box.width - box.left - box.right;
  const chartHeight = box.height - box.top - box.bottom;
  const points = ordered.map((point, pointIndex) => {
    const x = hasTimeScale && timeRange > 0
      ? box.left + ((Number(point.timestamp) - firstTime) / timeRange) * chartWidth
      : (ordered.length === 1 ? box.left + chartWidth / 2 : box.left + (pointIndex / (ordered.length - 1)) * chartWidth);
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

function temperatureIconCount(config: WeatherTileConfig): number {
  const raw = Number(config.temperature_icon_count);
  if (!Number.isFinite(raw)) return DEFAULT_TEMPERATURE_ICON_COUNT;
  return Math.max(0, Math.min(72, Math.floor(raw)));
}

function conditionsIconSlots(points: ForecastGraphPoint[], maxIcons: number): ConditionsIconSlot[] {
  if (maxIcons <= 0 || !points.length) return [];
  if (points.length <= maxIcons) return points.map((point) => ({ point, x: point.x }));

  const iconCount = Math.min(maxIcons, points.length);
  const firstX = points[0].x;
  const lastX = points[points.length - 1].x;
  const span = lastX - firstX;
  if (!Number.isFinite(span) || span <= 0) return [];

  const nearestPoint = (targetX: number) => points.reduce((best, point) => (
    Math.abs(point.x - targetX) < Math.abs(best.x - targetX) ? point : best
  ), points[0]);

  if (iconCount === 1) {
    const x = firstX + span / 2;
    return [{ point: nearestPoint(x), x }];
  }

  return Array.from({ length: iconCount }, (_, index) => {
    const x = firstX + (index / (iconCount - 1)) * span;
    return { point: nearestPoint(x), x };
  });
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

function dayLabel(host: any, value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(host?.hass?.locale?.language, { weekday: 'long' }).format(date);
}

function dateLabel(host: any, value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(host?.hass?.locale?.language, { day: 'numeric', month: 'long' }).format(date);
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
  const min = Math.floor((Math.min(...values) - 2) / 5) * 5;
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

function conditionsHorizontalLineCount(config: WeatherTileConfig): number {
  return configNumber(config.graph_horizontal_lines, 2, 9) || DEFAULT_GRAPH_HORIZONTAL_LINES;
}

function forecastGraphMode(config: WeatherTileConfig): ForecastGraphMode {
  return String(config.forecast_graph_mode || '').toLowerCase() === 'combined' ? 'combined' : 'separate';
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
        <span>Daily Forecast</span>
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
              <span class="weather-daily-day-name">${dayLabel(host, item.datetime)}</span>
              <span class="weather-daily-date">${dateLabel(host, item.datetime)}</span>
            </div>
            <div class="weather-daily-condition">
              ${renderWeatherIcon(
                config,
                conditionMeteocon(condition),
                `weather-daily-icon weather-condition-${conditionClass(condition)}`,
                conditionLabel(condition),
              )}
              ${rainProbabilityLabel ? html`<span title="Chance of precipitation">${rainProbabilityLabel}</span>` : nothing}
            </div>
            <div class="weather-daily-low">
              <span>${low.toFixed(0)}°</span>
              ${stats?.low ? html`<small>${forecastTime(host, stats.low.item)}</small>` : nothing}
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
              ${stats?.high ? html`<small>${forecastTime(host, stats.high.item)}</small>` : nothing}
            </div>
          </div>
        `;
      })}
    </section>
  `;
}

function stopTileAction(ev: Event): void {
  ev.stopPropagation();
}

function stopConditionsPointer(ev: PointerEvent): void {
  ev.preventDefault();
  ev.stopPropagation();
  const target = ev.currentTarget as Element | null;
  try {
    if (target?.hasPointerCapture?.(ev.pointerId)) target.releasePointerCapture(ev.pointerId);
  } catch {
    // Some WebViews throw if capture has already been released.
  }
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

function selectForecastSource(host: any, ev: Event, key?: string, entityId?: string): void {
  ev.preventDefault();
  ev.stopPropagation();
  if (!key || !entityId || typeof host?._setWeatherForecastSourceSelection !== 'function') return;
  host._setWeatherForecastSourceSelection(key, entityId);
}

function selectForecastSourceFromKeyboard(host: any, ev: KeyboardEvent, key?: string, entityId?: string): void {
  if (ev.key !== 'Enter' && ev.key !== ' ') return;
  selectForecastSource(host, ev, key, entityId);
}

function selectConditionsPoint(host: any, ev: PointerEvent, keys: string[], points: ForecastGraphPoint[], box: ConditionsChartBox): void {
  ev.preventDefault();
  ev.stopPropagation();
  if (ev.type === 'pointermove' && ev.pointerType !== 'mouse' && ev.buttons === 0) return;
  if (!points.length || typeof host?._setWeatherForecastGraphSelection !== 'function') return;
  const target = ev.currentTarget as Element | null;
  if (ev.type === 'pointerdown') {
    try {
      target?.setPointerCapture?.(ev.pointerId);
    } catch {
      // Pointer capture is best-effort in the Home Assistant mobile WebView.
    }
  }
  const rect = (ev.currentTarget as HTMLElement).getBoundingClientRect();
  if (!rect.width) return;
  const elementRatio = (ev.clientX - rect.left) / rect.width;
  const targetX = Math.max(0, Math.min(box.width, elementRatio * box.width));
  const index = points.reduce((bestIndex, point, pointIndex) => {
    const best = points[bestIndex];
    return Math.abs(point.x - targetX) < Math.abs(best.x - targetX) ? pointIndex : bestIndex;
  }, 0);
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

function nearestPointByTimestamp(points: ForecastGraphPoint[], timestamp?: number, fallbackIndex = 0): ForecastGraphPoint | undefined {
  if (!points.length) return undefined;
  if (!Number.isFinite(timestamp)) return points[Math.max(0, Math.min(points.length - 1, fallbackIndex))];
  return points.reduce((best, point) => {
    const bestTime = Number(best.timestamp);
    const pointTime = Number(point.timestamp);
    if (!Number.isFinite(pointTime)) return best;
    if (!Number.isFinite(bestTime)) return point;
    const bestDistance = Math.abs(bestTime - Number(timestamp));
    const pointDistance = Math.abs(pointTime - Number(timestamp));
    return pointDistance < bestDistance ? point : best;
  }, points[0]);
}

function renderConditionsGrid(host: any, box: ConditionsChartBox, ticks: number[], points: ForecastGraphPoint[], horizontalLines: number): TemplateResult[] {
  const baseline = box.height - box.bottom;
  const lineCount = Math.max(2, horizontalLines);
  return [
    ...Array.from({ length: lineCount }, (_, index) => {
      const y = box.top + (index / (lineCount - 1)) * (baseline - box.top);
      return svg`<line class="weather-conditions-grid-line" x1=${box.left} x2=${box.width - box.right} y1=${y} y2=${y}></line>`;
    }),
    ...ticks.map((index) => {
      const point = points[index];
      const edgeClass = index === 0
        ? ' weather-conditions-time-label-start'
        : index === points.length - 1
          ? ' weather-conditions-time-label-end'
          : '';
      return svg`
        <line class="weather-conditions-time-line" x1=${point.x} x2=${point.x} y1=${box.top} y2=${baseline}></line>
        <text class=${`weather-conditions-time-label${edgeClass}`} x=${point.x} y=${box.height - 6}>${forecastDateTime(host, point.item)}</text>
      `;
    }),
  ];
}

function renderConditionsAxisLabels(
  box: ConditionsChartBox,
  horizontalLines: number,
  formatValue: (ratio: number) => string,
  className = 'weather-conditions-axis',
  x = box.width - 2,
): TemplateResult[] {
  const baseline = box.height - box.bottom;
  const lineCount = Math.max(2, horizontalLines);
  return Array.from({ length: lineCount }, (_, index) => {
    const ratio = 1 - (index / (lineCount - 1));
    const y = box.top + (index / (lineCount - 1)) * (baseline - box.top);
    return svg`<text class=${className} x=${x} y=${y}>${formatValue(ratio)}</text>`;
  });
}

function renderConditionsTemperature(host: any, config: WeatherTileConfig, items: ForecastItem[], key: string, syncKeys: string[]): TemplateResult | typeof nothing {
  const box: ConditionsChartBox = { width: 360, height: conditionsGraphHeight(config), left: 8, right: 24, top: 15, bottom: 24 };
  const { points, min, max } = buildConditionsPoints(items, 'temperature', box);
  if (points.length < 2) return nothing;

  const baseline = box.height - box.bottom;
  const selected = conditionsSelectedPoint(host, key, points);
  const minPoint = points.reduce((best, point) => point.value < best.value ? point : best, points[0]);
  const maxPoint = points.reduce((best, point) => point.value > best.value ? point : best, points[0]);
  const ticks = conditionsTickIndexes(points.length);
  const icons = conditionsIconSlots(points, temperatureIconCount(config));
  const horizontalLines = conditionsHorizontalLineCount(config);
  const path = smoothPath(points);
  const fillPath = areaPath(points, baseline);
  const safeKey = safeIdPart(key);
  const lineGradient = `weather-conditions-temp-line-${safeKey}`;
  const fillGradient = `weather-conditions-temp-fill-${safeKey}`;
  const selectedCondition = String(selected.item.condition || '');

  return html`
    <section class="weather-conditions-card weather-conditions-temp">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Temperature</span>
        </div>
        <div class="weather-conditions-selected">
          <span>${forecastDateTime(host, selected.item)}</span>
          <strong>${selected.value.toFixed(0)}°</strong>
          ${renderWeatherIcon(
            config,
            conditionMeteocon(selectedCondition),
            `weather-conditions-selected-icon weather-condition-${conditionClass(selectedCondition)}`,
            conditionLabel(selectedCondition),
            'inline',
          )}
        </div>
      </div>

      ${icons.length ? html`
        <div class="weather-conditions-icons">
          ${icons.map((slot) => {
            const condition = String(slot.point.item.condition || '');
            const leftPct = (slot.x / box.width) * 100;
            return html`
              <span class="weather-conditions-icon-slot" style=${`left:${leftPct.toFixed(2)}%;`}>
                ${renderWeatherIcon(
                  config,
                  conditionMeteocon(condition),
                  `weather-conditions-icon weather-condition-${conditionClass(condition)}`,
                  conditionLabel(condition),
                )}
              </span>
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
          @pointerdown=${(ev: PointerEvent) => selectConditionsPoint(host, ev, syncKeys, points, box)}
          @pointermove=${(ev: PointerEvent) => selectConditionsPoint(host, ev, syncKeys, points, box)}
          @pointerup=${stopConditionsPointer}
          @pointercancel=${stopConditionsPointer}
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
          ${renderConditionsGrid(host, box, ticks, points, horizontalLines)}
          <path class="weather-conditions-area" d=${fillPath} fill=${`url(#${fillGradient})`}></path>
          <path class="weather-conditions-line-shadow" d=${path}></path>
          <path class="weather-conditions-temp-line" d=${path} stroke=${`url(#${lineGradient})`}></path>
          <text class="weather-conditions-extreme" x=${minPoint.x} y=${Math.max(12, minPoint.y - 9)}>L</text>
          <text class="weather-conditions-extreme" x=${maxPoint.x} y=${Math.max(12, maxPoint.y - 9)}>H</text>
          <line class="weather-conditions-selected-line" x1=${selected.x} x2=${selected.x} y1=${box.top} y2=${baseline}></line>
          ${renderConditionsAxisLabels(box, horizontalLines, (ratio) => `${(min + ((max - min) * ratio)).toFixed(0)}°`)}
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
  const box: ConditionsChartBox = { width: 360, height: conditionsGraphHeight(config), left: 8, right: 24, top: 15, bottom: 24 };
  const { points } = buildConditionsPoints(items, 'precipitation_probability', box);
  if (points.length < 2) return nothing;

  const baseline = box.height - box.bottom;
  const selected = conditionsSelectedPoint(host, key, points);
  const ticks = conditionsTickIndexes(points.length);
  const horizontalLines = conditionsHorizontalLineCount(config);
  const path = smoothPath(points);
  const fillPath = areaPath(points, baseline);
  const safeKey = safeIdPart(key);
  const fillGradient = `weather-conditions-rain-fill-${safeKey}`;

  return html`
    <section class="weather-conditions-card weather-conditions-rain">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Chance of Precipitation</span>
        </div>
        <div class="weather-conditions-selected">
          <span>${forecastDateTime(host, selected.item)}</span>
          <strong>${Math.round(selected.value)}%</strong>
        </div>
      </div>
      <div class="weather-conditions-chart-frame">
        <svg
          class="weather-conditions-chart"
          viewBox=${`0 0 ${box.width} ${box.height}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Chance of precipitation forecast graph"
          @pointerdown=${(ev: PointerEvent) => selectConditionsPoint(host, ev, syncKeys, points, box)}
          @pointermove=${(ev: PointerEvent) => selectConditionsPoint(host, ev, syncKeys, points, box)}
          @pointerup=${stopConditionsPointer}
          @pointercancel=${stopConditionsPointer}
        >
          <defs>
            <linearGradient id=${fillGradient} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(56, 199, 243, 0.48)"></stop>
              <stop offset="100%" stop-color="rgba(56, 199, 243, 0.10)"></stop>
            </linearGradient>
          </defs>
          ${renderConditionsGrid(host, box, ticks, points, horizontalLines)}
          <path class="weather-conditions-rain-area" d=${fillPath} fill=${`url(#${fillGradient})`}></path>
          <path class="weather-conditions-line-shadow" d=${path}></path>
          <path class="weather-conditions-rain-line" d=${path}></path>
          <line class="weather-conditions-selected-line" x1=${selected.x} x2=${selected.x} y1=${box.top} y2=${baseline}></line>
          ${renderConditionsAxisLabels(box, horizontalLines, (ratio) => `${Math.round(100 * ratio)}%`)}
        </svg>
        <span
          class="weather-conditions-selected-dot"
          style=${`left:${((selected.x / box.width) * 100).toFixed(2)}%;top:${((selected.y / box.height) * 100).toFixed(2)}%;`}
        ></span>
      </div>
    </section>
  `;
}

function renderConditionsCombined(host: any, config: WeatherTileConfig, items: ForecastItem[], key: string): TemplateResult | typeof nothing {
  const box: ConditionsChartBox = { width: 360, height: conditionsGraphHeight(config), left: 30, right: 24, top: 15, bottom: 24 };
  const tempData = buildConditionsPoints(items, 'temperature', box);
  const rainData = buildConditionsPoints(items, 'precipitation_probability', box);
  const tempPoints = tempData.points;
  const rainPoints = rainData.points;
  const hasTemp = tempPoints.length >= 2;
  const hasRain = rainPoints.length >= 2;
  if (!hasTemp && !hasRain) return nothing;

  const selectPoints = hasTemp ? tempPoints : rainPoints;
  const selectedBase = conditionsSelectedPoint(host, key, selectPoints);
  const selectedTemp = hasTemp ? nearestPointByTimestamp(tempPoints, selectedBase.timestamp, selectedBase.index) : undefined;
  const selectedRain = hasRain ? nearestPointByTimestamp(rainPoints, selectedBase.timestamp, selectedBase.index) : undefined;
  const selected = selectedTemp || selectedRain || selectedBase;
  const selectedItem = selectedTemp?.item || selectedRain?.item || selectedBase.item;
  const selectedCondition = String(selectedItem.condition || '');
  const baseline = box.height - box.bottom;
  const ticks = conditionsTickIndexes(selectPoints.length);
  const horizontalLines = conditionsHorizontalLineCount(config);
  const safeKey = safeIdPart(key);
  const tempLine = `weather-conditions-combined-temp-line-${safeKey}`;
  const tempFill = `weather-conditions-combined-temp-fill-${safeKey}`;
  const rainFill = `weather-conditions-combined-rain-fill-${safeKey}`;
  const tempPath = hasTemp ? smoothPath(tempPoints) : '';
  const rainPath = hasRain ? smoothPath(rainPoints) : '';
  const tempArea = hasTemp ? areaPath(tempPoints, baseline) : '';
  const rainArea = hasRain ? areaPath(rainPoints, baseline) : '';
  const minPoint = hasTemp ? tempPoints.reduce((best, point) => point.value < best.value ? point : best, tempPoints[0]) : undefined;
  const maxPoint = hasTemp ? tempPoints.reduce((best, point) => point.value > best.value ? point : best, tempPoints[0]) : undefined;
  const icons = hasTemp ? conditionsIconSlots(tempPoints, temperatureIconCount(config)) : [];

  return html`
    <section class="weather-conditions-card weather-conditions-combined">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title"><span>Temperature & Precipitation</span></div>
        <div class="weather-conditions-selected weather-conditions-combined-selected">
          <span>${forecastDateTime(host, selectedItem)}</span>
          ${selectedTemp ? html`<strong>${selectedTemp.value.toFixed(0)}°</strong>` : nothing}
          ${selectedRain ? html`<strong class="weather-conditions-selected-rain">${Math.round(selectedRain.value)}%</strong>` : nothing}
          ${renderWeatherIcon(config, conditionMeteocon(selectedCondition), `weather-conditions-selected-icon weather-condition-${conditionClass(selectedCondition)}`, conditionLabel(selectedCondition), 'inline')}
        </div>
      </div>
      ${icons.length ? html`
        <div class="weather-conditions-icons">
          ${icons.map((slot) => {
            const condition = String(slot.point.item.condition || '');
            return html`
              <span class="weather-conditions-icon-slot" style=${`left:${((slot.x / box.width) * 100).toFixed(2)}%;`}>
                ${renderWeatherIcon(config, conditionMeteocon(condition), `weather-conditions-icon weather-condition-${conditionClass(condition)}`, conditionLabel(condition))}
              </span>
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
          aria-label="Temperature and precipitation forecast graph"
          @pointerdown=${(ev: PointerEvent) => selectConditionsPoint(host, ev, [key], selectPoints, box)}
          @pointermove=${(ev: PointerEvent) => selectConditionsPoint(host, ev, [key], selectPoints, box)}
          @pointerup=${stopConditionsPointer}
          @pointercancel=${stopConditionsPointer}
        >
          <defs>
            ${hasTemp ? svg`
              <linearGradient id=${tempFill} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="rgba(255, 179, 28, 0.56)"></stop>
                <stop offset="54%" stop-color="rgba(255, 179, 28, 0.20)"></stop>
                <stop offset="100%" stop-color="rgba(47, 185, 221, 0.34)"></stop>
              </linearGradient>
              <linearGradient id=${tempLine} x1=${box.left} x2=${box.width - box.right} y1="0" y2="0" gradientUnits="userSpaceOnUse">
                ${tempPoints.map((point, index) => svg`
                  <stop offset=${`${(index / (tempPoints.length - 1)) * 100}%`} stop-color=${temperatureColor(point.value)}></stop>
                `)}
              </linearGradient>
            ` : nothing}
            ${hasRain ? svg`
              <linearGradient id=${rainFill} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="rgba(56, 199, 243, 0.44)"></stop>
                <stop offset="100%" stop-color="rgba(56, 199, 243, 0.08)"></stop>
              </linearGradient>
            ` : nothing}
          </defs>
          ${renderConditionsGrid(host, box, ticks, selectPoints, horizontalLines)}
          ${hasRain ? svg`<path class="weather-conditions-rain-area weather-conditions-combined-rain-area" d=${rainArea} fill=${`url(#${rainFill})`}></path>` : nothing}
          ${hasTemp ? svg`<path class="weather-conditions-area" d=${tempArea} fill=${`url(#${tempFill})`}></path>` : nothing}
          ${hasRain ? svg`<path class="weather-conditions-line-shadow weather-conditions-rain-shadow" d=${rainPath}></path>` : nothing}
          ${hasRain ? svg`<path class="weather-conditions-rain-line" d=${rainPath}></path>` : nothing}
          ${hasTemp ? svg`<path class="weather-conditions-line-shadow" d=${tempPath}></path>` : nothing}
          ${hasTemp ? svg`<path class="weather-conditions-temp-line" d=${tempPath} stroke=${`url(#${tempLine})`}></path>` : nothing}
          ${minPoint ? svg`<text class="weather-conditions-extreme" x=${minPoint.x} y=${Math.max(12, minPoint.y - 9)}>L</text>` : nothing}
          ${maxPoint ? svg`<text class="weather-conditions-extreme" x=${maxPoint.x} y=${Math.max(12, maxPoint.y - 9)}>H</text>` : nothing}
          <line class="weather-conditions-selected-line" x1=${selected.x} x2=${selected.x} y1=${box.top} y2=${baseline}></line>
          ${hasTemp ? renderConditionsAxisLabels(
            box,
            horizontalLines,
            (ratio) => `${(tempData.min + ((tempData.max - tempData.min) * ratio)).toFixed(0)}°`,
          ) : nothing}
          ${hasRain ? renderConditionsAxisLabels(
            box,
            horizontalLines,
            (ratio) => `${Math.round(100 * ratio)}%`,
            'weather-conditions-axis weather-conditions-axis-rain weather-conditions-axis-left',
            2,
          ) : nothing}
        </svg>
        ${selectedTemp ? html`
          <span
            class="weather-conditions-selected-dot"
            style=${`left:${((selectedTemp.x / box.width) * 100).toFixed(2)}%;top:${((selectedTemp.y / box.height) * 100).toFixed(2)}%;`}
          ></span>
        ` : nothing}
        ${selectedRain ? html`
          <span
            class="weather-conditions-selected-dot"
            style=${`left:${((selectedRain.x / box.width) * 100).toFixed(2)}%;top:${((selectedRain.y / box.height) * 100).toFixed(2)}%;`}
          ></span>
        ` : nothing}
      </div>
    </section>
  `;
}

function renderWeatherConditionsPanel(host: any, config: WeatherTileConfig, items: ForecastItem[], fields: ForecastFieldKey[], key: string, syncGraphs: boolean): TemplateResult | typeof nothing {
  if (items.length < 2) return nothing;
  const tempKey = `${key}-temperature`;
  const precipKey = `${key}-precipitation`;
  if (forecastGraphMode(config) === 'combined' && (fields.includes('temperature') || fields.includes('precipitation_probability'))) {
    const combined = renderConditionsCombined(host, config, items, `${key}-combined`);
    if (combined === nothing) return nothing;
    return html`
      <div class="weather-conditions-panel">
        ${combined}
      </div>
    `;
  }
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
  const forecastSources = Array.isArray(config.forecast_sources)
    ? config.forecast_sources.filter((source) => source?.entity)
    : [];
  const forecastEntity = config.selected_forecast_entity || config.forecast_entity || config.entity;
  const conditionState = cleanState(stateObj(host, forecastEntity)).toLowerCase();
  const name = config.name || 'Weather';
  const temp = formatTemperature(host, config.temp_sensor);
  const humidity = formatHumidity(host, config.humidity_sensor);
  const feels = formatTemperature(host, config.feels_like_sensor);
  const metrics = buildMetrics(host, config);
  const forecastItems = config.show_forecast === false ? [] : normalizeForecast(config.forecast);
  const dailyForecastItems = config.show_forecast === false ? [] : normalizeForecast(config.daily_forecast);
  const showForecastSourcePicker = config.show_forecast !== false && forecastSources.length > 1;
  const forecastSlotsRaw = Number(config.forecast_slots);
  const forecastSlots = Number.isFinite(forecastSlotsRaw) && forecastSlotsRaw > 0
    ? Math.min(Math.floor(forecastSlotsRaw), 72)
    : 8;
  const forecastFields = normalizeForecastFields(config.forecast_fields);
  const visibleForecast = forecastItems.slice(0, forecastSlots);
  const displayConditionState = String(forecastItems[0]?.condition || conditionState || '').toLowerCase();
  const iconCondition = displayConditionState || conditionState;
  const iconClass = `weather-icon weather-condition-${conditionClass(iconCondition)}`;
  const conditionsKey = config.forecast_graph_key || `weather-${config.entity || name}`;
  const syncGraphs = config.sync_graphs !== false;
  const conditionsPanel = renderWeatherConditionsPanel(host, config, visibleForecast, forecastFields, conditionsKey, syncGraphs);
  const dailyForecast = renderDailyForecast(host, config, dailyForecastItems, forecastItems);
  const chips = Array.isArray(config.chips) ? config.chips : [];
  const tempSize = configNumber(config.temp_size ?? config.temperature_size, 18, 56);
  const iconSize = configNumber(config.icon_size, 28, 160);
  const graphHeight = configNumber(config.graph_height, 82, 260);
  const iconOffsetX = Number(config.icon_offset_x);
  const iconOffsetY = Number(config.icon_offset_y);
  const conditionsIconSize = configNumber(config.conditions_icon_size, 8, 48);
  const conditionsIconScale = configNumber(config.conditions_icon_scale, 0.5, 2.5);
  const temperatureReadoutIconSize = configNumber(config.temperature_readout_icon_size, 8, 48);
  const temperatureReadoutIconScale = configNumber(config.temperature_readout_icon_scale, 0.5, 2.5);
  const dailyIconSize = configNumber(config.daily_icon_size, 8, 48);
  const metricColumnsRaw = Number(config.metric_columns);
  const metricColumns = Number.isFinite(metricColumnsRaw) && metricColumnsRaw > 0
    ? Math.max(1, Math.min(4, Math.round(metricColumnsRaw)))
    : DEFAULT_METRIC_COLUMNS;
  const stale = isWeatherStale(host, config);
  const styleParts = [
    tempSize ? `--weather-temp-size:${tempSize}px;` : '',
    iconSize ? `--weather-icon-size:${iconSize}px;--weather-icon-bg-size:${iconSize + 16}px;` : '',
    Number.isFinite(iconOffsetX) ? `--weather-icon-x:${iconOffsetX}px;` : '',
    Number.isFinite(iconOffsetY) ? `--weather-icon-y:${iconOffsetY}px;` : '',
    conditionsIconSize ? `--weather-conditions-icon-size:${conditionsIconSize}px;` : '',
    conditionsIconScale ? `--weather-conditions-icon-scale:${conditionsIconScale};` : '',
    temperatureReadoutIconSize ? `--weather-conditions-selected-icon-size:${temperatureReadoutIconSize}px;` : '',
    temperatureReadoutIconScale ? `--weather-conditions-selected-icon-scale:${temperatureReadoutIconScale};` : '',
    dailyIconSize ? `--weather-daily-icon-size:${dailyIconSize}px;` : '',
    graphHeight ? `--weather-graph-height:${graphHeight}px;` : '',
    `--weather-metric-columns:${metricColumns};`,
  ].filter(Boolean);
  const heightStyle = styleParts.join('');
  const forecastSourcePicker = showForecastSourcePicker ? html`
    <div class="weather-source-picker weather-forecast-source-picker" role="tablist" aria-label="Weather forecast source">
      ${forecastSources.map((source) => {
        const active = source.entity === forecastEntity;
        const label = source.name || friendlyName(host, source.entity);
        return html`
          <button
            class=${`weather-source-option${active ? ' active' : ''}`}
            type="button"
            role="tab"
            aria-selected=${active ? 'true' : 'false'}
            title=${`Use ${label} forecast`}
            @pointerdown=${stopTileAction}
            @click=${(ev: Event) => selectForecastSource(host, ev, config.forecast_source_key, source.entity)}
            @keyup=${(ev: KeyboardEvent) => selectForecastSourceFromKeyboard(host, ev, config.forecast_source_key, source.entity)}
          >${label}</button>
        `;
      })}
    </div>
  ` : nothing;

  return html`
    <div class=${`tile-wrap weather-tile-wrap${stale ? ' weather-tile-stale' : ''}`} style=${heightStyle}>
      <div class="weather-tile">
        <div class="weather-content">
          <div class="weather-top">
            <div class="weather-heading">
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
            <div class="weather-icon-wrap" aria-hidden="true">
              ${config.icon
                ? html`<ha-icon class=${iconClass} .icon=${config.icon}></ha-icon>`
                : renderWeatherIcon(config, conditionMeteocon(iconCondition), iconClass, conditionLabel(iconCondition), 'inline')}
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
                @hass-action=${(ev: CustomEvent) => {
                  if (typeof host?._onWeatherMetricAction === 'function') host._onWeatherMetricAction(ev, item);
                }}
                .actionHandler=${actionHandler({ hasHold: true, hasDoubleClick: !!item.double_tap_action })}
              >
                ${item.mdi
                  ? html`<ha-icon class="weather-metric-icon" .icon=${item.mdi}></ha-icon>`
                  : item.icon
                    ? renderWeatherIcon('meteocons', item.icon, 'weather-metric-icon', item.label)
                    : renderMetricStateIcon(host, item)}
                <span class="weather-metric-label">${item.label}</span>
                <span class="weather-metric-value">${item.value}</span>
              </div>
            `)}
          </div>

          ${forecastSourcePicker}
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
