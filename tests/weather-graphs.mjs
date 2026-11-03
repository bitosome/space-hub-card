import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

// A fixed browser zone, so the HA server-zone case below differs from it.
process.env.TZ = 'Europe/Tallinn';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'PointerEvent', 'KeyboardEvent', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
// Browsers lowercase parsed attribute names on SVG elements unless HTML lists them (so
// lit 2 finds "viewbox$lit$"); happy-dom keeps "viewBox$lit$". Match the browser here.
const svgGetAttribute = win.SVGElement.prototype.getAttribute;
win.SVGElement.prototype.getAttribute = function getAttribute(name) {
  const value = svgGetAttribute.call(this, name);
  if (value !== null || !String(name).endsWith('$lit$')) return value;
  const match = this.getAttributeNames().find((candidate) => candidate.toLowerCase() === name);
  return match ? svgGetAttribute.call(this, match) : null;
};
await import('../dist/space-hub-card.js');
const { CHART_FRAME_CHROME_PX, CHART_LEGEND_PX, formatHassTime } = await import('@bitosome/ha-card-ui');

const HOUR = 3600000;
const start = Math.floor(Date.now() / HOUR) * HOUR;
const temps = [8, 9, 11, 13, 14, 12, 10, 9];
const rain = [0, 10, 40, 80, 60, 20, 5, 0];
const conditions = ['sunny', 'partlycloudy', 'cloudy', 'rainy', 'pouring', 'rainy', 'cloudy', 'clear-night'];
const hourly = (missingTemperatureAt) => temps.map((temperature, index) => ({
  datetime: new Date(start + index * HOUR).toISOString(),
  condition: conditions[index],
  temperature: index === missingTemperatureAt ? undefined : temperature,
  precipitation_probability: rain[index],
}));

async function mount(weather, forecast = hourly(), { daily = [], hass = {} } = {}) {
  const card = document.createElement('space-hub-card');
  card.setConfig({ type: 'custom:space-hub-card', headers: [{ weather: { entity: 'weather.home', ...weather } }] });
  card.hass = {
    states: { 'weather.home': { state: 'cloudy', attributes: {}, last_updated: new Date().toISOString() } },
    locale: { language: 'en', time_format: '24' },
    localize: (key) => key,
    ...hass,
    connection: {
      subscribeMessage(callback, message) {
        Promise.resolve().then(() => callback({ forecast: message.forecast_type === 'hourly' ? forecast : daily }));
        return Promise.resolve(() => {});
      },
    },
  };
  document.body.append(card);
  await card.updateComplete;
  await new Promise((resolve) => setTimeout(resolve, 0));
  await card.updateComplete;
  return { card, root: card.shadowRoot };
}

const key = (svg, k) => svg.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true, composed: true, cancelable: true }));
const settle = async (card) => { await card.updateComplete; await card.updateComplete; };
const chart = (root, suffix) => root.querySelector(`svg.family-chart[data-chart-id$="-${suffix}"]`);
const valueNow = (root, suffix) => chart(root, suffix).getAttribute('aria-valuenow');

