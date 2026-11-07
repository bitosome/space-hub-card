# Changelog

## 2.3.4 — 2026-11-07

- The weather tile has no glow: no amber glow for stale station data and no red pulse for an unavailable station sensor. Problems are stated in text instead: the "Data stale" label, the forecast notice, and a dash for a missing reading. Other tiles keep their glows.
- `stale_minutes` now follows the station sensors' `last_reported`, which moves on every report even when the value is unchanged. It used `last_updated`, which only moves on a change, so a steady overnight reading could look stale. The hourly forecast entity counts only when no station sensor is configured. The label shows when the data stopped, for example "Data stale · since 19:23".

## 2.3.3 — 2026-11-05

- The primary weather `entity` going unavailable no longer puts the red unavailable pulse on the weather tile either. Forecast outages, primary or extra, get the warning notice and the picker dot instead; the station sensors still raise the red pulse.
- The forecast notice drops its "Forecast not updating" title. The message alone reads "Forecast Home has not updated since 08:46. Showing the last forecast received."

## 2.3.2 — 2026-11-05

- The "forecast not updating" message is now the shared warning notice across the full width of the tile: "Forecast not updating. Forecast Tallinn has not updated since 06:24. Showing the last forecast received." It replaces the chip, which repeated "forecast" when the source name already contained it.
- The forecast source picker spans the full width in equal columns with 13px labels and 44px touch targets, instead of 10px labels capped at 92px that cut off names such as "Forecast Tallinn". In narrow columns a name wraps onto a second line before it truncates. The not-updating dot sits in the button corner, so it no longer takes width from the name.

## 2.3.1 — 2026-11-05

- An extra weather source in `forecast_sources` that goes unavailable (for example Met.no answering 503 for one location) no longer puts the red unavailable pulse on the whole weather tile. The primary `entity` and the station sensors still do.
- The source picker marks a source that is not updating with a warning dot, and its tooltip and spoken name say since when. When that source is selected, a warning chip reads "<source> forecast not updating · since 06:24" and the tile keeps showing the last forecast Home Assistant sent for it.

## 2.3.0 — 2026-11-03

Consumes `@bitosome/ha-card-ui` 1.7.0 (shared time-series chart), up from 1.4.0.

- The hourly Temperature, Chance of Precipitation and combined graphs use the shared family chart, the same one as the electricity price and printer power charts. The private chart code, selection state and about 200 lines of chart CSS are gone.
- Graph text is no longer stretched sideways: labels are 11px at every card width and the graph is exactly `graph_height` tall. Time labels read for example "Nov 3, 14:00" in the HA locale and thin out to fit the width instead of four fixed ticks. Temperature labels are whole-degree steps; the right axis widens to fit them.
- The graph background follows the theme (a primary-colour tint) instead of a fixed sky-blue gradient. The temperature area fades the temperature colours instead of an amber-to-cyan fill. The selection cursor and dot follow the theme text colour instead of white.
- New: a now marker, keyboard scrubbing (arrow keys, Page Up/Down, Home, End; Escape returns to the current hour) and gaps where the forecast has no value instead of a line drawn across them. A `null` forecast value is now a gap instead of 0, and a forecast with no real values for a field hides that graph. A forecast that changes resolution part-way (hourly, then 6-hourly) stays one line. With `sync_graphs` the two graphs share the selected time, not an index; a graph with no value at that time keeps its cursor there and reads `–`. A mouse hover previews an hour and returns to the picked hour (or now) when the pointer leaves.
- A vertical swipe on a graph now scrolls the dashboard; a horizontal drag still scrubs.
- Precipitation axis labels and the readout use the HA profile's number format, for example `40%`, like the other percentages on the card.
- The daily forecast's days and low/high times follow the HA time zone setting, the same as the graph labels; with the profile set to server time they used the browser zone before. A `null` daily temperature or precipitation chance is no longer shown as 0. The readout no longer shows -0°.
- The condition icon strip and the selected-hour icon stay; the icons line up with the graph's time scale. The precipitation colour can be themed with `--space-hub-rain-color`, and the graph frame with the shared `--family-chart-*` hooks. Combined mode shows the shared legend (temperature as its colour scale, precipitation in the rain colour).
- The card-size estimate uses the shared chart frame height (`CHART_FRAME_CHROME_PX`, plus the icon strip): it reserves 8px less for a graph with the icon strip and 28px less for one without, plus the shared legend row height (`CHART_LEGEND_PX`, 21px) for the combined graph's legend.

## 2.2.0 — 2026-11-03

Consumes `@bitosome/ha-card-ui` 1.4.0.

- Pending switch tiles and moving lock chips show the shared busy indicator instead of two private spinners. Reduced motion keeps it static.
- Lock, door, gate, presence and fault colours use the shared status aliases, so HA theme success/error colours now reach the chips. The smart plug chip is green, matching the smart plug tile and its glow, instead of orange.
- Room temperature shows one decimal and humidity none, the same precision as the weather tile. Room and weather readings follow the HA profile's language and number format (for example `21,5°` with decimal comma).
- Stale weather data shows a warning-tone glow under the tile and a "Data stale" label, replacing the unlabelled red halo.
- Weather readouts, metrics and chips have 44px touch targets. Focus is a 3px outline that stays visible on active metrics; on chips it rings the chip itself. Weather chips sit in their own row at the bottom of the tile, so their targets no longer cover the last metrics or forecast row.
- The weather source picker, hovers, chart grid lines and range tracks follow the theme's primary and text colours, so they stay readable on light themes.
