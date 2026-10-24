import assert from 'node:assert/strict';
import { Window } from 'happy-dom';

const win = new Window({ url: 'http://localhost' });
for (const key of ['window', 'document', 'Document', 'HTMLElement', 'customElements', 'CSSStyleSheet', 'navigator', 'CustomEvent', 'Event', 'requestAnimationFrame', 'cancelAnimationFrame', 'ResizeObserver', 'DocumentFragment', 'Node', 'getComputedStyle', 'MutationObserver']) {
  if (win[key] !== undefined) Object.defineProperty(globalThis, key, { value: win[key], configurable: true });
}
const pending = new Map();
window.loadCardHelpers = async () => ({
  createCardElement: (config) => new Promise((resolve) => pending.set(config.name, resolve)),
});
await import('../dist/space-hub-card.js');
const card = document.createElement('space-hub-card');
const config = (name) => ({ type: 'custom:space-hub-card', cards: [{ type: 'custom:test-card', name }] });
card.setConfig(config('old'));
card.hass = { states: {}, localize: (key) => key };
document.body.append(card);
await card.updateComplete;
await new Promise((resolve) => setTimeout(resolve, 0));
assert.ok(pending.has('old'));

card.setConfig(config('new'));
await card.updateComplete;
await new Promise((resolve) => setTimeout(resolve, 0));
const oldChild = document.createElement('div'); oldChild.textContent = 'Old child';
const newChild = document.createElement('div'); newChild.textContent = 'New child';
pending.get('new')(newChild);
await new Promise((resolve) => setTimeout(resolve, 0));
pending.get('old')(oldChild);
await new Promise((resolve) => setTimeout(resolve, 0));
card.requestUpdate(); await card.updateComplete;
assert.equal(card._rowCardElements.get('standalone-card-0'), newChild, 'late old factory cannot replace the current card');
assert.ok(card.shadowRoot.textContent.includes('New child'));
assert.equal(card.shadowRoot.textContent.includes('Old child'), false);

oldChild.dispatchEvent(new Event('ll-rebuild'));
await new Promise((resolve) => setTimeout(resolve, 0));
assert.equal(card._rowCardElements.get('standalone-card-0'), newChild, 'stale child rebuild cannot evict the replacement');
card.remove();
console.log('PASS: async embedded card creation and stale rebuild preserve the latest configuration');
await win.happyDOM.close();
