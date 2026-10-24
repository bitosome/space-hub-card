import { noChange } from 'lit';
import { AttributePart, directive, DirectiveParameters } from 'lit/directive';
import { AsyncDirective } from 'lit/async-directive';

export interface SpaceHubActionHandlerOptions {
  hasHold?: boolean;
  hasDoubleClick?: boolean;
}

type ActionHandlerElement = HTMLElement;

interface ActionHandlerState {
  options: SpaceHubActionHandlerOptions;
  holdTimer?: number;
  doubleTapTimer?: number;
  held: boolean;
  startX: number;
  startY: number;
  pointerActive: boolean;
  pointerId?: number;
}

declare global {
  interface HASSDomEvents {
    'hass-action': {
      action: string;
      config?: unknown;
    };
  }
}

const HOLD_DELAY = 500;
const DOUBLE_TAP_DELAY = 250;
const HOLD_MOVE_THRESHOLD = 10;

const states = new WeakMap<ActionHandlerElement, ActionHandlerState>();

const clearHoldTimer = (state: ActionHandlerState): void => {
  if (state.holdTimer !== undefined) {
    window.clearTimeout(state.holdTimer);
    state.holdTimer = undefined;
  }
};

const clearDoubleTapTimer = (state: ActionHandlerState): void => {
  if (state.doubleTapTimer !== undefined) {
    window.clearTimeout(state.doubleTapTimer);
    state.doubleTapTimer = undefined;
  }
};

const dispatchAction = (element: ActionHandlerElement, action: 'tap' | 'hold' | 'double_tap'): void => {
  if (!element.isConnected) return;
  const event = new Event('hass-action', {
    bubbles: true,
    composed: true,
  }) as Event & { detail?: { action: string } };
  event.detail = { action };
  element.dispatchEvent(event);
};

const cancelActions = (element: ActionHandlerElement): void => {
  const state = states.get(element);
  if (!state) return;
  state.pointerActive = false;
  state.pointerId = undefined;
  state.held = false;
  clearHoldTimer(state);
  clearDoubleTapTimer(state);
};

export const actionHandlerBind = (element: ActionHandlerElement, options: SpaceHubActionHandlerOptions = {}): void => {
  const existing = states.get(element);
  if (existing) {
    existing.options = options;
    return;
  }

  const state: ActionHandlerState = {
    options,
    held: false,
    startX: 0,
    startY: 0,
    pointerActive: false,
  };
  states.set(element, state);

  element.addEventListener('contextmenu', (ev: Event) => {
    ev.preventDefault();
    ev.stopPropagation();
  });

  element.addEventListener('pointerdown', (ev: PointerEvent) => {
    if (ev.button !== 0) return;
    // A second finger is a gesture, not another control activation.
    if (ev.isPrimary === false || (state.pointerActive && state.pointerId !== ev.pointerId)) {
      cancelActions(element);
      return;
    }

    state.pointerActive = true;
    state.pointerId = ev.pointerId;
    state.held = false;
    state.startX = ev.clientX;
    state.startY = ev.clientY;
    clearHoldTimer(state);

    if (!state.options.hasHold) return;

    state.holdTimer = window.setTimeout(() => {
      state.holdTimer = undefined;
      state.held = true;
    }, HOLD_DELAY);

    if (typeof element.setPointerCapture === 'function') {
      try {
        element.setPointerCapture(ev.pointerId);
      } catch (_err) {
        // Ignore unsupported pointer capture errors from HA internals.
      }
    }
  }, { passive: true });

  element.addEventListener('pointermove', (ev: PointerEvent) => {
    if (!state.pointerActive || state.pointerId !== ev.pointerId) return;
    const dx = Math.abs(ev.clientX - state.startX);
    const dy = Math.abs(ev.clientY - state.startY);
    if (dx > HOLD_MOVE_THRESHOLD || dy > HOLD_MOVE_THRESHOLD) {
      // Cancel the entire gesture, including a hold that already elapsed.
      // Otherwise releasing after a scroll/drag would still send a tap/hold.
      cancelActions(element);
    }
  }, { passive: true });

  const cancelPointer = (): void => {
    if (state.pointerActive) cancelActions(element);
  };

  element.addEventListener('pointercancel', cancelPointer);
  element.addEventListener('pointerleave', cancelPointer);
  element.addEventListener('lostpointercapture', cancelPointer);
  element.addEventListener('blur', () => cancelActions(element));

  element.addEventListener('pointerup', (ev: PointerEvent) => {
    if (!state.pointerActive || state.pointerId !== ev.pointerId) return;
    state.pointerActive = false;
    state.pointerId = undefined;
    clearHoldTimer(state);

    if (typeof element.releasePointerCapture === 'function') {
      try {
        element.releasePointerCapture(ev.pointerId);
      } catch (_err) {
        // Ignore unsupported pointer capture errors from HA internals.
      }
    }

    if (state.held) {
      state.held = false;
      clearDoubleTapTimer(state);
      dispatchAction(element, 'hold');
      return;
    }

    if (!state.options.hasDoubleClick) {
      dispatchAction(element, 'tap');
      return;
    }

    if (state.doubleTapTimer !== undefined) {
      clearDoubleTapTimer(state);
      dispatchAction(element, 'double_tap');
      return;
    }

    state.doubleTapTimer = window.setTimeout(() => {
      state.doubleTapTimer = undefined;
      dispatchAction(element, 'tap');
    }, DOUBLE_TAP_DELAY);
  });

  element.addEventListener('keyup', (ev: KeyboardEvent) => {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    ev.preventDefault();
    dispatchAction(element, 'tap');
  });
};

export const actionHandler = directive(
  class extends AsyncDirective {
    private element?: ActionHandlerElement;

    update(part: AttributePart, [options]: DirectiveParameters<this>) {
      this.element = part.element as ActionHandlerElement;
      actionHandlerBind(this.element, options);
      return noChange;
    }

    disconnected(): void {
      if (this.element) cancelActions(this.element);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    render(_options?: SpaceHubActionHandlerOptions) {}
  },
);
