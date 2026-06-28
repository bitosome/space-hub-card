/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant } from 'custom-card-helpers';
import type { SpaceHubConfig, SpaceHubHeader, HeaderMain, HeaderWeather, HeaderAC, HeaderThermostat } from './space-hub';
import { normalizeActionConfig, normalizeConfirmation } from './action-config';
import { clone } from './const';

// Chip types supported by the card
const CHIP_TYPES = ['lock', 'door', 'presence', 'illuminance', 'gate', 'sliding_gate', 'smart_plug', 'custom'] as const;
// Switch tile types
const SWITCH_TYPES = ['switch', 'smart_plug', 'lock'] as const;
// Glow modes
const GLOW_MODES = ['static', 'pulse', 'none'] as const;
// Weather forecast types supported by Home Assistant weather entities
const WEATHER_FORECAST_TYPES = ['hourly', 'daily', 'twice_daily'] as const;
const WEATHER_TIME_FORMATS = ['24h', '12h'] as const;
// Action types supported by HA
const ACTION_TYPES = ['more-info', 'toggle', 'perform-action', 'navigate', 'url', 'assist', 'none'] as const;
const ARROW_UP_ICON_PATH = 'M4,12L5.41,13.41L11,7.83V20H13V7.83L18.59,13.42L20,12L12,4L4,12Z';
const ARROW_DOWN_ICON_PATH = 'M4,12L5.41,10.59L11,16.17V4H13V16.17L18.59,10.58L20,12L12,20L4,12Z';
const DELETE_ICON_PATH = 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z';

@customElement('space-hub-textfield')
export class SpaceHubTextfield extends LitElement {
  @property() public label = '';
  @property() public value = '';
  @property() public placeholder = '';
  @property() public type = 'text';
  @property() public step?: string;
  @property() public min?: string;
  @property() public max?: string;
  @property({ type: Boolean, reflect: true }) public disabled = false;

  private _onInput(ev: Event): void {
    ev.stopPropagation();
    if (this.disabled) return;
    this.value = (ev.currentTarget as HTMLInputElement).value;
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  }

  protected render(): TemplateResult {
    return html`
      <label>
        <span>${this.label}</span>
        <input
          type=${this.type || 'text'}
          aria-label=${this.label}
          .value=${this.value || ''}
          placeholder=${this.placeholder || ''}
          step=${this.step || nothing}
          min=${this.min || nothing}
          max=${this.max || nothing}
          ?disabled=${this.disabled}
          @input=${this._onInput}
        />
      </label>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
        width: 100%;
      }
      :host([disabled]) {
        opacity: 0.64;
      }
      label {
        position: relative;
        display: block;
        width: 100%;
      }
      span {
        position: absolute;
        top: 7px;
        left: 12px;
        z-index: 1;
        color: var(--secondary-text-color);
        font-size: 11px;
        line-height: 1;
        pointer-events: none;
      }
      input {
        width: 100%;
        height: 56px;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid var(--input-idle-line-color, var(--secondary-text-color));
        border-radius: 4px 4px 0 0;
        outline: none;
        background: var(--input-fill-color, var(--secondary-background-color, rgba(0,0,0,0.06)));
        color: var(--primary-text-color);
        font: inherit;
        font-size: 14px;
        padding: 22px 12px 7px;
      }
      input:focus {
        border-bottom-color: var(--primary-color);
      }
      input:disabled {
        cursor: not-allowed;
        border-bottom-color: var(--disabled-text-color, var(--secondary-text-color));
        color: var(--disabled-text-color, var(--secondary-text-color));
      }
      input::placeholder {
        color: var(--secondary-text-color);
        opacity: 0.72;
      }
    `;
  }
}

