# bitosome-room-card

Custom Room card for Home Assistant, built on the boilerplate using LitElement. It renders one or more main tiles plus optional AC/Thermostat squares and switch rows, with rich visuals and HA-native actions.

## Features

- LitElement card with HA action handling (tap, hold, double_tap)
- **Multiple main tiles**: Support for multiple main tiles in a single card via multiple header rows
- Main tiles with configurable icon size and live temp/humidity chip
- AC and Thermostat tiles with animated state visuals
- Switch rows with per-tile tap/hold entities, including smart plug style
- Optional card header title (omit `title` to hide)
- Unavailable pulse: card shadow pulses if any used entity is unavailable/unknown/offline
- Glow containment: internal glows/shadows are clipped to the card bounds so they never overlay surrounding cards
- Multiple headers: render one or more header rows via `headers: [...]` (keeps `header:` for backwards compatibility)
- Illuminance badge: optional chip-style badge on the main tile (type `illuminance`), aligned to the right edge and vertically centered (e.g., `109 lx`)
- Border radii follow HA theme: card, tiles, badges, and chips use `--ha-card-border-radius`, `--ha-badge-border-radius`, and `--ha-chip-border-radius` (with sensible fallbacks)

## Configuration Reference

### Card-Level Options

- **type**: use `custom:bitosome-room-card`
- **title**: optional header title shown on the `ha-card`
- **tile_height**: height in px of all tiles (default: 80)
- **badge_size**: controls AC badge diameter and thermostat pill height in px (default: 22)
- **badge_icon_size**: icon size inside badges/pills in px (default: 14)
- **main_icon_size**: default main icon size in px (default: 48)
- **chip_font_size**: font size of chip text in px (default: 12)
- **card_shadow_color**: base panel shadow color (default: '#000000')
- **card_shadow_intensity**: base shadow intensity 0..1 (default: 0.5)
- **unavailable_pulse_color**: color for the card pulse when any monitored entity is unavailable/unknown/offline (default: '#ff3b30')
- **glow_mode**: visual glow behavior for the entire card; values: `none`, `glow`, `pulse`

### Header Configuration

Use either `header:` (single) or `headers: [...]` (multiple rows) for backwards compatibility.

**Important**: Each header row can contain a main tile, allowing you to have multiple main tiles in a single card.

#### Main Tile Configuration
- **main_name**: text shown on the main tile
- **main_icon**: MDI/HA icon for the main tile
- **light_group_entity**: optional entity used for toggling and on-state display (preferred over legacy tap_entity)
- **glow_effect**: optional boolean. When set to `true` on a `main`, the main tile will show a subtle glow/pulse while the `light_group_entity` is `on`. Useful to highlight active lighting groups.
- **temp_sensor**: optional temperature sensor entity for the temp/humidity chip
- **humidity_sensor**: optional humidity sensor entity for the temp/humidity chip
- **main_icon_size**: header-level main icon size override (also accepts `maicon_size` for typo tolerance)
- **badges**: array of badge objects with the following fields:
  - **type**: `lock`, `gate`, `illuminance`, or custom (generic)
  - **entity**: entity id for the badge
  - **icon**: optional MDI icon override
  - **tap_action** / **hold_action** / **double_tap_action**: HA-native actions specific to the badge
- **tap_action** / **hold_action** / **double_tap_action**: HA-native actions for the main tile

#### AC Tile Configuration
- **entity**: climate entity for the AC tile
- **tap_action** / **hold_action** / **double_tap_action**: optional HA-native actions

```markdown
# bitosome-room-card

Custom Room card for Home Assistant, built with Lit. This card renders one or more "main" tiles (each main may include optional AC/thermostat tiles and badges) plus optional switch rows. It focuses on clear visuals, predictable configuration, and Home Assistant-native actions.

## Quick summary

- Multiple `main` tiles supported via `headers: [...]` (backwards-compatible `header:` still accepted)
- AC and Thermostat tiles are supported inside a `main` block
- Per-tile glow control via `glow_mode` (values: `static` | `pulse` | `none`); legacy `glow_effect` is supported for compatibility
- Badges/chips are informational by default; add `*_action` to badge or tile to make them interactive
- Visuals follow HA theme border radiuses: `--ha-card-border-radius`, `--ha-chip-border-radius`, `--ha-badge-border-radius`

---

## Configuration reference

This section documents the supported keys and recommended usage.

Top-level (card) options

- `type`: `custom:bitosome-room-card`
- `title`: optional card title shown on the `ha-card`
- `tile_height`: height in px of tiles (default: `80`)
- `badge_size`: badge diameter / pill height in px (default: `22`)
- `badge_icon_size`: icon size inside badges/pills in px (default: `14`)
- `main_icon_size`: default main icon size in px (default: `48`)
- `chip_font_size`: font size of chip text in px (default: `12`)
- `card_shadow_color`: base panel shadow color (default: `#000000`)
- `card_shadow_intensity`: base shadow intensity `0..1` (default: `0.5`)
- `unavailable_pulse_color`: color for the card pulse when any monitored entity is unavailable/unknown/offline (default: `#ff3b30`)

