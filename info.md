# Space Hub Card

Compact room hub card for Home Assistant dashboards.

## Highlights

- Main room tile with sensors and status chips
- Optional AC and thermostat companion tiles
- Switch rows with native actions and confirmation
- Live template indicators on switch tiles
- Embedded cards below rows or at card bottom
- Visual editor with native HA selectors

## Install with HACS

1. Open HACS.
2. Go to `Frontend`.
3. Search for `Space Hub Card`.
4. Download and refresh the browser.

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
```

For full configuration, examples, and install details, see the repository README.
