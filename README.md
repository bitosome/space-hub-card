<p align="center">
  <img src="https://img.shields.io/badge/Home%20Assistant-Custom%20Card-41BDF5?style=for-the-badge&logo=home-assistant&logoColor=white" alt="Home Assistant Custom Card">
  <img src="https://img.shields.io/badge/HACS-Ready-41BDF5?style=for-the-badge" alt="HACS Ready">
  <img src="https://img.shields.io/badge/Lit-2.x-324fff?style=for-the-badge" alt="Lit 2">
</p>

# Space Hub Card

`space-hub-card` is a Home Assistant Lovelace card for compact room dashboards. It combines a large main tile, optional AC and thermostat companion tiles, switch rows, switch-level template indicators, and embedded cards in one card container.

The card is built around Home Assistant components and the native action model. It also ships with a visual editor, so most configuration can be done directly in the dashboard UI.

## Features

- Multiple header rows in a single card
- Main tile with room name, icon, temperature, humidity, and status chips
- Optional AC and thermostat tiles per header row
- Switch rows with `switch` and `smart_plug` visual styles
- Home Assistant native actions: `more-info`, `toggle`, `perform-action`, `navigate`, `url`, `assist`, and `none`
- Native confirmation support for switch actions
- Per-switch template indicators with live `render_template` subscriptions
- Embedded cards below switch rows or at the bottom of the card
- Unavailable pulse detection across configured entities and nested embedded-card configs
- Visual editor with native HA entity/select selectors and YAML mode
- Per-tile glow control: `static`, `pulse`, or `none`

## Installation

### HACS

1. Open HACS.
2. Go to `Frontend`.
3. Search for `Space Hub Card`.
4. Download the card.
5. Refresh the browser.

### Manual

1. Copy `dist/space-hub-card.js` to `/config/www/space-hub-card.js`.
2. Add the resource in Home Assistant:

```yaml
url: /local/space-hub-card.js
type: module
```

3. Refresh the browser.

## Quick Start

```yaml
type: custom:space-hub-card
tile_height: 88
headers:
  - main:
      main_name: Living Room
      main_icon: mdi:sofa-outline
      light_group_entity: light.living_room
      temp_sensor: sensor.living_room_temperature
      humidity_sensor: sensor.living_room_humidity
      chips:
        - type: presence
          entity: binary_sensor.living_room_presence
        - type: door
          entity: binary_sensor.front_door
    ac:
      entity: climate.living_room_ac
    thermostat:
      entity: climate.living_room_thermostat
switch_rows:
  - row:
      - entity: switch.floor_lamp
        name: Floor Lamp
        icon: mdi:floor-lamp
      - entity: switch.media_corner
        name: Media
        icon: mdi:television-speaker
        info_templates:
          - "{{ states('sensor.media_corner_power') }} W"
cards:
  - type: tile
    entity: alarm_control_panel.home
```

## Visual Editor

The built-in editor supports:

- Visual mode and YAML mode
- Native HA entity selectors for main, chip, AC, thermostat, and switch entities
- Native HA selector-based dropdowns for types, glow modes, and actions
- Action editing for `more-info`, `toggle`, `perform-action`, `navigate`, `url`, `assist`, and `none`
- Switch confirmation configuration
- Embedded-card YAML editing

The editor tolerates incomplete in-progress items while you are building a layout, so placeholder rows and tiles no longer break the preview.

## Layout Model

The card layout is structured like this:

```yaml
type: custom:space-hub-card
tile_height: 80
chip_icon_size: 14
main_icon_size: 48
chip_font_size: 12
card_shadow_color: "#000000"
card_shadow_intensity: 0.5
unavailable_pulse_color: "#ff3b30"
tap_action: ...                # optional YAML-only fallback for main tiles
hold_action: ...
double_tap_action: ...
headers:
  - main: ...
    ac: ...
    thermostat: ...
switch_rows:
  - row:
      - ...
      - ...
    cards:
      - ...
cards:
  - ...
```

## Configuration

### Card Options

| Option | Type | Default | Notes |
| --- | --- | --- | --- |
| `type` | string | required | Must be `custom:space-hub-card` |
| `tile_height` | number | `80` | Shared tile height |
| `chip_icon_size` | number | `14` | Chip icon size |
| `main_icon_size` | number | `48` | Main tile icon size |
| `chip_font_size` | number | `12` | Chip text size |
| `card_shadow_color` | string | `#000000` | Base card shadow color |
| `card_shadow_intensity` | number | `0.5` | Base shadow opacity, `0..1` |
| `unavailable_pulse_color` | string | `#ff3b30` | Pulse color when an entity is unavailable |
| `headers` | array | `[]` | Header rows |
| `switch_rows` | array | `[]` | Switch rows |
| `cards` | array | `[]` | Extra cards rendered after all switch rows |
| `tap_action` | object | optional | YAML-only fallback action for main tiles |
| `hold_action` | object | optional | YAML-only fallback action for main tiles |
| `double_tap_action` | object | optional | YAML-only fallback action for main tiles |

