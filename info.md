# Space Hub Card

A modern, customizable dashboard card for Home Assistant with support for multiple room configurations, interactive chips, and responsive design.

## Features

- **Visual Config Editor**: full UI-based configuration with visual/YAML toggle
- **Multiple header tiles**: main, AC, and thermostat tiles with independent glow effects
- **Interactive chips**: lock, door, presence, gate, and illuminance sensors
- **Offline feedback**: unavailable entities use alert icons and muted colors (customizable per chip)
- **Smart switches**: organized in rows with custom icons and actions
- **Hold entity override**: configure which entity's more-info opens on long-press
- **Confirmation dialog**: optional tap confirmation for critical switches
- **Domain-aware toggling**: switches, lights, locks, and covers use correct service calls
- **Template indicators**: optional per-switch template values rendered in the top-right corner
- **Responsive design**: automatically scales with tile height settings
- **Glow effects**: per-tile glow control (static, pulse, none)
- **Temperature/humidity**: combined sensor display
- **Touch-optimized**: reliable hold detection on mobile and tablet

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
switch_rows:
  - row:
      - entity: switch.living_room_fan
        name: Fan
        icon: mdi:fan
        hold_entity: sensor.fan_power  # more-info shows power sensor on hold
      - entity: switch.main_breaker
        name: Main Power
        icon: mdi:power
        confirmation: "This will cut power!"
```

Or use the **Visual Editor** — click the pencil icon on any space-hub-card to configure everything through a form-based UI.

For full configuration options and examples, see the [README](https://github.com/artjomkuznetsov/space-hub-card#readme).
