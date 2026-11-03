# Changelog

## 2.2.0 — 2026-11-03

Consumes `@bitosome/ha-card-ui` 1.4.0.

- Pending switch tiles and moving lock chips show the shared busy indicator instead of two private spinners. Reduced motion keeps it static.
- Lock, door, gate, presence and fault colours use the shared status aliases, so HA theme success/error colours now reach the chips. The smart plug chip is green, matching the smart plug tile and its glow, instead of orange.
- Room temperature shows one decimal and humidity none, the same precision as the weather tile. Room and weather readings follow the HA profile's language and number format (for example `21,5°` with decimal comma).
- Stale weather data shows a warning-tone glow under the tile and a "Data stale" label, replacing the unlabelled red halo.
- Weather readouts, metrics and chips have 44px touch targets. Focus is a 3px outline that stays visible on active metrics; on chips it rings the chip itself. Weather chips sit in their own row at the bottom of the tile, so their targets no longer cover the last metrics or forecast row.
- The weather source picker, hovers, chart grid lines and range tracks follow the theme's primary and text colours, so they stay readable on light themes.
