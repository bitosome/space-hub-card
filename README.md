# Space Hub Card

`space-hub-card` is a custom Home Assistant Lovelace card for dense room dashboards. It combines room tiles, switch rows, optional climate controls, embedded Home Assistant cards, and a full weather station tile in one consistent visual system.

The card is designed for dashboards where the first screen should show useful state immediately: temperatures, humidity, lights, locks, doors, sensors, switch controls, weather station readings, and forecast trends.

## Highlights

- Multiple header rows in one card.
- Main room tile with room name, icon, temperature, humidity, status chips, and light-group control.
- Optional weather tile per header row.
- Optional AC and thermostat companion tiles.
- Switch rows with `switch`, `smart_plug`, and `lock` styles.
- Native Home Assistant action support for tap, hold, and double tap.
- Switch confirmation dialogs.
- Live switch info overlays from Home Assistant templates.
- Embedded standard Home Assistant cards below switch rows or at the bottom of the card.
- Unavailable-state pulse detection across configured entities.
- Visual editor with entity selectors, icon pickers, YAML mode, reordering, and embedded-card editing.
- HACS-ready release artifact.

## Weather Tile

The weather tile can combine two data sources:

- Local sensor data from a weather station integration such as Ecowitt.
- Forecast data from a Home Assistant `weather` entity.

Local sensor values are used for the current readings and metric grid. Forecast values are used for the headline, animated condition icon, temperature graph, precipitation graph, and daily forecast. Forecast-derived labels are marked with a small blue dot.

Current weather tile features:

- Current temperature and humidity.
- Feels-like temperature.
- Locally bundled animated weather icons with selectable `meteocons` and `realistic` sets.
- Sensor metric grid with configurable column count.
- Configurable custom metrics.
- Special rain metric with configurable raining and no-rain MDI icons.
- Weather forecast headline that opens weather entity more-info.
- Clickable local sensor values and grid metrics that open the related entity more-info.
- Apple Weather-style temperature graph.
- Apple Weather-style precipitation probability graph.
- Synced graph selectors.
- Full date and time labels on graphs.
- Configurable forecast graph hours.
- Configurable graph height.
- Configurable temperature graph icon count.
- Daily forecast rows with min/max temperatures, min/max times where hourly data is available, rain probability, current-temperature marker, and temperature-color range bars.
- Optional stale-data glow based on entity `last_updated`.

## Installation

### HACS

1. Open HACS.
2. Go to `Frontend`.
3. Search for `Space Hub Card`.
4. Download the card.
5. Refresh the browser.

If the repository is not available in your HACS list, add it as a custom repository:

```text
https://github.com/bitosome/space-hub-card
```

Use category `Lovelace`.

HACS installs the resource as:

```yaml
url: /hacsfiles/space-hub-card/space-hub-card.js
type: module
```

### Manual

1. Download `space-hub-card.js` from the latest GitHub release.
2. Copy it to Home Assistant, for example:

```text
/config/www/space-hub-card/space-hub-card.js
```

3. Add the Lovelace resource:

```yaml
url: /local/space-hub-card/space-hub-card.js
type: module
```

4. Refresh the browser.

## Minimal Example

```yaml
type: custom:space-hub-card
headers:
  - main:
      main_name: Living Room
      main_icon: mdi:sofa-outline
      light_group_entity: light.living_room
      temp_sensor: sensor.living_room_temperature
      humidity_sensor: sensor.living_room_humidity
switch_rows:
  - row:
      - entity: switch.floor_lamp
        name: Floor Lamp
        icon: mdi:floor-lamp
      - entity: switch.media_corner
        name: Media
        icon: mdi:television-speaker
```

## Weather Example

