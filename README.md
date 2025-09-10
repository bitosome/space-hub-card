# space-hub-card

Custom Space Hub card for Home Assistant, built with Lit. This card renders one or more "main" tiles (each main may include optional AC/thermostat tiles and chips) plus optional switch rows. It focuses on clear visuals, predictable configuration, and Home Assistant-native actions.

## Features

- **LitElement card** with HA action handling (tap, hold, double_tap)
- **Multiple main tiles**: Support for multiple main tiles in a single card via multiple header rows
- **Main tiles** with configurable icon size and live temp/humidity chip
- **AC and Thermostat tiles** with animated state visuals and responsive icon sizing
- **Switch rows** with per-tile tap/hold entities, including smart plug style
- **Optional card header** title (omit `title` to hide)
- **Unavailable pulse**: card shadow pulses if any used entity is unavailable/unknown/offline
- **Glow containment**: internal glows/shadows are clipped to the card bounds so they never overlay surrounding cards
- **Multiple headers**: render one or more header rows via `headers: [...]` array
- **Illuminance chip**: optional chip-style indicator on the main tile (type `illuminance`), aligned to the right edge and vertically centered (e.g., `109 lx`)
- **Responsive sizing**: AC/thermostat icons scale proportionally with `tile_height` configuration
- **Consistent terminology**: uses "chips" instead of "badges" for modern UI consistency
- **Border radii follow HA theme**: card, tiles, chips use `--ha-card-border-radius`, `--ha-chip-border-radius` (with sensible fallbacks)
- **Per-tile glow control** via `glow_mode` (values: `static` | `pulse` | `none`)

## Configuration Reference

### Card-Level Options

- **type**: use `custom:space-hub-card`
- **title**: optional header title shown on the `ha-card`
- **tile_height**: height in px of all tiles (default: 80). AC/thermostat icons scale proportionally (62.5% ratio)
- **chip_icon_size**: icon size inside chips, temperature/humidity indicators, and illuminance displays in px (default: 14)
- **main_icon_size**: default main icon size in px (default: 48)
- **chip_font_size**: font size of chip text in px (default: 12). Chip size is responsive to this font size with additional padding
- **card_shadow_color**: base panel shadow color (default: '#000000')
- **card_shadow_intensity**: base shadow intensity 0..1 (default: 0.1)
- **unavailable_pulse_color**: color for the card pulse when any monitored entity is unavailable/unknown/offline (default: '#ff3b30')

### Headers Configuration

Use `headers: [...]` to define one or more header rows. Each header row can contain a main tile, allowing you to have multiple main tiles in a single card.

#### Main Tile Configuration
- **main_name**: text shown on the main tile
- **main_icon**: MDI/HA icon for the main tile
- **light_group_entity**: entity used for toggling and on-state display
- **glow_mode**: visual glow behavior - `static` (permanent soft glow), `pulse` (animated pulse), or `none` (disabled)
- **temp_sensor**: optional temperature sensor entity for the temp/humidity chip
- **humidity_sensor**: optional humidity sensor entity for the temp/humidity chip
- **main_icon_size**: header-level main icon size override
- **chips**: array of chip objects with the following fields:
  - **type**: `lock`, `gate`, `illuminance`, or custom (generic)
  - **entity**: entity id for the chip
  - **icon**: optional MDI icon override
  - **tap_action** / **hold_action** / **double_tap_action**: HA-native actions specific to the chip
- **tap_action** / **hold_action** / **double_tap_action**: HA-native actions for the main tile

#### AC Tile Configuration
- **entity**: climate entity for the AC tile
- **glow_mode**: visual glow behavior - `static`, `pulse`, or `none`
- **tap_action** / **hold_action** / **double_tap_action**: optional HA-native actions

#### Thermostat Tile Configuration  
- **entity**: climate entity for the thermostat tile
- **glow_mode**: visual glow behavior - `static`, `pulse`, or `none`
- **tap_action** / **hold_action** / **double_tap_action**: optional HA-native actions

### Switch Rows Configuration

- **switch_rows**: array of switch row definitions. Each row can be an array or an object `{ row: [...] }`
- Per-item options: `entity`, `name`, `icon`, `icon_size`, `font-weight`, `font-size`, `type` (`switch` | `smart_plug`), `glow_mode`, and HA `*_action` entries

## Examples

### Minimal (single main)

```yaml
type: custom:space-hub-card
title: Entrance
headers:
  - main:
      main_name: Entrance
      main_icon: mdi:door
      light_group_entity: switch.entrance_light_switch_group
      tap_action:
        action: navigate
        navigation_path: /lovelace/entrance
      hold_action:
        action: call-service
        service: homeassistant.turn_off
        service_data:
          entity_id: switch.entrance_light_switch_group
      temp_sensor: sensor.aqara_thp_10_temperature
      humidity_sensor: sensor.aqara_thp_10_humidity
      chips:
        - type: lock
          entity: lock.front_door
```

### Multi-header (main + AC + thermostat)

```yaml
type: custom:space-hub-card
title: Living floor
tile_height: 100  # Larger tiles - AC/thermostat icons will be ~62px
headers:
  - main:
      main_name: Living room
      main_icon: mdi:sofa-outline
      light_group_entity: switch.living_room_light_group
      glow_mode: pulse
      temp_sensor: sensor.kitchen_living_room_temperature_average
      humidity_sensor: sensor.kitchen_living_room_humidity_average
      chips:
        - type: illuminance
          entity: sensor.aqara_light_sensor_1_illuminance
    ac:
      entity: climate.living_room_ac
      glow_mode: pulse
    thermostat:
      entity: climate.thermostat_5_7_group
      glow_mode: static

  - main:
      main_name: Kitchen
      main_icon: mdi:chef-hat
      light_group_entity: light.kitchen
      glow_mode: none
    ac:
      entity: climate.kitchen_ac
      glow_mode: static  # AC has its own glow config independent of main
```

