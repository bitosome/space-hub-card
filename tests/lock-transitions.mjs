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
  await checkGateColors();
}

async function checkGateColors() {
  const card = document.createElement('space-hub-card');
  document.body.append(card);
  const calls = [];
  card.addEventListener('hass-action', (event) => calls.push(event.detail));
  card.setConfig({
    type: 'custom:space-hub-card',
    headers: [{ main: { chips: [
      { type: 'lock', entity: 'lock.test' },
      { type: 'sliding_gate', entity: 'cover.gate' },
    ] } }],
    switch_rows: [{ row: [{
      entity: 'cover.gate', type: 'sliding_gate', name: 'Gate', icon: 'mdi:gate',
      tap_action: { action: 'perform-action', perform_action: 'button.press', target: { entity_id: 'button.gate_step' } },
    }] }],
  });
  for (const [lock, gate, active] of [
    ['locked', 'closed', false], ['unlocked', 'open', true],
    ['open', 'open', true], ['locked', 'unavailable', false],
  ]) {
    card.hass = { localize: (key) => key, states: {
      'lock.test': { state: lock, attributes: {} },
      'cover.gate': { state: gate, attributes: {} },
      'button.gate_step': { state: 'unknown', attributes: {} },
    } };
    await card.updateComplete;
    const root = card.shadowRoot;
    assert.equal(!!root.querySelector('.switch-icon.lock.on'), active, `gate warning color: ${gate}`);
    const glow = root.querySelector('.switch-icon').closest('.tile-wrap').querySelector('.glow-under').getAttribute('style');
    if (active) assert.match(glow, /229,57,53/, 'same red glow as unlocked locks');
    if (gate === 'closed') assert.equal(glow, '', 'closed gate is neutral like locked tile');
    if (gate === 'unavailable') assert.ok(root.querySelector('.tile-unavailable'), 'offline is still a fault');
    const badges = [...root.querySelectorAll('.chip[role="img"]')];
    if (gate !== 'unavailable') {
      assert.equal(badges[0].getAttribute('style'), badges[1].getAttribute('style'), 'lock and gate badge colors match');
      assert.match(badges[0].getAttribute('style'), active ? /#e53935/ : /#66bb6a/);
    }
    if (gate === 'closed') {
      root.querySelector('.switch-tile-btn, .tile-wrap.switch-tile').dispatchEvent(new CustomEvent('hass-action', { detail: { action: 'tap' } }));
      await new Promise((resolve) => setTimeout(resolve, 20));
      assert.equal(calls.length, 1, 'one tap dispatches exactly one action without confirmation');
      assert.equal(calls[0].action, 'tap');
      assert.equal(calls[0].config.tap_action.perform_action, 'button.press');
      assert.equal(calls[0].config.tap_action.target.entity_id, 'button.gate_step');
      assert.equal(calls[0].config.tap_action.confirmation, undefined);
    }
  }
  card.remove();
}

await checkVariant(false);
await checkVariant(true);
console.log('PASS: lock transitions, matching gate/lock colors, direct one-pulse tap, availability, and both tile renderers');
await win.happyDOM.close();