```yaml
type: custom:space-hub-card
tile_height: 88
headers:
  - weather:
      entity: weather.home
      icon_set: realistic
      temp_sensor: sensor.ecowitt_outdoor_temperature
      humidity_sensor: sensor.ecowitt_outdoor_humidity
      feels_like_sensor: sensor.ecowitt_feels_like_temperature
      wind_speed_sensor: sensor.ecowitt_wind_speed
      wind_gust_sensor: sensor.ecowitt_wind_gust
      wind_direction_sensor: sensor.ecowitt_wind_direction
      rain_rate_sensor: sensor.ecowitt_rain_rate
      rain_state_sensor: binary_sensor.ecowitt_raining
      rain_rate_threshold: 0
      uv_sensor: sensor.ecowitt_uv_index
      solar_lux_sensor: sensor.ecowitt_solar_lux
      pressure_sensor: sensor.ecowitt_relative_pressure
      temp_min_24h_sensor: sensor.outdoor_temperature_24h_min
      temp_max_24h_sensor: sensor.outdoor_temperature_24h_max
      metric_columns: 3
      forecast_slots: 48
      graph_height: 140
      temperature_icon_count: 12
      forecast_fields:
        - temperature
        - precipitation_probability
```

## Full Room Example

```yaml
type: custom:space-hub-card
tile_height: 88
chip_icon_size: 14
main_icon_size: 48
chip_font_size: 12
headers:
  - weather:
      entity: weather.home
      icon_set: realistic
      temp_sensor: sensor.ecowitt_outdoor_temperature
      humidity_sensor: sensor.ecowitt_outdoor_humidity
      feels_like_sensor: sensor.ecowitt_feels_like_temperature
      wind_speed_sensor: sensor.ecowitt_wind_speed
      wind_gust_sensor: sensor.ecowitt_wind_gust
      rain_rate_sensor: sensor.ecowitt_rain_rate
      uv_sensor: sensor.ecowitt_uv_index
      solar_lux_sensor: sensor.ecowitt_solar_lux
      pressure_sensor: sensor.ecowitt_relative_pressure
      metric_columns: 3
      forecast_slots: 48
  - main:
      main_name: Outdoors
      main_icon: mdi:tree-outline
      temp_sensor: sensor.ecowitt_outdoor_temperature
      humidity_sensor: sensor.ecowitt_outdoor_humidity
      chips:
        - type: gate
          entity: binary_sensor.garden_gate
        - type: smart_plug
          entity: switch.garden_lights
    ac:
      entity: climate.living_room_ac
    thermostat:
      entity: climate.living_room_thermostat
switch_rows:
  - row:
      - entity: switch.entrance_light
        name: Entrance
        icon: mdi:lightbulb-outline
        type: switch
      - entity: lock.front_door
        name: Door
        type: lock
        icon_active: mdi:lock
        icon_inactive: mdi:lock-open-variant
      - entity: switch.hallway_plug
        name: Plug
        type: smart_plug
        info_templates:
          - "{{ states('sensor.hallway_plug_power') }} W"
cards:
  - type: tile
    entity: alarm_control_panel.home
```

## Layout Model

The top-level layout has three sections:

```yaml
type: custom:space-hub-card
headers:
  - weather: ...
  - main: ...
    ac: ...
    thermostat: ...
switch_rows:
  - row:
      - ...
    cards:
      - ...
cards:
  - ...
```

`headers` can contain any combination of:

- `weather`
- `main`
- `ac`
- `thermostat`

`ac` and `thermostat` are companion tiles for a main tile row. Weather is rendered as its own full-width row.

`switch_rows` renders repeated control tiles. A row can also contain embedded cards below that row.

`cards` renders standard Home Assistant cards after all switch rows.

