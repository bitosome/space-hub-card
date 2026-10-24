import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'PointerEvent', 'KeyboardEvent', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
await import('../dist/space-hub-card.js');
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fixture(double = false) {
  const card = document.createElement('space-hub-card');
  card.setConfig({ type: 'custom:space-hub-card', switch_rows: [{ row: [{
    entity: 'cover.test_gate', type: 'gate',
    tap_action: { action: 'perform-action', perform_action: 'button.press', target: { entity_id: 'button.test_gate' } },
    hold_action: { action: 'more-info' },
    ...(double ? { double_tap_action: { action: 'more-info' } } : {}),
  }] }] });
  card.hass = {
    states: { 'cover.test_gate': { state: 'closed', attributes: {} }, 'button.test_gate': { state: 'unknown', attributes: {} } },
    localize: (key) => key,
  };
  const actions = [];
  card.addEventListener('hass-action', (event) => { if (event.detail.config) actions.push(event.detail.action); });
  document.body.append(card);
  await card.updateComplete;
  const tile = card.shadowRoot.querySelector('.switch-tile-btn, .tile-wrap.switch-tile');
  assert.ok(tile);
  const pointer = (type, options = {}) => tile.dispatchEvent(new PointerEvent(type, {
    bubbles: true, composed: true, pointerId: 1, isPrimary: true, button: 0,
    clientX: 20, clientY: 20, ...options,
  }));
  return { card, tile, actions, pointer };
}

for (const native of [false, true]) {
  if (native) customElements.define('ha-control-button', class extends HTMLElement {});

  let f = await fixture();
  f.pointer('pointerdown'); f.pointer('pointerup');
  assert.deepEqual(f.actions, ['tap'], 'ordinary tap preserves the native HA action envelope');
  f.card.remove();

  f = await fixture();
  f.pointer('pointerdown'); f.pointer('pointermove', { clientY: 50 }); f.pointer('pointerup', { clientY: 50 });
  assert.deepEqual(f.actions, [], 'dragging must not become a gate command');
  f.pointer('pointerdown'); f.pointer('pointerup');
  assert.deepEqual(f.actions, ['tap'], 'a cancelled drag does not disable the next deliberate tap');
  f.card.remove();

  f = await fixture();
  f.pointer('pointerdown'); await wait(520);
  f.pointer('pointermove', { clientX: 50 }); f.pointer('pointerup', { clientX: 50 });
  assert.deepEqual(f.actions, [], 'movement after the hold threshold also cancels the gesture');
  f.card.remove();

  for (const event of ['pointercancel', 'lostpointercapture', 'pointerleave']) {
    f = await fixture();
    f.pointer('pointerdown'); f.pointer(event); f.pointer('pointerup');
    assert.deepEqual(f.actions, [], `${event} cannot trigger a control action`);
    f.card.remove();
  }

  f = await fixture();
  f.pointer('pointerdown'); f.pointer('pointerup', { pointerId: 2 });
  assert.deepEqual(f.actions, [], 'another pointer cannot release the first gesture');
  f.pointer('pointerdown', { pointerId: 2, isPrimary: false });
  f.pointer('pointerup'); f.pointer('pointerup', { pointerId: 2, isPrimary: false });
  assert.deepEqual(f.actions, [], 'a two-finger gesture cancels activation');
  f.card.remove();

  f = await fixture(true);
  f.pointer('pointerdown'); f.pointer('pointerup');
  f.pointer('pointerdown'); f.pointer('pointerup'); await wait(280);
  assert.deepEqual(f.actions, ['double_tap'], 'double tap sends one action');
  f.card.remove();

  f = await fixture(true);
  f.pointer('pointerdown'); f.pointer('pointerup');
  f.card.remove(); document.body.append(f.card); await wait(280);
  assert.deepEqual(f.actions, [], 'a disconnected/reconnected card cannot emit a stale delayed tap');
  f.card.remove();

  f = await fixture();
  f.pointer('pointerdown'); await wait(520); f.pointer('pointerup');
  assert.deepEqual(f.actions, ['hold'], 'stationary hold remains functional');
  f.card.remove();
}
console.log('PASS: both tile renderers cancel drag, multitouch, lost capture and disconnected actions while preserving deliberate tap, double tap and hold');
await win.happyDOM.close();
