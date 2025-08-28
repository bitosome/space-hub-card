# bitosome-room-card

Custom Room card for Home Assistant, built on the boilerplate using LitElement. It renders a main tile plus optional AC/Thermostat squares and switch rows, with rich visuals and HA-native actions.

## Features

- LitElement card with HA action handling (tap, hold, double_tap)
- Main tile with configurable icon size and live temp/humidity chip
- AC and Thermostat tiles with animated state visuals
- Switch rows with per-tile tap/hold entities, including smart plug style
- Optional card header title (omit `title` to hide)
- Unavailable pulse: card shadow pulses if any used entity is unavailable/unknown/offline

## Configuration Reference

- type: use `custom:bitosome-room-card`.
- title: optional header title shown on the `ha-card`.
- tile_height: height in px of all tiles.
- badge_size: size of AC badge and thermostat pill height.
- badge_icon_size: icon size inside badges/pills.
- main_icon_size: default main icon size (card-level).
- chip_font_size: font size of chip text.
- card_shadow_color: base panel shadow color.
- card_shadow_intensity: base shadow intensity (0..1).
- unavailable_pulse_color: color for unavailability pulse.
- header:
  - main:
    - tap_entity: entity toggled by default on tap.
    - hold_entity: entity opened with more-info on hold (defaults to tap_entity).
    - light_group_entity: if set, tap toggles this instead of tap_entity.
    - main_name: text on the main tile.
    - main_icon: MDI/HA icon for the main tile.
    - temp_sensor: temperature entity for the chip.
    - humidity_sensor: humidity entity for the chip.
    - badges: reserved; not rendered beyond default bulb indicator.
    - tap_action / hold_action / double_tap_action: HA-native tile actions.
  - ac:
    - entity: climate entity id.
  - thermostat:
    - entity: climate entity id.
  - main_icon_size (maicon_size tolerated): header-level main icon size override.
- switch_rows: list of rows; each row is an array or `{ row: [...] }`.
  - Per-tile options:
    - entity, hold_entity, icon, name, icon_size, font-weight, font-size, type (`switch` or `smart_plug`).
    - tap_action / hold_action / double_tap_action: HA-native tile actions.
- tap_action / hold_action / double_tap_action: optional card-level actions for the main tile when tile-level actions are not set.

## Actions

- Main tile (defaults when no HA actions configured):
  - Tap: toggles `light_group_entity` if set; otherwise toggles `tap_entity`.
  - Hold: opens more-info for `hold_entity` (fallback to `tap_entity`).
  - Double tap: supported only when `double_tap_action` is configured (tile- or card-level).
- Main tile HA actions: `header.main.*_action` override defaults and any card-level actions.
- Card-level actions: apply to the main tile only when tile-level actions are not set.
- AC tile: tap toggles climate on/off; hold opens more-info; double-tap not used.
- Thermostat tile: tap toggles heat/off; hold opens more-info; double-tap not used.
- Switch tiles: defaults are toggle on tap, more-info on hold; tile-level HA actions override; double-tap supported when provided.

## Configuration

Minimal example:

type: custom:bitosome-room-card
title: Living room
header:
  main:
    tap_entity: switch.living_room_light_group
    hold_entity: switch.living_room_light_group
    light_group_entity: light.living_room   # optional; toggled on tap if set
    main_name: Living room
    main_icon: mdi:sofa-outline
    # Main tile actions
    tap_action:
      action: navigate
      navigation_path: /lovelace/home-details
    hold_action:
      action: call-service
      service: homeassistant.turn_off
      service_data:
        entity_id: switch.living_room_light_group
  temp_sensor: sensor.kitchen_living_room_temparature_average
  humidity_sensor: sensor.kitchen_living_room_humidity_average
  ac:
    entity: climate.living_room_ac
  thermostat:
    entity: climate.thermostat_5_7_group

With all options:

type: custom:bitosome-room-card
# title is optional; remove to hide the ha-card header
title: Living room

