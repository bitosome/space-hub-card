# Bitosome Room Card

A custom Lovelace card for [Home Assistant](https://www.home-assistant.io/) that presents an overview of a room. The card renders a main tile for the room and optional tiles for climate devices and switches.

## Features
- Built with [LitElement](https://lit.dev/) and Home Assistant card helpers.
- Main tile shows name, icon, temperature and humidity chips.
- Optional tiles for AC units and thermostats with animated state indicators.
- Rows of switch tiles with per-tile tap, hold and double-tap actions.
- Card shadow pulses when referenced entities become unavailable.
- Configurable glow effect (pulse, glow, or none) for tile highlights.

## Installation
### HACS (recommended)
1. In Home Assistant, open HACS and search for "Bitosome Room Card" in the Frontend section.
2. Install the card and HACS will add the resource automatically.

### Manual
1. Copy `bitosome-room-card.js` to your `www` directory.
2. Add the following resource in the Home Assistant UI or in `configuration.yaml`:
   ```yaml
   url: /local/bitosome-room-card.js
   type: module
   ```

## Usage
Add the card to a dashboard with a minimal configuration:
```yaml
type: custom:bitosome-room-card
title: Living room
header:
  main:
    main_name: Living room
    main_icon: mdi:sofa-outline
    temp_sensor: sensor.living_room_temperature
    humidity_sensor: sensor.living_room_humidity
# Optional global glow style: pulse, glow, or none
glow_effect: glow
```
See the examples in this repository for more advanced options.

## Development
```bash
npm install
npm start    # start development server
npm run lint # run ESLint
npm run build    # build the card
```

## Continuous Integration
A GitHub Actions workflow runs ESLint and `npm run build` on every push and pull request to ensure the project lints and builds successfully.

## License
[MIT](LICENSE)
