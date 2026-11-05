/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, nothing, TemplateResult } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { chartFrame, chartLegend, chartReadout, formatHassDate, formatHassDateTime, formatHassNumber, formatHassTime, hassTimeZone, stateChip } from '@bitosome/ha-card-ui';
import type {
  ChartAxisOptions,
  ChartModel,
  ChartPoint,
  ChartSeries,
  FamilyChartController,
  TimeSeriesChartOptions,
} from '@bitosome/ha-card-ui';
import { actionHandler } from '../action-handler-directive';
import { renderInteractiveChip } from '../chips';
import { buildTileGlow, STALE_GLOW } from '../glow';
import { isEntityUnavailable } from '../shared/availability';
import { METEOCON_ICONS } from '../assets/meteocons';
import type { MeteoconIconKey } from '../assets/meteocons';

const DEFAULT_GRAPH_HORIZONTAL_LINES = 5;
const HOUR_MS = 60 * 60 * 1000;
const RAIN_COLOR = 'var(--space-hub-rain-color, #38c7f3)';

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
  valueColor?: string;
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

interface ForecastValue {
  item: ForecastItem;
  value: number;
}

type ForecastPoint = ChartPoint<ForecastItem>;

interface ConditionsIconSlot {
  item: ForecastItem;
  t: number;
}