# Metrics
tile_height: 80              # height of every tile (px)
badge_size: 22               # controls AC badge diameter and thermostat badge height (px)
badge_icon_size: 14          # icon size inside badges (px)
main_icon_size: 56           # main icon size (px) [card-level]
chip_font_size: 12           # temp/humidity chip font size (px)
card_shadow_color: '#000000' # base shadow color
card_shadow_intensity: 0.5   # base shadow intensity (0..1)
unavailable_pulse_color: '#ff3b30' # card pulse color when any entity is unavailable/unknown/offline

header:
  # Per-header icon size override (optional)
  main_icon_size: 56         # or use maicon_size for backward tolerance
  main:
    tap_entity: switch.living_room_light_group
    hold_entity: switch.living_room_light_group
    light_group_entity: light.living_room
    main_name: Living room   # text on main tile (bottom-left)
    main_icon: mdi:sofa-outline
  temp_sensor: sensor.kitchen_living_room_temparature_average
  humidity_sensor: sensor.kitchen_living_room_humidity_average
  ac:
    entity: climate.living_room_ac
  thermostat:
    entity: climate.thermostat_5_7_group
    # thermo_badge_text: ECO  # (not rendered currently; reserved)
  # Optional badges on main tile (bottom-right)
  # badges:
  #   - type: lock
  #     entity: lock.front_door
  #     tap_entity: lock.front_door
  #     hold_entity: lock.front_door

# Switch rows
switch_rows:
  - row:
      - entity: switch.office_light_switch_1_button_a_state
        hold_entity: switch.office_light_switch_1_button_a_state
        name: Ceiling light
        icon: mdi:ceiling-light-outline
        icon_size: 30px          # optional per-tile icon size
        font-weight: 600         # optional per-tile name weight
        font-size: 12px          # optional per-tile name size
        type: switch
      - entity: switch.office_light_switch_2_button_a_state
        hold_entity: switch.office_light_switch_2_button_a_state
        name: Storage
        icon: mdi:wall-sconce-flat-outline
        icon_size: 26px
        font-weight: 500
        font-size: 11px
        type: switch
  - row:
      - entity: switch.other
        name: Other

  # (Embedded Lovelace cards removed)

# Optional card-level HA actions (applies when tile-level actions are not set)
# tap_action/hold_action/double_tap_action supported

## Behavior Notes

- Temp/humidity chip on the main tile is informational only (not clickable).
- Default main tile actions apply when you do not set tile- or card-level HA actions.
- `badge_size` controls both the AC top-right badge size and the thermostat badge height.
- Title is optional; omit `title` to render the card without a header.
- Hover: each tile (main, AC, thermostat, switches) raises slightly with a stronger shadow.

Full example configuration

type: custom:bitosome-room-card
title: Living room
tile_height: 80
badge_size: 22
badge_icon_size: 14
main_icon_size: 48
chip_font_size: 12
card_shadow_color: "#000000"
card_shadow_intensity: 0.1
unavailable_pulse_color: "#ff3b30"

header:
  main:
    tap_entity: switch.living_room_light_group
    hold_entity: switch.living_room_light_switch_group
    # Optional: if provided, tap turns off this entity first
    # light_group_entity: light.living_room
    main_name: Living room
    main_icon: mdi:sofa-outline
    temp_sensor: sensor.kitchen_living_room_temparature_average
    humidity_sensor: sensor.kitchen_living_room_humidity_average
    badges: []
    # Tile-level HA-native actions (override card-level)
    tap_action:
      action: call-service
      service: homeassistant.turn_off
      service_data:
        entity_id: switch.living_room_light_group
    hold_action:
      action: more-info

  ac:
    entity: climate.living_room_ac

  thermostat:
    entity: climate.thermostat_5_7_group

