import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
await import('../dist/space-hub-card.js');

const card = document.createElement('space-hub-card');
document.body.append(card);
card.setConfig({
  type: 'custom:space-hub-card',
  headers: [{
    main: { main_name: 'Room' },
    ac: { entity: 'climate.maintenance', enabled: false },
    thermostat: { entity: 'climate.heating' },
  }],
  switch_rows: [{ row: [
    { entity: 'switch.maintenance', name: 'Hidden switch', enabled: false },
    { entity: 'switch.lamp', name: 'Lamp' },
  ] }],
});
card.hass = { localize: (key) => key, states: {
  'climate.maintenance': { state: 'unavailable', attributes: {} },
  'climate.heating': { state: 'off', attributes: {} },
  'switch.maintenance': { state: 'unavailable', attributes: {} },
  'switch.lamp': { state: 'off', attributes: {} },
} };
await card.updateComplete;

const root = card.shadowRoot;
assert.equal(root.querySelectorAll('.ac-tile').length, 0, 'disabled AC tile is hidden');
assert.equal(root.textContent.includes('Hidden switch'), false, 'disabled switch tile is hidden');
assert.equal(root.textContent.includes('Lamp'), true, 'enabled-by-default switch tile remains visible');
assert.equal(root.querySelectorAll('.tile-unavailable').length, 0, 'disabled unavailable entities do not create fault glows');

card.remove();
console.log('PASS: disabled tiles are hidden and excluded from unavailable glows; enabled-by-default tiles remain visible');
await win.happyDOM.close();
