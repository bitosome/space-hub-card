/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, CSSResultGroup, TemplateResult, nothing } from 'lit';
import { until } from 'lit/directives/until.js';
import { customElement, property, state } from 'lit/decorators';
import type { HomeAssistant } from 'custom-card-helpers';
import { createThing } from 'custom-card-helpers';
import type { LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';
import type { PropertyValues } from 'lit';
import type { UnsubscribeFunc } from 'home-assistant-js-websocket';
import { CARD_VERSION, clone } from './const';
import type { SpaceHubActionConfig } from './action-config';
import { hasActionOverride, normalizeActionConfig, normalizeConfirmation } from './action-config';
import './editor';
// glow utilities used by tiles
import { renderMainTile } from './tiles/main';
import { renderACTile } from './tiles/ac';
import { renderThermostatTile } from './tiles/thermostat';
import { renderSwitchRows } from './tiles/switch';
import { baseStyles } from './styles/base.styles';
import { chipStyles } from './styles/chip.styles';
import { animationStyles } from './styles/animation.styles';
import { mainTileStyles } from './styles/main-tile.styles';
import { acTileStyles } from './styles/ac-tile.styles';
import { thermostatTileStyles } from './styles/thermostat-tile.styles';
import { switchTileStyles } from './styles/switch-tile.styles';

interface SwitchTemplateEntry {
  value: string;
  ready?: boolean;
  error?: string;
  unsub?: UnsubscribeFunc;
  pending?: boolean;
}

interface SwitchPendingEntry {
  initialState: string;
  showTimer?: number;
  timeoutTimer?: number;
}

export interface HeaderMain {
  // Core configuration
  tap_entity?: string;
  hold_entity?: string;
  light_group_entity?: string;
  glow_mode?: string;
  main_name?: string;
  main_icon?: string;
  // Sensors
  temp_sensor?: string;
  humidity_sensor?: string;
  chips?: unknown[];
  // Actions
  tap_action?: SpaceHubActionConfig;
  hold_action?: SpaceHubActionConfig;
  double_tap_action?: SpaceHubActionConfig;
}

export interface HeaderAC {
  entity?: string;
  glow_mode?: string;
  tap_action?: SpaceHubActionConfig;
  hold_action?: SpaceHubActionConfig;
  double_tap_action?: SpaceHubActionConfig;
}
export interface HeaderThermostat {
  entity?: string;
  glow_mode?: string;
  tap_action?: SpaceHubActionConfig;
  hold_action?: SpaceHubActionConfig;
  double_tap_action?: SpaceHubActionConfig;
}

export interface SpaceHubHeader {
  // New structured format
  main?: HeaderMain;
  ac?: HeaderAC;
  thermostat?: HeaderThermostat;
  // No legacy fields
  // Optional per-header icon sizing override
  main_icon_size?: number;
  // Typo tolerance (maicon_size)
  maicon_size?: number;
}

export interface SpaceHubConfig {
  type?: string;
  tile_height?: number;
  chip_icon_size?: number;
  main_icon_size?: number;
  chip_font_size?: number;
  card_shadow_color?: string;
  card_shadow_intensity?: number;
  unavailable_pulse_color?: string;
  headers?: SpaceHubHeader[];
  switch_rows?: unknown[];
  cards?: unknown[];
  // Main tile actions (boilerplate-style)
  tap_action?: SpaceHubActionConfig;
  hold_action?: SpaceHubActionConfig;
  double_tap_action?: SpaceHubActionConfig;
}

interface SpaceHubActionEnvelope {
  entity?: string;
  tap_action?: SpaceHubActionConfig;
  hold_action?: SpaceHubActionConfig;
  double_tap_action?: SpaceHubActionConfig;
}

@customElement('space-hub-card')
export class SpaceHubCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: SpaceHubConfig;
  @state() private _visiblePendingSwitches = new Set<string>();

  private _helpersPromise?: Promise<any>;
  private _rowCardElements = new Map<string, LovelaceCard>();
  private _rowCardConfigs = new Map<string, LovelaceCardConfig>();
  private _rowCardPromises = new Map<string, Promise<LovelaceCard>>();
  private _switchTemplateValues = new Map<string, SwitchTemplateEntry>();
  private _pendingSwitches = new Map<string, SwitchPendingEntry>();
  private readonly _switchPendingDelayMs = 300;
  private readonly _switchPendingTimeoutMs = 10000;

  static getConfigElement(): HTMLElement {
    return document.createElement('space-hub-card-editor');
  }

  static getStubConfig(): SpaceHubConfig {
    return {
      tile_height: 80,
      chip_icon_size: 14,
      main_icon_size: 48,
      chip_font_size: 12,
      card_shadow_color: '#000000',
      card_shadow_intensity: 0.5,
      unavailable_pulse_color: '#ff3b30',
  // Note: stub contains visual defaults only. No default header/main to avoid
  // accidental rendering of a main tile in user configurations.
      switch_rows: [],
      cards: [],
    };
  }

  public setConfig(config: SpaceHubConfig): void {
    if (!config) {
      throw new Error('Configuration is required');
    }

    // Live editor previews regularly send partial rows/tiles before an entity is chosen.
    // Validate only fatal schema issues here and tolerate incomplete edit-time entries.
    this._validateConfig(config, { allowIncomplete: true });

    // Keep the provided config as-is and ensure headers is an array
    const c = clone(config || {} as SpaceHubConfig);
    if (!Array.isArray(c.headers)) c.headers = [];
    if (!Array.isArray(c.switch_rows)) c.switch_rows = [];
    if (!Array.isArray(c.cards)) c.cards = [];
    this._clearRowCardCache();
    this._config = c;
    this._syncTemplateEntries(c.switch_rows);
  }

  private _isValidEntityId(value: unknown): value is string {
    return typeof value === 'string' && value.includes('.') && !value.includes(' ');
  }

  private _validateConfig(config: SpaceHubConfig, options: { allowIncomplete?: boolean } = {}): void {
    const allowIncomplete = !!options.allowIncomplete;
    const errors: string[] = [];

    // Validate headers if provided
    if (config.headers && Array.isArray(config.headers)) {
      config.headers.forEach((header, index) => {
        if (!header) {
          errors.push(`Header ${index + 1}: Header configuration cannot be empty`);
          return;
        }

        // Validate AC configuration
        if (header.ac) {
          if (!header.ac.entity) {
            if (!allowIncomplete) {
              errors.push(`Header ${index + 1}: AC tile requires an 'entity' field`);
            }
          } else if (!this._isValidEntityId(header.ac.entity)) {
            errors.push(`Header ${index + 1}: AC entity '${header.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`);
          }
        }

        // Validate Thermostat configuration
        if (header.thermostat) {
          if (!header.thermostat.entity) {
            if (!allowIncomplete) {
              errors.push(`Header ${index + 1}: Thermostat tile requires an 'entity' field`);
            }
          } else if (!this._isValidEntityId(header.thermostat.entity)) {
            errors.push(`Header ${index + 1}: Thermostat entity '${header.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`);
          }
        }

        // Validate Main configuration
        if (header.main) {
          const main = header.main;

          // Check if main tile has at least one meaningful configuration
          const hasContent = !!(
            main.main_name || main.main_icon || main.tap_entity ||
            main.light_group_entity || main.temp_sensor || main.humidity_sensor ||
            (Array.isArray(main.chips) && main.chips.length > 0)
          );

          if (!hasContent && !allowIncomplete) {
            errors.push(`Header ${index + 1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);
          }

          // Validate entity IDs if provided
          const entityFields = ['tap_entity', 'hold_entity', 'light_group_entity', 'temp_sensor', 'humidity_sensor'] as const;
          entityFields.forEach((field) => {
            const value = main[field as keyof typeof main];
            if (value && !this._isValidEntityId(value)) {
              errors.push(`Header ${index + 1}: Main tile ${field} '${value}' must be a valid entity ID`);
            }
          });
        }

        // The visual editor allows users to add AC/Thermostat before the main tile exists.
        if ((header.ac || header.thermostat) && !header.main && !allowIncomplete) {
          errors.push(`Header ${index + 1}: AC and Thermostat tiles require a 'main' configuration block`);
        }
      });
    }

    // Validate switch_rows if provided
    if (config.switch_rows && Array.isArray(config.switch_rows)) {
      config.switch_rows.forEach((row: any, index) => {
        if (!row) {
          errors.push(`Switch row ${index + 1}: Switch row configuration cannot be empty`);
          return;
        }

        const items = Array.isArray(row) ? row : (Array.isArray(row.row) ? row.row : []);
        if ((!Array.isArray(items) || items.length === 0) && !allowIncomplete) {
          errors.push(`Switch row ${index + 1}: Switch row must contain at least one switch item`);
          return;
        }

        items.forEach((item: any, itemIndex) => {
          if (!item || !item.entity) {
            if (!allowIncomplete) {
              errors.push(`Switch row ${index + 1}, item ${itemIndex + 1}: Switch item requires an 'entity' field`);
            }
          } else if (!this._isValidEntityId(item.entity)) {
            errors.push(`Switch row ${index + 1}, item ${itemIndex + 1}: Switch entity '${item.entity}' must be a valid entity ID`);
          }
          // Validate hold_entity if provided
          if (item?.hold_entity && !this._isValidEntityId(item.hold_entity)) {
            errors.push(`Switch row ${index + 1}, item ${itemIndex + 1}: hold_entity '${item.hold_entity}' must be a valid entity ID`);
          }
        });
      });
    }

    // Validate numeric configuration values
    const numericFields = {
      tile_height: 'Tile height',
      chip_icon_size: 'Chip icon size',
      main_icon_size: 'Main icon size',
      chip_font_size: 'Chip font size',
      card_shadow_intensity: 'Card shadow intensity'
    };

    Object.entries(numericFields).forEach(([field, label]) => {
      const value = config[field as keyof SpaceHubConfig];
      if (value !== undefined && value !== null) {
        const num = Number(value);
        if (!Number.isFinite(num) || num < 0) {
          errors.push(`${label} must be a positive number, got: ${value}`);
        }
      }
    });

    // Validate shadow intensity is between 0 and 1
    if (config.card_shadow_intensity !== undefined && config.card_shadow_intensity !== null) {
      const intensity = Number(config.card_shadow_intensity);
      if (Number.isFinite(intensity) && (intensity < 0 || intensity > 1)) {
        errors.push(`Card shadow intensity must be between 0 and 1, got: ${intensity}`);
      }
    }

    // Validate colors if provided
    const colorFields = ['card_shadow_color', 'unavailable_pulse_color'];
    colorFields.forEach((field) => {
      const value = config[field as keyof SpaceHubConfig];
      if (value && typeof value === 'string') {
        // Basic color validation - check for hex colors, named colors, or CSS color functions
        const colorRegex = /^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/;
        if (!colorRegex.test(value)) {
          errors.push(`${field.replace(/_/g, ' ')} '${value}' is not a valid color format`);
        }
      }
    });

    // If there are validation errors, throw them
    if (errors.length > 0) {
      throw new Error(`Invalid space-hub-card configuration:\n${errors.map((e) => `• ${e}`).join('\n')}`);
    }
  }

  public getCardSize(): number {
    return 6;
  }

  static styles: CSSResultGroup = [
    baseStyles,
    chipStyles,
    animationStyles,
    mainTileStyles,
    acTileStyles,
    thermostatTileStyles,
    switchTileStyles,
  ];

  protected render(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    // Don't merge the full stub (it contains a default header).
    // Apply visual defaults but keep header(s) strictly from user config.
    const defaults = SpaceHubCard.getStubConfig();
    const userCfg = this._config || {} as SpaceHubConfig;

    // Build a rendering config that uses defaults for visuals only.
    const c: SpaceHubConfig = {
      tile_height: userCfg.tile_height ?? defaults.tile_height,
      chip_icon_size: userCfg.chip_icon_size ?? defaults.chip_icon_size,
      main_icon_size: userCfg.main_icon_size ?? defaults.main_icon_size,
      chip_font_size: userCfg.chip_font_size ?? defaults.chip_font_size,
      card_shadow_color: userCfg.card_shadow_color ?? defaults.card_shadow_color,
      card_shadow_intensity: userCfg.card_shadow_intensity ?? defaults.card_shadow_intensity,
      unavailable_pulse_color: userCfg.unavailable_pulse_color ?? defaults.unavailable_pulse_color,
      // Keep headers exactly as provided by user
      headers: Array.isArray(userCfg.headers) && userCfg.headers.length ? userCfg.headers : [],
      switch_rows: Array.isArray(userCfg.switch_rows) ? userCfg.switch_rows : [],
      cards: Array.isArray(userCfg.cards) ? userCfg.cards : [],
      tap_action: userCfg.tap_action,
      hold_action: userCfg.hold_action,
      double_tap_action: userCfg.double_tap_action,
    } as SpaceHubConfig;

    // Use the headers array directly
    const headers: SpaceHubHeader[] = Array.isArray(c.headers) && c.headers.length ? c.headers : [];

    const tileH = Number(c.tile_height) || Number(defaults.tile_height) || 80;
    const chipIconSize = Number(c.chip_icon_size) || Number(defaults.chip_icon_size) || 14;
    const chipFont = Number(c.chip_font_size) || Number(defaults.chip_font_size) || 12;
    // Calculate responsive chip size: font size + padding (approx 10px padding total)
    const chipSize = Math.max(chipFont + 10, 20); // minimum 20px for usability
    // Calculate AC/thermostat icon size based on tile height (base ratio: 50px for 80px tile = 0.625)
    // Examples: 80px tile → 50px icon, 100px tile → 62px icon, 60px tile → 37px icon
    const acThermostatIcon = Math.round(tileH * 0.625);
    // Allow header-level override for main icon size (use first header if provided)
    const headerCfg: any = headers[0] || {};
    const headerMainIconSize = Number(headerCfg?.main_icon_size ?? headerCfg?.maicon_size);
    const mainIcon = Number.isFinite(headerMainIconSize) && headerMainIconSize > 0
      ? headerMainIconSize
      : (Number(c.main_icon_size) || Number(defaults.main_icon_size) || 48);
    const panelShadowColor = this._rgbaFromColor(c.card_shadow_color || defaults.card_shadow_color, c.card_shadow_intensity ?? defaults.card_shadow_intensity);
    const unavailColor = c.unavailable_pulse_color || defaults.unavailable_pulse_color || '#ff3b30';
    const hasUnavail = this._hasAnyUnavailable(c, headers);
    const unavailWeak = this._rgbaFromColor(unavailColor, 0.18);
    const unavailStrong = this._rgbaFromColor(unavailColor, 0.36);

    return html`
      <ha-card class=${hasUnavail ? 'unavailable' : ''}
               style=${`--panel-shadow-color:${hasUnavail ? unavailWeak : panelShadowColor}; --unavail-weak:${unavailWeak}; --unavail-strong:${unavailStrong}`}>
        <div class="metrics" style=${`--tile-h:${tileH}px; --chip-size:${chipSize}px; --chip-icon-size:${chipIconSize}px; --main-icon-size:${mainIcon}px; --chip-font-size:${chipFont}px; --ac-thermostat-icon:${acThermostatIcon}px;`}>
          <div class="root">
            ${headers.map((h) => this._renderHeaderRow(h))}
            ${renderSwitchRows(this, c.switch_rows as any[])}
            ${Array.isArray(c.cards) && c.cards.length
              ? html`
                  <div class="extra-cards">
                    ${c.cards.map((card: any, index: number) =>
                      this._renderEmbeddedRowCard(card as LovelaceCardConfig, `standalone-card-${index}`)
                    )}
                  </div>
                `
              : nothing}
          </div>
        </div>
      </ha-card>
    `;
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('hass')) {
      this._rowCardElements.forEach((card) => {
        if (card) card.hass = this.hass;
      });
      this._resumeTemplateSubscriptions();
      this._syncPendingSwitches();
    }
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this._resumeTemplateSubscriptions();
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    this._switchTemplateValues.forEach((entry) => this._disposeTemplateEntry(entry));
    this._clearAllPendingSwitches();
  }

  private _renderHeaderRow(h: SpaceHubHeader): TemplateResult {
    const mainRaw: any = h.main || {};
    const main: any = {
      tap_entity: mainRaw.tap_entity,
      hold_entity: mainRaw.hold_entity || mainRaw.tap_entity,
      glow_mode: mainRaw.glow_mode,
      light_group_entity: mainRaw.light_group_entity,
      name: mainRaw.main_name || mainRaw.name,
      icon: mainRaw.main_icon || mainRaw.icon,
      temp_sensor: mainRaw.temp_sensor,
      humidity_sensor: mainRaw.humidity_sensor,
      chips: Array.isArray(mainRaw.chips) ? mainRaw.chips : [],
      tap_action: mainRaw.tap_action,
      hold_action: mainRaw.hold_action,
      double_tap_action: mainRaw.double_tap_action,
    };
  const ac = h.ac || {} as any;
  const thermostat = h.thermostat || {} as any;
  const initialShowAC = !!ac?.entity;
  const initialShowThermostat = !!thermostat?.entity;
    // Determine whether a main is explicitly defined (avoid injecting defaults)
    const hasMain = !!(mainRaw && (mainRaw.main_name || mainRaw.name || mainRaw.light_group_entity || mainRaw.entity || mainRaw.main_icon || mainRaw.icon || mainRaw.temp_sensor || mainRaw.humidity_sensor || (Array.isArray(mainRaw.chips) && mainRaw.chips.length)));

    // AC/Thermostat must be defined only inside a `main` block. If they exist
    // outside of main, ignore them and warn the user in the console.
    const showAC = hasMain && initialShowAC;
    const showThermostat = hasMain && initialShowThermostat;

    if (!hasMain && (initialShowAC || initialShowThermostat)) {
      // eslint-disable-next-line no-console
      console.warn('space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.');
    }

    const cls = !showAC && !showThermostat
      ? 'header-row only-main'
      : (showAC && showThermostat ? 'header-row' : 'header-row main-plus-one');

    const tpl = html`
      <div class=${cls}>
        ${hasMain ? renderMainTile(this, main as any) : nothing}
        ${showAC ? renderACTile(this, ac as any) : nothing}
        ${showThermostat ? renderThermostatTile(this, thermostat as any) : nothing}
      </div>
    `;
    return tpl;
  }

  // Renders an arbitrary Lovelace card beneath a switch row, reusing helpers for creation.
  public _renderEmbeddedRowCard(cardConfig: LovelaceCardConfig, key: string): TemplateResult | typeof nothing {
    if (!cardConfig || typeof cardConfig !== 'object') return nothing;

    const cachedConfig = this._rowCardConfigs.get(key);
    if (cachedConfig !== cardConfig) {
      this._rowCardElements.delete(key);
      this._rowCardPromises.delete(key);
    }
    this._rowCardConfigs.set(key, cardConfig);

    const existing = this._rowCardElements.get(key);
    if (existing) {
      existing.hass = this.hass;
      return html`<div class="embedded-card">${existing}</div>`;
    }

    const cardPromise = this._createRowCardElement(key, cardConfig).then((card) => {
      card.hass = this.hass;
      return html`${card}`;
    }).catch((err) => {
      const message = err instanceof Error ? err.message : String(err);
      const errorCard = this._createErrorCard(message, cardConfig);
      errorCard.hass = this.hass;
      return html`${errorCard}`;
    });

    return html`<div class="embedded-card">${until(cardPromise, nothing)}</div>`;
  }

  // Creates or reuses a cached Lovelace card element for embedded usage.
  private async _createRowCardElement(key: string, cardConfig: LovelaceCardConfig): Promise<LovelaceCard> {
    const existingPromise = this._rowCardPromises.get(key);
    if (existingPromise) return existingPromise;

    const creation = (async () => {
      const helpers = await this._getCardHelpers();
      let card: LovelaceCard;
      try {
        if (helpers?.createCardElement) {
          card = await helpers.createCardElement(cardConfig);
        } else {
          card = createThing(cardConfig) as LovelaceCard;
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        card = this._createErrorCard(message, cardConfig);
      }

      card.addEventListener('ll-rebuild', (ev: Event) => {
        ev.stopPropagation();
        this._rowCardElements.delete(key);
        this._rowCardPromises.delete(key);
        const cfg = this._rowCardConfigs.get(key) || cardConfig;
        this._createRowCardElement(key, cfg).then(() => this.requestUpdate());
      });

      this._rowCardElements.set(key, card);
      this._rowCardPromises.delete(key);
      return card;
    })();

    this._rowCardPromises.set(key, creation);
    return creation;
  }

  private _createErrorCard(message: string, cardConfig: LovelaceCardConfig): LovelaceCard {
    try {
      const errCard = document.createElement('hui-error-card') as LovelaceCard;
      errCard.setConfig({ type: 'error', error: message, origConfig: cardConfig });
      return errCard;
    } catch (_e) {
      return createThing({
        type: 'hui-error-card',
        error: message,
        origConfig: cardConfig,
      }) as LovelaceCard;
    }
  }

  private async _getCardHelpers(): Promise<any> {
    if (!this._helpersPromise) {
      const loader = (window as any).loadCardHelpers;
      this._helpersPromise = typeof loader === 'function'
        ? loader()
        : Promise.resolve(undefined);
    }
    return this._helpersPromise;
  }

  private _clearRowCardCache(): void {
    this._rowCardElements.clear();
    this._rowCardConfigs.clear();
    this._rowCardPromises.clear();
  }

  private _dispatchNativeAction(action: string, config: SpaceHubActionEnvelope): void {
    const event = new Event('hass-action', {
      bubbles: true,
      composed: true,
    }) as Event & { detail?: { action: string; config: SpaceHubActionEnvelope } };
    event.detail = { action, config };
    this.dispatchEvent(event);
  }

  private _withActionOverrides(base: SpaceHubActionEnvelope, overrides?: Record<string, unknown>): SpaceHubActionEnvelope {
    const merged: SpaceHubActionEnvelope = { ...base };

    if (typeof overrides?.entity === 'string' && overrides.entity) {
      merged.entity = overrides.entity;
    }

    const tapAction = normalizeActionConfig(overrides?.tap_action);
    if (tapAction) merged.tap_action = tapAction;

    const holdAction = normalizeActionConfig(overrides?.hold_action);
    if (holdAction) merged.hold_action = holdAction;

    const doubleTapAction = normalizeActionConfig(overrides?.double_tap_action);
    if (doubleTapAction) merged.double_tap_action = doubleTapAction;

    return merged;
  }

  private _dispatchActionEnvelope(action: string, config: SpaceHubActionEnvelope): void {
    const selected = action === 'double_tap'
      ? config.double_tap_action
      : (action === 'hold' ? config.hold_action : config.tap_action);
    if (!selected) return;
    this._dispatchNativeAction(action, config);
  }

  private _selectedAction(action: string, config: SpaceHubActionEnvelope): SpaceHubActionConfig | undefined {
    return action === 'double_tap'
      ? config.double_tap_action
      : (action === 'hold' ? config.hold_action : config.tap_action);
  }

  private _withoutSelectedActionConfirmation(action: string, config: SpaceHubActionEnvelope): SpaceHubActionEnvelope {
    const selected = this._selectedAction(action, config);
    if (!selected || normalizeConfirmation(selected.confirmation) === undefined) return config;

    const next: SpaceHubActionEnvelope = { ...config };
    const nextAction: SpaceHubActionConfig = { ...selected };
    delete nextAction.confirmation;

    if (action === 'double_tap') {
      next.double_tap_action = nextAction;
    } else if (action === 'hold') {
      next.hold_action = nextAction;
    } else {
      next.tap_action = nextAction;
    }

    return next;
  }

  private _isConfirmationExempt(confirmation: ReturnType<typeof normalizeConfirmation>): boolean {
    if (!confirmation || typeof confirmation !== 'object' || !Array.isArray(confirmation.exemptions)) return false;
    const userId = this.hass?.user?.id;
    return !!userId && confirmation.exemptions.some((entry) => entry.user === userId);
  }

  private _confirmSwitchAction(
    confirmation: ReturnType<typeof normalizeConfirmation>,
    selected: SpaceHubActionConfig
  ): Promise<boolean> {
    if (confirmation === undefined || this._isConfirmationExempt(confirmation)) return Promise.resolve(true);

    const details = confirmation && typeof confirmation === 'object' ? confirmation : {};
    const title = typeof details.title === 'string' && details.title.trim()
      ? details.title.trim()
      : 'Please confirm';
    const message = typeof details.text === 'string' && details.text.trim()
      ? details.text.trim()
      : `Are you sure you want to ${selected.action}?`;
    const confirmText = typeof details.confirm_text === 'string' && details.confirm_text.trim()
      ? details.confirm_text.trim()
      : 'OK';
    const dismissText = typeof details.dismiss_text === 'string' && details.dismiss_text.trim()
      ? details.dismiss_text.trim()
      : 'Cancel';

    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      const dialog = document.createElement('div');
      const heading = document.createElement('div');
      const body = document.createElement('div');
      const actions = document.createElement('div');
      const cancel = document.createElement('button');
      const confirm = document.createElement('button');

      overlay.style.cssText = [
        'position:fixed',
        'inset:0',
        'z-index:2147483647',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'padding:24px',
        'background:rgba(0,0,0,0.32)',
        'box-sizing:border-box',
      ].join(';');
      dialog.style.cssText = [
        'width:min(420px,100%)',
        'box-sizing:border-box',
        'border-radius:12px',
        'padding:20px',
        'background:var(--ha-dialog-surface-background, var(--card-background-color, #fff))',
        'color:var(--primary-text-color, #212121)',
        'box-shadow:0 18px 48px rgba(0,0,0,0.32)',
        'font-family:var(--paper-font-body1_-_font-family, Roboto, sans-serif)',
      ].join(';');
      heading.style.cssText = 'font-size:20px;font-weight:500;line-height:1.3;margin-bottom:12px;';
      body.style.cssText = 'font-size:14px;line-height:1.45;color:var(--primary-text-color, #212121);white-space:pre-wrap;';
      actions.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:24px;';
      const buttonStyle = [
        'border:0',
        'border-radius:8px',
        'padding:10px 14px',
        'font:inherit',
        'font-weight:500',
        'cursor:pointer',
        'background:transparent',
        'color:var(--primary-color, #03a9f4)',
      ].join(';');
      cancel.style.cssText = buttonStyle;
      confirm.style.cssText = `${buttonStyle};background:var(--primary-color, #03a9f4);color:var(--text-primary-color, #fff);`;

      heading.textContent = title;
      body.textContent = message;
      cancel.textContent = dismissText;
      confirm.textContent = confirmText;

      const close = (result: boolean) => {
        document.removeEventListener('keydown', onKeydown);
        overlay.remove();
        resolve(result);
      };
      const onKeydown = (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') close(false);
      };

      overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay) close(false);
      });
      cancel.addEventListener('click', () => close(false));
      confirm.addEventListener('click', () => close(true));
      document.addEventListener('keydown', onKeydown);

      actions.append(cancel, confirm);
      dialog.append(heading, body, actions);
      overlay.append(dialog);
      document.body.append(overlay);
      confirm.focus();
    });
  }

  private _isLockSwitch(type?: unknown, entityId?: string | null): boolean {
    return String(type || '').toLowerCase() === 'lock' || !!entityId?.startsWith('lock.');
  }

  private _buildDefaultSwitchTapAction(
    entityId: string | undefined,
    type: unknown,
    confirmation: ReturnType<typeof normalizeConfirmation>
  ): SpaceHubActionConfig | undefined {
    if (!entityId) return undefined;
    if (this._isLockSwitch(type, entityId)) {
      const state = (this.hass?.states?.[entityId]?.state || '').toLowerCase();
      return {
        action: 'perform-action',
        perform_action: state === 'unlocked' ? 'lock.lock' : 'lock.unlock',
        target: { entity_id: entityId },
        confirmation,
      };
    }

    return { action: 'toggle', confirmation };
  }

  private _applySwitchTapConfirmation(
    config: SpaceHubActionEnvelope,
    confirmation: ReturnType<typeof normalizeConfirmation>
  ): SpaceHubActionEnvelope {
    if (confirmation === undefined || !config.tap_action) return config;
    const tapConfirmation = normalizeConfirmation(config.tap_action.confirmation);
    if (tapConfirmation !== undefined) return config;

    return {
      ...config,
      tap_action: {
        ...config.tap_action,
        confirmation,
      },
    };
  }

  private _entityState(entityId: string): string {
    const state = this.hass?.states?.[entityId]?.state;
    return state === undefined || state === null ? '' : String(state);
  }

  private _targetContainsEntity(target: unknown, entityId: string): boolean {
    if (!target || typeof target !== 'object') return false;
    const raw = (target as { entity_id?: unknown }).entity_id;
    if (Array.isArray(raw)) return raw.includes(entityId);
    return raw === entityId;
  }

  private _actionCanChangeSwitchEntity(
    action: string,
    entityId: string | undefined,
    config: SpaceHubActionEnvelope
  ): boolean {
    if (!entityId || action === 'hold') return false;
    const selected = this._selectedAction(action, config);
    if (!selected) return false;

    if (selected.action === 'toggle') {
      return config.entity === entityId;
    }

    if (selected.action === 'perform-action') {
      return this._targetContainsEntity(selected.target, entityId)
        || this._targetContainsEntity(selected.data, entityId);
    }

    return false;
  }

  private _setPendingSwitchVisible(entityId: string, visible: boolean): void {
    const currentlyVisible = this._visiblePendingSwitches.has(entityId);
    if (currentlyVisible === visible) return;

    const next = new Set(this._visiblePendingSwitches);
    if (visible) {
      next.add(entityId);
    } else {
      next.delete(entityId);
    }
    this._visiblePendingSwitches = next;
  }

  private _clearPendingSwitch(entityId: string): void {
    const entry = this._pendingSwitches.get(entityId);
    if (!entry) {
      this._setPendingSwitchVisible(entityId, false);
      return;
    }

    if (entry.showTimer !== undefined) window.clearTimeout(entry.showTimer);
    if (entry.timeoutTimer !== undefined) window.clearTimeout(entry.timeoutTimer);
    this._pendingSwitches.delete(entityId);
    this._setPendingSwitchVisible(entityId, false);
  }

  private _clearAllPendingSwitches(): void {
    [...this._pendingSwitches.keys()].forEach((entityId) => this._clearPendingSwitch(entityId));
  }

  private _trackPendingSwitch(entityId: string | undefined, action: string, config: SpaceHubActionEnvelope): void {
    if (!entityId || !this.hass || !this._actionCanChangeSwitchEntity(action, entityId, config)) return;

    this._clearPendingSwitch(entityId);

    const initialState = this._entityState(entityId);
    const entry: SwitchPendingEntry = { initialState };

    entry.showTimer = window.setTimeout(() => {
      const current = this._entityState(entityId);
      if (current !== initialState) {
        this._clearPendingSwitch(entityId);
        return;
      }
      this._setPendingSwitchVisible(entityId, true);
    }, this._switchPendingDelayMs);

    entry.timeoutTimer = window.setTimeout(() => {
      this._clearPendingSwitch(entityId);
    }, this._switchPendingTimeoutMs);

    this._pendingSwitches.set(entityId, entry);
  }

  private _syncPendingSwitches(): void {
    this._pendingSwitches.forEach((entry, entityId) => {
      if (this._entityState(entityId) !== entry.initialState) {
        this._clearPendingSwitch(entityId);
      }
    });
  }

  private _onMainAction(ev: CustomEvent, tileCfg?: any, tap?: string, hold?: string, lightGroup?: string): void {
    ev.stopPropagation();

    const action = (ev.detail && (ev.detail as any).action) || 'tap';
    const defaultToggleTarget = lightGroup || tap;
    const defaultMoreInfoTarget = hold || tap || lightGroup;
    const baseConfig: SpaceHubActionEnvelope = {
      entity: defaultToggleTarget,
      tap_action: defaultToggleTarget ? { action: 'toggle' } : undefined,
      hold_action: defaultMoreInfoTarget ? { action: 'more-info', entity: defaultMoreInfoTarget } : undefined,
    };
    const overrides = hasActionOverride(tileCfg)
      ? tileCfg as Record<string, unknown>
      : (hasActionOverride(this._config) ? this._config as unknown as Record<string, unknown> : undefined);
    this._dispatchActionEnvelope(action, this._withActionOverrides(baseConfig, overrides));
  }

  private _onACAction(ev: CustomEvent, ac?: any): void {
    ev.stopPropagation();

    const action = (ev.detail && (ev.detail as any).action) || 'tap';
    const entity = ac?.entity;
    if (!entity) return;

    const mode = (this.hass?.states?.[entity]?.state || '').toLowerCase();
    const active = !!mode && mode !== 'off';
    const baseConfig: SpaceHubActionEnvelope = {
      entity,
      tap_action: {
        action: 'perform-action',
        perform_action: active ? 'climate.turn_off' : 'climate.turn_on',
        target: { entity_id: entity },
      },
      hold_action: { action: 'more-info', entity },
    };
    this._dispatchActionEnvelope(action, this._withActionOverrides(baseConfig, ac as Record<string, unknown>));
  }

  private _onThermostatAction(ev: CustomEvent, thermostat?: any): void {
    ev.stopPropagation();

    const action = (ev.detail && (ev.detail as any).action) || 'tap';
    const entity = thermostat?.entity;
    if (!entity) return;

    const mode = (this.hass?.states?.[entity]?.state || '').toLowerCase();
    const nextMode = mode === 'off' ? 'heat' : 'off';
    const baseConfig: SpaceHubActionEnvelope = {
      entity,
      tap_action: {
        action: 'perform-action',
        perform_action: 'climate.set_hvac_mode',
        target: { entity_id: entity },
        data: { hvac_mode: nextMode },
      },
      hold_action: { action: 'more-info', entity },
    };
    this._dispatchActionEnvelope(action, this._withActionOverrides(baseConfig, thermostat as Record<string, unknown>));
  }

  private async _onSwitchAction(ev: CustomEvent, sw?: any): Promise<void> {
    ev.stopPropagation();

    const action = (ev.detail && (ev.detail as any).action) || 'tap';
    const entity = typeof sw?.entity === 'string' ? sw.entity : undefined;
    const holdEntity = typeof sw?.hold_entity === 'string' ? sw.hold_entity : entity;
    const confirmation = normalizeConfirmation(sw?.confirmation);
    const baseTapAction = this._buildDefaultSwitchTapAction(entity, sw?.type, confirmation);
    const baseConfig: SpaceHubActionEnvelope = {
      entity,
      tap_action: baseTapAction,
      hold_action: holdEntity ? { action: 'more-info', entity: holdEntity } : undefined,
      double_tap_action: entity ? { action: 'toggle' } : undefined,
    };
    const mergedConfig = this._withActionOverrides(baseConfig, sw as Record<string, unknown>);
    let finalConfig = this._applySwitchTapConfirmation(mergedConfig, confirmation);
    const selected = this._selectedAction(action, finalConfig);
    if (!selected) return;

    const actionConfirmation = normalizeConfirmation(selected.confirmation);
    if (actionConfirmation !== undefined) {
      const confirmed = await this._confirmSwitchAction(actionConfirmation, selected);
      if (!confirmed) return;
      finalConfig = this._withoutSelectedActionConfirmation(action, finalConfig);
    }

    this._trackPendingSwitch(entity, action, finalConfig);
    this._dispatchActionEnvelope(action, finalConfig);
  }

  public _resolveSwitchTemplates(sw: unknown): Array<{ template: string; value: string }> {
    const templates = this._extractTemplatesFromSwitch(sw);
    if (!templates.length) return [];
    return templates.map((tpl) => ({ template: tpl, value: this._getTemplateDisplayValue(tpl) }));
  }

  private _extractTemplatesFromSwitch(sw: unknown): string[] {
    if (!sw || typeof sw !== 'object') return [];
    const cfg = sw as Record<string, unknown>;
    const lookup = (...keys: string[]): unknown => {
      for (const key of keys) {
        if (key in cfg) return cfg[key];
      }
      return undefined;
    };
    const raw = lookup(
      'info_templates', 'infoTemplates', 'info-templates',
      'info_template', 'infoTemplate', 'info-template',
      'top_right_templates', 'topRightTemplates', 'top-right-templates',
      'top_right_template', 'topRightTemplate', 'top-right-template'
    );
    if (raw === undefined || raw === null) return [];
    const list = Array.isArray(raw) ? raw : [raw];
    const templates: string[] = [];
    list.some((entry: any) => {
      let tpl: string | undefined;
      if (typeof entry === 'string') {
        tpl = entry;
      } else if (entry && typeof entry === 'object') {
        tpl = entry.template || entry.value || entry.value_template || entry.text;
      }
      const normalized = typeof tpl === 'string' ? tpl.trim() : '';
      if (normalized) templates.push(normalized);
      return templates.length >= 2;
    });
    return templates.slice(0, 2);
  }

  private _syncTemplateEntries(rows?: unknown[]): void {
    const needed = this._collectTemplatesFromRows(rows);
    if (!needed.size && !this._switchTemplateValues.size) return;
    // Drop any entries that are no longer referenced
    const remove: string[] = [];
    this._switchTemplateValues.forEach((_entry, tpl) => {
      if (!needed.has(tpl)) remove.push(tpl);
    });
    remove.forEach((tpl) => {
      const entry = this._switchTemplateValues.get(tpl);
      if (entry) this._disposeTemplateEntry(entry);
      this._switchTemplateValues.delete(tpl);
    });
    // Ensure new templates are tracked
    needed.forEach((tpl) => this._ensureTemplateEntry(tpl));
  }

  private _collectTemplatesFromRows(rows?: unknown[]): Set<string> {
    const templates = new Set<string>();
    if (!Array.isArray(rows)) return templates;
    rows.forEach((row: any) => {
      const items = Array.isArray(row) ? row : (Array.isArray(row?.row) ? row.row : []);
      if (!Array.isArray(items)) return;
      items.forEach((sw: any) => {
        this._extractTemplatesFromSwitch(sw).forEach((tpl) => templates.add(tpl));
      });
    });
    return templates;
  }

  private _ensureTemplateEntry(template: string): SwitchTemplateEntry | undefined {
    const key = (template || '').trim();
    if (!key) return undefined;
    let entry = this._switchTemplateValues.get(key);
    if (!entry) {
      entry = { value: '', ready: false };
      this._switchTemplateValues.set(key, entry);
    }
    this._startTemplateSubscription(key, entry);
    return entry;
  }

  private _getTemplateDisplayValue(template: string): string {
    const entry = this._ensureTemplateEntry(template);
    if (!entry) return '';
    if (entry.error) return '!';
    if (!entry.ready) return '…';
    return entry.value ?? '';
  }

  private _startTemplateSubscription(template: string, entry: SwitchTemplateEntry): void {
    if (!this.hass?.connection || entry.unsub || entry.pending) return;
    entry.pending = true;
    this.hass.connection.subscribeMessage<{ result?: unknown }>(
      (payload) => {
        entry.ready = true;
        entry.error = undefined;
        const nextValue = (payload && typeof payload === 'object' && 'result' in payload)
          ? (payload as any).result
          : payload;
        entry.value = nextValue !== undefined && nextValue !== null ? String(nextValue) : '';
        this.requestUpdate();
      },
      { type: 'render_template', template },
      { resubscribe: true },
    ).then((unsub) => {
      entry.unsub = unsub;
    }).catch((err) => {
      entry.ready = true;
      entry.error = err?.message || 'error';
      entry.unsub = undefined;
      // eslint-disable-next-line no-console
      console.warn(`[space-hub-card] Template subscription failed for "${template}":`, err);
      this.requestUpdate();
    }).finally(() => {
      entry.pending = false;
    });
  }

  private _disposeTemplateEntry(entry: SwitchTemplateEntry): void {
    if (entry.unsub) {
      try { entry.unsub(); } catch (e) { /* no-op */ }
      entry.unsub = undefined;
    }
    entry.pending = false;
  }

  private _resumeTemplateSubscriptions(): void {
    if (!this.hass) return;
    this._switchTemplateValues.forEach((entry, template) => this._startTemplateSubscription(template, entry));
  }

  private _fmt2(entityId: string | undefined, digits: number, suffix: string): string {
    if (!entityId || !this.hass) return '—' + (suffix || '');
    const st = this.hass.states[entityId];
    if (!st || st.state === '' || st.state === 'unknown' || st.state === 'unavailable') return '—' + (suffix || '');
    const n = Number(st.state);
    return Number.isFinite(n) ? n.toFixed(digits) + (suffix || '') : String(st.state) + (suffix || '');
  }

  private _fmtNumber(v: any, digits: number): string {
    if (v === undefined || v === null || v === '' || v === 'unknown' || v === 'unavailable') return '—';
    const n = Number(v);
    return Number.isFinite(n) ? n.toFixed(digits) : String(v);
  }

  private _acChip(mode: string): { icon: string } {
    if (!mode || mode === 'off') return { icon: 'mdi:power' };
    if (mode.includes('cool')) return { icon: 'mdi:snowflake' };
    if (mode.includes('heat')) return { icon: 'mdi:fire' };
    if (mode.includes('dry')) return { icon: 'mdi:water-percent' };
    if (mode.includes('fan')) return { icon: 'mdi:fan' };
    if (mode.includes('auto')) return { icon: 'mdi:autorenew' };
    return { icon: 'mdi:air-conditioner' };
  }

  private _openMoreInfo(entityId?: string | null): void {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent('hass-more-info', {
      detail: { entityId }, bubbles: true, composed: true,
    }));
  }

  private _acToggle(entityId?: string | null): void {
    if (!entityId || !this.hass) return;
    const st = this.hass.states[entityId];
    const mode = (st?.state || '').toLowerCase();
    const on = !!mode && mode !== 'off';
    this.hass.callService('climate', on ? 'turn_off' : 'turn_on', { entity_id: entityId });
  }

  private _thermostatToggle(entityId?: string | null): void {
    if (!entityId || !this.hass) return;
    const st = this.hass.states[entityId];
    const mode = (st?.state || '').toLowerCase();
    const next = (mode === 'off') ? 'heat' : 'off';
    this.hass.callService('climate', 'set_hvac_mode', { entity_id: entityId, hvac_mode: next });
  }

  private _toggleGeneric(entityId?: string | null): void {
    if (!entityId || !this.hass) return;
    const domain = entityId.split('.')[0];
    const svc = (domain === 'switch' || domain === 'light') ? `${domain}.toggle` : 'homeassistant.toggle';
    const [d, s] = svc.split('.');
    this.hass.callService(d, s, { entity_id: entityId });
  }

  private _isOn(entityId?: string | null): boolean {
    if (!entityId || !this.hass) return false;
    const st = this.hass.states[entityId];
    return (st?.state || '').toLowerCase() === 'on';
  }

  public _isSwitchActive(entityId?: string | null, type?: string): boolean {
    if (!entityId || !this.hass) return false;
    const st = this.hass.states[entityId];
    if (this._isLockSwitch(type, entityId)) {
      return (st?.state || '').toLowerCase() === 'unlocked';
    }
    return (st?.state || '').toLowerCase() === 'on';
  }

  public _isSwitchPending(entityId?: string | null): boolean {
    return !!entityId && this._visiblePendingSwitches.has(entityId);
  }

  private _rgbaFromColor(color: string | undefined, alpha = 0.5): string {
    const a = Math.max(0, Math.min(1, Number(alpha) || 0));
    if (!color || typeof color !== 'string') return `rgba(0,0,0,${a})`;
    const c = color.trim();
    if (c.startsWith('rgba(') || c.startsWith('rgb(') || c.startsWith('hsl(') || c.startsWith('var(')) return c;
    const hex = c.replace('#', '');
    const to255 = (h: string) => parseInt(h, 16);
    if (hex.length === 3) {
      const r = to255(hex[0] + hex[0]), g = to255(hex[1] + hex[1]), b = to255(hex[2] + hex[2]);
      return `rgba(${r},${g},${b},${a})`;
    }
    if (hex.length >= 6) {
      const r = to255(hex.slice(0,2)), g = to255(hex.slice(2,4)), b = to255(hex.slice(4,6));
      return `rgba(${r},${g},${b},${a})`;
    }
    return `rgba(0,0,0,${a})`;
  }

  private _getAllCardEntities(c: SpaceHubConfig, h: SpaceHubHeader | SpaceHubHeader[]): string[] {
    const ids = new Set<string>();
    const headers: SpaceHubHeader[] = Array.isArray(h) ? h : [h];
    const visited = new WeakSet<Record<string, unknown> | unknown[]>();
    const entityKeys = new Set([
      'entity',
      'entity_id',
      'tap_entity',
      'hold_entity',
      'double_tap_entity',
      'light_group_entity',
      'temp_sensor',
      'humidity_sensor',
      'camera_image',
    ]);

    const addEntity = (value: unknown): void => {
      if (typeof value === 'string') {
        if (this._isValidEntityId(value)) ids.add(value);
      }
    };

    const collectEntityValue = (value: unknown): void => {
      if (typeof value === 'string') {
        addEntity(value);
        return;
      }
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (typeof item === 'string') {
            addEntity(item);
          } else {
            walk(item);
          }
        });
        return;
      }
      walk(value);
    };

    const collectTarget = (value: unknown): void => {
      if (!value || typeof value !== 'object') return;
      const target = value as Record<string, unknown>;
      collectEntityValue(target.entity_id);
    };

    const walk = (value: unknown): void => {
      if (!value || typeof value !== 'object') return;
      const visitable = value as Record<string, unknown> | unknown[];
      if (visited.has(visitable)) return;
      visited.add(visitable);

      if (Array.isArray(value)) {
        value.forEach((item) => walk(item));
        return;
      }

      Object.entries(value as Record<string, unknown>).forEach(([key, entry]) => {
        if (entityKeys.has(key)) {
          collectEntityValue(entry);
          return;
        }
        if (key === 'target') {
          collectTarget(entry);
          return;
        }
        if (Array.isArray(entry)) {
          entry.forEach((item) => walk(item));
          return;
        }
        if (entry && typeof entry === 'object') {
          walk(entry);
        }
      });
    };

    walk(headers);
    walk(c.switch_rows);
    walk(c.cards);

    return [...ids];
  }

  private _hasAnyUnavailable(c: SpaceHubConfig, h: SpaceHubHeader | SpaceHubHeader[]): boolean {
    if (!this.hass) return false;
    
    const ids = this._getAllCardEntities(c, h);
    const bad = new Set(['unavailable', 'unknown', 'offline']);
    
    return ids.some((id) => {
      if (!id) return false;
      const st = this.hass?.states?.[id];
      if (!st) return true; // treat missing entity as unavailable
      const s = (st.state || '').toLowerCase();
      return bad.has(s);
    });
  }
}

// Card registration (HA UI shows in list)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { customCards?: any[] } }
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'space-hub-card',
  name: 'Space Hub Card',
  description: 'Space control hub card',
  preview: false,
  version: CARD_VERSION,
});

// Fancy console banner (logs once)
try {
  const w = window as any;
  if (!w.__SPACE_HUB_CARD_LOGGED__) {
    const l1 = 'background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700';
    const l2 = 'background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;';
    // eslint-disable-next-line no-console
    console.info(`%c🚀 Space hub card%c v${CARD_VERSION}`, l1, l2);
    w.__SPACE_HUB_CARD_LOGGED__ = true;
  }
} catch (e) { /* no-op */ }

export default SpaceHubCard;
