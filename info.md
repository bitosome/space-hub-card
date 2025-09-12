# Space Hub Card

A modern, customizable dashboard card for Home Assistant with support for multiple room configurations, interactive chips, and responsive design.

## Features

- **Multiple header tiles**: main, AC, and thermostat tiles with independent glow effects
- **Interactive chips**: lock, door, presence, gate, and illuminance sensors
- **Smart switches**: organized in rows with custom icons and actions  
- **Responsive design**: automatically scales with tile height settings
- **Glow effects**: per-tile glow control (static, pulse, none)
- **Temperature/humidity**: combined sensor display
- **Touch-optimized**: works great on mobile and tablet interfaces

## New in v1.0.6

- **Door chip type**: dedicated door sensor with door-specific icons
- **Presence chip type**: human presence detection with greeting/handsdown icons
- **Removed backwards compatibility**: cleaner codebase, no legacy support
- **Updated chip terminology**: consistent use of "chips" throughout

## Installation via HACS

1. Open HACS in Home Assistant
2. Go to "Frontend" 
3. Click the "+" button
4. Search for "Space Hub Card"
5. Click "Download"
6. Restart Home Assistant

## Quick Configuration

```yaml
type: custom:space-hub-card
title: Living Room
headers:
  - main:
      main_name: Living Room
      main_icon: mdi:sofa-outline
      light_group_entity: switch.living_room_lights
      temp_sensor: sensor.living_room_temperature
      humidity_sensor: sensor.living_room_humidity
      chips:
        - type: presence
          entity: binary_sensor.living_room_presence
        - type: door
          entity: binary_sensor.front_door
```

For full configuration options and examples, see the [README](https://github.com/artjomkuznetsov/space-hub-card#readme).