switch_rows:
  - row:
      - entity: switch.kitchen_tabletop_light_switch_button_a_state
        hold_entity: switch.kitchen_tabletop_light_switch_button_a_state
        name: Tabletop
        icon: mdi:countertop-outline
        icon_size: 30px
        font-weight: 600
        font-size: 12px
        type: switch
        tap_action:
          action: toggle
        hold_action:
          action: more-info

      - entity: switch.kitchen_light_switch_button_a_state
        hold_entity: switch.kitchen_light_switch_button_a_state
        name: Sink
        icon: mdi:faucet-variant
        icon_size: 30px
        font-weight: 600
        font-size: 12px
        type: switch
        tap_action:
          action: toggle
        hold_action:
          action: more-info

      - entity: switch.kitchen_light_switch_button_b_state
        hold_entity: switch.kitchen_light_switch_button_b_state
        name: Table
        icon: mdi:table-furniture
        icon_size: 30px
        font-weight: 600
        font-size: 12px
        type: switch
        tap_action:
          action: toggle
        hold_action:
          action: more-info

  - row:
      - entity: switch.sofa_light_switch_group
        hold_entity: switch.sofa_light_switch_group
        name: Sofa
        icon: mdi:sofa-outline
        icon_size: 30px
        font-weight: 600
        font-size: 12px
        type: switch
        tap_action:
          action: toggle
        hold_action:
          action: more-info

      - entity: switch.ikea_tradfri_control_outlet_2
        hold_entity: switch.ikea_tradfri_control_outlet_2
        name: Ambient light
        icon: mdi:globe-light-outline
        icon_size: 30px
        font-weight: 600
        font-size: 12px
        type: switch
        tap_action:
          action: toggle
        hold_action:
          action: more-info

  - row:
      - entity: switch.terrace_light_switch_button_a_state
        hold_entity: switch.terrace_light_switch_button_a_state
        name: Terrace
        icon: mdi:awning-outline
        icon_size: 30px
        font-weight: 600
        font-size: 12px
        type: switch
        tap_action:
          action: toggle
        hold_action:
          action: more-info

  # (Embedded Lovelace cards removed)

Notes
- Main and switch tiles: tile-level `tap_action`/`hold_action`/`double_tap_action` override card-level actions for that tile.
- AC tile: tap toggles climate on/off; hold opens more-info. Visuals reflect mode (badge, fan color/animation, pulsing).
- Thermostat tile: tap toggles hvac_mode between heat/off; hold opens more-info. Visuals reflect heating state and show target temperature.
- Switch tiles use `entity`. If not set, tapping does nothing.
- Rows with `cards:` are no longer supported.
- Main tile temp/humidity chip is informational only (not clickable). The entire main tile responds to tap/hold consistently like other tiles. Default tap turns off the defined entity.

Switch tile config
- entity: primary entity toggled on tap
- hold_entity: entity to open in more-info on hold (defaults to entity)
- icon: MDI or HA icon
- icon_size: optional CSS size (e.g., 30px, 1.4rem). Defaults to 28px.
- name: label text
- font-weight: optional CSS font-weight for the name (e.g., 600)
- font-size: optional CSS font-size for the name (e.g., 12px)
- type: "switch" (default) or "smart_plug" for special visuals

Notes
- If `entity` is not provided, tapping the tile has no effect.

## Development

- Build: `npm run build`
- Dev server: `npm start` (serves `dist` with CORS)

## Examples

Main tile with navigate on tap and turn off on hold

type: custom:bitosome-room-card
title: Living room
header:
  main:
    tap_entity: switch.living_room_light_group
    hold_entity: switch.living_room_light_group
    main_name: Living room
    main_icon: mdi:sofa-outline
    tap_action:
      action: navigate
      navigation_path: /lovelace/home-details
    hold_action:
      action: call-service
      service: homeassistant.turn_off
      service_data:
        entity_id: switch.living_room_light_group

Main tile default behavior using light_group_entity

type: custom:bitosome-room-card
header:
  main:
    tap_entity: switch.living_room_group
    light_group_entity: light.living_room
    main_name: Living room
    main_icon: mdi:sofa-outline

Double-tap action on main tile

type: custom:bitosome-room-card
header:
  main:
    tap_entity: switch.living_room
    double_tap_action:
      action: call-service
      service: homeassistant.toggle
      service_data:
        entity_id: light.ambient

Smart plug switch row with tile-level actions

type: custom:bitosome-room-card
switch_rows:
  - row:
      - entity: switch.plug_tv
        name: TV Plug
        icon: mdi:power-socket-eu
        type: smart_plug
        tap_action:
          action: toggle
        hold_action:
          action: more-info
