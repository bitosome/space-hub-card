/* eslint-disable @typescript-eslint/no-explicit-any */

const ENTITY_KEYS = new Set([
  'entity',
  'entity_id',
  'forecast_entity',
  'selected_forecast_entity',
  'tap_entity',
  'hold_entity',
  'double_tap_entity',
  'light_group_entity',
  'temp_sensor',
  'temp_min_24h_sensor',
  'temp_max_24h_sensor',
  'humidity_sensor',
  'feels_like_sensor',
  'dewpoint_sensor',
  'wind_speed_sensor',
  'wind_gust_sensor',
  'wind_direction_sensor',
  'rain_state_sensor',
  'rain_today_sensor',
  'rain_rate_sensor',
  'uv_sensor',
  'solar_lux_sensor',
  'pressure_sensor',
  'camera_image',
]);

const UNAVAILABLE_STATES = new Set(['', 'unavailable', 'unknown', 'offline', 'none']);

function isEntityId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-z0-9_]+\.[a-z0-9_]+$/i.test(value.trim());
}

/** Collect only entity references owned by one tile's configuration. */
export function tileEntityIds(config: unknown): string[] {
  const ids = new Set<string>();
  const visited = new WeakSet<object>();

  const collect = (value: unknown): void => {
    if (isEntityId(value)) {
      ids.add(value.trim());
      return;
    }
    if (Array.isArray(value)) value.forEach(collect);
  };

  const walk = (value: unknown): void => {
    if (!value || typeof value !== 'object') return;
    const objectValue = value as object;
    if (visited.has(objectValue)) return;
    visited.add(objectValue);

    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }

    Object.entries(value as Record<string, unknown>).forEach(([key, entry]) => {
      if (ENTITY_KEYS.has(key)) {
        collect(entry);
      } else if (entry && typeof entry === 'object') {
        walk(entry);
      }
    });
  };

  walk(config);
  return [...ids];
}

/** Missing entities and explicit unavailable states are both tile faults. */
export function isEntityUnavailable(host: any, entityId?: string): boolean {
  if (!entityId || !host?.hass) return false;
  const stateObj = host.hass.states?.[entityId];
  if (!stateObj) return true;
  return UNAVAILABLE_STATES.has(String(stateObj.state ?? '').toLowerCase());
}

export function hasUnavailableEntities(host: any, config: unknown): boolean {
  if (!host?.hass) return false;
  return tileEntityIds(config).some((entityId) => isEntityUnavailable(host, entityId));
}