### Header Rows

Each item in `headers` may contain:

- `main`
- `ac`
- `thermostat`

AC and thermostat tiles are only rendered when they are paired with a `main` block in the same header row.

### `headers[].main`

| Option | Type | Notes |
| --- | --- | --- |
| `main_name` | string | Visible room name |
| `main_icon` | string | Main tile icon |
| `light_group_entity` | string | Used for the light status chip and default tap toggle |
| `tap_entity` | string | Default tap target when no custom action is configured |
| `hold_entity` | string | Default hold `more-info` target |
| `temp_sensor` | string | Temperature source |
| `humidity_sensor` | string | Humidity source |
| `glow_mode` | string | `static`, `pulse`, or `none` |
| `chips` | array | Status chips |
| `tap_action` | object | Overrides default tap behavior |
| `hold_action` | object | Overrides default hold behavior |
| `double_tap_action` | object | Enables and handles double tap |

Default main-tile behavior:

- Tap: toggles `light_group_entity` or `tap_entity`
- Hold: opens `more-info` for `hold_entity` or `tap_entity`
- Double tap: only active when `double_tap_action` is defined on the tile or at card root

### Main Chips

Supported chip `type` values:

- `lock`
- `door`
- `presence`
- `illuminance`
- `gate`
- `sliding_gate`
- `smart_plug`
- `custom`

Supported chip fields:

| Option | Type | Notes |
| --- | --- | --- |
| `type` | string | Chip variant |
| `entity` | string | Entity to read |
| `icon` | string | Base icon override |
| `icon_active` | string | Active-state icon |
| `icon_inactive` | string | Inactive-state icon |
| `icon_unavailable` | string | Unavailable-state icon |
| `background` | string | Base background override |
| `background_active` | string | Active-state background |
| `background_inactive` | string | Inactive-state background |
| `background_unavailable` | string | Unavailable-state background |
| `icon_color` | string | Base icon color override |
| `icon_color_active` | string | Active-state icon color |
| `icon_color_inactive` | string | Inactive-state icon color |
| `icon_color_unavailable` | string | Unavailable-state icon color |

Notes:

- Chips are currently visual status indicators. They do not dispatch actions.
- The `illuminance` chip renders as a text/value chip.
- Other chip types render compact state indicators in the main tile corner.

### `headers[].ac`

| Option | Type | Notes |
| --- | --- | --- |
| `entity` | string | Climate entity |
| `glow_mode` | string | `static`, `pulse`, or `none` |
| `tap_action` | object | Optional action override |
| `hold_action` | object | Optional action override |

Default AC behavior:

- Tap: `perform-action` calling `climate.turn_on` or `climate.turn_off`
- Hold: `more-info`

### `headers[].thermostat`

| Option | Type | Notes |
| --- | --- | --- |
| `entity` | string | Climate entity |
| `glow_mode` | string | `static`, `pulse`, or `none` |
| `tap_action` | object | Optional action override |
| `hold_action` | object | Optional action override |

Default thermostat behavior:

- Tap: `perform-action` calling `climate.set_hvac_mode`
- Hold: `more-info`

### Switch Rows

Each entry in `switch_rows` can be either:

- A raw array of switch items
- An object with `row: [...]`

If you use the object form, you can also attach extra cards to that row.

### Switch Items

| Option | Type | Notes |
| --- | --- | --- |
| `entity` | string | Controlled entity |
| `name` | string | Visible label, otherwise friendly name is used |
| `icon` | string | Tile icon |
| `type` | string | `switch` or `smart_plug` |
| `glow_mode` | string | `static`, `pulse`, or `none` |
| `hold_entity` | string | `more-info` target for hold |
| `icon_size` | string/number | Custom icon size |
| `font_size` / `font-size` | string/number | Custom label size |
| `font_weight` / `font-weight` | string/number | Custom label weight |
| `confirmation` | boolean/string/object | Uses HA native confirmation on tap |
| `tap_action` | object | Optional action override |
| `hold_action` | object | Optional action override |
| `double_tap_action` | object | Optional action override |
| `info_templates` | string/object/array | Up to 2 live template values |

