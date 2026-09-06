import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

// Exercise the real compiled editor's DOM and event wiring. HA owns the selector
// internals and pointer dragging; these tests send their documented events.
const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'KeyboardEvent', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
await import('../dist/space-hub-card.js');
const confirmation = { text: 'Proceed?', exemptions: [{ user: 'owner' }] };
const config = {
  type: 'custom:space-hub-card', extra_root: { keep: true },
  headers: [{ main: { main_name: 'Living room', chips: [{ entity: 'lock.front', type: 'lock', extra_chip: 'keep' }, { entity: 'sensor.lux' }] },
    ac: { entity: 'climate.ac', extra_ac: 'keep' }, thermostat: { entity: 'climate.heat' },
    weather: { entity: 'weather.home', wind_speed_sensor: 'sensor.wind', uv_sensor: 'sensor.uv',
      forecast_sources: ['weather.cabin', { entity: 'weather.work', name: 'Work', extra_source: true }], extra_weather: 'keep' } },
    { weather: { entity: 'weather.second', metrics: [{ entity: 'sensor.a', name: 'A', extra_metric: true }, { entity: 'sensor.b', name: 'B' }] } }],
  switch_rows: [{ row: [{ entity: 'lock.front', name: 'Front door', type: 'lock', confirmation,
    tap_action: { action: 'perform-action', perform_action: 'lock.unlock', data: { code: 'fixture-only' }, target: { entity_id: 'lock.front' } },
    active_states: [], pending_states: ['unlocking'], info_templates: ['keep'], extra_tile: { keep: true } },
    { entity: 'switch.lamp', name: 'Lamp' }], cards: [{ type: 'markdown', content: 'row metadata' }], extra_row: 'keep' },
    [{ entity: 'light.legacy', extra_legacy: true }, { entity: 'switch.legacy' }]],
  cards: [{ type: 'markdown', content: 'First', extra_card: true }, { type: 'custom:another-card', entity: 'sensor.a', custom: { value: 2 } }],
};
const original = structuredClone(config);
const editor = document.createElement('space-hub-card-editor');
editor.hass = { states: {}, user: { id: 'owner' }, localize: (key) => key };
editor.setConfig(config);
document.body.append(editor);
const root = editor.shadowRoot;
let changes = [];
editor.addEventListener('config-changed', (ev) => {
  assert.equal(ev.target, editor, 'child config events never leak into HA');
  changes.push(ev.detail.config);
  // Match HA's feedback loop, including cloning and setConfig after every edit.
  editor.setConfig(ev.detail.config);
});
const settle = async () => { await editor.updateComplete; };
const click = async (selector) => {
  const el = root.querySelector(selector);
  assert.ok(el, `Missing ${selector}`);
  el.click();
  await settle();
};
const edit = (path) => click(`[data-edit-path="${path}"]`);
const back = () => click('ha-icon-button-prev');
const emit = async (element, type, detail) => {
  assert.ok(element, `Missing event target: ${type}`);
  element.dispatchEvent(new CustomEvent(type, { bubbles: true, composed: true, detail }));
  await settle();
};
const reset = async (value = config) => { editor._pages = []; editor.setConfig(value); await settle(); changes = []; };
const assertCompact = () => {
  assert.equal(root.querySelectorAll('ha-sortable ha-form, ha-sortable ha-expansion-panel, ha-sortable hui-card-element-editor, ha-sortable space-hub-textfield').length, 0, 'sortable rows contain summaries only');
};
const formFor = (label) => [...root.querySelectorAll('ha-form')].find((form) => form.computeLabel?.(form.schema?.[0]) === label);

