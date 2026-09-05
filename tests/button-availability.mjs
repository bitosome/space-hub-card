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
  document.body.append(card);
  const check = async (target, targetState, coverState, fault) => {
    card.setConfig({ type: 'custom:space-hub-card', switch_rows: [{ row: [{
      entity: 'cover.gate', type: 'sliding_gate', name: 'Sliding gate',
      active_states: ['open'], glow_mode: 'static',
      tap_action: { action: 'perform-action', perform_action: 'button.press', target: { entity_id: target } },
    }] }] });
    card.hass = { localize: (key) => key, states: {
      'cover.gate': { state: coverState, attributes: {} },
      ...(targetState === null ? {} : { [target]: { state: targetState, attributes: {} } }),
      'sensor.unrelated': { state: 'unavailable', attributes: {} },
    } };
    await card.updateComplete;
    assert.equal(!!card.shadowRoot.querySelector('.tile-unavailable'), fault, `${target}: ${targetState}, cover ${coverState}`);
  };
  for (const domain of ['button', 'input_button']) {
    await check(domain + '.gate_step', 'unknown', 'closed', false);
    await check(domain + '.gate_step', 'unknown', 'open', false);
    await check(domain + '.gate_step', '2026-09-05T15:00:00Z', 'closed', false);
    await check(domain + '.gate_step', 'unavailable', 'closed', true);
    await check(domain + '.gate_step', null, 'closed', true);
    await check(domain + '.gate_step', 'unknown', 'unavailable', true);
    await check(domain + '.gate_step', 'unknown', 'unknown', true);
  }
  await check('sensor.status', 'unknown', 'closed', true);
  await check('switch.relay', 'unknown', 'closed', true);
  card.remove();
}
await checkVariant(false);
await checkVariant(true);
console.log('PASS: never-pressed buttons are available; missing/offline buttons and unknown state sensors remain faults; both renderers');
await win.happyDOM.close();
