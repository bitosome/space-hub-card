import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'KeyboardEvent', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
await import('../dist/space-hub-card.js');
const hass = {
  states: { 'lock.test': { state: 'locked', attributes: {} } },
  user: { id: 'owner' }, localize: (key) => key,
};
const confirmation = { text: 'Unlock?', title: 'Security', confirm_text: 'Proceed', dismiss_text: 'Cancel', exemptions: [{ user: 'other' }] };
const tile = {
  entity: 'lock.test', type: 'lock', confirmation,
  tap_action: { action: 'perform-action', perform_action: 'lock.unlock', target: { entity_id: 'lock.test' }, data: { code: 'fixture-only' } },
  hold_action: { action: 'more-info', confirmation: false },
  double_tap_action: { action: 'none' },
  active_states: [], pending_states: ['unlocking'], info_templates: ['test'], extra_option: { preserve: true },
};
const config = {
  type: 'custom:space-hub-card',
  headers: [{ main: { main_name: 'First', chips: [{ entity: 'lock.test', type: 'lock' }, { entity: 'cover.test', type: 'gate' }] } }, { main: { main_name: 'Second' } }],
  switch_rows: [{ row: [tile, { entity: 'switch.other' }], cards: [{ type: 'markdown', content: 'Keep row metadata' }] }, [{ entity: 'light.other' }]],
  cards: [{ type: 'markdown', content: 'First' }, { type: 'markdown', content: 'Second' }],
};
const original = structuredClone(config);
const editor = document.createElement('space-hub-card-editor');
editor.hass = hass;
editor.setConfig(config);
document.body.append(editor);
await editor.updateComplete;
editor._openPage('row', 'switch_rows.0');
editor._openPage('switch', 'switch_rows.0.row.0');
await editor.updateComplete;
const path = 'switch_rows.0.row.0.tap_action';
assert.deepEqual(editor._effectiveConfirmation(path), confirmation);
const forms = [...editor.shadowRoot.querySelectorAll('.confirmation-form')];
assert.equal(forms.filter((form) => form.data.enabled).length, 1, 'one effective confirmation control, not competing switches');
assert.ok(editor.shadowRoot.querySelector('.action-form').schema[0].selector.ui_action, 'native action selector');
editor._goBack();
editor._goBack();
editor._openPage('card', 'cards.0');
await editor.updateComplete;
assert.ok(editor.shadowRoot.querySelector('hui-card-element-editor'), 'native embedded card editor');
editor._goBack();
assert.equal(editor.shadowRoot.querySelector('.confirmation-settings'), null, 'legacy duplicate controls removed');

editor._setActionConfirmation(path, false);
assert.equal(editor._config.switch_rows[0].row[0].tap_action.confirmation, false);
assert.equal(editor._config.switch_rows[0].row[0].confirmation, undefined, 'hidden legacy confirmation removed');
assert.deepEqual(editor._config.switch_rows[0].row[0].tap_action.target, tile.tap_action.target);
assert.deepEqual(editor._config.switch_rows[0].row[0].tap_action.data, tile.tap_action.data);
assert.deepEqual(editor._config.switch_rows[0].row[0].extra_option, tile.extra_option);
editor.setConfig(config);
editor._updateAction(path, { action: 'navigate', navigation_path: '/rooms' });
assert.deepEqual(editor._config.switch_rows[0].row[0].tap_action.confirmation, confirmation, 'native type changes preserve confirmation and exemptions');
editor._updateAction(path, undefined);
assert.equal(editor._config.switch_rows[0].row[0].tap_action, undefined, 'reset restores dynamic default');
assert.deepEqual(editor._config.switch_rows[0].row[0].confirmation, confirmation);
editor._setActionConfirmation(path, false);
assert.equal(editor._effectiveConfirmation(path), false);

