import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
await import('../dist/space-hub-card.js');

async function checkVariant(controlButton) {
  if (controlButton) customElements.define('ha-control-button', class extends HTMLElement {});
  const card = document.createElement('space-hub-card');
  const tile = {
    type: 'smart_plug', entity: 'sensor.room_activity', name: 'Cleaning',
    active_states: ['cleaning_here'], pending_states: ['starting'], glow_mode: 'pulse',
    tap_action: { action: 'perform-action', perform_action: 'script.robot_start' },
  };
  const setConfig = (value) => card.setConfig({
    type: 'custom:space-hub-card', switch_rows: [{ row: [value] }],
  });
  setConfig(tile);
  document.body.append(card);
  async function setState(state) {
    card.hass = {
      states: { 'sensor.room_activity': { state, attributes: {}, last_updated: new Date().toISOString() } },
      localize: (key) => key,
    };
    await card.updateComplete;
  }
  for (const state of ['docked', 'starting', 'cleaning_here', 'cleaning_elsewhere', 'washing_mop', 'docked_pending', 'paused', 'returning', 'error', 'unknown', 'unavailable', 'on']) {
    await setState(state);
    assert.equal(!!card.shadowRoot.querySelector('.switch-name.on'), state === 'cleaning_here', 'active: ' + state);
    assert.equal(!!card.shadowRoot.querySelector('.switch-pending-spinner'), state === 'starting', 'pending: ' + state);
    assert.equal(card.shadowRoot.querySelector('[role="button"]').getAttribute('aria-busy'), String(state === 'starting'));
  }
  setConfig({ ...tile, active_states: [], pending_states: [] });
  await setState('on');
  assert.equal(!!card.shadowRoot.querySelector('.switch-name.on'), false, 'empty override');
  setConfig({ ...tile, active_states: ['unknown', 'unavailable'], pending_states: ['unknown', 'unavailable'] });
  for (const state of ['unknown', 'unavailable']) {
    await setState(state);
    assert.equal(!!card.shadowRoot.querySelector('.switch-name.on'), false, 'missing data not active');
    assert.equal(!!card.shadowRoot.querySelector('.switch-pending-spinner'), false, 'missing data not pending');
  }
  const { active_states, pending_states, ...defaultTile } = tile;
  setConfig(defaultTile);
  await setState('on');
  assert.equal(!!card.shadowRoot.querySelector('.switch-name.on'), true, 'default switch behaviour');
  card.remove();
}
await checkVariant(false);
await checkVariant(true);
console.log('PASS: telemetry activity, starting spinner, inactive servicing, unavailable states, defaults, both renderers');
await win.happyDOM.close();