await settle();
assertCompact();
assert.equal(root.querySelector('ha-yaml-editor'), null, 'overall YAML mode belongs to HA');
assert.equal(root.querySelector('.mode-toggle'), null);
assert.equal(root.querySelector('ha-icon-button-prev'), null);
await edit('switch_rows.0');
assertCompact();
await edit('switch_rows.0.row.0');
assert.equal(root.querySelector('.detail-title').textContent, 'Front door');
assert.equal(root.querySelectorAll('ha-sortable').length, 0);
assert.equal(root.querySelectorAll('ha-expansion-panel ha-expansion-panel').length, 0, 'no nested action panels');
const nameField = [...root.querySelectorAll('space-hub-textfield')].find((el) => el.label === 'Name');
nameField.value = 'Entry lock';
nameField.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
await settle();
const expected = structuredClone(config);
expected.switch_rows[0].row[0].name = 'Entry lock';
assert.deepEqual(editor._config, expected, 'editing name changes only name, keeping actions, aliases, unknown fields, and metadata');
assert.equal(changes.length, 1);
await back();
assertCompact();
assert.match(root.textContent, /Entry lock/);
await back();
assert.deepEqual(config, original, 'caller-owned configuration stays immutable');

// Visiting every detail screen is read-only, including inherited weather metrics.
await reset();
for (const steps of [
  ['headers.0', 'headers.0.main', 'headers.0.main.chips.0'],
  ['headers.0', 'headers.0.weather', 'headers.0.weather.metrics.1'],
  ['headers.0', 'headers.0.weather', 'headers.0.weather.forecast_sources.0'],
  ['headers.0', 'headers.0.ac'], ['headers.0', 'headers.0.thermostat'],
  ['headers.1', 'headers.1.weather', 'headers.1.weather.metrics.0'],
  ['switch_rows.1', 'switch_rows.1.0'], ['cards.0'], ['cards.1'], [''],
]) {
  for (const path of steps) await edit(path);
  for (const _ of steps) await back();
}
assert.deepEqual(editor._config, config);
assert.equal(changes.length, 0, 'navigation must not write configuration');

// Native sorting and keyboard ordering both preserve the exact config objects.
for (const [steps, path] of [
  [[], 'headers'], [[], 'switch_rows'], [[], 'cards'],
  [['switch_rows.0'], 'switch_rows.0.row'], [['switch_rows.1'], 'switch_rows.1'],
  [['headers.0', 'headers.0.main'], 'headers.0.main.chips'],
  [['headers.0', 'headers.0.weather'], 'headers.0.weather.metrics'],
  [['headers.1', 'headers.1.weather'], 'headers.1.weather.metrics'],
  [['headers.0', 'headers.0.weather'], 'headers.0.weather.forecast_sources'],
]) {
  await reset();
  for (const step of steps) await edit(step);
  const before = structuredClone(editor._getNestedValue(path));
  await emit(root.querySelector(`ha-sortable[data-path="${path}"]`), 'item-moved', { oldIndex: 0, newIndex: 1 });
  assert.deepEqual(editor._getNestedValue(path), [before[1], before[0]], path);
  assert.equal(changes.length, 1, `${path}: single config event`);
  const handle = root.querySelector(`ha-sortable[data-path="${path}"] .drag-handle`);
  handle.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true }));
  await settle();
  assert.deepEqual(editor._getNestedValue(path), before, `${path}: keyboard reorder`);
  assert.equal(changes.length, 2);
  assertCompact();
}

// Editing a virtual metric first materializes all defaults, then patches one field.
await reset();
await edit('headers.0'); await edit('headers.0.weather'); await edit('headers.0.weather.metrics.1');
await emit(formFor('Entity'), 'value-changed', { value: { entity: 'sensor.uv_new' } });
assert.deepEqual(editor._config.headers[0].weather.metrics, [{ entity: 'sensor.wind', name: 'Wind' }, { entity: 'sensor.uv_new', name: 'UV' }]);
assert.equal(editor._config.headers[0].weather.extra_weather, 'keep');
assert.equal(editor._config.headers[0].weather.wind_speed_sensor, 'sensor.wind');
assert.equal(changes.length, 1);

