# bitosome-room-card

Custom Room card for Home Assistant, built on the boilerplate using LitElement. It renders a main tile plus optional AC/Thermostat squares and switch rows, with rich visuals and HA-native actions.

## Features

- LitElement card with HA action handling (tap, hold, double_tap)
- Main tile with configurable icon size and live temp/humidity chip
- AC and Thermostat tiles with animated state visuals
- Switch rows with per-tile tap/hold entities, including smart plug style
- Optional card header title (omit `title` to hide)
- Unavailable pulse: card shadow pulses if any used entity is unavailable/unknown/offline

## Configuration

Minimal example:

type: custom:bitosome-room-card
title: Living room
header:
  layout: all           # all | main_ac | main_thermo | main_only
  main_entity: switch.living_room_light_group
  main_name: Living room
  main_icon: mdi:sofa-outline
  temp_sensor: sensor.kitchen_living_room_temparature_average
  humidity_sensor: sensor.kitchen_living_room_humidity_average
  ac_entity: climate.living_room_ac
  thermo_entity: climate.thermostat_5_7_group

With all options:

type: custom:bitosome-room-card
# title is optional; remove to hide the ha-card header
title: Living room

# Layout and metrics
tile_height: 80              # height of every tile (px)
badge_size: 22               # controls AC badge diameter and thermostat badge height (px)
badge_icon_size: 14          # icon size inside badges (px)
main_icon_size: 56           # main icon size (px)
chip_font_size: 12           # temp/humidity chip font size (px)
card_shadow_color: '#000000' # base shadow color
card_shadow_intensity: 0.5   # base shadow intensity (0..1)
unavailable_pulse_color: '#ff3b30' # card pulse color when any entity is unavailable/unknown/offline

header:
  layout: all                # all | main_ac | main_thermo | main_only
  main_entity: switch.living_room_light_group
  main_name: Living room     # text on main tile (bottom-left)
  main_icon: mdi:sofa-outline
  temp_sensor: sensor.kitchen_living_room_temparature_average
  humidity_sensor: sensor.kitchen_living_room_humidity_average
  ac_entity: climate.living_room_ac
  thermo_entity: climate.thermostat_5_7_group
  thermo_badge_text: ECO     # optional extra text inside thermostat badge (top-right)
  # Optional badges on main tile (bottom-right)
  # badges:
  #   - type: lock
  #     entity: lock.front_door
  #     tap_entity: lock.front_door
  #     hold_entity: lock.front_door

# Switch rows
switch_rows:
  - row:
      - tap_entity: switch.office_light_switch_1_button_a_state
        hold_entity: switch.office_light_switch_1_button_a_state
        name: Ceiling light
        icon: mdi:ceiling-light-outline
        type: switch
      - tap_entity: switch.office_light_switch_2_button_a_state
        hold_entity: switch.office_light_switch_2_button_a_state
        name: Storage
        icon: mdi:wall-sconce-flat-outline
        type: switch
  - row:
      - tap_entity: switch.other
        name: Other

# Optional HA action config for main tile
tap_action:
  action: more-info
hold_action:
  action: navigate
  navigation_path: /lovelace/room
double_tap_action:
  action: call-service
  service: homeassistant.toggle
  service_data:
    entity_id: switch.living_room

## Behavior Notes

- Main temp/humidity chip icons and values are clickable to open their entities.
- `badge_size` controls both the AC top-right badge size and the thermostat badge height.
- Title is optional; omit `title` to render the card without a header.

## Development

- Build: `npm run build`
- Dev server: `npm start` (serves `dist` with CORS)