editor.setConfig(config);
let events = 0;
editor.addEventListener('config-changed', () => events++);
for (const arrayPath of ['headers', 'switch_rows', 'switch_rows.0.row', 'headers.0.main.chips', 'cards']) {
  editor.setConfig(config);
  const before = structuredClone(editor._getNestedValue(arrayPath));
  assert.equal(editor._reorderArray(arrayPath, 0, 1), true);
  assert.deepEqual(editor._getNestedValue(arrayPath), [before[1], before[0]], arrayPath);
  const count = events;
  for (const [from, to] of [[0, 0], [-1, 1], [0, 2], [NaN, 1], [0, 0.5]]) {
    assert.equal(editor._reorderArray(arrayPath, from, to), false);
  }
  assert.equal(events, count, 'invalid/no-op movement does not save');
}
editor.setConfig(config);
editor._pages = [{ kind: 'row', path: 'switch_rows.0' }];
editor._reorderArray('switch_rows', 0, 1);
assert.equal(editor._pages[0].path, 'switch_rows.1', 'open row follows its contents');
assert.deepEqual(editor._config.switch_rows[1].cards, config.switch_rows[0].cards);
editor.setConfig(config);
editor._pages = [{ kind: 'row', path: 'switch_rows.0' }];
await editor.updateComplete;
const sortable = editor.shadowRoot.querySelector('ha-sortable[data-path="switch_rows.0.row"]');
sortable.dispatchEvent(new CustomEvent('item-moved', { bubbles: true, composed: true, detail: { oldIndex: 0, newIndex: 1 } }));
assert.equal(editor._config.switch_rows[0].row[1].entity, 'lock.test', 'native sort event updates correct array');
assert.equal(editor._config.switch_rows[1][0].entity, 'light.other', 'neighbor row unaffected');
assert.deepEqual(config, original, 'caller-owned config never mutated');

const card = document.createElement('space-hub-card');
card.setConfig({ type: 'custom:space-hub-card' });
card.hass = hass;
document.body.append(card);
await card.updateComplete;
const dispatched = [];
card.addEventListener('hass-action', (event) => dispatched.push(event.detail));
for (const [legacy, explicit, expected] of [
  [true, false, false], [false, confirmation, confirmation], [confirmation, undefined, confirmation], [undefined, true, true], [undefined, undefined, undefined],
]) {
  const sw = { entity: 'lock.test', type: 'lock', confirmation: legacy,
    tap_action: { action: 'perform-action', perform_action: 'lock.unlock', target: { entity_id: 'lock.test' }, confirmation: explicit } };
  card._onSwitchAction(new CustomEvent('hass-action', { detail: { action: 'tap' } }), sw);
  assert.deepEqual(dispatched.at(-1).config.tap_action.confirmation, expected);
}
card._clearPendingSwitch('lock.test');
for (const action of ['tap', 'hold', 'double_tap']) {
  const key = { tap: 'tap_action', hold: 'hold_action', double_tap: 'double_tap_action' }[action];
  const sw = { entity: 'lock.test', [key]: { action: 'perform-action', perform_action: 'lock.unlock', confirmation } };
  const before = dispatched.length;
  card._onSwitchAction(new CustomEvent('hass-action', { detail: { action } }), sw);
  assert.equal(dispatched.length, before + 1, 'one native dispatch per gesture');
  assert.deepEqual(dispatched.at(-1).config[key].confirmation, confirmation);
  assert.equal(card._pendingSwitches.size, 0, 'no optimistic pending while confirmation is unanswered');
}
assert.equal(document.body.querySelector('div[style*="2147483647"]'), null, 'no custom dialog');
for (const method of ['_onMainAction', '_onWeatherAction', '_onWeatherMetricAction', '_onACAction', '_onThermostatAction']) {
  card[method](new CustomEvent('hass-action', { detail: { action: 'tap' } }), {
    entity: 'lock.test', tap_action: { action: 'more-info', confirmation },
  });
  assert.deepEqual(dispatched.at(-1).config.tap_action.confirmation, confirmation, `${method}: same native confirmation payload`);
}
const before = dispatched.length;
card._onSwitchAction(new CustomEvent('hass-action', { detail: { action: 'tap' } }), { entity: 'lock.test', tap_action: { action: 'none', confirmation: true } });
assert.equal(dispatched.length, before, 'none never prompts or acts');
card.remove();
editor.remove();
console.log('PASS: unified native confirmations, explicit false, legacy compatibility, native editor controls, safe ordering, preserved config, and no premature pending');
await win.happyDOM.close();