### Advanced Configuration with Custom Sizing

```yaml
type: custom:space-hub-card
title: Master Suite
tile_height: 120           # Larger tiles (AC/thermostat icons will be ~75px)
chip_icon_size: 16         # Larger chip icons
chip_font_size: 14         # Larger chip text
main_icon_size: 56         # Larger main icons
card_shadow_intensity: 0.2 # More prominent shadow
headers:
  - main:
      main_name: Bedroom
      main_icon: mdi:bed
      light_group_entity: light.bedroom_group
      glow_mode: static
      temp_sensor: sensor.bedroom_temperature
      humidity_sensor: sensor.bedroom_humidity
      chips:
        - type: lock
          entity: lock.bedroom_door
        - type: gate
          entity: binary_sensor.bedroom_window
          icon: mdi:window-closed-variant
    thermostat:
      entity: climate.bedroom_thermostat
      glow_mode: pulse
```

### Switch rows sample

```yaml
switch_rows:
  - row:
      - entity: switch.kitchen_tabletop_light_switch_button_a_state
        name: Tabletop
        icon: mdi:countertop-outline
        icon_size: "28px"
        font-weight: "600"
        font-size: "12px"
        type: switch
        glow_mode: static
        tap_action:
          action: toggle
```

## Responsive Icon Sizing

The card automatically scales AC and thermostat icons based on your `tile_height` configuration:

- **Base ratio**: 50px icons for 80px tile height (62.5%)
- **tile_height: 60** → 37px icons
- **tile_height: 80** → 50px icons (default)
- **tile_height: 100** → 62px icons
- **tile_height: 120** → 75px icons

This ensures visual consistency across different tile sizes while maintaining proper proportions.

## Notes and Behavior Details

- **Glow behavior**: tiles use `glow_mode` with values `static` (soft steady glow), `pulse` (animated pulse), or `none` (disabled). `glow_mode` is respected per-tile for fine-grained control.
- **Chips**: informational by default. To make a chip interactive, add `tap_action` / `hold_action` to the chip object.
- **No implicit tiles**: the card renders only what you explicitly configure.
- **AC/Thermostat placement**: must be declared inside a `main` block. If declared outside `main` they will be ignored (with console warning).
- **Icon scaling**: AC and thermostat icons automatically scale proportionally with `tile_height` to maintain visual consistency.

## Configuration Validation

The space-hub-card includes comprehensive configuration validation to help users identify and fix configuration issues. When a configuration error is detected, Home Assistant will display detailed error messages explaining what needs to be corrected.

### Validation Rules

The card validates the following configuration aspects:

#### Headers Configuration
- **AC Tiles**: Must have a valid `entity` field (e.g., `climate.living_room`)
- **Thermostat Tiles**: Must have a valid `entity` field (e.g., `climate.bedroom`)
- **Main Tiles**: Must have at least one meaningful configuration:
  - `main_name` or `main_icon`
  - `tap_entity`, `light_group_entity`, `temp_sensor`, or `humidity_sensor`
  - Non-empty `chips` array
- **AC/Thermostat Placement**: AC and thermostat tiles must be defined within a `main` configuration block

#### Switch Rows Configuration
- **Switch Items**: Each switch must have a valid `entity` field
- **Entity Format**: All entity IDs must follow the `domain.entity_name` format
- **Non-empty Rows**: Switch rows cannot be empty

#### Numeric Values
- **Positive Numbers**: `tile_height`, `chip_icon_size`, `main_icon_size`, `chip_font_size` must be positive
- **Shadow Intensity**: `card_shadow_intensity` must be between 0 and 1
- **Type Validation**: Numeric fields must contain valid numbers

#### Color Values
- **Color Format**: `card_shadow_color` and `unavailable_pulse_color` must be valid CSS colors
- **Supported Formats**: Hex colors (#000000), named colors (red, blue), CSS functions (rgb(), hsl())

### Example Validation Errors

When configuration issues are detected, you'll see helpful error messages:

```
Invalid space-hub-card configuration:
• Header 1: AC tile requires an 'entity' field
• Header 1: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips
• Switch row 1, item 2: Switch entity 'invalid_entity' must be a valid entity ID
• Tile height must be a positive number, got: -50
```

### Using the Visual Editor

The card includes a visual editor for basic settings that provides:
- **Real-time Validation**: Configuration errors are displayed immediately
- **Input Validation**: Numeric fields validate ranges and types
- **Helper Text**: Each field includes guidance on valid values
- **Error Highlighting**: Invalid configurations are clearly marked

For complex configurations (headers, switch rows), you'll need to edit the YAML directly, but the validation system will guide you to correct any issues.

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend" section
3. Click "Explore & Download Repositories"
4. Search for "space-hub-card"
5. Download and install

### Manual Installation

1. Download `space-hub-card.js` from the latest release
2. Copy to `config/www/community/space-hub-card/`
3. Add to your `ui-lovelace.yaml` resources:

```yaml
resources:
  - url: /hacsfiles/space-hub-card/space-hub-card.js
    type: module
```

## Development

Install dependencies:

```bash
yarn install
# or
npm install
```

Build:

```bash
npm run build
```

Dev (watch):

```bash
npm start
```

## Version

Current version: **1.0.5**

## License

MIT License