@customElement('space-hub-card-editor')
export class SpaceHubCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SpaceHubConfig;
  @state() private _selectedHeaderIndex = 0;
  @state() private _selectedSwitchRowIndex = 0;
  @state() private _yamlMode = false;
  @state() private _yamlError = '';
  private _haElementsRequested = false;

  public setConfig(config: SpaceHubConfig): void {
    this._config = clone(config);
  }

  public connectedCallback(): void {
    super.connectedCallback();
    void this._loadHAElements();
  }

  // Force HA to register lazy-loaded form elements, but don't block the editor render on it.
  private async _loadHAElements(): Promise<void> {
    if (this._haElementsRequested) return;
    this._haElementsRequested = true;

    try {
      const helpers = await (window as any).loadCardHelpers?.();
      if (helpers) {
        await helpers.createCardElement?.({ type: 'entities', entities: [] });
      }
    } catch (_) { /* ignore */ }

    // Wait for the critical HA form elements we need
    const needed = [
      'ha-form',
      'ha-formfield',
      'ha-icon-picker',
      'ha-switch',
      'space-hub-textfield',
      'ha-expansion-panel',
      'ha-yaml-editor',
    ];
    const withTimeout = (tag: string) =>
      Promise.race([
        customElements.whenDefined(tag),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);
    try {
      await Promise.all(needed.map(withTimeout));
    } catch (_err) {
      // Best-effort preload only; the editor can still render while HA upgrades elements later.
    }
    this.requestUpdate();
  }

  private _fireConfigChanged(): void {
    fireEvent(this, 'config-changed', { config: clone(this._config) });
    this.requestUpdate();
  }

  // ── Helpers ──────────────────────────────────────────────────

  private _valueChanged(path: string, value: any): void {
    const parts = path.split('.');
    let obj: any = this._config;
    for (let i = 0; i < parts.length - 1; i++) {
      const key = parts[i];
      const idx = Number(key);
      if (Number.isFinite(idx)) {
        if (!Array.isArray(obj)) return;
        if (!obj[idx]) obj[idx] = {};
        obj = obj[idx];
      } else {
        if (obj[key] === undefined) obj[key] = {};
        obj = obj[key];
      }
    }
    const last = parts[parts.length - 1];
    if (value === '' || value === undefined || value === null) {
      delete obj[last];
    } else {
      obj[last] = value;
    }
    this._fireConfigChanged();
  }

  private _getNestedValue(path: string): any {
    const parts = path.split('.');
    let obj: any = this._config;
    for (const p of parts) {
      if (obj === undefined || obj === null) return undefined;
      const idx = Number(p);
      obj = Number.isFinite(idx) ? obj[idx] : obj[p];
    }
    return obj;
  }

  private _checkedFromEvent(ev: Event): boolean {
    return !!(ev.currentTarget as { checked?: boolean } | null)?.checked;
  }

  private _clampIndex(index: number, count: number): number {
    if (count <= 0) return 0;
    return Math.min(Math.max(index, 0), count - 1);
  }

  private _moveArrayItem(path: string, index: number, delta: -1 | 1): boolean {
    const current = this._getNestedValue(path);
    if (!Array.isArray(current)) return false;
    const nextIndex = index + delta;
    if (nextIndex < 0 || nextIndex >= current.length) return false;

    const next = [...current];
    const [item] = next.splice(index, 1);
    next.splice(nextIndex, 0, item);
    this._valueChanged(path, next);
    return true;
  }

  private _moveSwitchRow(index: number, delta: -1 | 1): void {
    const rows = this._config.switch_rows;
    if (!Array.isArray(rows)) return;
    const nextIndex = index + delta;
    if (nextIndex < 0 || nextIndex >= rows.length) return;

    const next = [...rows];
    const [row] = next.splice(index, 1);
    next.splice(nextIndex, 0, row);
    this._selectedSwitchRowIndex = nextIndex;
    this._valueChanged('switch_rows', next);
  }

  private _moveHeader(index: number, delta: -1 | 1): void {
    const headers = this._config.headers;
    if (!Array.isArray(headers)) return;
    const nextIndex = index + delta;
    if (nextIndex < 0 || nextIndex >= headers.length) return;

    const next = [...headers];
    const [header] = next.splice(index, 1);
    next.splice(nextIndex, 0, header);
    this._selectedHeaderIndex = nextIndex;
    this._valueChanged('headers', next);
  }

  private _handleSelectChanged(path: string, nextValue?: string): void {
    const parts = path.split('.');
    const lastKey = parts[parts.length - 1];
    const parentKey = parts[parts.length - 2];
    if (lastKey === 'action' && ['tap_action', 'hold_action', 'double_tap_action'].includes(parentKey)) {
      this._handleActionTypeChanged(parts.slice(0, -1).join('.'), nextValue);
      return;
    }
    this._valueChanged(path, nextValue);
  }

  private _handleActionTypeChanged(path: string, nextType?: string): void {
    if (!nextType) {
      this._valueChanged(path, undefined);
      return;
    }

    const current = normalizeActionConfig(this._getNestedValue(path));
    const next: Record<string, any> = current ? { ...current } : {};
    next.action = nextType;

    if (nextType !== 'more-info') delete next.entity;
    if (nextType !== 'navigate') {
      delete next.navigation_path;
      delete next.navigation_replace;
    }
    if (nextType !== 'url') delete next.url_path;
    if (nextType !== 'perform-action') {
      delete next.perform_action;
      delete next.data;
      delete next.target;
      delete next.service;
      delete next.service_data;
    }
    if (nextType !== 'assist') {
      delete next.pipeline_id;
      delete next.start_listening;
    }

    if (nextType === 'perform-action' && !next.perform_action) next.perform_action = '';
    if (nextType === 'navigate' && !next.navigation_path) next.navigation_path = '';
    if (nextType === 'url' && !next.url_path) next.url_path = '';
    if (nextType === 'assist' && next.start_listening === undefined) next.start_listening = false;

    this._valueChanged(path, next);
  }

  private _setActionConfirmation(path: string, enabled: boolean): void {
    const current = normalizeActionConfig(this._getNestedValue(path));
    if (!current) return;
    const next: Record<string, any> = { ...current };
    if (enabled) {
      const confirmation = normalizeConfirmation(next.confirmation);
      next.confirmation = confirmation && typeof confirmation === 'object'
        ? confirmation
        : { title: 'Please confirm', text: 'Are you sure?' };
    } else {
      delete next.confirmation;
    }
    this._valueChanged(path, next);
  }

  private _setActionConfirmationField(path: string, field: 'title' | 'text' | 'confirm_text' | 'dismiss_text', value: string): void {
    const current = normalizeActionConfig(this._getNestedValue(path));
    if (!current) return;
    const next: Record<string, any> = { ...current };
    const confirmation = normalizeConfirmation(next.confirmation);
    const nextConfirmation: Record<string, any> = confirmation && typeof confirmation === 'object'
      ? { ...confirmation }
      : {};

    if (value.trim()) {
      nextConfirmation[field] = value;
    } else {
      delete nextConfirmation[field];
    }

    next.confirmation = Object.keys(nextConfirmation).length ? nextConfirmation : true;
    this._valueChanged(path, next);
  }

  private _setSwitchConfirmation(path: string, enabled: boolean): void {
    if (!enabled) {
      this._valueChanged(path, undefined);
      return;
    }

    const current = normalizeConfirmation(this._getNestedValue(path));
    this._valueChanged(
      path,
      current && typeof current === 'object'
        ? current
        : { title: 'Please confirm', text: 'Are you sure?' }
    );
  }

  private _setSwitchConfirmationField(path: string, field: 'title' | 'text' | 'confirm_text' | 'dismiss_text', value: string): void {
    const current = normalizeConfirmation(this._getNestedValue(path));
    const next: Record<string, any> = current && typeof current === 'object'
      ? { ...current }
      : {};

    if (value.trim()) {
      next[field] = value;
    } else {
      delete next[field];
    }

    this._valueChanged(path, Object.keys(next).length ? next : true);
  }

  private _setSwitchInactiveIcon(path: string, value?: string): void {
    const current = this._getNestedValue(path);
    const next: Record<string, any> = current && typeof current === 'object'
      ? { ...current }
      : {};
    const icon = typeof value === 'string' ? value.trim() : '';

    if (icon) {
      next.icon = icon;
    } else {
      delete next.icon;
    }
    delete next.icon_inactive;
    delete next.icon_off;
    delete next['icon-inactive'];
    delete next['icon-off'];

    this._valueChanged(path, next);
  }

  private _renderSelectField(label: string, path: string, value: string | undefined, options: readonly string[]): TemplateResult {
    const fallback = value || options[0] || '';
    const selectOptions = (fallback && !options.includes(fallback))
      ? [fallback, ...options]
      : [...options];
    const selected = selectOptions.includes(value || '') ? (value || '') : fallback;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${{ selection: selected }}
        .schema=${[{
          name: 'selection',
          selector: {
            select: {
              mode: 'dropdown',
              options: selectOptions.map((option) => ({ value: option, label: option })),
            },
          },
        }]}
        .computeLabel=${(schema: { name: string }) => (schema.name === 'selection' ? label : undefined)}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          this._handleSelectChanged(path, ev.detail.value?.selection);
        }}
      ></ha-form>
    `;
  }

  private _renderEntityField(
    label: string,
    path: string,
    value: string | undefined,
    selectorConfig: Record<string, any> = {},
  ): TemplateResult {
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${{ entity: value || '' }}
        .schema=${[{ name: 'entity', selector: { entity: selectorConfig } }]}
        .computeLabel=${(schema: { name: string }) => (schema.name === 'entity' ? label : undefined)}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          this._valueChanged(path, ev.detail.value?.entity);
        }}
      ></ha-form>
    `;
  }

  private _friendlyEntityName(entityId?: string): string {
    if (!entityId || !this.hass?.states?.[entityId]) return '';
    return this.hass.states[entityId].attributes?.friendly_name || '';
  }

  private _entitySummary(entityId?: string): string {
    if (!entityId) return 'No entity selected';
    const friendly = this._friendlyEntityName(entityId);
    return friendly && friendly !== entityId ? `${friendly} • ${entityId}` : entityId;
  }

  // ── Render ───────────────────────────────────────────────────

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="editor-container">
        <div class="mode-toggle">
          <button
            class="editor-btn${!this._yamlMode ? ' active' : ''}"
            @click=${() => { this._yamlMode = false; this._yamlError = ''; }}
          >Visual Editor</button>
          <button
            class="editor-btn${this._yamlMode ? ' active' : ''}"
            @click=${() => { this._yamlMode = true; }}
          >YAML</button>
        </div>
        ${this._yamlMode ? this._renderYamlEditor() : this._renderVisualEditor()}
      </div>
    `;
  }

  // ── YAML Editor ──────────────────────────────────────────────

  private _renderYamlEditor(): TemplateResult {
    return html`
      <ha-yaml-editor
        .defaultValue=${this._config}
        @value-changed=${this._yamlChanged}
      ></ha-yaml-editor>
      ${this._yamlError ? html`<div class="yaml-error">${this._yamlError}</div>` : nothing}
    `;
  }

  private _yamlChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const yaml = ev.detail.value;
    if (!yaml || typeof yaml !== 'object') {
      this._yamlError = 'Invalid YAML';
      return;
    }
    this._yamlError = '';
    this._config = clone(yaml);
    this._fireConfigChanged();
  }

  // ── Visual Editor ────────────────────────────────────────────

  private _renderVisualEditor(): TemplateResult {
    return html`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `;
  }

  // ── Appearance ───────────────────────────────────────────────

  private _renderAppearanceSection(): TemplateResult {
    return html`
      <ha-expansion-panel outlined .header=${'Appearance'}>
        <div class="section-content">
          <div class="side-by-side">
            <space-hub-textfield
              label="Tile Height (px)"
              type="number"
              .value=${String(this._config.tile_height ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('tile_height', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Main Icon Size (px)"
              type="number"
              .value=${String(this._config.main_icon_size ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('main_icon_size', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <space-hub-textfield
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(this._config.chip_icon_size ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('chip_icon_size', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Chip Font Size (px)"
              type="number"
              .value=${String(this._config.chip_font_size ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('chip_font_size', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <space-hub-textfield
              label="Shadow Color"
              .value=${this._config.card_shadow_color || ''}
              @input=${(ev: Event) => this._valueChanged('card_shadow_color', (ev.target as HTMLInputElement).value)}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Shadow Intensity (0-1)"
              type="number"
              step="0.05"
              min="0"
              max="1"
              .value=${String(this._config.card_shadow_intensity ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('card_shadow_intensity', Number.isFinite(v) ? v : undefined);
              }}
            ></space-hub-textfield>
          </div>
          <space-hub-textfield
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color || ''}
            @input=${(ev: Event) => this._valueChanged('unavailable_pulse_color', (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Headers ──────────────────────────────────────────────────

  private _renderHeadersSection(): TemplateResult {
    const headers = this._config.headers || [];
    const selectedIndex = this._clampIndex(this._selectedHeaderIndex, headers.length);
    return html`
      <ha-expansion-panel outlined .header=${`Headers (${headers.length})`}>
        <div class="section-content">
          ${headers.length > 1 ? html`
            <div class="tab-bar">
              ${headers.map((_, i) => html`<button class="tab-btn${selectedIndex === i ? ' active' : ''}" @click=${() => { this._selectedHeaderIndex = i; this.requestUpdate(); }}>Header ${i + 1}</button>`)}
            </div>
          ` : nothing}
          ${headers.length ? this._renderHeader(headers[selectedIndex], selectedIndex) : html`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${headers.length > 0 ? html`
              <button
                class="editor-btn"
                .disabled=${selectedIndex <= 0}
                @click=${() => this._moveHeader(selectedIndex, -1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Header Up
              </button>
              <button
                class="editor-btn"
                .disabled=${selectedIndex >= headers.length - 1}
                @click=${() => this._moveHeader(selectedIndex, 1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Header Down
              </button>
              <button class="editor-btn danger" @click=${() => this._removeHeader(selectedIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${selectedIndex + 1}
              </button>
            ` : nothing}
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _addHeader(): void {
    if (!this._config.headers) this._config.headers = [];
    this._config.headers.push({ main: { main_name: 'New Room' } });
    this._selectedHeaderIndex = this._config.headers.length - 1;
    this._fireConfigChanged();
  }

  private _removeHeader(idx: number): void {
    if (!this._config.headers) return;
    this._config.headers.splice(idx, 1);
    if (this._selectedHeaderIndex >= this._config.headers.length) {
      this._selectedHeaderIndex = Math.max(0, this._config.headers.length - 1);
    }
    this._fireConfigChanged();
  }

  private _renderHeader(header: SpaceHubHeader, idx: number): TemplateResult {
    const base = `headers.${idx}`;
    return html`
      ${this._renderWeatherConfig(header.weather, `${base}.weather`)}
      ${this._renderMainTileConfig(header.main, `${base}.main`)}
      ${this._renderACConfig(header.ac, `${base}.ac`)}
      ${this._renderThermostatConfig(header.thermostat, `${base}.thermostat`)}
    `;
  }

  // ── Weather Tile Config ──────────────────────────────────────

  private _renderWeatherConfig(weather: HeaderWeather | undefined, basePath: string): TemplateResult {
    const has = !!weather;
    const config = weather || {};
    return html`
      <ha-expansion-panel outlined .header=${'Weather Tile'}>
        <div class="section-content">
          ${!has ? html`
            <button class="editor-btn" @click=${() => { this._valueChanged(basePath, { name: 'Weather' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Weather Tile
            </button>
          ` : html`
            <div class="side-by-side">
              <space-hub-textfield
                label="Name"
                .value=${config.name || ''}
                @input=${(ev: Event) => this._valueChanged(`${basePath}.name`, (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${config.icon || ''}
                @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.icon`, ev.detail.value)}
              ></ha-icon-picker>
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('Weather Entity', `${basePath}.entity`, config.entity, { domain: 'weather' })}
              <space-hub-textfield
                label="Tile Height (px)"
                type="number"
                .value=${String(config.height ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.height`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <ha-formfield label="Animated icons">
                <ha-switch
                  .checked=${config.animated_icons !== false}
                  @change=${(ev: Event) => {
                    this._valueChanged(`${basePath}.animated_icons`, this._checkedFromEvent(ev) ? undefined : false);
                  }}
                ></ha-switch>
              </ha-formfield>
              <ha-formfield label="Show forecast">
                <ha-switch
                  .checked=${config.show_forecast !== false}
                  @change=${(ev: Event) => {
                    this._valueChanged(`${basePath}.show_forecast`, this._checkedFromEvent(ev) ? undefined : false);
                  }}
                ></ha-switch>
              </ha-formfield>
            </div>
            <div class="side-by-side">
              ${this._renderSelectField('Forecast Type', `${basePath}.forecast_type`, config.forecast_type, WEATHER_FORECAST_TYPES)}
              ${this._renderSelectField('Time Format', `${basePath}.time_format`, config.time_format, WEATHER_TIME_FORMATS)}
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Forecast Slots"
                type="number"
                min="1"
                max="24"
                .value=${String(config.forecast_slots ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.forecast_slots`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <space-hub-textfield
              label="Forecast Fields"
              placeholder="temperature, precipitation_probability"
              .value=${Array.isArray(config.forecast_fields) ? config.forecast_fields.join(', ') : (config.forecast_fields || '')}
              @input=${(ev: Event) => {
                const raw = (ev.target as HTMLInputElement).value;
                const fields = raw.split(',').map((item) => item.trim()).filter((item) => item);
                this._valueChanged(`${basePath}.forecast_fields`, fields.length ? fields : undefined);
              }}
            ></space-hub-textfield>
            <div class="side-by-side">
              ${this._renderEntityField('Temperature Sensor', `${basePath}.temp_sensor`, config.temp_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Humidity Sensor', `${basePath}.humidity_sensor`, config.humidity_sensor, { domain: 'sensor' })}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('24h Min Temperature Sensor', `${basePath}.temp_min_24h_sensor`, config.temp_min_24h_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('24h Max Temperature Sensor', `${basePath}.temp_max_24h_sensor`, config.temp_max_24h_sensor, { domain: 'sensor' })}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('Feels Like Sensor', `${basePath}.feels_like_sensor`, config.feels_like_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Dew Point Sensor', `${basePath}.dewpoint_sensor`, config.dewpoint_sensor, { domain: 'sensor' })}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('Wind Speed Sensor', `${basePath}.wind_speed_sensor`, config.wind_speed_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Wind Gust Sensor', `${basePath}.wind_gust_sensor`, config.wind_gust_sensor, { domain: 'sensor' })}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('Wind Direction Sensor', `${basePath}.wind_direction_sensor`, config.wind_direction_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Rain State Sensor', `${basePath}.rain_state_sensor`, config.rain_state_sensor, { domain: 'binary_sensor' })}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('Rain Today Sensor', `${basePath}.rain_today_sensor`, config.rain_today_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Rain Rate Sensor', `${basePath}.rain_rate_sensor`, config.rain_rate_sensor, { domain: 'sensor' })}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('UV Sensor', `${basePath}.uv_sensor`, config.uv_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Solar Lux Sensor', `${basePath}.solar_lux_sensor`, config.solar_lux_sensor, { domain: 'sensor' })}
            </div>
            ${this._renderEntityField('Pressure Sensor', `${basePath}.pressure_sensor`, config.pressure_sensor, { domain: 'sensor' })}
            ${this._renderChipsConfig(config.chips as any[] || [], basePath)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, config.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, config.hold_action)}
            ${this._renderActionConfig('Double Tap Action', `${basePath}.double_tap_action`, config.double_tap_action)}
            <button class="editor-btn danger" @click=${() => this._valueChanged(basePath, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Weather Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Main Tile Config ─────────────────────────────────────────

  private _renderMainTileConfig(main: HeaderMain | undefined, basePath: string): TemplateResult {
    const m = main || {};
    const hasMain = !!main;
    return html`
      <ha-expansion-panel outlined .header=${'Main Tile'}>
        <div class="section-content">
          ${!hasMain ? html`
            <button class="editor-btn" @click=${() => { this._valueChanged(basePath, { main_name: 'Room' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </button>
          ` : html`
            <div class="side-by-side">
              <space-hub-textfield
                label="Name"
                .value=${m.main_name || ''}
                @input=${(ev: Event) => this._valueChanged(`${basePath}.main_name`, (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${m.main_icon || ''}
                @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.main_icon`, ev.detail.value)}
              ></ha-icon-picker>
            </div>
            ${this._renderEntityField('Light Group Entity (tap toggles)', `${basePath}.light_group_entity`, m.light_group_entity)}
            <div class="side-by-side">
              ${this._renderEntityField('Tap Entity', `${basePath}.tap_entity`, m.tap_entity)}
              ${this._renderEntityField('Hold Entity (more-info)', `${basePath}.hold_entity`, m.hold_entity)}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('Temperature Sensor', `${basePath}.temp_sensor`, m.temp_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Humidity Sensor', `${basePath}.humidity_sensor`, m.humidity_sensor, { domain: 'sensor' })}
            </div>
            ${this._renderSelectField('Glow Mode', `${basePath}.glow_mode`, m.glow_mode, GLOW_MODES)}
            ${this._renderChipsConfig(m.chips as any[] || [], basePath)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, m.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, m.hold_action)}
            ${this._renderActionConfig('Double Tap Action', `${basePath}.double_tap_action`, m.double_tap_action)}
            <button class="editor-btn danger" @click=${() => this._valueChanged(basePath, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Chips Config ─────────────────────────────────────────────

  private _renderChipsConfig(chips: any[], mainPath: string): TemplateResult {
    const chipsPath = `${mainPath}.chips`;
    return html`
      <ha-expansion-panel outlined .header=${`Chips (${chips.length})`}>
        <div class="section-content">
          ${chips.map((chip, i) => this._renderSingleChip(chip, `${chipsPath}.${i}`, i, chipsPath))}
          <button class="editor-btn" @click=${() => {
            const current = (this._getNestedValue(chipsPath) || []) as any[];
            current.push({ type: 'custom', entity: '' });
            this._valueChanged(chipsPath, current);
          }}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </button>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderSingleChip(chip: any, path: string, index: number, chipsPath: string): TemplateResult {
    return html`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Chip ${index + 1}: ${chip.type || 'custom'}</span>
            <span class="sub-item-meta">${this._entitySummary(chip.entity)}</span>
          </div>
          <ha-icon-button
            .path=${'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'}
            @click=${() => {
              const arr = (this._getNestedValue(chipsPath) || []) as any[];
              arr.splice(index, 1);
              this._valueChanged(chipsPath, [...arr]);
            }}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField('Type', `${path}.type`, chip.type, CHIP_TYPES)}
          ${this._renderEntityField('Entity', `${path}.entity`, chip.entity)}
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${chip.icon || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon`, ev.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Active)"
            .value=${chip.icon_active || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_active`, ev.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Inactive)"
            .value=${chip.icon_inactive || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_inactive`, ev.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Unavailable)"
            .value=${chip.icon_unavailable || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_unavailable`, ev.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <space-hub-textfield
            label="Background (Active)"
            .value=${chip.background_active || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.background_active`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Background (Unavailable)"
            .value=${chip.background_unavailable || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.background_unavailable`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
        <space-hub-textfield
          label="Icon Color (Unavailable)"
          .value=${chip.icon_color_unavailable || ''}
          @input=${(ev: Event) => this._valueChanged(`${path}.icon_color_unavailable`, (ev.target as HTMLInputElement).value)}
        ></space-hub-textfield>
      </div>
    `;
  }

  // ── AC Config ────────────────────────────────────────────────

  private _renderACConfig(ac: HeaderAC | undefined, basePath: string): TemplateResult {
    const hasAC = !!ac;
    const config = ac || {};
    return html`
      <ha-expansion-panel outlined .header=${'AC Tile'}>
        <div class="section-content">
          ${!hasAC ? html`
            <button class="editor-btn" @click=${() => { this._valueChanged(basePath, { entity: '' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          ` : html`
            ${this._renderEntityField('Climate Entity', `${basePath}.entity`, config.entity, { domain: 'climate' })}
            ${this._renderSelectField('Glow Mode', `${basePath}.glow_mode`, config.glow_mode, GLOW_MODES)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, config.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, config.hold_action)}
            <button class="editor-btn danger" @click=${() => this._valueChanged(basePath, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Thermostat Config ────────────────────────────────────────

  private _renderThermostatConfig(thermostat: HeaderThermostat | undefined, basePath: string): TemplateResult {
    const has = !!thermostat;
    const config = thermostat || {};
    return html`
      <ha-expansion-panel outlined .header=${'Thermostat Tile'}>
        <div class="section-content">
          ${!has ? html`
            <button class="editor-btn" @click=${() => { this._valueChanged(basePath, { entity: '' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          ` : html`
            ${this._renderEntityField('Climate Entity', `${basePath}.entity`, config.entity, { domain: 'climate' })}
            ${this._renderSelectField('Glow Mode', `${basePath}.glow_mode`, config.glow_mode, GLOW_MODES)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, config.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, config.hold_action)}
            <button class="editor-btn danger" @click=${() => this._valueChanged(basePath, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Switch Rows ──────────────────────────────────────────────

  private _renderSwitchRowsSection(): TemplateResult {
    const rows = (this._config.switch_rows || []) as any[];
    const selectedIndex = this._clampIndex(this._selectedSwitchRowIndex, rows.length);
    return html`
      <ha-expansion-panel outlined .header=${`Switch Rows (${rows.length})`}>
        <div class="section-content">
          ${rows.length > 1 ? html`
            <div class="tab-bar">
              ${rows.map((_, i) => html`<button class="tab-btn${selectedIndex === i ? ' active' : ''}" @click=${() => { this._selectedSwitchRowIndex = i; this.requestUpdate(); }}>Row ${i + 1}</button>`)}
            </div>
          ` : nothing}
          ${rows.length
            ? this._renderSwitchRow(rows[selectedIndex], selectedIndex)
            : html`<div class="empty-hint">No switch rows configured.</div>`
          }
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${rows.length > 0 ? html`
              <button
                class="editor-btn"
                .disabled=${selectedIndex <= 0}
                @click=${() => this._moveSwitchRow(selectedIndex, -1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Row Up
              </button>
              <button
                class="editor-btn"
                .disabled=${selectedIndex >= rows.length - 1}
                @click=${() => this._moveSwitchRow(selectedIndex, 1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Row Down
              </button>
              <button class="editor-btn danger" @click=${() => this._removeSwitchRow(selectedIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${selectedIndex + 1}
              </button>
            ` : nothing}
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _addSwitchRow(): void {
    if (!this._config.switch_rows) this._config.switch_rows = [];
    (this._config.switch_rows as any[]).push({ row: [{ entity: '', name: '', icon: 'mdi:toggle-switch' }] });
    this._selectedSwitchRowIndex = (this._config.switch_rows as any[]).length - 1;
    this._fireConfigChanged();
  }

  private _removeSwitchRow(idx: number): void {
    if (!this._config.switch_rows) return;
    (this._config.switch_rows as any[]).splice(idx, 1);
    if (this._selectedSwitchRowIndex >= (this._config.switch_rows as any[]).length) {
      this._selectedSwitchRowIndex = Math.max(0, (this._config.switch_rows as any[]).length - 1);
    }
    this._fireConfigChanged();
  }

  private _renderSwitchRow(row: any, rowIndex: number): TemplateResult {
    const items: any[] = Array.isArray(row) ? row : (Array.isArray(row?.row) ? row.row : []);
    const basePath = `switch_rows.${rowIndex}`;
    // Normalize: always use { row: [...] } format
    const itemsPath = Array.isArray(row) ? basePath : `${basePath}.row`;

    return html`
      <div class="section-content">
        ${items.map((sw, i) => this._renderSwitchItem(sw, `${itemsPath}.${i}`, i, itemsPath, items.length))}
        <button class="editor-btn" @click=${() => {
          const arr = (this._getNestedValue(itemsPath) || []) as any[];
          arr.push({ entity: '', name: '', icon: 'mdi:toggle-switch' });
          this._valueChanged(itemsPath, [...arr]);
        }}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </button>
      </div>
    `;
  }

  private _renderSwitchItem(sw: any, path: string, index: number, rowPath: string, itemCount: number): TemplateResult {
    const confirmation = normalizeConfirmation(sw?.confirmation);
    const confirmationEnabled = confirmation !== undefined;
    const confirmationTitle = confirmation && typeof confirmation === 'object' ? confirmation.title || '' : '';
    const confirmationMessage = confirmation && typeof confirmation === 'object' ? confirmation.text || '' : '';
    const confirmationConfirmText = confirmation && typeof confirmation === 'object' ? confirmation.confirm_text || '' : '';
    const confirmationDismissText = confirmation && typeof confirmation === 'object' ? confirmation.dismiss_text || '' : '';
    const confirmationPath = `${path}.confirmation`;

    return html`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${sw.name || this._friendlyEntityName(sw.entity) || `Switch ${index + 1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(sw.entity)}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${ARROW_UP_ICON_PATH}
              .label=${'Move switch up'}
              .disabled=${index <= 0}
              @click=${() => this._moveArrayItem(rowPath, index, -1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${ARROW_DOWN_ICON_PATH}
              .label=${'Move switch down'}
              .disabled=${index >= itemCount - 1}
              @click=${() => this._moveArrayItem(rowPath, index, 1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${DELETE_ICON_PATH}
              .label=${'Remove switch'}
              @click=${() => {
                const arr = (this._getNestedValue(rowPath) || []) as any[];
                arr.splice(index, 1);
                this._valueChanged(rowPath, [...arr]);
              }}
            ></ha-icon-button>
          </div>
        </div>
        ${this._renderEntityField('Controlled Entity', `${path}.entity`, sw.entity)}
        <div class="side-by-side">
          <space-hub-textfield
            label="Name"
            .value=${sw.name || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.name`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
          <ha-icon-picker
            .hass=${this.hass}
            label="Inactive State Icon"
            .value=${sw.icon_inactive || sw.icon_off || sw['icon-inactive'] || sw['icon-off'] || sw.icon || ''}
            @value-changed=${(ev: CustomEvent) => this._setSwitchInactiveIcon(path, ev.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Active State Icon"
            .value=${sw.icon_active || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_active`, ev.detail.value)}
          ></ha-icon-picker>
          <space-hub-textfield
            label="Icon Size"
            .value=${sw.icon_size || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.icon_size`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField('Type', `${path}.type`, sw.type, SWITCH_TYPES)}
          ${this._renderSelectField('Glow Mode', `${path}.glow_mode`, sw.glow_mode, GLOW_MODES)}
        </div>
        <div class="side-by-side">
          <space-hub-textfield
            label="Font Size"
            .value=${sw.font_size || sw['font-size'] || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.font_size`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Font Weight"
            .value=${sw.font_weight || sw['font-weight'] || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.font_weight`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
        ${this._renderEntityField('Hold Entity (more-info on hold)', `${path}.hold_entity`, sw.hold_entity)}

        <div class="confirmation-settings">
          <ha-formfield label="Require confirmation on tap">
            <ha-switch
              .checked=${confirmationEnabled}
              @change=${(ev: Event) => {
                this._setSwitchConfirmation(confirmationPath, this._checkedFromEvent(ev));
              }}
            ></ha-switch>
          </ha-formfield>
          <div class="confirmation-fields">
            <space-hub-textfield
              label="Confirmation Title"
              .value=${confirmationTitle}
              placeholder="Please confirm"
              .disabled=${!confirmationEnabled}
              @input=${(ev: Event) => this._setSwitchConfirmationField(confirmationPath, 'title', (ev.target as HTMLInputElement).value)}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Confirmation Message"
              .value=${confirmationMessage}
              placeholder="Are you sure?"
              .disabled=${!confirmationEnabled}
              @input=${(ev: Event) => this._setSwitchConfirmationField(confirmationPath, 'text', (ev.target as HTMLInputElement).value)}
            ></space-hub-textfield>
            <div class="side-by-side">
              <space-hub-textfield
                label="Confirm Button Text"
                .value=${confirmationConfirmText}
                placeholder="OK"
                .disabled=${!confirmationEnabled}
                @input=${(ev: Event) => this._setSwitchConfirmationField(confirmationPath, 'confirm_text', (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Dismiss Button Text"
                .value=${confirmationDismissText}
                placeholder="Cancel"
                .disabled=${!confirmationEnabled}
                @input=${(ev: Event) => this._setSwitchConfirmationField(confirmationPath, 'dismiss_text', (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
            </div>
          </div>
        </div>

        <ha-expansion-panel outlined .header=${'Actions'}>
          <div class="section-content">
            ${this._renderActionConfig('Tap Action', `${path}.tap_action`, sw.tap_action)}
            ${this._renderActionConfig('Hold Action', `${path}.hold_action`, sw.hold_action)}
            ${this._renderActionConfig('Double Tap Action', `${path}.double_tap_action`, sw.double_tap_action)}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${'Info Templates'}>
          <div class="section-content">
            ${this._renderInfoTemplates(sw, path)}
          </div>
        </ha-expansion-panel>
      </div>
    `;
  }

  // ── Info Templates (switch overlays) ─────────────────────────

  private _renderInfoTemplates(sw: any, path: string): TemplateResult {
    const templates: string[] = Array.isArray(sw.info_templates)
      ? sw.info_templates
      : (sw.info_template ? [sw.info_template] : []);

    return html`
      ${templates.map((tpl, i) => html`
        <div class="side-by-side">
          <space-hub-textfield
            label="Template ${i + 1}"
            .value=${tpl || ''}
            @input=${(ev: Event) => {
              const arr = [...templates];
              arr[i] = (ev.target as HTMLInputElement).value;
              this._valueChanged(`${path}.info_templates`, arr);
            }}
          ></space-hub-textfield>
          <ha-icon-button
            .path=${'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'}
            @click=${() => {
              const arr = [...templates];
              arr.splice(i, 1);
              this._valueChanged(`${path}.info_templates`, arr.length ? arr : undefined);
            }}
          ></ha-icon-button>
        </div>
      `)}
      ${templates.length < 2 ? html`
        <button class="editor-btn" @click=${() => {
          const arr = [...templates, ''];
          this._valueChanged(`${path}.info_templates`, arr);
        }}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </button>
      ` : nothing}
    `;
  }

  // ── Embedded Cards ────────────────────────────────────────────

  private _renderCardsSection(): TemplateResult {
    const cards = (this._config.cards || []) as any[];
    return html`
      <ha-expansion-panel outlined .header=${`Embedded Cards (${cards.length})`}>
        <div class="section-content">
          <div class="empty-hint">
            Add extra Home Assistant cards below the switch rows. Each card is a standard HA card config in YAML.
          </div>
          ${cards.map((card, i) => this._renderEmbeddedCardItem(card, i, cards.length))}
          <button class="editor-btn" @click=${() => {
            const arr = [...cards, { type: 'tile', entity: '' }];
            this._valueChanged('cards', arr);
          }}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </button>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderEmbeddedCardItem(card: any, index: number, cardCount: number): TemplateResult {
    return html`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Card ${index + 1}: ${card.type || 'unknown'}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${ARROW_UP_ICON_PATH}
              .label=${'Move card up'}
              .disabled=${index <= 0}
              @click=${() => this._moveArrayItem('cards', index, -1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${ARROW_DOWN_ICON_PATH}
              .label=${'Move card down'}
              .disabled=${index >= cardCount - 1}
              @click=${() => this._moveArrayItem('cards', index, 1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${DELETE_ICON_PATH}
              .label=${'Remove card'}
              @click=${() => {
                const arr = [...(this._config.cards || []) as any[]];
                arr.splice(index, 1);
                this._valueChanged('cards', arr.length ? arr : undefined);
              }}
            ></ha-icon-button>
          </div>
        </div>
        <ha-yaml-editor
          .defaultValue=${card}
          @value-changed=${(ev: CustomEvent) => {
            ev.stopPropagation();
            const arr = [...(this._config.cards || []) as any[]];
            arr[index] = ev.detail.value;
            this._valueChanged('cards', arr);
          }}
        ></ha-yaml-editor>
      </div>
    `;
  }

  // ── Action Config ────────────────────────────────────────────

  private _renderActionConfig(label: string, path: string, action: any): TemplateResult {
    const normalized = normalizeActionConfig(action);
    const hasAction = !!normalized;
    const confirmation = normalizeConfirmation(normalized?.confirmation);
    const confirmationEnabled = confirmation !== undefined;
    const confirmationTitle = confirmation && typeof confirmation === 'object' ? confirmation.title || '' : '';
    const confirmationMessage = confirmation && typeof confirmation === 'object' ? confirmation.text || '' : '';
    const confirmationConfirmText = confirmation && typeof confirmation === 'object' ? confirmation.confirm_text || '' : '';
    const confirmationDismissText = confirmation && typeof confirmation === 'object' ? confirmation.dismiss_text || '' : '';
    return html`
      <ha-expansion-panel outlined .header=${label}>
        <div class="section-content">
          ${!hasAction ? html`
            <button class="editor-btn" @click=${() => this._valueChanged(path, { action: 'more-info' })}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${label}
            </button>
          ` : html`
            ${this._renderSelectField('Action', `${path}.action`, normalized?.action, ACTION_TYPES)}
            ${normalized?.action === 'more-info' ? html`
              ${this._renderEntityField('More Info Entity', `${path}.entity`, normalized.entity)}
            ` : nothing}
            ${normalized?.action === 'navigate' ? html`
              <space-hub-textfield
                label="Navigation Path"
                .value=${normalized.navigation_path || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.navigation_path`, (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <ha-formfield label="Replace current path">
                <ha-switch
                  .checked=${!!normalized.navigation_replace}
                  @change=${(ev: Event) => this._valueChanged(`${path}.navigation_replace`, this._checkedFromEvent(ev) || undefined)}
                ></ha-switch>
              </ha-formfield>
            ` : nothing}
            ${normalized?.action === 'url' ? html`
              <space-hub-textfield
                label="URL"
                .value=${normalized.url_path || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.url_path`, (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
            ` : nothing}
            ${normalized?.action === 'perform-action' ? html`
              <space-hub-textfield
                label="Action"
                .value=${normalized.perform_action || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.perform_action`, (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <ha-yaml-editor
                label="Target"
                .defaultValue=${normalized.target || {}}
                @value-changed=${(ev: CustomEvent) => {
                  ev.stopPropagation();
                  this._valueChanged(`${path}.target`, ev.detail.value);
                }}
              ></ha-yaml-editor>
              <ha-yaml-editor
                label="Data"
                .defaultValue=${normalized.data || {}}
                @value-changed=${(ev: CustomEvent) => {
                  ev.stopPropagation();
                  this._valueChanged(`${path}.data`, ev.detail.value);
                }}
              ></ha-yaml-editor>
            ` : nothing}
            ${normalized?.action === 'assist' ? html`
              <space-hub-textfield
                label="Pipeline ID"
                .value=${normalized.pipeline_id || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.pipeline_id`, (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <ha-formfield label="Start listening immediately">
                <ha-switch
                  .checked=${!!normalized.start_listening}
                  @change=${(ev: Event) => this._valueChanged(`${path}.start_listening`, this._checkedFromEvent(ev) || undefined)}
                ></ha-switch>
              </ha-formfield>
            ` : nothing}
            <ha-formfield label="Require confirmation">
              <ha-switch
                .checked=${confirmationEnabled}
                @change=${(ev: Event) => this._setActionConfirmation(path, this._checkedFromEvent(ev))}
              ></ha-switch>
            </ha-formfield>
            ${confirmationEnabled ? html`
              <space-hub-textfield
                label="Confirmation Title"
                .value=${confirmationTitle}
                placeholder="Please confirm"
                @input=${(ev: Event) => this._setActionConfirmationField(path, 'title', (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Confirmation Message"
                .value=${confirmationMessage}
                placeholder="Are you sure?"
                @input=${(ev: Event) => this._setActionConfirmationField(path, 'text', (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <div class="side-by-side">
                <space-hub-textfield
                  label="Confirm Button Text"
                  .value=${confirmationConfirmText}
                  placeholder="OK"
                  @input=${(ev: Event) => this._setActionConfirmationField(path, 'confirm_text', (ev.target as HTMLInputElement).value)}
                ></space-hub-textfield>
                <space-hub-textfield
                  label="Dismiss Button Text"
                  .value=${confirmationDismissText}
                  placeholder="Cancel"
                  @input=${(ev: Event) => this._setActionConfirmationField(path, 'dismiss_text', (ev.target as HTMLInputElement).value)}
                ></space-hub-textfield>
              </div>
            ` : nothing}
            <button class="editor-btn danger" @click=${() => this._valueChanged(path, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Styles ───────────────────────────────────────────────────

  static styles: CSSResultGroup = css`
    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .mode-toggle {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
    ha-expansion-panel {
      display: block;
      margin-bottom: 4px;
    }
    .section-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
    }
    .side-by-side {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .side-by-side > * {
      flex: 1 1 220px;
      min-width: 0;
    }
    .side-by-side > ha-icon-button {
      flex: 0 0 40px;
    }
    .tab-bar {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      margin-bottom: 8px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      padding-bottom: 4px;
    }
    .tab-btn {
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 14px;
      font-family: inherit;
      color: var(--secondary-text-color);
      transition: color 0.2s, border-color 0.2s;
    }
    .tab-btn:hover {
      color: var(--primary-text-color);
    }
    .tab-btn.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
      font-weight: 500;
    }
    .action-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 4px;
    }
    .editor-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
      border-radius: 8px;
      background: none;
      color: var(--primary-color);
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.2s;
    }
    .editor-btn:hover {
      background: var(--secondary-background-color, rgba(0,0,0,0.04));
    }
    .editor-btn.active {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color);
    }
    .editor-btn.danger {
      color: var(--error-color, #db4437);
      border-color: var(--error-color, #db4437);
    }
    .editor-btn.danger:hover {
      background: rgba(219, 68, 55, 0.08);
    }
    .editor-btn[disabled] {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .editor-btn[disabled]:hover {
      background: none;
    }
    .confirmation-settings {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
      border-top: 1px solid var(--divider-color, rgba(0,0,0,0.12));
      border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.12));
    }
    .confirmation-fields {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .sub-item {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .sub-item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }
    .header-actions ha-icon-button[disabled] {
      opacity: 0.35;
      pointer-events: none;
    }
    .sub-item-heading {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }
    .sub-item-title {
      font-weight: 500;
      overflow-wrap: anywhere;
    }
    .sub-item-meta {
      color: var(--secondary-text-color);
      font-size: 12px;
      overflow-wrap: anywhere;
    }
    .empty-hint {
      color: var(--secondary-text-color);
      font-style: italic;
      padding: 8px 0;
    }
    space-hub-textfield, ha-form, ha-icon-picker {
      display: block;
      width: 100%;
    }
    .yaml-error {
      color: var(--error-color, #db4437);
      padding: 8px;
      font-size: 14px;
    }
    ha-formfield {
      display: flex;
      align-items: center;
      padding: 4px 0;
    }
  `;
}