## Top-Level Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string | required | Must be `custom:space-hub-card`. |
| `tile_height` | number | `80` | Shared height for normal room/switch tiles. |
| `chip_icon_size` | number | `14` | Icon size for chips. |
| `main_icon_size` | number | `48` | Default main tile icon size. |
| `chip_font_size` | number | `12` | Chip text size. |
| `card_shadow_color` | string | `#000000` | Base card shadow color. |
| `card_shadow_intensity` | number | `0.5` | Base card shadow opacity. |
| `unavailable_pulse_color` | string | `#ff3b30` | Pulse color when an entity is unavailable. |
| `headers` | array | `[]` | Header rows. |
| `switch_rows` | array | `[]` | Switch rows. |
| `cards` | array | `[]` | Embedded cards after switch rows. |
| `tap_action` | object | optional | Root fallback for main tile tap action. |
| `hold_action` | object | optional | Root fallback for main tile hold action. |
| `double_tap_action` | object | optional | Root fallback for main tile double tap action. |

## Weather Configuration

Weather is configured at `headers[].weather`.

### Weather Sources

| Option | Type | Description |
| --- | --- | --- |
| `entity` | entity ID | Home Assistant `weather` entity. Used for forecast subscription and weather more-info. |
| `temp_sensor` | entity ID | Current local temperature sensor. |
| `humidity_sensor` | entity ID | Current local humidity sensor. |
| `feels_like_sensor` | entity ID | Local feels-like temperature sensor. |
| `temp_min_24h_sensor` | entity ID | Local 24-hour minimum temperature sensor. |
| `temp_max_24h_sensor` | entity ID | Local 24-hour maximum temperature sensor. |
| `wind_speed_sensor` | entity ID | Local wind speed sensor. |
| `wind_gust_sensor` | entity ID | Local wind gust sensor. |
| `wind_direction_sensor` | entity ID | Wind direction in degrees. Displayed as compass text with wind speed. |
| `rain_state_sensor` | entity ID | Binary rain state fallback. |
| `rain_rate_sensor` | entity ID | Rain rate sensor. Preferred for current raining state. |
| `rain_rate_threshold` | number | Minimum rain rate that counts as raining. Default is `0`. |
| `uv_sensor` | entity ID | UV index sensor. |
| `solar_lux_sensor` | entity ID | Solar/lux sensor. Displayed in the sensor unit, for example `lx`. |
| `pressure_sensor` | entity ID | Pressure sensor. |

If `rain_rate_sensor` is configured, current rain state is based on rain rate being greater than `rain_rate_threshold`. The binary `rain_state_sensor` is only used as a fallback when no rate sensor is available.

### Weather Forecast

The card subscribes to Home Assistant weather forecasts from `entity`:

- Hourly forecast for graphs and headline.
- Daily forecast for the daily forecast rows.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `show_forecast` | boolean | `true` | Set to `false` to hide forecast graphs and daily forecast. |
| `forecast_slots` | number | `8` | Number of hourly forecast entries used by graphs, clamped to `72`. |
| `forecast_fields` | array or comma string | `temperature, precipitation_probability` | Visible graph sections to render. |
| `sync_graphs` | boolean | `true` | Keep graph selectors synchronized. |
| `graph_height` | number | `118` | Forecast graph height in pixels, clamped to `82..260`. |
| `conditions_icon_size` | number | default CSS value | Weather icon size above the temperature graph. |
| `temperature_icon_count` | number | `8` | Maximum number of condition icons above the temperature graph. Use `0` to hide them. |
| `daily_icon_size` | number | default CSS value | Icon size in the daily forecast rows. |

Currently rendered graph fields:

- `temperature`
- `precipitation_probability`

Accepted aliases:

- Temperature: `temp`, `temperature`
- Precipitation probability: `rain_chance`, `precipitation_probability`, `precip_probability`, `probability`, `pop`

The graph labels use the Home Assistant locale and time format. If Home Assistant is set to 24-hour time, graph labels use 24-hour time. If Home Assistant is set to 12-hour time, graph labels use 12-hour time.