const Card = customElements.get('space-hub-card');
const css = [Card.styles].flat(Infinity).map((sheet) => sheet.cssText).join('\n');
assert.match(css, /\.family-chart-frame\s*\{/, 'chartStyles is composed into the card styles');
assert.doesNotMatch(css, /\.weather-conditions-chart|\.weather-conditions-selected-dot|\.weather-conditions-axis/, 'the private chart CSS is gone');
assert.match(css, /\.weather-conditions-panel\s*\{[^}]*--family-chart-radius:\s*calc\(var\(--tile-border-radius\) - 4px\)/, 'the frame corners come from the --family-chart-radius hook');
assert.doesNotMatch(css, /\.weather-conditions-graph\.family-chart-frame/, 'no selector override of the shared frame');

// Separate mode, synced (default): two shared charts that move together, by time.
let { card, root } = await mount({ graph_height: 140 });
let charts = root.querySelectorAll('svg.family-chart');
assert.equal(charts.length, 2, 'separate mode renders temperature and precipitation charts');
assert.deepEqual([...charts].map((svg) => svg.getAttribute('data-chart-id')), [
  'weather-0-weather.home-temperature',
  'weather-0-weather.home-precipitation',
]);
for (const svg of charts) {
  assert.equal(svg.getAttribute('role'), 'slider');
  assert.equal(svg.getAttribute('viewBox'), '0 0 360 140', 'viewBox is the measured width x graph_height, no stretching');
  assert.equal(svg.getAttribute('preserveAspectRatio'), null);
}
assert.equal(root.querySelectorAll('.weather-conditions-panel > .family-chart-frame.weather-conditions-graph').length, 2);
const ids = [...root.querySelectorAll('svg.family-chart [id]')].map((element) => element.id);
assert.equal(new Set(ids).size, ids.length, 'gradient and mask ids are unique within the shadow root');
assert.ok(ids.length > 0);
assert.equal(chart(root, 'temperature').querySelectorAll('.family-chart-extreme').length, 2, 'temperature shows H and L');
assert.match(chart(root, 'precipitation').querySelector('.family-chart-line').getAttribute('style'), /--space-hub-rain-color/);
assert.deepEqual(
  [...chart(root, 'precipitation').querySelectorAll('.family-chart-axis')].map((label) => label.textContent.trim()),
  ['0%', '25%', '50%', '75%', '100%'],
  'precipitation axis is a fixed 0..100 split',
);
assert.ok(
  [...chart(root, 'temperature').querySelectorAll('.family-chart-axis')].every((label) => /^-?\d+°$/.test(label.textContent.trim())),
  'temperature axis labels are whole degrees',
);
const tempReadout = root.querySelector('.weather-conditions-temp .family-chart-readout');
assert.ok(tempReadout.querySelector('.weather-conditions-selected-icon'), 'temperature readout carries the condition icon');
assert.equal(root.querySelector('.weather-conditions-rain .weather-conditions-selected-icon'), null);

key(chart(root, 'temperature'), 'End');
await settle(card);
assert.equal(valueNow(root, 'temperature'), '7');
assert.equal(valueNow(root, 'precipitation'), '7', 'synced graphs share the selected time');
assert.match(root.querySelector('.weather-conditions-rain .family-chart-readout strong').textContent, /^0%$/);
key(chart(root, 'precipitation'), 'Home');
await settle(card);
assert.equal(valueNow(root, 'temperature'), '0');
assert.equal(root.querySelector('.weather-conditions-temp .family-chart-readout strong').textContent.trim(), '8°');

// Icon strip: each slot sits at the chart's x for its time (model.xPercent).
const icons = [...root.querySelectorAll('.weather-conditions-temp .weather-conditions-icons .weather-conditions-icon-slot')];
assert.equal(icons.length, 8, 'one icon per hour when the forecast fits the icon count');
const leftPct = (slot) => Number(/left:([\d.]+)%/.exec(slot.getAttribute('style'))[1]);
const cursorPct = (svg) => (Number(svg.querySelector('.family-chart-cursor').getAttribute('x1')) / 360) * 100;
assert.ok(Math.abs(leftPct(icons[0]) - cursorPct(chart(root, 'temperature'))) < 0.01, 'first icon aligns with the first hour');
key(chart(root, 'temperature'), 'End');
await settle(card);
assert.ok(Math.abs(leftPct(icons[7]) - cursorPct(chart(root, 'temperature'))) < 0.01, 'last icon aligns with the last hour');

// Scrubbing must not reach the tile: pointerdown/click and Enter/Space stop at the chart.
const reached = [];
const tile = root.querySelector('.weather-tile-wrap');
for (const type of ['pointerdown', 'click', 'keyup']) tile.addEventListener(type, () => reached.push(type));
const svg = chart(root, 'temperature');
svg.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerId: 1, pointerType: 'mouse', clientX: 10, clientY: 10 }));
svg.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, composed: true, pointerId: 1, pointerType: 'mouse' }));
svg.dispatchEvent(new Event('click', { bubbles: true, composed: true }));
svg.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true, composed: true }));
assert.deepEqual(reached, [], 'chart pointer and activation keys do not reach the weather tile');
card.remove();

