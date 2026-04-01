import { noChange } from 'lit';
import { AttributePart, directive, Directive, DirectiveParameters } from 'lit/directive';

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
  const event = new Event('hass-action', {
    bubbles: true,
    composed: true,
  }) as Event & { detail?: { action: string } };
  event.detail = { action };
  element.dispatchEvent(event);
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

    state.pointerActive = true;
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
    if (!state.pointerActive || state.holdTimer === undefined) return;
    const dx = Math.abs(ev.clientX - state.startX);
    const dy = Math.abs(ev.clientY - state.startY);
    if (dx > HOLD_MOVE_THRESHOLD || dy > HOLD_MOVE_THRESHOLD) {
      clearHoldTimer(state);
      state.held = false;
    }
  }, { passive: true });

  const cancelPointer = (): void => {
    state.pointerActive = false;
    state.held = false;
    clearHoldTimer(state);
  };

  element.addEventListener('pointercancel', cancelPointer);
  element.addEventListener('pointerleave', cancelPointer);
  element.addEventListener('blur', cancelPointer);

  element.addEventListener('pointerup', (ev: PointerEvent) => {
    if (!state.pointerActive) return;
    state.pointerActive = false;
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
  class extends Directive {
    update(part: AttributePart, [options]: DirectiveParameters<this>) {
      actionHandlerBind(part.element as ActionHandlerElement, options);
      return noChange;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    render(_options?: SpaceHubActionHandlerOptions) {}
  },
);