### Weather Display Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `Weather` | Weather tile accessible name. The visible headline comes from forecast data when available. |
| `icon` | icon | automatic | Optional MDI icon override for the main weather icon. |
| `icon_set` | `meteocons` or `realistic` | `meteocons` | Animated weather icon set used by the main weather icon, temperature graph icons, and daily forecast icons. Both sets are bundled locally. |
| `temp_size` | number | `31` | Current temperature font size, clamped to `18..56`. |
| `temperature_size` | number | alias | Alias for `temp_size`. |
| `icon_size` | number | `42` | Main weather icon size, clamped to `28..160`. |
| `icon_offset_x` | number | `0` | Main icon horizontal offset in pixels. |
| `icon_offset_y` | number | `0` | Main icon vertical offset in pixels. |
| `metric_columns` | number | `3` | Sensor grid columns, clamped to `1..4`. |
| `stale_minutes` | number | disabled | Add stale glow when weather/current sensor data is older than this many minutes. |
| `metrics` | array | automatic | Custom metric grid. If omitted, metrics are built from known weather sensors. |
| `chips` | array | `[]` | Optional compact chips in the lower-right corner of the weather tile. |

### Weather Metrics

If `metrics` is omitted, the card builds a metric grid from these configured sensors:

- `wind_speed_sensor`
- `wind_gust_sensor`
- `temp_min_24h_sensor`
- `temp_max_24h_sensor`
- `rain_state_sensor` or `rain_rate_sensor`
- `uv_sensor`
- `solar_lux_sensor`
- `pressure_sensor`

Custom metric:

```yaml
metrics:
  - entity: sensor.ecowitt_solar_lux
    name: Solar
    icon: mdi:white-balance-sunny
```

Rain metric:

```yaml
metrics:
  - type: rain
    name: Rain
    rain_rate_sensor: sensor.ecowitt_rain_rate
    rain_state_sensor: binary_sensor.ecowitt_raining
    rain_rate_threshold: 0
    icon_active: mdi:weather-rainy
    icon_inactive: mdi:water-off-outline
```

Rain metrics intentionally use configured MDI icons, not animated Meteocons.

### Weather More-Info Behavior

Clickable weather elements open Home Assistant more-info:

| Element | Opens |
| --- | --- |
| Forecast headline | `weather.entity` |
| Current temperature | `temp_sensor` |
| Humidity | `humidity_sensor` |
| Feels-like line | `feels_like_sensor` |
| Metric grid item | that metric entity |
| Weather chips | chip entity |

The large animated weather icon is display-only.

## Main Tile Configuration

Main tiles are configured at `headers[].main`.

| Option | Type | Description |
| --- | --- | --- |
| `main_name` | string | Visible room name. |
| `main_icon` | icon | Main room icon. |
| `light_group_entity` | entity ID | Used for light status and default tap toggle. |
| `tap_entity` | entity ID | Default tap target when no custom tap action is set. |
| `hold_entity` | entity ID | Default hold more-info target. Falls back to `tap_entity`. |
| `temp_sensor` | entity ID | Temperature shown in the tile chip. |
| `humidity_sensor` | entity ID | Humidity shown in the tile chip. |
| `glow_mode` | string | `static`, `pulse`, or `none`. |
| `chips` | array | Status chips. |
| `tap_action` | object | Optional action override. |
| `hold_action` | object | Optional action override. |
| `double_tap_action` | object | Optional action override. |

Default main tile behavior:

- Tap toggles `light_group_entity` or `tap_entity`.
- Hold opens more-info for `hold_entity` or `tap_entity`.
- Double tap is active only when configured.

## AC and Thermostat Tiles

AC and thermostat tiles are configured beside a main tile in the same header row.

```yaml
headers:
  - main:
      main_name: Living Room
    ac:
      entity: climate.living_room_ac
      glow_mode: static
    thermostat:
      entity: climate.living_room_thermostat
      glow_mode: pulse
```

Supported options:

| Option | Type | Description |
| --- | --- | --- |
| `entity` | entity ID | Climate entity. |
| `glow_mode` | string | `static`, `pulse`, or `none`. |
| `tap_action` | object | Optional action override. |
| `hold_action` | object | Optional action override. |
| `double_tap_action` | object | Optional action override. |

