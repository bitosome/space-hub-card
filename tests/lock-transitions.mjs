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
  card.setConfig({
    type: 'custom:space-hub-card',
    headers: [{ main: { main_name: 'Lock test', chips: [{ type: 'lock', entity: 'lock.test' }] } }],
    switch_rows: [{ row: [{ type: 'lock', entity: 'lock.test', name: 'Door lock' }] }],
  });
  const setState = async (state) => {
    card.hass = { states: { 'lock.test': { state, attributes: {}, last_updated: new Date().toISOString() } }, localize: (key) => key };
    await card.updateComplete;
  };
  document.body.append(card);
  await setState('locked');
  for (const state of ['unlocking', 'unlocked', 'locking', 'locked', 'opening', 'open', 'jammed', 'unavailable', 'unknown']) {
    await setState(state);
    const moving = ['unlocking', 'locking', 'opening'].includes(state);
    assert.equal(card._isSwitchPending('lock.test'), moving, state);
    assert.equal(!!card.shadowRoot.querySelector('.switch-pending-spinner'), moving, 'tile: ' + state);
    assert.equal(!!card.shadowRoot.querySelector('.chip .spinning'), moving, 'badge: ' + state);
    assert.equal(card.shadowRoot.querySelector('[role="img"]').getAttribute('aria-busy'), String(moving));
  }
  await setState('locked');
  card._trackPendingSwitch('lock.test', 'tap', { entity: 'lock.test', tap_action: { action: 'perform-action', perform_action: 'lock.unlock', target: { entity_id: 'lock.test' } } });
  await new Promise((resolve) => setTimeout(resolve, 350));
  await card.updateComplete;
  assert.equal(card._isSwitchPending('lock.test'), true, 'waiting for command acknowledgement');
  await setState('unlocking');
  assert.equal(card._isSwitchPending('lock.test'), true, 'movement survives acknowledgement');
  await setState('unlocked');
  assert.equal(card._isSwitchPending('lock.test'), false, 'stops on completion');
  assert.equal(card._isSwitchPending('switch.test'), false, 'unrelated switches unchanged');
  card.remove();
}

await checkVariant(false);
await checkVariant(true);
console.log('PASS: external transitions, local command acknowledgement, terminal/error states, badges, and both tile renderers');
await win.happyDOM.close();