// Separate mode without sync: each chart keeps its own selection.
({ card, root } = await mount({ sync_graphs: false }));
const rainBefore = valueNow(root, 'precipitation');
key(chart(root, 'temperature'), 'End');
await settle(card);
assert.equal(valueNow(root, 'temperature'), '7');
assert.equal(valueNow(root, 'precipitation'), rainBefore, 'unsynced graphs select independently');
card.remove();

// Combined mode: one chart, temperature right, precipitation on the left axis in its colour.
({ card, root } = await mount({ forecast_graph_mode: 'combined' }));
charts = root.querySelectorAll('svg.family-chart');
assert.equal(charts.length, 1);
assert.equal(charts[0].getAttribute('data-chart-id'), 'weather-0-weather.home-combined');
const leftLabels = charts[0].querySelectorAll('.family-chart-axis-left');
assert.equal(leftLabels.length, 5, 'combined mode has a left precipitation axis');
assert.match(leftLabels[0].getAttribute('style'), /--space-hub-rain-color/);
const strongs = root.querySelectorAll('.weather-conditions-combined .family-chart-readout strong');
assert.equal(strongs.length, 2, 'combined readout shows temperature and precipitation');
assert.match(strongs[1].getAttribute('style') || '', /--space-hub-rain-color/, 'precipitation readout takes the rain colour');
assert.equal(root.querySelectorAll('.weather-conditions-combined .weather-conditions-icon-slot').length, 8);
const legend = [...root.querySelectorAll('.weather-conditions-combined > .family-chart-legend span[data-series]')];
assert.deepEqual(legend.map((entry) => entry.getAttribute('data-series')), ['temperature', 'precipitation'], 'combined mode shows the shared legend');
assert.deepEqual(legend.map((entry) => entry.textContent.trim()), ['Temperature', 'Chance of precipitation']);
assert.match(legend[0].querySelector('i').getAttribute('style'), /linear-gradient\(90deg/, 'the temperature swatch is its colour scale');
assert.match(legend[1].querySelector('i').getAttribute('style'), /--space-hub-rain-color/, 'the precipitation swatch is the rain colour');
card.remove();
({ card, root } = await mount({}));
assert.equal(root.querySelector('.family-chart-legend'), null, 'separate graphs need no legend');
card.remove();

// A missing temperature hour is a gap: two line segments, not a bridged or zero value.
({ card, root } = await mount({}, hourly(3)));
assert.equal(chart(root, 'temperature').querySelectorAll('.family-chart-line[data-series="temperature"]').length, 2);
assert.equal(chart(root, 'precipitation').querySelectorAll('.family-chart-line').length, 1);
card.remove();

// No precipitation chance in the forecast: that graph is hidden, not an empty frame.
({ card, root } = await mount({}, hourly().map(({ precipitation_probability: _drop, ...item }) => item)));
assert.equal(root.querySelectorAll('svg.family-chart').length, 1);
assert.equal(root.querySelector('.family-chart-empty'), null);
card.remove();

// Forecasts arrive as JSON: a missing value is null, which must be a gap, never a 0.
const withNull = hourly().map((item, index) => (index === 3 ? { ...item, temperature: null } : item));
({ card, root } = await mount({}, withNull));
assert.equal(chart(root, 'temperature').querySelectorAll('.family-chart-line[data-series="temperature"]').length, 2, 'a null temperature breaks the line');
assert.equal(chart(root, 'temperature').getAttribute('aria-valuemax'), '6', 'the null hour is not a selectable point');
assert.ok(
  [...chart(root, 'temperature').querySelectorAll('.family-chart-axis')].every((label) => label.textContent.trim() !== '0°'),
  'the null hour is not plotted as 0°',
);
card.remove();
({ card, root } = await mount({}, hourly().map((item) => ({ ...item, precipitation_probability: null }))));
assert.equal(root.querySelectorAll('svg.family-chart').length, 1, 'an all-null precipitation chance hides that graph');
assert.equal(root.querySelector('.weather-conditions-rain'), null);
card.remove();
({ card, root } = await mount({}, hourly().map((item, index) => (index === 2 ? { ...item, temperature: '' } : item))));
assert.equal(chart(root, 'temperature').querySelectorAll('.family-chart-line[data-series="temperature"]').length, 2, 'an empty string is a gap too');
card.remove();

// A dropped hourly entry still breaks the line.
({ card, root } = await mount({}, hourly().filter((_, index) => index !== 4)));
assert.equal(chart(root, 'temperature').querySelectorAll('.family-chart-line[data-series="temperature"]').length, 2, 'a dropped hour is a gap');
card.remove();

// met.no style: hourly for 60 hours, then 6-hourly. The coarser tail stays one line.
const mixed = (dropAt) => Array.from({ length: 72 }, (_, index) => ({
  datetime: new Date(start + (index < 60 ? index : 59 + (index - 59) * 6) * HOUR).toISOString(),
  condition: 'cloudy',
  temperature: 8 + Math.sin(index / 5) * 4,
  precipitation_probability: (index * 7) % 100,
})).filter((_, index) => index !== dropAt);
({ card, root } = await mount({ forecast_slots: 72 }, mixed()));
assert.equal(chart(root, 'temperature').querySelectorAll('.family-chart-line[data-series="temperature"]').length, 1, 'a resolution change is not a gap');
assert.equal(chart(root, 'precipitation').querySelectorAll('.family-chart-line').length, 1);
assert.equal(chart(root, 'temperature').getAttribute('aria-valuemax'), '71');
card.remove();
({ card, root } = await mount({ forecast_slots: 72 }, mixed(30)));
assert.equal(chart(root, 'temperature').querySelectorAll('.family-chart-line[data-series="temperature"]').length, 2, 'a dropped hour before the coarser tail is still a gap');
card.remove();

// Synced graphs with a gap in one of them: the selected time is shared, and the graph
// without a value there keeps its cursor at that time and shows no value (the shared
// chart's rule; see README), instead of snapping to another hour.
({ card, root } = await mount({}, hourly().map((item, index) => (index === 4 ? { ...item, precipitation_probability: null } : item))));
key(chart(root, 'temperature'), 'Home');
await settle(card);
for (let step = 0; step < 4; step += 1) {
  key(chart(root, 'temperature'), 'ArrowRight');
  await settle(card);
}
assert.equal(valueNow(root, 'temperature'), '4');
assert.ok(
  Math.abs(cursorPct(chart(root, 'precipitation')) - cursorPct(chart(root, 'temperature'))) < 0.01,
  'the rain graph cursor stays at the shared time',
);
assert.equal(chart(root, 'precipitation').querySelector('.family-chart-dot'), null, 'no dot where the rain graph has no value');
const rainNoValue = root.querySelector('.weather-conditions-rain .family-chart-readout strong');
assert.ok(rainNoValue.classList.contains('family-chart-no-value'), 'the rain readout shows no value');
assert.equal(rainNoValue.textContent.trim(), '–');
assert.equal(rainNoValue.getAttribute('aria-label'), 'No data');
assert.match(chart(root, 'precipitation').getAttribute('aria-valuetext'), /No data/);
assert.equal(
  root.querySelector('.weather-conditions-rain .family-chart-readout span').textContent,
  root.querySelector('.weather-conditions-temp .family-chart-readout span').textContent,
  'both readouts show the same time',
);
assert.equal(root.querySelector('.weather-conditions-temp .family-chart-readout strong').textContent.trim(), `${temps[4]}°`);
key(chart(root, 'temperature'), 'ArrowRight');
await settle(card);
assert.equal(root.querySelector('.weather-conditions-rain .family-chart-readout strong').textContent.trim(), `${rain[5]}%`, 'the next hour has a value again');
assert.ok(chart(root, 'precipitation').querySelector('.family-chart-dot'));
card.remove();

// The same with a mixed-resolution forecast: the 6-hourly tail makes the gap tolerance 9 h,
// but an explicit null chance in the hourly part still reads no value, not the next hour's.
({ card, root } = await mount({ forecast_slots: 72 }, mixed().map((item, index) => (index === 30 ? { ...item, precipitation_probability: null } : item))));
key(chart(root, 'temperature'), 'Home');
await settle(card);
for (let step = 0; step < 30; step += 1) {
  key(chart(root, 'temperature'), 'ArrowRight');
  await settle(card);
}
assert.equal(valueNow(root, 'temperature'), '30');
assert.ok(
  root.querySelector('.weather-conditions-rain .family-chart-readout strong').classList.contains('family-chart-no-value'),
  'a null hour in a mixed-resolution forecast shows no value',
);
assert.equal(chart(root, 'precipitation').querySelector('.family-chart-dot'), null);
key(chart(root, 'temperature'), 'ArrowRight');
await settle(card);
assert.equal(root.querySelector('.weather-conditions-rain .family-chart-readout strong').textContent.trim(), `${(31 * 7) % 100}%`);
card.remove();

// -0.4 reads 0°, not -0°.
({ card, root } = await mount({}, hourly().map((item, index) => (index === 0 ? { ...item, temperature: -0.4 } : item))));
key(chart(root, 'temperature'), 'Home');
await settle(card);
assert.equal(root.querySelector('.weather-conditions-temp .family-chart-readout strong').textContent.trim(), '0°');
assert.doesNotMatch(chart(root, 'temperature').getAttribute('aria-valuetext'), /-0°/);
card.remove();

// graph_horizontal_lines maps to the chart's lines; graph_height clamps at 260.
({ card, root } = await mount({ graph_horizontal_lines: 3, graph_height: 300 }));
assert.equal(chart(root, 'precipitation').querySelectorAll('.family-chart-grid').length, 3, 'graph_horizontal_lines: 3 gives 3 grid lines');
assert.deepEqual(
  [...chart(root, 'precipitation').querySelectorAll('.family-chart-axis')].map((label) => label.textContent.trim()),
  ['0%', '50%', '100%'],
);
for (const svg of root.querySelectorAll('svg.family-chart')) assert.equal(svg.getAttribute('viewBox'), '0 0 360 260', 'graph_height is clamped to 260');
card.remove();

// Combined mode with only precipitation: rain axis on the left, no temperature axis or icon strip.
({ card, root } = await mount({ forecast_graph_mode: 'combined' }, hourly().map(({ temperature: _drop, ...item }) => item)));
charts = root.querySelectorAll('svg.family-chart');
assert.equal(charts.length, 1);
assert.equal(charts[0].querySelectorAll('.family-chart-axis-left').length, 5);
assert.equal(charts[0].querySelectorAll('.family-chart-axis:not(.family-chart-axis-left)').length, 0, 'no temperature labels without temperature');
assert.equal(root.querySelector('.weather-conditions-combined .weather-conditions-icons'), null, 'no icon strip without temperature');
assert.equal(root.querySelector('.weather-conditions-combined .family-chart-legend'), null, 'no legend for a single series');
assert.equal(root.querySelectorAll('.weather-conditions-combined .family-chart-readout strong').length, 1);
card.remove();

// Fewer icons than hours: the slots spread evenly over the chart's time span.
({ card, root } = await mount({ temperature_icon_count: 5 }));
const spread = [...root.querySelectorAll('.weather-conditions-temp .weather-conditions-icon-slot')].map(leftPct);
assert.equal(spread.length, 5);
key(chart(root, 'temperature'), 'Home');
await settle(card);
const firstPct = cursorPct(chart(root, 'temperature'));
key(chart(root, 'temperature'), 'End');
await settle(card);
const lastPct = cursorPct(chart(root, 'temperature'));
spread.forEach((pct, index) => {
  assert.ok(Math.abs(pct - (firstPct + ((lastPct - firstPct) * index) / 4)) < 0.01, `icon ${index} sits at its share of the time span`);
});
card.remove();

// Mouse hover selects the hour under the pointer, without a button press.
({ card, root } = await mount({}));
const hoverSvg = chart(root, 'temperature');
hoverSvg.getBoundingClientRect = () => ({ left: 0, top: 0, right: 360, bottom: 118, width: 360, height: 118, x: 0, y: 0 });
key(hoverSvg, 'Home');
await settle(card);
assert.equal(valueNow(root, 'temperature'), '0');
hoverSvg.dispatchEvent(new PointerEvent('pointermove', { bubbles: true, composed: true, pointerId: 1, pointerType: 'mouse', clientX: 359, clientY: 40 }));
await settle(card);
assert.equal(valueNow(root, 'temperature'), '7', 'hover moves the selection');
assert.equal(valueNow(root, 'precipitation'), '7', 'and the synced graph follows');
hoverSvg.dispatchEvent(new PointerEvent('pointerleave', { bubbles: false, composed: true, pointerId: 1, pointerType: 'mouse' }));
await settle(card);
assert.equal(valueNow(root, 'temperature'), '0', 'leaving returns to the pinned hour');
assert.equal(valueNow(root, 'precipitation'), '0', 'in both synced graphs');
card.remove();

// Daily forecast in HA's server time zone: days and low/high times use the same zone as
// the graph labels. HA daily entries start at the server's midnight (Tokyo 00:00 is
// 17:00 the day before in the Tallinn browser zone), and a null templow is not 0.
const tokyo = { locale: { language: 'en', time_format: '24', time_zone: 'server' }, config: { time_zone: 'Asia/Tokyo' } };
const dayStart = Date.parse('2026-11-03T00:00:00Z');
const dayTemps = [5, 6, 7, 9, 8, 6, 4, 3];
const dayHourly = dayTemps.map((temperature, index) => ({
  datetime: new Date(dayStart + index * HOUR).toISOString(),
  condition: 'cloudy',
  temperature,
  precipitation_probability: 10,
}));
const dayDaily = [{ datetime: '2026-11-02T15:00:00+00:00', condition: 'cloudy', temperature: 9, templow: null, precipitation_probability: null }];
({ card, root } = await mount({}, dayHourly, { daily: dayDaily, hass: tokyo }));
const row = root.querySelector('.weather-daily-row');
assert.ok(row, 'the daily row renders');
assert.equal(row.querySelector('.weather-daily-low span').textContent.trim(), '3°', 'a null templow falls back to the hourly low, not 0');
assert.equal(row.querySelector('.weather-daily-low small')?.textContent.trim(), formatHassTime(tokyo, dayHourly[7].datetime));
assert.equal(row.querySelector('.weather-daily-high small')?.textContent.trim(), formatHassTime(tokyo, dayHourly[3].datetime));
assert.match(row.querySelector('.weather-daily-low small').textContent, /16/, 'the low time is Tokyo time (07:00 UTC is 16:00)');
assert.match(row.querySelector('.weather-daily-date').textContent, /3/, 'the date is the Tokyo day');
assert.doesNotMatch(row.querySelector('.weather-daily-condition').textContent, /Rain/, 'a null daily precipitation chance shows nothing, not 0%');
card.remove();

// Card-size estimate: graph height + the shared frame chrome, plus the icon strip.
const sizer = document.createElement('space-hub-card');
const base = 96 + 250 + 32;
const both = { entity: 'weather.home', graph_height: 118 };
assert.equal(sizer._weatherHeightForCardSize(both, 80), base + 2 * (118 + CHART_FRAME_CHROME_PX) + 20 + 8);
assert.equal(sizer._weatherHeightForCardSize({ ...both, temperature_icon_count: 0 }, 80), base + 2 * (118 + CHART_FRAME_CHROME_PX) + 8);
assert.equal(sizer._weatherHeightForCardSize({ ...both, forecast_graph_mode: 'combined' }, 80), base + 118 + CHART_FRAME_CHROME_PX + 20 + CHART_LEGEND_PX, 'icon strip and legend row');
assert.equal(sizer._weatherHeightForCardSize({ ...both, forecast_graph_mode: 'combined', forecast_fields: ['pop'] }, 80), base + 118 + CHART_FRAME_CHROME_PX + 20, 'no legend row for one series');
assert.equal(sizer._weatherHeightForCardSize({ ...both, forecast_fields: ['pop'] }, 80), base + 118 + CHART_FRAME_CHROME_PX);
assert.equal(sizer._weatherHeightForCardSize({ ...both, conditions_icon_size: 24, forecast_fields: 'temp' }, 80), base + 118 + CHART_FRAME_CHROME_PX + 29);

console.log('PASS: shared weather charts (separate, synced and unsynced, combined two-axis with legend and rain-only), gaps (missing, null, dropped hours, mixed resolution), synced gaps (cursor at the shared time, no value), -0°, lines/height options, icon strip on the chart time scale, hover preview, HA time zone in the daily forecast, unique ids, tile isolation and card-size estimate');