Default AC behavior:

- Tap calls `climate.turn_on` or `climate.turn_off`.
- Hold opens more-info.

Default thermostat behavior:

- Tap calls `climate.set_hvac_mode`.
- Hold opens more-info.

## Switch Rows

Switch rows are configured at `switch_rows`.

```yaml
switch_rows:
  - row:
      - entity: switch.floor_lamp
        name: Floor Lamp
        icon: mdi:floor-lamp
      - entity: lock.front_door
        name: Door
        type: lock
```

Each row can be either:

```yaml
switch_rows:
  - row:
      - entity: switch.example
```

or the shorter raw-array form:

```yaml
switch_rows:
  - - entity: switch.example
```

### Switch Item Options

| Option | Type | Description |
| --- | --- | --- |
| `entity` | entity ID | Controlled entity. |
| `name` | string | Display name. |
| `type` | string | `switch`, `smart_plug`, or `lock`. |
| `icon` | icon | Base icon. |
| `icon_active` | icon | Active-state icon. |
| `icon_inactive` | icon | Inactive-state icon. |
| `icon_on` | icon | Alias for active/inactive migration support. |
| `icon_off` | icon | Alias for active/inactive migration support. |
| `icon_size` | string or number | Icon size. Numeric values are treated as pixels. |
| `font_size` | string or number | Label font size. |
| `font_weight` | string or number | Label font weight. |
| `glow_mode` | string | `static`, `pulse`, or `none`. |
| `hold_entity` | entity ID | Entity opened by default hold more-info. |
| `confirmation` | boolean or object | Confirmation for default tap action. |
| `tap_action` | object | Optional action override. |
| `hold_action` | object | Optional action override. |
| `double_tap_action` | object | Optional action override. |
| `info_templates` | array | Up to two Home Assistant templates shown on the tile. |

### Switch Confirmation

```yaml
switch_rows:
  - row:
      - entity: lock.front_door
        name: Front Door
        type: lock
        confirmation:
          title: Confirm door action
          text: Are you sure?
          confirm_text: Unlock
          dismiss_text: Cancel
```

### Switch Template Indicators

Switch templates are subscribed with Home Assistant `render_template` and update live.

```yaml
switch_rows:
  - row:
      - entity: switch.desk
        name: Desk
        info_templates:
          - "{{ states('sensor.desk_power') }} W"
          - "{{ states('sensor.desk_daily_energy') }} kWh"
```

## Chips

Chips can be used on main tiles and weather tiles.

Supported `type` values:

- `lock`
- `door`
- `presence`
- `illuminance`
- `gate`
- `sliding_gate`
- `smart_plug`
- `custom`

Chip options:

| Option | Type | Description |
| --- | --- | --- |
| `type` | string | Chip type. |
| `entity` | entity ID | Entity to read. |
| `icon` | icon | Base icon override. |
| `icon_active` | icon | Active-state icon. |
| `icon_inactive` | icon | Inactive-state icon. |
| `icon_unavailable` | icon | Unavailable-state icon. |
| `background` | CSS color | Base background override. |
| `background_active` | CSS color | Active background. |
| `background_inactive` | CSS color | Inactive background. |
| `background_unavailable` | CSS color | Unavailable background. |
| `icon_color` | CSS color | Base icon color. |
| `icon_color_active` | CSS color | Active icon color. |
| `icon_color_inactive` | CSS color | Inactive icon color. |
| `icon_color_unavailable` | CSS color | Unavailable icon color. |

Main-tile chips are compact status indicators. Weather-tile chips are also clickable and open the chip entity more-info.

## Actions

The card accepts Home Assistant-style action objects in:

- `headers[].main.tap_action`
- `headers[].main.hold_action`
- `headers[].main.double_tap_action`
- `headers[].ac.*_action`
- `headers[].thermostat.*_action`
- `switch_rows[].row[].*_action`
- root fallback `tap_action`, `hold_action`, and `double_tap_action` for main tiles