// String-form forecast sources remain strings until edited, with siblings intact.
await reset();
await edit('headers.0'); await edit('headers.0.weather'); await edit('headers.0.weather.forecast_sources.0');
await emit(formFor('Weather Entity'), 'value-changed', { value: { entity: 'weather.cabin', name: 'Cabin' } });
assert.deepEqual(editor._config.headers[0].weather.forecast_sources, [{ entity: 'weather.cabin', name: 'Cabin' }, config.headers[0].weather.forecast_sources[1]]);

// Opening and cancelling the native picker doesn't insert a placeholder card.
await reset();
await edit('cards');
assert.ok(root.querySelector('hui-card-picker'));
assert.deepEqual(editor._config, config);
await back();
assert.equal(changes.length, 0);
await edit('cards');
const picked = { type: 'entities', entities: ['lock.front'], title: 'Doors' };
await emit(root.querySelector('hui-card-picker'), 'config-changed', { config: picked });
assert.equal(editor._pages.at(-1).path, 'cards.2');
assert.deepEqual(editor._config.cards.at(-1), picked);
assert.ok(root.querySelector('hui-card-element-editor'));
assert.equal(changes.length, 1);
let modes = 0;
editor.addEventListener('GUImode-changed', () => modes++);
const nativeEditor = root.querySelector('hui-card-element-editor');
await emit(nativeEditor, 'GUImode-changed', { guiMode: false, guiModeAvailable: true });
assert.equal(modes, 0, 'child YAML mode must not toggle the parent card editor');
assert.match(root.textContent, /Show visual editor/);
const beforeInvalid = structuredClone(editor._config);
await emit(nativeEditor, 'config-changed', { config: { type: 'entities', entities: 'invalid' }, error: 'Invalid entities' });
assert.deepEqual(editor._config, beforeInvalid, 'invalid child config cannot replace the saved card');
await emit(nativeEditor, 'config-changed', { config: { ...picked, title: 'Entry' } });
assert.deepEqual(editor._config.cards.at(-1), { ...picked, title: 'Entry' });
assert.equal(changes.length, 2);
await back();
await edit('cards.0');
assert.notEqual(root.querySelector('hui-card-element-editor'), nativeEditor, 'different card gets fresh editor/YAML state');

// Add/remove on legacy array rows keeps their representation and neighboring metadata.
await reset(); await edit('switch_rows.1');
[...root.querySelectorAll('ha-button')].find((el) => el.textContent.trim() === 'Add tile').click();
await settle();
assert.equal(editor._pages.at(-1).path, 'switch_rows.1.2');
assert.ok(Array.isArray(editor._config.switch_rows[1]));
await back();
[...root.querySelectorAll('ha-icon-button')].find((el) => el.label === 'Remove Tile 3').click();
await settle();
assert.deepEqual(editor._config, config);

// Programmatic reorders/removals remap open descendants rather than editing a neighbor.
await reset(); await edit('headers.0'); await edit('headers.0.main'); await edit('headers.0.main.chips.0');
editor._reorderArray('headers', 0, 1); await settle();
assert.deepEqual(editor._pages.map((page) => page.path), ['headers.1', 'headers.1.main', 'headers.1.main.chips.0']);
editor._removeItem('headers', 0); await settle();
assert.equal(editor._pages.at(-1).path, 'headers.0.main.chips.0');
editor._removeItem('headers.0.main.chips', 0); await settle();
assert.equal(editor._pages.at(-1).path, 'headers.0.main');

// HA-owned YAML replacement drops missing routes without recreating removed data.
await reset(); await edit('switch_rows.0'); await edit('switch_rows.0.row.0');
const fromYaml = structuredClone(config);
fromYaml.switch_rows = [];
editor.setConfig(fromYaml); await settle();
assert.equal(editor._pages.length, 0);
assert.deepEqual(editor._config, fromYaml);
assert.equal(changes.length, 0);
assert.deepEqual(config, original);
editor.remove();
await win.happyDOM.close();
console.log('PASS: compact navigation, read-only visits, field preservation, native picker, isolated child YAML, legacy rows and weather metrics, drag/keyboard ordering, and safe route updates');