interface DayTemperatureStats {
  low?: ForecastValue;
  high?: ForecastValue;
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

// Same precision per quantity as the room tiles, in the HA profile's number format.
function formatNumber(host: any, value: string | number | undefined, digits: number, compact = false): string {
  if (value === undefined || value === null || value === '') return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return String(value);
  if (compact && Math.abs(n) >= 1000) return `${formatHassNumber(host?.hass, n / 1000, { digits: 1 })}k`;
  return formatHassNumber(host?.hass, n, { digits });
}

function formatEntity(host: any, entityId: string | undefined, digits: number, compact = false): string {
  const st = stateObj(host, entityId);
  const value = cleanState(st);
  if (!value) return '—';
  const unit = st?.attributes?.unit_of_measurement || '';
  const formatted = formatNumber(host, value, digits, compact);
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
  const formatted = formatNumber(host, num, digits);
  return unit ? `${formatted} ${unit}` : formatted;
}

interface UvRisk {
  label: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
  color: string;
}

function uvRisk(index: number): UvRisk {
  if (index < 3) return { label: 'Low', color: '#4caf50' };
  if (index < 6) return { label: 'Moderate', color: '#fbc02d' };
  if (index < 8) return { label: 'High', color: '#fb8c00' };
  if (index < 11) return { label: 'Very High', color: '#e53935' };
  return { label: 'Extreme', color: '#ab47bc' };
}

function isUvMetric(config: WeatherTileConfig, source: MetricSource, state: any): boolean {
  const type = String(source.type || '').toLowerCase();
  const unit = String(state?.attributes?.unit_of_measurement || '').toLowerCase();
  const deviceClass = String(state?.attributes?.device_class || '').toLowerCase();
  return type === 'uv'
    || source.entity === config.uv_sensor
    || unit.includes('uv index')
    || deviceClass === 'ultraviolet_index';
}

function formatUvMetric(host: any, entityId?: string): { value: string; color?: string } {
  const index = numericState(host, entityId);
  if (index === undefined) return { value: '—' };
  const risk = uvRisk(index);
  const formatted = formatNumber(host, index, Number.isInteger(index) ? 0 : 1);
  return { value: `${formatted} · ${risk.label}`, color: risk.color };
}

function formatTemperature(host: any, entityId?: string): string {
  const value = numericState(host, entityId);
  return value === undefined ? '—°' : `${formatNumber(host, value, 1)}°`;
}

function formatHumidity(host: any, entityId?: string): string {
  const value = numericState(host, entityId);
  return value === undefined ? '—%' : `${formatNumber(host, value, 0)}%`;
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
      const uv = isUvMetric(config, m, st) ? formatUvMetric(host, m.entity) : undefined;
      return {
        label,
        value: uv?.value ?? formatEntityAuto(host, m.entity),
        valueColor: uv?.color,
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
    { type: 'uv', entity: config.uv_sensor, name: 'UV' },
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

// Same clock, language and time zone as the graph labels (HA profile and server zone).
function forecastTime(host: any, item: ForecastItem): string {
  if (forecastTimestamp(item) === undefined) return '';
  return formatHassTime(host?.hass, item.datetime);
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

// Forecasts arrive as JSON, so a missing value is null (or an empty string); Number()
// would read both as 0. Only real numbers count.
function forecastNumber(raw: unknown): number | undefined {
  if (raw === null || raw === undefined || (typeof raw === 'string' && !raw.trim())) return undefined;
  const value = Number(raw);
  return Number.isFinite(value) ? value : undefined;
}

function forecastGraphValue(item: ForecastItem, field: ForecastFieldKey): number | undefined {
  return forecastNumber(item[field]);
}

function forecastTimestamp(item: ForecastItem): number | undefined {
  if (!item.datetime) return undefined;
  const time = new Date(item.datetime).getTime();
  return Number.isFinite(time) ? time : undefined;
}

// Chart points in time order. A missing value stays null, so the shared chart breaks
// the line there instead of bridging the hour or drawing it as zero.
function forecastPoints(items: ForecastItem[], field: ForecastFieldKey): ForecastPoint[] {
  return items
    .reduce<ForecastPoint[]>((acc, item) => {
      const t = forecastTimestamp(item);
      if (t !== undefined) acc.push({ t, v: forecastGraphValue(item, field) ?? null, data: item });
      return acc;
    }, [])
    .sort((a, b) => a.t - b.t);
}

function finiteForecastPoints(points: ForecastPoint[]): ForecastPoint[] {
  return points.filter((point) => point.v !== null);
}

// A graph needs two values; a forecast without the field (many integrations have no
// precipitation chance) hides that graph instead of showing an empty frame.
function hasGraphData(points: ForecastPoint[]): boolean {
  return finiteForecastPoints(points).length >= 2;
}

// A step between forecast entries is a gap when it is over 1.5 times the steps on both
// sides of it (a dropped entry). A forecast that changes resolution part-way (met.no:
// hourly, then 6-hourly) repeats its longer step, so the coarser tail stays one line.
function forecastGapSteps(points: ForecastPoint[]): boolean[] {
  const steps = points.slice(1).map((point, index) => point.t - points[index].t);
  return steps.map((step, index) => {
    const neighbours = [steps[index - 1], steps[index + 1]].filter((other): other is number => other !== undefined && other > 0);
    return neighbours.length === 2 && neighbours.every((other) => step > other * 1.5);
  });
}

// Series points with a null after each gap step, so the shared chart breaks the line there.
function forecastSeriesPoints(points: ForecastPoint[]): ForecastPoint[] {
  const gaps = forecastGapSteps(points);
  return points.flatMap((point, index) => (
    gaps[index] ? [point, { t: (point.t + points[index + 1].t) / 2, v: null }] : [point]
  ));
}

// 1.5 times the longest regular step (hourly: 90 min). Gaps are already nulls; this keeps
// a coarser forecast tail joined and limits how far a synced value may be from the cursor.
function forecastMaxGapMs(points: ForecastPoint[]): number {
  const gaps = forecastGapSteps(points);
  const steps = points
    .slice(1)
    .map((point, index) => point.t - points[index].t)
    .filter((step, index) => step > 0 && !gaps[index]);
  return (steps.length ? Math.max(...steps) : HOUR_MS) * 1.5;
}

function temperatureIconCount(config: WeatherTileConfig): number {
  const raw = Number(config.temperature_icon_count);
  if (!Number.isFinite(raw)) return DEFAULT_TEMPERATURE_ICON_COUNT;
  return Math.max(0, Math.min(72, Math.floor(raw)));
}

// Up to maxIcons condition icons spread evenly over the forecast time span; each shows
// the condition of the forecast point nearest its time.
function conditionsIconSlots(points: ForecastPoint[], maxIcons: number): ConditionsIconSlot[] {
  if (maxIcons <= 0 || !points.length) return [];
  const slot = (point: ForecastPoint, t = point.t): ConditionsIconSlot => ({ item: point.data as ForecastItem, t });
  if (points.length <= maxIcons) return points.map((point) => slot(point));

  const first = points[0].t;
  const span = points[points.length - 1].t - first;
  if (!Number.isFinite(span) || span <= 0) return [];

  const nearestPoint = (t: number) => points.reduce((best, point) => (
    Math.abs(point.t - t) < Math.abs(best.t - t) ? point : best
  ), points[0]);

  if (maxIcons === 1) {
    const t = first + span / 2;
    return [slot(nearestPoint(t), t)];
  }

  return Array.from({ length: maxIcons }, (_, index) => {
    const t = first + (index / (maxIcons - 1)) * span;
    return slot(nearestPoint(t), t);
  });
}

// Days follow the HA time zone, the same one the graph labels and low/high times use.
function dayKey(host: any, value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: hassTimeZone(host?.hass),
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const part = (type: string) => parts.find((entry) => entry.type === type)?.value || '';
  return `${part('year')}-${part('month')}-${part('day')}`;
}

function dayLabel(host: any, value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(host?.hass?.locale?.language, { weekday: 'long', timeZone: hassTimeZone(host?.hass) }).format(date);
}

function dateLabel(host: any, value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(host?.hass?.locale?.language, { day: 'numeric', month: 'long', timeZone: hassTimeZone(host?.hass) }).format(date);
}

function hourlyTemperatureStats(host: any, items: ForecastItem[]): Map<string, DayTemperatureStats> {
  const stats = new Map<string, DayTemperatureStats>();
  items.forEach((item) => {
    const key = dayKey(host, item.datetime);
    const value = forecastGraphValue(item, 'temperature');
    if (!key || value === undefined) return;
    const point: ForecastValue = { item, value };
    const existing = stats.get(key) || {};
    if (!existing.low || value < existing.low.value) existing.low = point;
    if (!existing.high || value > existing.high.value) existing.high = point;
    stats.set(key, existing);
  });
  return stats;
}

function dailyTemperatureValue(item: ForecastItem, key: 'temperature' | 'templow'): number | undefined {
  return forecastNumber(item[key]);
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
  const hourlyStats = hourlyTemperatureStats(host, hourlyItems);
  const { min, max } = dailyTemperatureRange(rows, hourlyItems);
  const today = dayKey(host, new Date().toISOString());
  const currentTemp = currentTemperatureValue(host, config);

  return html`
    <section class="weather-daily-forecast">
      <div class="weather-daily-forecast-heading">
        <span>Daily Forecast</span>
      </div>
      ${rows.map((item) => {
        const key = dayKey(host, item.datetime);
        const stats = hourlyStats.get(key);
        const low = dailyTemperatureValue(item, 'templow') ?? stats?.low?.value;
        const high = dailyTemperatureValue(item, 'temperature') ?? stats?.high?.value;
        if (low === undefined || high === undefined) return nothing;
        const left = rangePercent(low, min, max);
        const right = rangePercent(high, min, max);
        const width = Math.max(4, right - left);
        const condition = String(item.condition || '');
        const rainProbability = forecastNumber(item.precipitation_probability);
        const rainProbabilityLabel = rainProbability !== undefined ? `Rain ${Math.round(rainProbability)}%` : '';
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

// Extra forecast sources are optional, so they never raise the tile fault glow:
// the primary weather entity and the station sensors still do.
function weatherFaultConfig(config: WeatherTileConfig): WeatherTileConfig {
  return { ...config, forecast_sources: undefined, selected_forecast_entity: undefined, forecast_entity: undefined };
}

// "since 06:24" today, "since 4 Nov, 21:19" on an earlier day.
function forecastOutageSince(host: any, entityId?: string): string {
  const changed = stateObj(host, entityId)?.last_changed;
  const at = changed ? new Date(changed) : undefined;
  if (!at || Number.isNaN(at.getTime())) return '';
  const sameDay = formatHassDate(host?.hass, at) === formatHassDate(host?.hass, new Date());
  const time = sameDay ? formatHassTime(host?.hass, at) : formatHassDateTime(host?.hass, at, { year: false });
  return time ? `since ${time}` : '';
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

// Whole degrees; -0.4 reads 0°, not -0°.
function formatDegrees(host: any, value: number): string {
  return `${formatHassNumber(host?.hass, Math.round(value) || 0, { digits: 0 })}°`;
}

// HA locale digits; the percent sign attaches without a space, like degrees (the family rule).
function formatPercent(host: any, value: number): string {
  return `${formatHassNumber(host?.hass, Math.round(value) || 0, { digits: 0 })}%`;
}

function temperatureSeries(host: any, points: ForecastPoint[], maxGapMs: number): ChartSeries<ForecastItem> {
  return {
    id: 'temperature',
    label: 'Temperature',
    points,
    curve: 'smooth',
    maxGapMs,
    colorAt: (point) => temperatureColor(point.v as number),
    colorBlend: 'smooth',
    extremes: true,
    format: (value) => formatDegrees(host, value),
  };
}

function precipitationSeries(host: any, points: ForecastPoint[], maxGapMs: number, axis: 'primary' | 'secondary' = 'primary'): ChartSeries<ForecastItem> {
  return {
    id: 'precipitation',
    label: 'Chance of precipitation',
    points,
    curve: 'smooth',
    maxGapMs,
    axis,
    color: RAIN_COLOR,
    format: (value) => formatPercent(host, value),
  };
}

function temperatureAxis(host: any): ChartAxisOptions {
  return { pad: 0, minSpan: 1, integer: true, format: (value) => formatDegrees(host, value) };
}

function precipitationAxis(host: any): ChartAxisOptions {
  return { min: 0, max: 100, format: (value) => formatPercent(host, value) };
}

function conditionsChartOptions(
  host: any,
  config: WeatherTileConfig,
  chart: Pick<TimeSeriesChartOptions<ForecastItem>, 'id' | 'label' | 'series' | 'axes' | 'selectionGroup'>,
): TimeSeriesChartOptions<ForecastItem> {
  return {
    ...chart,
    hass: host?.hass,
    height: conditionsGraphHeight(config),
    lines: conditionsHorizontalLineCount(config),
  };
}

// Head readout: selected time and values, plus the selected hour's condition icon.
function renderConditionsReadout(host: any, config: WeatherTileConfig, model: ChartModel<ForecastItem>, withIcon: boolean): unknown {
  const item = model.selection?.values.find((value) => value.point)?.point?.data;
  const condition = String(item?.condition || '');
  const icon = withIcon && item
    ? renderWeatherIcon(
      config,
      conditionMeteocon(condition),
      `weather-conditions-selected-icon weather-condition-${conditionClass(condition)}`,
      conditionLabel(condition),
      'inline',
    )
    : nothing;
  return chartReadout(model, { hass: host?.hass, extra: icon });
}

// Icon strip above the plot, aligned to the chart's time scale.
function renderConditionsIcons(config: WeatherTileConfig, model: ChartModel<ForecastItem>, points: ForecastPoint[]): TemplateResult | typeof nothing {
  const slots = conditionsIconSlots(finiteForecastPoints(points), temperatureIconCount(config));
  if (!slots.length) return nothing;
  return html`
    <div class="weather-conditions-icons">
      ${slots.map((slot) => {
        const condition = String(slot.item.condition || '');
        return html`
          <span class="weather-conditions-icon-slot" style=${`left:${model.xPercent(slot.t).toFixed(2)}%;`}>
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
  `;
}

function renderConditionsTemperature(host: any, config: WeatherTileConfig, items: ForecastItem[], id: string, selectionGroup: string): TemplateResult | typeof nothing {
  const charts: FamilyChartController | undefined = host?._charts;
  const points = forecastPoints(items, 'temperature');
  if (!charts || !hasGraphData(points)) return nothing;
  const view = charts.render(conditionsChartOptions(host, config, {
    id,
    label: 'Temperature forecast graph',
    selectionGroup,
    series: [temperatureSeries(host, forecastSeriesPoints(points), forecastMaxGapMs(points))],
    axes: { primary: temperatureAxis(host) },
  }));
  return chartFrame({
    className: 'weather-conditions-graph weather-conditions-temp',
    title: 'Temperature',
    readout: renderConditionsReadout(host, config, view.model, true),
    above: renderConditionsIcons(config, view.model, points),
    body: view.svg,
  });
}

function renderConditionsPrecipitation(host: any, config: WeatherTileConfig, items: ForecastItem[], id: string, selectionGroup: string): TemplateResult | typeof nothing {
  const charts: FamilyChartController | undefined = host?._charts;
  const points = forecastPoints(items, 'precipitation_probability');
  if (!charts || !hasGraphData(points)) return nothing;
  const view = charts.render(conditionsChartOptions(host, config, {
    id,
    label: 'Chance of precipitation forecast graph',
    selectionGroup,
    series: [precipitationSeries(host, forecastSeriesPoints(points), forecastMaxGapMs(points))],
    axes: { primary: precipitationAxis(host) },
  }));
  return chartFrame({
    className: 'weather-conditions-graph weather-conditions-rain',
    title: 'Chance of Precipitation',
    readout: renderConditionsReadout(host, config, view.model, false),
    body: view.svg,
  });
}

// One graph: temperature on the right axis, precipitation chance on the left in its own colour.
// With both series, the shared legend names them (temperature as its colour scale).
function renderConditionsCombined(host: any, config: WeatherTileConfig, items: ForecastItem[], id: string): TemplateResult | typeof nothing {
  const charts: FamilyChartController | undefined = host?._charts;
  const tempPoints = forecastPoints(items, 'temperature');
  const rainPoints = forecastPoints(items, 'precipitation_probability');
  const hasTemp = hasGraphData(tempPoints);
  const hasRain = hasGraphData(rainPoints);
  if (!charts || (!hasTemp && !hasRain)) return nothing;
  const maxGapMs = forecastMaxGapMs(hasTemp ? tempPoints : rainPoints);
  const series: ChartSeries<ForecastItem>[] = [];
  if (hasTemp) series.push(temperatureSeries(host, forecastSeriesPoints(tempPoints), maxGapMs));
  if (hasRain) series.push(precipitationSeries(host, forecastSeriesPoints(rainPoints), maxGapMs, 'secondary'));
  const view = charts.render(conditionsChartOptions(host, config, {
    id,
    label: 'Temperature and precipitation forecast graph',
    series,
    axes: { primary: temperatureAxis(host), secondary: precipitationAxis(host) },
  }));
  return chartFrame({
    className: 'weather-conditions-graph weather-conditions-combined',
    title: 'Temperature & Precipitation',
    readout: renderConditionsReadout(host, config, view.model, true),
    legend: series.length > 1 ? chartLegend(series) : nothing,
    above: hasTemp ? renderConditionsIcons(config, view.model, tempPoints) : nothing,
    body: view.svg,
  });
}

function renderWeatherConditionsPanel(host: any, config: WeatherTileConfig, items: ForecastItem[], fields: ForecastFieldKey[], key: string, syncGraphs: boolean): TemplateResult | typeof nothing {
  if (items.length < 2) return nothing;
  if (forecastGraphMode(config) === 'combined' && (fields.includes('temperature') || fields.includes('precipitation_probability'))) {
    const combined = renderConditionsCombined(host, config, items, `${key}-combined`);
    if (combined === nothing) return nothing;
    return html`
      <div class="weather-conditions-panel">
        ${combined}
      </div>
    `;
  }
  const tempKey = `${key}-temperature`;
  const precipKey = `${key}-precipitation`;
  // Synced graphs share one selected time; otherwise each graph keeps its own.
  const syncGroup = `${key}-sync`;
  const temperature = fields.includes('temperature')
    ? renderConditionsTemperature(host, config, items, tempKey, syncGraphs ? syncGroup : tempKey)
    : nothing;
  const precipitation = fields.includes('precipitation_probability')
    ? renderConditionsPrecipitation(host, config, items, precipKey, syncGraphs ? syncGroup : precipKey)
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
  // Stale data shows a warning-tone glow plus a text label; unavailable still wins.
  const { style: glowStyle, overlay: glowOverlay, unavailable } = buildTileGlow(host, weatherFaultConfig(config), STALE_GLOW, 'static', stale);
  // An unavailable source keeps the last forecast it sent, so show that forecast and say it is not updating.
  const forecastOutage = config.show_forecast !== false && isEntityUnavailable(host, forecastEntity);
  const forecastOutageLabel = forecastSources.length > 1
    ? `${forecastSources.find((source) => source.entity === forecastEntity)?.name || friendlyName(host, forecastEntity)} forecast not updating`
    : 'Forecast not updating';
  const forecastOutageSinceText = forecastOutage ? forecastOutageSince(host, forecastEntity) : '';
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
    `--weather-metric-columns:${metricColumns};`,
  ].filter(Boolean);
  const heightStyle = styleParts.join('');
  const forecastSourcePicker = showForecastSourcePicker ? html`
    <div class="weather-source-picker weather-forecast-source-picker" role="tablist" aria-label="Weather forecast source">
      ${forecastSources.map((source) => {
        const active = source.entity === forecastEntity;
        const label = source.name || friendlyName(host, source.entity);
        const down = isEntityUnavailable(host, source.entity);
        const since = down ? forecastOutageSince(host, source.entity) : '';
        const title = down
          ? `Use ${label} forecast (not updating${since ? ` ${since}` : ''})`
          : `Use ${label} forecast`;
        return html`
          <button
            class=${`weather-source-option${active ? ' active' : ''}${down ? ' weather-source-down' : ''}`}
            type="button"
            role="tab"
            aria-selected=${active ? 'true' : 'false'}
            aria-label=${down ? `${label}, not updating` : label}
            title=${title}
            @pointerdown=${stopTileAction}
            @click=${(ev: Event) => selectForecastSource(host, ev, config.forecast_source_key, source.entity)}
            @keyup=${(ev: KeyboardEvent) => selectForecastSourceFromKeyboard(host, ev, config.forecast_source_key, source.entity)}
          >${label}</button>
        `;
      })}
    </div>
  ` : nothing;

  return html`
    <div class=${`tile-wrap weather-tile-container${unavailable ? ' tile-unavailable' : ''}`}>
      <div class="glow-under" style=${glowStyle}>${glowOverlay}</div>
      <div class=${`weather-tile-wrap${stale ? ' weather-tile-stale' : ''}`} style=${heightStyle}>
        <div class="weather-tile">
          <div class=${`weather-content${chips.length ? ' weather-content-chips' : ''}`}>
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
              ${stale
                ? stateChip({ label: 'Data stale', icon: 'mdi:clock-alert-outline', tone: 'warning', className: 'weather-stale' })
                : nothing}
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
                <span class="weather-metric-value" style=${item.valueColor ? `color:${item.valueColor}` : nothing}>${item.value}</span>
              </div>
            `)}
          </div>

          ${forecastSourcePicker !== nothing || forecastOutage
            ? html`<div class="weather-source-row">
                ${forecastSourcePicker}
                ${forecastOutage
                  ? stateChip({
                      label: forecastOutageLabel,
                      icon: 'mdi:cloud-alert-outline',
                      tone: 'warning',
                      secondary: forecastOutageSinceText || undefined,
                      // stateChip appends the secondary time to the spoken label.
                      ariaLabel: `${forecastOutageLabel}, showing the last forecast received`,
                      className: 'weather-forecast-outage',
                    })
                  : nothing}
              </div>`
            : nothing}
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
    </div>
  `;
}