Supported action values:

- `more-info`
- `toggle`
- `perform-action`
- `navigate`
- `url`
- `assist`
- `none`
- `fire-dom-event`
- `call-service` as a legacy alias normalized to `perform-action`

Examples:

```yaml
tap_action:
  action: more-info
  entity: light.living_room
```

```yaml
tap_action:
  action: perform-action
  perform_action: light.turn_on
  target:
    entity_id: light.living_room
  data:
    brightness_pct: 70
```

```yaml
tap_action:
  action: navigate
  navigation_path: /lovelace/living-room
```

## Embedded Cards

Embedded cards are normal Home Assistant card configs.

At the bottom of the card:

```yaml
cards:
  - type: tile
    entity: alarm_control_panel.home
```

Below a switch row:

```yaml
switch_rows:
  - row:
      - entity: switch.example
    cards:
      - type: entities
        entities:
          - sensor.example
```

## Styling Hooks

The card follows Home Assistant theme variables where possible. Useful overrides:

| CSS variable | Description |
| --- | --- |
| `--ha-card-background` | Base card background inherited from the Home Assistant theme. |
| `--card-background-color` | Fallback base background. |
| `--space-hub-tile-background` | Explicit weather tile surface background. |
| `--tile-border-radius` | Tile radius. Defaults to `--ha-card-border-radius`. |
| `--chip-background-color` | Default chip background. |
| `--switch-on-yellow` | Active switch color. |
| `--switch-on-green` | Smart plug active color. |
| `--switch-unlocked-red` | Unlocked lock color. |

Example card-mod override:

```yaml
card_mod:
  style: |
    space-hub-card {
      --space-hub-tile-background: #242424;
      --tile-border-radius: 18px;
    }
```

## Visual Editor

The visual editor supports:

- Header row creation and reordering.
- Weather tile configuration.
- Main tile configuration.
- AC and thermostat tile configuration.
- Chip editing.
- Weather metric editing and reordering.
- Switch row and switch tile editing.
- Switch action editing.
- Switch confirmation editing.
- Switch template indicators.
- Embedded-card YAML editing.
- YAML mode for direct configuration.

The editor tolerates incomplete in-progress items while you are building a dashboard.

## Troubleshooting

### The card did not update after installing a new release

Refresh the browser cache. In many browsers a hard reload is enough. In the Home Assistant mobile app, close and reopen the app if the old JavaScript is still cached.

For HACS installs, confirm the resource points to:

```yaml
/hacsfiles/space-hub-card/space-hub-card.js
```

### Forecast graphs do not show

Check:

- `headers[].weather.entity` is a valid `weather` entity.
- `show_forecast` is not `false`.
- The weather integration supports Home Assistant forecast subscriptions.
- `forecast_slots` is greater than `1`.
- `forecast_fields` includes `temperature` or `precipitation_probability`.

### Local readings show dashes

The card shows a dash when an entity is missing, `unknown`, `unavailable`, or not numeric where a numeric value is required. Verify each configured sensor exists and has a valid state.

### Rain says "No rain" while a wet sensor is on

If `rain_rate_sensor` is configured, rain is active only when the numeric rate is greater than `rain_rate_threshold`. This avoids treating a wet sensor with zero rain rate as current rain. Remove `rain_rate_sensor` if you want to rely only on `rain_state_sensor`.

### Weather tile surface blends into the parent card

Set `--space-hub-tile-background` to a tile color that contrasts with the parent card:

```yaml
card_mod:
  style: |
    space-hub-card {
      --space-hub-tile-background: #242424;
    }
```

## Development

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

The distributable file is written to:

```text
dist/space-hub-card.js
```

## Credits

- Built with Lit and Home Assistant custom-card helpers.
- Animated weather icons are bundled locally from `basmilius/meteocons` and `Makin-Things/weather-icons`.
- Third-party notices are listed in `THIRD_PARTY_NOTICES.md`.