Tile glow configuration (per-card / per-tile)

- `glow_mode` (preferred): controls glow behaviour for a tile. Allowed values:
  - `static` — permanent soft glow (default when unspecified)
  - `pulse` — animated pulse (recommended for active states like `heating`)
  - `none` — disable glow
- Legacy: `glow_effect` (boolean) is still supported for compatibility. `glow_effect: false` is equivalent to `glow_mode: 'none'`. If both appear, `glow_mode` wins.

Headers

Use either `header:` (single) or `headers: [...]` (multiple rows). Each header row may contain an object `main` which holds the main tile definition. The card will only render what you explicitly configure — there is no implicit main.

Main tile (`main`) options

- `main_name`: text shown on the main tile
- `main_icon`: MDI/HA icon for the main tile
- `light_group_entity`: optional entity used for toggling and on-state display (preferred over legacy `tap_entity`)
- `glow_mode`: `static` | `pulse` | `none` (preferred per-main glow control)
- `glow_effect`: legacy boolean (treated as `glow_mode: 'none'` when `false`)
- `tap_action` / `hold_action` / `double_tap_action`: Home Assistant action configs for the tile
- `temp_sensor` / `humidity_sensor`: sensors used for the temp/humidity chip (informational)
- `main_icon_size`: header-level override for icon size (also supports typo `maicon_size`)
- `badges`: array of badge objects

Badge object fields

- `type`: `illuminance`, `lock`, `gate`, or custom
- `entity`: entity id for badge state (informational) or action targets
- `icon`: optional MDI icon override for the badge
- `tap_action` / `hold_action` / `double_tap_action`: HA-native actions applied to the badge

AC and Thermostat tiles

- Must be declared inside a `main` block as `ac:` and `thermostat:` respectively. If declared outside `main` they will be ignored (and a console warning will be emitted).
- Each accepts `entity` and optional `tap_action` / `hold_action` / `double_tap_action`.

Switch rows

- `switch_rows:` an array of rows. Each row may be a bare array or an object `{ row: [...] }`.
- Per-item options: `entity`, `name`, `icon`, `icon_size`, `font-weight`, `font-size`, `type` (`switch` | `smart_plug`), `glow_mode` (or legacy `glow_effect`), and HA `*_action` entries.

Actions and default behavior

- The card supports Home Assistant action configs (tap, hold, double_tap) for tiles and badges.
- If tile-level actions aren't provided, the main tile uses `light_group_entity` / `tap_entity` for toggle behavior on tap and `hold` opens `more-info` for the `hold_entity` or `tap_entity`.

---

## Examples

Minimal (single main)

```yaml
type: custom:bitosome-room-card
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
      badges:
        - type: lock
          entity: lock.front_door
```

Multi-header (main + AC + thermostat)

```yaml
type: custom:bitosome-room-card
title: Living floor
headers:
  - main:
      main_name: Living room
      main_icon: mdi:sofa-outline
      light_group_entity: switch.living_room_light_group
      glow_mode: pulse
      temp_sensor: sensor.kitchen_living_room_temperature_average
      humidity_sensor: sensor.kitchen_living_room_humidity_average
      badges:
        - type: illuminance
          entity: sensor.aqara_light_sensor_1_illuminance
    ac:
      entity: climate.living_room_ac
    thermostat:
      entity: climate.thermostat_5_7_group

  - main:
      main_name: Kitchen
      main_icon: mdi:chef-hat
      light_group_entity: light.kitchen
```

Switch rows sample

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

---

## Notes and behavior details

- Glow behavior: tiles use `glow_mode` with values `static` (soft steady glow), `pulse` (animated pulse), or `none` (disabled). `glow_mode` is respected per-tile; for header-level control you can set `glow_mode` on the `main` object and it will be applied to AC/thermostat tiles in that header as well.
- Backwards compatibility: `glow_effect: false` maps to `glow_mode: 'none'`. If both `glow_mode` and `glow_effect` are present, `glow_mode` takes precedence.
- Badges and chips are informational by default. To make a badge interactive, add `tap_action` / `hold_action` to the badge object. The main tile can also be given actions which apply to the tile area.
- There is no implicit `main` tile. The card renders only what you explicitly configure.

---

## Development

- Install dependencies:

```bash
yarn install
# or
npm install
```

- Build:

```bash
npm run build
```

- Dev (watch):

```bash
npm start
```

---

## Changelog (high level)

- 1.0.0 — Initial public release
- 1.0.1 — Fixes and style tweaks
- 1.0.2 — Added multi-header support and improved badge handling
- 1.0.3+ — Glow unification and `glow_mode` support; AC/Thermostat glow colors; per-main glow driven by `light_group_entity`

---

If you'd like me to add a small visual test harness (HTML page) or update example screenshots, say so and I'll add it.
```
