import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

process.env.TZ = 'Europe/Tallinn';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'PointerEvent', 'KeyboardEvent', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
// Same browser-parity shim as weather-graphs.mjs: lit 2 looks up lowercased SVG attribute names.
const svgGetAttribute = win.SVGElement.prototype.getAttribute;
win.SVGElement.prototype.getAttribute = function getAttribute(name) {
  const value = svgGetAttribute.call(this, name);
  if (value !== null || !String(name).endsWith('$lit$')) return value;
  const match = this.getAttributeNames().find((candidate) => candidate.toLowerCase() === name);
  return match ? svgGetAttribute.call(this, match) : null;
};
await import('../dist/space-hub-card.js');

const HOUR = 3600000;
const start = Math.floor(Date.now() / HOUR) * HOUR;
// Last forecast each source sent before any outage; HA keeps serving it while the entity is unavailable.
const forecastFor = (base) => Array.from({ length: 8 }, (_, index) => ({
  datetime: new Date(start + index * HOUR).toISOString(),
  condition: 'cloudy',
  temperature: base + index,
  precipitation_probability: 10,
}));
const forecasts = { 'weather.home': forecastFor(5), 'weather.tallinn': forecastFor(20) };
const outageAt = new Date(start - 30 * 60000);
const now = new Date().toISOString();

async function mount({ home = 'cloudy', tallinn = 'cloudy', temp = '7.4' } = {}) {
  const card = document.createElement('space-hub-card');
  card.setConfig({
    type: 'custom:space-hub-card',
    headers: [{ weather: {
      entity: 'weather.home',
      temp_sensor: 'sensor.outdoor_temperature',
      forecast_sources: [{ entity: 'weather.tallinn', name: 'Tallinn' }],
    } }],
  });
  const state = (value, changed = now) => ({ state: value, attributes: {}, last_changed: changed, last_updated: changed });
  card.hass = {
    states: {
      'weather.home': state(home, home === 'unavailable' ? outageAt.toISOString() : now),
      'weather.tallinn': state(tallinn, tallinn === 'unavailable' ? outageAt.toISOString() : now),
      'sensor.outdoor_temperature': { ...state(temp), attributes: { unit_of_measurement: '°C' } },
    },
    locale: { language: 'en', time_format: '24' },
    localize: (key) => key,
    connection: {
      subscribeMessage(callback, message) {
        const forecast = message.forecast_type === 'hourly' ? forecasts[message.entity_id] : [];
        Promise.resolve().then(() => callback({ forecast }));
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

const settle = async (card) => { await card.updateComplete; await new Promise((r) => setTimeout(r, 0)); await card.updateComplete; };
const fault = (root) => !!root.querySelector('.weather-tile-container.tile-unavailable');
const outageChip = (root) => root.querySelector('.weather-forecast-outage');
const option = (root, label) => [...root.querySelectorAll('.weather-source-option')].find((el) => el.textContent.trim() === label);

// Production case: the extra Met.no source is down, everything the tile relies on is fine.
{
  const { card, root } = await mount({ tallinn: 'unavailable' });
  assert.equal(fault(root), false, 'an unavailable extra forecast source does not raise the red fault glow');
  assert.equal(outageChip(root), null, 'no outage chip while the working primary source is selected');
  const tallinn = option(root, 'Tallinn');
  assert.ok(tallinn.classList.contains('weather-source-down'), 'the down source is marked in the picker');
  assert.equal(tallinn.getAttribute('aria-label'), 'Tallinn, not updating');
  assert.match(tallinn.getAttribute('title'), /not updating since \d{2}:\d{2}/);
  assert.equal(option(root, 'Weather')?.classList.contains('weather-source-down') ?? false, false);

  tallinn.click();
  await settle(card);
  assert.equal(fault(root), false, 'selecting the down source still does not raise the fault glow');
  const chip = outageChip(root);
  assert.ok(chip, 'the selected down source shows a warning chip');
  assert.match(chip.textContent, /Tallinn forecast not updating/);
  assert.match(chip.textContent, /since \d{2}:\d{2}/);
  assert.match(chip.querySelector('.family-visually-hidden')?.textContent || '', /^Tallinn forecast not updating, showing the last forecast received, since \d{2}:\d{2}$/);
  const readout = root.querySelector('svg.family-chart[data-chart-id]');
  assert.ok(readout, 'the last forecast received is still drawn');
  card.remove();
}

// The primary weather entity and the station sensors are still real faults.
{
  const { card, root } = await mount({ home: 'unavailable' });
  assert.equal(fault(root), true, 'an unavailable primary weather entity still raises the fault glow');
  assert.ok(outageChip(root), 'and the selected (primary) source says it is not updating');
  card.remove();
}
{
  const { card, root } = await mount({ temp: 'unavailable' });
  assert.equal(fault(root), true, 'an unavailable station sensor still raises the fault glow');
  card.remove();
}
{
  const { card, root } = await mount();
  assert.equal(fault(root), false);
  assert.equal(outageChip(root), null);
  assert.equal(root.querySelectorAll('.weather-source-down').length, 0);
  card.remove();
}

console.log('PASS: extra forecast sources never raise the tile fault glow; a down source is marked and its last forecast stays visible');
await win.happyDOM.close();