Default switch behavior:

- Tap: `toggle`
- Hold: `more-info` for `hold_entity` or `entity`
- Double tap: only active when `double_tap_action` is configured

### Switch Row Embedded Cards

For a switch row object, these keys are supported:

- `cards`
- `extra_cards`
- `card`
- `extra_card`

These cards render directly below that specific switch row.

### Root Embedded Cards

Use the top-level `cards:` array to render extra Lovelace cards after all switch rows.

Embedded cards participate in unavailable-entity scanning, including nested object-form configs such as:

- `entities:`
- nested `cards:`
- `target.entity_id`

## Actions

Supported action types:

- `more-info`
- `toggle`
- `perform-action`
- `navigate`
- `url`
- `assist`
- `none`

The editor writes the current Home Assistant action model. Legacy YAML using `call-service` is still accepted and normalized to `perform-action`.

Typical action fields:

| Action | Fields |
| --- | --- |
| `more-info` | `entity` |
| `toggle` | `confirmation` |
| `perform-action` | `perform_action`, `target`, `data`, `confirmation` |
| `navigate` | `navigation_path`, `navigation_replace`, `confirmation` |
| `url` | `url_path`, `confirmation` |
| `assist` | `pipeline_id`, `start_listening`, `confirmation` |

## Templates and Availability

### Info Templates

`info_templates` and these aliases are supported on switch items:

- `info_template`
- `top_right_templates`
- `top_right_template`

Each template is subscribed through Home Assistant's `render_template` API and rendered on the tile as up to two compact lines.

### Unavailable Pulse

The card pulses with `unavailable_pulse_color` when any tracked entity is:

- missing
- `unknown`
- `unavailable`
- `offline`

This includes entities found in:

- main tiles
- AC and thermostat tiles
- chips
- switch rows
- row-level embedded cards
- root-level embedded cards

## Examples

### Main + AC + Thermostat

```yaml
type: custom:space-hub-card
tile_height: 96
chip_icon_size: 16
headers:
  - main:
      main_name: Living Room
      main_icon: mdi:sofa-outline
      light_group_entity: light.living_room
      glow_mode: pulse
      temp_sensor: sensor.living_room_temperature
      humidity_sensor: sensor.living_room_humidity
      chips:
        - type: presence
          entity: binary_sensor.living_room_presence
        - type: gate
          entity: binary_sensor.garden_gate
          icon_active: mdi:gate-open
          icon_inactive: mdi:gate
    ac:
      entity: climate.living_room_ac
      glow_mode: pulse
    thermostat:
      entity: climate.living_room_thermostat
      glow_mode: static
```

### Switch Row with Templates and Confirmation

```yaml
type: custom:space-hub-card
headers:
  - main:
      main_name: Utility
      main_icon: mdi:tools
switch_rows:
  - row:
      - entity: switch.main_breaker
        name: Main Power
        icon: mdi:power
        confirmation: "Cut power to the whole circuit?"
        hold_entity: sensor.main_breaker_power
        info_templates:
          - "{{ states('sensor.main_breaker_power') }} W"
          - "{{ states('sensor.main_breaker_energy_today') }} kWh"
      - entity: switch.3d_printer
        name: Printer
        type: smart_plug
        icon: mdi:printer-3d
    cards:
      - type: tile
        entity: sensor.main_breaker_power
```

### Custom Action Example

```yaml
type: custom:space-hub-card
headers:
  - main:
      main_name: Entrance
      main_icon: mdi:door
      tap_action:
        action: navigate
        navigation_path: /lovelace/entrance
      hold_action:
        action: perform-action
        perform_action: homeassistant.turn_off
        target:
          entity_id: light.entrance_group
switch_rows:
  - row:
      - entity: switch.doorbell_chime
        name: Chime
        tap_action:
          action: assist
          start_listening: true
```

## Notes

- `title` is not rendered by the card. Use `main.main_name` for visible room labels.
- Header-level `main_icon_size` is not documented because the supported configurable main icon size is the card-level `main_icon_size`.
- Chips are status-only right now.
- AC and thermostat tiles are companion tiles for a header row and only show when that row also has `main`.
- The card returns `getCardSize() = 6`.

## Validation

The card validates malformed final configs such as:

- invalid entity IDs
- invalid numeric values
- invalid shadow intensity values
- invalid color strings

The visual editor is intentionally more permissive while you are editing, so incomplete placeholder entries do not break the live preview.

## Development

```bash
npm install
npm run build
```

For local watch mode:

```bash
npm run start
```
