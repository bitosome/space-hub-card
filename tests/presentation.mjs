import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
await import('../dist/space-hub-card.js');

const Card = customElements.get('space-hub-card');
const css = [Card.styles].flat(Infinity).map((sheet) => sheet.cssText).join('\n');
assert.match(css, /\.family-pending-indicator\s*\{/, 'componentStyles composed for the shared indicator');
assert.match(css, /--family-success:/, 'familyStyles defines the status aliases');
assert.doesNotMatch(css, /#d6f3ff/, 'active metric value follows the theme text colour');
assert.doesNotMatch(css, /244, 67, 54/, 'stale state is not a private red halo');
assert.doesNotMatch(css, /var\(--status-alert-color\)/, 'fault colours use --family-error');
assert.doesNotMatch(css, /switchPendingSpin/, 'no private switch spinner');
assert.match(css, /\.weather-metric \{[^}]*min-height: 44px/, 'weather metrics are 44px targets');
assert.match(css, /\.weather-chip-hit \{[^}]*min-height: 44px/, 'weather chips are 44px targets');
assert.match(css, /\.weather-clickable:focus-visible \{[^}]*outline: 3px solid/, '3px focus outline on weather readouts');
assert.match(css, /--weather-chip-inset: max\(5px,/, 'chip targets stay inside the clipped tile corner');
assert.match(css, /\.weather-chip-hit:focus-visible > \.chip \{[^}]*outline: 3px solid/, 'chip focus ring drawn on the visible chip');
assert.match(css, /\.weather-content\.weather-content-chips \{[^}]*padding-bottom/, 'chip strip row is reserved below the content');

const card = document.createElement('space-hub-card');
document.body.append(card);
const fresh = new Date().toISOString();
const old = new Date(Date.now() - 3 * 3600000).toISOString();
const states = (updated, reported = updated, forecastUpdated = updated) => ({
  'sensor.room_temp': { state: '21.4567', attributes: {}, last_updated: fresh },
  'sensor.room_humidity': { state: '48.62', attributes: {}, last_updated: fresh },
  'sensor.lux': { state: '1234.4', attributes: {}, last_updated: fresh },
  'sensor.out_temp': { state: '4.25', attributes: {}, last_updated: updated, last_reported: reported },
  'sensor.out_humidity': { state: '81.6', attributes: {}, last_updated: updated, last_reported: reported },
  'sensor.feels': { state: '1.94', attributes: {}, last_updated: updated, last_reported: reported },
  'weather.home': { state: 'cloudy', attributes: {}, last_updated: forecastUpdated },
  'binary_sensor.presence': { state: 'on', attributes: {} },
  'switch.plug': { state: 'on', attributes: {} },
});
const setHass = async (updated, numberFormat, reported = updated, forecastUpdated = updated) => {
  card.hass = {
    states: states(updated, reported, forecastUpdated),
    locale: numberFormat ? { language: 'en', number_format: numberFormat } : undefined,
    localize: (key) => key,
  };
  await card.updateComplete;
};
card.setConfig({
  type: 'custom:space-hub-card',
  headers: [
    { weather: { entity: 'weather.home', temp_sensor: 'sensor.out_temp', humidity_sensor: 'sensor.out_humidity', feels_like_sensor: 'sensor.feels', stale_minutes: 30, show_forecast: false } },
    { main: { main_name: 'Living', temp_sensor: 'sensor.room_temp', humidity_sensor: 'sensor.room_humidity', chips: [
      { type: 'illuminance', entity: 'sensor.lux' },
      { type: 'presence', entity: 'binary_sensor.presence' },
      { type: 'smart_plug', entity: 'switch.plug' },
    ] } },
  ],
});

await setHass(fresh);
let root = card.shadowRoot;
assert.equal(root.querySelector('.temperature-value').textContent.trim(), '21.5°', 'room temperature uses one decimal like the weather tile');
assert.equal(root.querySelector('.humidity-value').textContent.trim(), '49%', 'room humidity uses no decimals like the weather tile');
assert.equal(root.querySelector('.illuminance-value').textContent.trim(), '1,234 lx');
assert.equal(root.querySelector('.weather-temp').textContent.trim(), '4.3°');
assert.equal(root.querySelector('.weather-humidity').textContent.trim(), '82%');
const badges = [...root.querySelectorAll('.chip[role="img"]')];
assert.match(badges[0].getAttribute('style'), /--family-active/, 'presence uses the shared active alias');
assert.match(badges[1].getAttribute('style'), /--switch-smart-on-color/, 'smart plug chip matches the smart plug tile and glow');
assert.doesNotMatch(badges.map((badge) => badge.outerHTML).join(''), /#[0-9a-f]{6}/i, 'no private hex in chips');
assert.equal(root.querySelector('.weather-stale'), null, 'fresh data has no stale label');
assert.equal(root.querySelector('.weather-tile-container > .glow-under'), null, 'the weather tile has no glow layer');

await setHass(fresh, 'decimal_comma');
root = card.shadowRoot;
assert.equal(root.querySelector('.temperature-value').textContent.trim(), '21,5°', 'HA profile number format');
assert.equal(root.querySelector('.weather-temp').textContent.trim(), '4,3°');

// A steady overnight reading: values unchanged for hours, but the station keeps reporting.
await setHass(old, undefined, fresh);
root = card.shadowRoot;
assert.equal(root.querySelector('.weather-stale'), null, 'unchanged values that are still being reported are not stale');

// The hourly forecast entity is not station data; an old forecast alone is not stale station data.
await setHass(fresh, undefined, fresh, old);
root = card.shadowRoot;
assert.equal(root.querySelector('.weather-stale'), null, 'an old forecast entity does not mark station data stale');

// The station stopped reporting.
await setHass(old, undefined, old, fresh);
root = card.shadowRoot;
const stale = root.querySelector('.weather-stale');
assert.ok(stale, 'stale data has a visible label');
assert.equal(stale.dataset.tone, 'warning');
assert.match(stale.querySelector('.family-chip-text').textContent.replace(/\s+/g, ' ').trim(), /^Data stale\s*since \d{1,2}:\d{2}/, 'the label says since when');
assert.match(stale.querySelector('.family-visually-hidden').textContent, /^Station data stale, since /);
assert.equal(root.querySelector('.weather-tile-container > .glow-under'), null, 'stale data does not make the tile glow');
assert.equal(root.querySelector('.weather-tile-container.tile-unavailable'), null);

card.remove();
console.log('PASS: shared indicator styles, status aliases, per-quantity HA number formatting, stale label from last_reported with its time and no weather glow, 44px weather targets');
await win.happyDOM.close();
