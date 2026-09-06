/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { keyed } from 'lit/directives/keyed';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant } from 'custom-card-helpers';
import type { SpaceHubConfig, SpaceHubHeader, HeaderMain, HeaderWeather, HeaderAC, HeaderThermostat } from './space-hub';
import { normalizeActionConfig, normalizeConfirmation } from './action-config';
import { clone } from './const';

// Chip types supported by the card
const CHIP_TYPES = ['lock', 'door', 'presence', 'illuminance', 'gate', 'sliding_gate', 'smart_plug', 'custom'] as const;
// Switch tile types
const SWITCH_TYPES = ['switch', 'smart_plug', 'lock', 'gate', 'sliding_gate'] as const;
// Glow modes
const GLOW_MODES = ['static', 'pulse', 'none'] as const;

const EDIT_ICON_PATH = 'M3,17.25V21H6.75L17.81,9.94L14.06,6.19L3,17.25M20.71,7.04C21.1,6.65 21.1,6.02 20.71,5.63L18.37,3.29C17.98,2.9 17.35,2.9 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04Z';

type EditorPageKind = 'appearance' | 'header' | 'row' | 'weather' | 'main' | 'ac' | 'thermostat' | 'switch' | 'chip' | 'metric' | 'source' | 'card' | 'card-picker';
interface EditorPage { kind: EditorPageKind; path: string; }
const DELETE_ICON_PATH = 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z';
const DEFAULT_GRAPH_HORIZONTAL_LINES = 5;
const DEFAULT_GRAPH_ICON_SIZE = 15;
const DEFAULT_GRAPH_ICON_SCALE = 1;
const DEFAULT_TEMPERATURE_READOUT_ICON_SIZE = 15;
const DEFAULT_TEMPERATURE_READOUT_ICON_SCALE = 1;
const DEFAULT_DAILY_FORECAST_ICON_SIZE = 16;

@customElement('space-hub-textfield')
export class SpaceHubTextfield extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() public label = '';
  @property() public value = '';
  @property() public placeholder = '';
  @property() public type = 'text';
  @property() public step?: string;
  @property() public min?: string;
  @property() public max?: string;
  @property({ type: Boolean, reflect: true }) public disabled = false;

  protected render(): TemplateResult {
    const numeric = this.type === 'number';
    const numberOptions: Record<string, unknown> = { mode: 'box' };
    for (const key of ['min', 'max', 'step'] as const) {
      if (this[key] !== undefined) numberOptions[key] = Number(this[key]);
    }
    return html`
      <ha-form .hass=${this.hass}
        .data=${{ value: numeric && this.value !== '' ? Number(this.value) : this.value }}
        .schema=${[{ name: 'value', selector: numeric ? { number: numberOptions } : { text: {} } }]}
        .disabled=${this.disabled}
        .computeLabel=${() => this.label}
        .computeHelper=${() => this.placeholder}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          if (this.disabled) return;
          this.value = String(ev.detail.value?.value ?? '');
          this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        }}
      ></ha-form>
    `;
  }

  static styles = css`:host { display: block; width: 100%; }`;
}

@customElement('space-hub-card-editor')
export class SpaceHubCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SpaceHubConfig;
  @property({ attribute: false }) public lovelace?: any;
  @state() private _pages: EditorPage[] = [];
  @state() private _cardGuiMode = true;
  @state() private _cardGuiAvailable = true;
  private _haElementsRequested = false;

  public setConfig(config: SpaceHubConfig): void {
    this._config = clone(config);
    // HA calls setConfig after visual edits and when returning from its YAML editor.
    // Discard routes whose item no longer exists instead of editing a stale path.
    const invalid = this._pages.findIndex((page) => page.kind !== 'appearance' && page.kind !== 'card-picker'
      && this._getNestedValue(page.path) === undefined);
    if (invalid !== -1) this._pages = this._pages.slice(0, invalid);
  }

  public connectedCallback(): void {
    super.connectedCallback();
    void this._loadHAElements();
  }

  // Force HA to register lazy-loaded form elements, but don't block the editor render on it.
  private async _loadHAElements(): Promise<void> {
    if (this._haElementsRequested) return;
    this._haElementsRequested = true;
    const withTimeout = (tag: string) =>
      Promise.race([
        customElements.whenDefined(tag),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);

    try {
      const helpers = await (window as any).loadCardHelpers?.();
      if (helpers) {
        for (const config of [{ type: 'entities', entities: [] }, { type: 'tile', entity: 'sun.sun' }, { type: 'vertical-stack', cards: [] }]) {
          const card = await helpers.createCardElement?.(config);
          if (card) card.hass = this.hass;
          const tag = `hui-${config.type}-card`;
          await withTimeout(tag);
          await (customElements.get(tag) as any)?.getConfigElement?.();
        }
      }
    } catch (_) { /* ignore */ }

    // Wait for the critical HA form elements we need
    const needed = [
      'ha-form',
      'ha-formfield',
      'ha-selector',
      'ha-switch',
      'ha-sortable',
      'hui-action-editor',
      'hui-card-element-editor',
      'hui-card-picker',
      'ha-button',
      'ha-icon-button-prev',
      'ha-expansion-panel',
      'ha-yaml-editor',
    ];
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
    // Legacy weather fields generate a virtual metric list. Materialize the whole
    // list on the first edit so changing one item cannot discard its siblings.
    if (/^headers\.\d+\.weather\.metrics\.\d+(?:\.|$)/.test(path)) {
      const weather = this._config.headers?.[Number(parts[1])]?.weather;
      if (weather && !weather.metrics?.length) weather.metrics = clone(this._defaultWeatherMetrics(weather));
    }
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
    for (let i = 0; i < parts.length; i++) {
      if (obj === undefined || obj === null) return undefined;
      const p = parts[i];
      if (i === 3 && parts[0] === 'headers' && parts[2] === 'weather' && p === 'metrics') {
        obj = obj.metrics?.length ? obj.metrics : this._defaultWeatherMetrics(obj);
      } else {
        const idx = Number(p);
        obj = Number.isFinite(idx) ? obj[idx] : obj[p];
      }
    }
    return obj;
  }

  private _checkedFromEvent(ev: Event): boolean {
    return !!(ev.currentTarget as { checked?: boolean } | null)?.checked;
  }

  private _reorderArray(path: string, oldIndex: number, newIndex: number, fallback: any[] = []): boolean {
    const current = this._getNestedValue(path) ?? fallback;
    if (!Array.isArray(current) || !Number.isInteger(oldIndex) || !Number.isInteger(newIndex)
      || oldIndex < 0 || newIndex < 0 || oldIndex >= current.length || newIndex >= current.length
      || oldIndex === newIndex) return false;
    const next = [...current];
    const [item] = next.splice(oldIndex, 1);
    next.splice(newIndex, 0, item);
    this._remapPages(path, (index) => {
      if (index === oldIndex) return newIndex;
      if (oldIndex < newIndex && index > oldIndex && index <= newIndex) return index - 1;
      if (oldIndex > newIndex && index >= newIndex && index < oldIndex) return index + 1;
      return index;
    });
    this._valueChanged(path, next);
    return true;
  }

  private _renderSortable(path: string, items: any[], renderItem: (item: any, index: number) => TemplateResult): TemplateResult {
    return html`
      <ha-sortable data-path=${path} handle-selector=".drag-handle" draggable-selector=".sortable-item"
        @item-moved=${(ev: CustomEvent) => {
          ev.stopPropagation();
          this._reorderArray(path, ev.detail.oldIndex, ev.detail.newIndex, items);
        }}>
        <div class="sortable-list">
          ${items.map((item, index) => html`
            <div class="sortable-item">
              <ha-icon-button class="drag-handle" .label=${'Reorder item ' + (index + 1) + '. Use arrow keys to move.'}
                .path=${'M7,19H9V17H7V19M15,17H17V19H15V17M7,13H9V11H7V13M15,11H17V13H15V11M7,7H9V5H7V7M15,5H17V7H15V5Z'}
                @keydown=${(ev: KeyboardEvent) => {
                  if (!['ArrowUp', 'ArrowDown'].includes(ev.key)) return;
                  ev.preventDefault();
                  ev.stopPropagation();
                  const next = index + (ev.key === 'ArrowUp' ? -1 : 1);
                  if (this._reorderArray(path, index, next, items)) {
                    const sortable = (ev.currentTarget as HTMLElement).closest('ha-sortable');
                    void this.updateComplete.then(() => {
                      (sortable?.querySelectorAll<HTMLElement>(':scope > .sortable-list > .sortable-item > .drag-handle')[next])?.focus();
                    });
                  }
                }}>
              </ha-icon-button>
              <div class="sortable-content">${renderItem(item, index)}</div>
            </div>
          `)}
        </div>
      </ha-sortable>
    `;
  }

  private _handleSelectChanged(path: string, nextValue?: string): void {
    this._valueChanged(path, nextValue);
  }

  private _actionContext(path: string): { parentPath: string; parent: any; switchTap: boolean } {
    const parentPath = path.slice(0, path.lastIndexOf('.'));
    return {
      parentPath,
      parent: this._getNestedValue(parentPath) || {},
      switchTap: path.startsWith('switch_rows.') && path.endsWith('.tap_action'),
    };
  }

  private _effectiveConfirmation(path: string): ReturnType<typeof normalizeConfirmation> {
    const { parent, switchTap } = this._actionContext(path);
    const action = normalizeActionConfig(this._getNestedValue(path));
    return normalizeConfirmation(action?.confirmation ?? (switchTap ? parent.confirmation : undefined));
  }

  private _updateAction(path: string, value: unknown): void {
    const { parentPath, parent, switchTap } = this._actionContext(path);
    const key = path.slice(path.lastIndexOf('.') + 1);
    const action = normalizeActionConfig(value);
    const confirmation = action?.confirmation ?? this._effectiveConfirmation(path);
    const next = { ...parent };
    if (action) {
      next[key] = { ...action, ...(confirmation !== undefined ? { confirmation } : {}) };
      if (switchTap) delete next.confirmation;
    } else {
      delete next[key];
      // Keep the dynamic default lock action rather than freezing lock/unlock.
      if (switchTap && confirmation !== undefined) next.confirmation = confirmation;
    }
    this._valueChanged(parentPath, next);
  }

  private _setActionConfirmation(path: string, enabled: boolean): void {
    const current = this._effectiveConfirmation(path);
    this._writeActionConfirmation(path, enabled ? (current || true) : false);
  }

  private _writeActionConfirmation(path: string, confirmation: ReturnType<typeof normalizeConfirmation>): void {
    const { parentPath, parent, switchTap } = this._actionContext(path);
    const key = path.slice(path.lastIndexOf('.') + 1);
    const action = normalizeActionConfig(this._getNestedValue(path));
    if (!action && !switchTap) return;
    const next = { ...parent };
    if (action) {
      next[key] = { ...action, confirmation };
      if (switchTap) delete next.confirmation;
    } else {
      next.confirmation = confirmation;
    }
    this._valueChanged(parentPath, next);
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

  // Navigation is editor-only state. Config paths and stored YAML stay unchanged.
  private _openPage(kind: EditorPageKind, path: string): void {
    this._pages = [...this._pages, { kind, path }];
    this._cardGuiMode = true;
    this._cardGuiAvailable = true;
    void this.updateComplete.then(() => this.shadowRoot?.querySelector<HTMLElement>('.detail-title')?.focus());
  }

  private _goBack(): void {
    const page = this._pages[this._pages.length - 1];
    this._pages = this._pages.slice(0, -1);
    void this.updateComplete.then(() => {
      const buttons = this.shadowRoot?.querySelectorAll<HTMLElement>('[data-edit-path]');
      Array.from(buttons || []).find((button) => button.dataset.editPath === page?.path)?.focus();
    });
  }

  private _remapPages(arrayPath: string, mapIndex: (index: number) => number): void {
    const prefix = `${arrayPath}.`;
    const next: EditorPage[] = [];
    for (const page of this._pages) {
      if (!page.path.startsWith(prefix)) { next.push(page); continue; }
      const [rawIndex, ...rest] = page.path.slice(prefix.length).split('.');
      const index = mapIndex(Number(rawIndex));
      if (index < 0) break;
      next.push({ ...page, path: `${prefix}${[index, ...rest].join('.')}` });
    }
    this._pages = next;
  }

  private _removeItem(path: string, index: number): void {
    const current = this._getNestedValue(path);
    if (!Array.isArray(current) || index < 0 || index >= current.length) return;
    this._remapPages(path, (i) => i === index ? -1 : i > index ? i - 1 : i);
    this._valueChanged(path, current.filter((_, i) => i !== index));
  }

  private _addItem(path: string, value: any, kind: EditorPageKind): void {
    const current = this._getNestedValue(path) || [];
    if (!Array.isArray(current)) return;
    this._valueChanged(path, [...current, value]);
    this._openPage(kind, `${path}.${current.length}`);
  }

  private _itemTitle(item: any, fallback: string): string {
    return item?.name || item?.main_name || item?.title || this._friendlyEntityName(item?.entity)
      || item?.entity || (typeof item === 'string' ? item : fallback);
  }

  private _pageTitle(page: EditorPage): string {
    const item = this._getNestedValue(page.path);
    const index = Number(page.path.split('.').pop()) + 1;
    switch (page.kind) {
      case 'appearance': return 'Card appearance';
      case 'header': return this._itemTitle(item?.main || item?.weather, `Header ${index}`);
      case 'row': return `Tile row ${index}`;
      case 'card-picker': return 'Add card';
      case 'weather': return 'Weather tile';
      case 'main': return this._itemTitle(item, 'Main tile');
      case 'ac': return 'AC tile';
      case 'thermostat': return 'Thermostat tile';
      default: {
        const labels = { switch: 'Tile', source: 'Forecast source', chip: 'Chip', metric: 'Metric', card: 'Card' };
        return this._itemTitle(item, `${labels[page.kind]} ${index}`);
      }
    }
  }

  private _renderListItem(title: string, subtitle: string, kind: EditorPageKind, path: string, remove?: () => void): TemplateResult {
    return html`
      <div class="list-item">
        <div class="item-heading"><span>${title}</span>${subtitle ? html`<span class="item-secondary">${subtitle}</span>` : nothing}</div>
        <ha-icon-button data-edit-path=${path} .path=${EDIT_ICON_PATH} .label=${`Edit ${title}`}
          @click=${() => this._openPage(kind, path)}></ha-icon-button>
        ${remove ? html`<ha-icon-button .path=${DELETE_ICON_PATH} .label=${`Remove ${title}`} @click=${remove}></ha-icon-button>` : nothing}
      </div>
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;
    const page = this._pages[this._pages.length - 1];
    return html`
      <div class="editor-container">
        ${page ? html`
          <div class="detail-header">
            <ha-icon-button-prev .label=${this.hass.localize('ui.common.back') || 'Back'} @click=${this._goBack}></ha-icon-button-prev>
            <h2 class="detail-title" tabindex="-1">${this._pageTitle(page)}</h2>
          </div>
        ` : nothing}
        ${keyed(page ? `${page.kind}:${page.path}` : 'overview', page ? this._renderPage(page) : html`
          ${this._renderHeadersSection()}
          ${this._renderSwitchRowsSection()}
          ${this._renderCardsSection()}
          ${this._renderListItem('Card appearance', 'Tile sizes, icons, and shadow', 'appearance', '')}
        `)}
      </div>
    `;
  }

  private _renderPage(page: EditorPage): TemplateResult {
    const item = this._getNestedValue(page.path);
    const parts = page.path.split('.');
    const index = Number(parts.pop());
    const parentPath = parts.join('.');
    switch (page.kind) {
      case 'appearance': return this._renderAppearanceSection();
      case 'header': return this._renderHeader(item, index);
      case 'row': return this._renderSwitchRow(item, index);
      case 'weather': return this._renderWeatherConfig(item, page.path);
      case 'main': return this._renderMainTileConfig(item, page.path);
      case 'ac': return this._renderACConfig(item, page.path);
      case 'thermostat': return this._renderThermostatConfig(item, page.path);
      case 'switch': return this._renderSwitchItem(item, page.path);
      case 'chip': return this._renderSingleChip(item, page.path);
      case 'metric': return this._renderMetricItem(item, parentPath, this._getNestedValue(parentPath), index);
      case 'source': return this._renderForecastSource(item, page.path);
      case 'card': return this._renderEmbeddedCardItem(item, page.path);
      case 'card-picker': return html`
        <hui-card-picker .hass=${this.hass} .lovelace=${this.lovelace}
          @config-changed=${(ev: CustomEvent) => {
            ev.stopPropagation();
            const active = this._pages[this._pages.length - 1];
            if (active?.kind !== 'card-picker' || active.path !== page.path) return;
            if (ev.detail.error || !ev.detail.config || typeof ev.detail.config.type !== 'string') return;
            this._pages = this._pages.slice(0, -1);
            this._addItem(page.path, clone(ev.detail.config), 'card');
          }}></hui-card-picker>
      `;
    }
  }

  // ── Appearance ───────────────────────────────────────────────

  private _renderAppearanceSection(): TemplateResult {
    return html`
        <div class="section-content">
          <div class="side-by-side">
            <space-hub-textfield .hass=${this.hass}
              label="Tile Height (px)"
              type="number"
              .value=${String(this._config.tile_height ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('tile_height', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></space-hub-textfield>
            <space-hub-textfield .hass=${this.hass}
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
            <space-hub-textfield .hass=${this.hass}
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(this._config.chip_icon_size ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('chip_icon_size', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></space-hub-textfield>
            <space-hub-textfield .hass=${this.hass}
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
            <space-hub-textfield .hass=${this.hass}
              label="Shadow Color"
              .value=${this._config.card_shadow_color || ''}
              @input=${(ev: Event) => this._valueChanged('card_shadow_color', (ev.target as HTMLInputElement).value)}
            ></space-hub-textfield>
            <space-hub-textfield .hass=${this.hass}
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
          <space-hub-textfield .hass=${this.hass}
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color || ''}
            @input=${(ev: Event) => this._valueChanged('unavailable_pulse_color', (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
    `;
  }

  // ── Headers ──────────────────────────────────────────────────

  private _renderHeadersSection(): TemplateResult {
    const headers = this._config.headers || [];
    return html`
      <section aria-label="Headers">
        <h3>Headers (${headers.length})</h3>
        ${this._renderSortable('headers', headers, (header, i) => this._renderListItem(
          this._itemTitle(header.main || header.weather, `Header ${i + 1}`),
          [header.weather && 'Weather', header.main && 'Main', header.ac && 'AC', header.thermostat && 'Thermostat'].filter(Boolean).join(', '),
          'header', `headers.${i}`, () => this._removeItem('headers', i)))}
        <ha-button appearance="plain" @click=${() => this._addItem('headers', { main: { main_name: 'New Room' } }, 'header')}>Add header</ha-button>
      </section>
    `;
  }

  private _renderHeader(header: SpaceHubHeader, idx: number): TemplateResult {
    const types = ['weather', 'main', 'ac', 'thermostat'] as const;
    const labels = { weather: 'Weather tile', main: 'Main tile', ac: 'AC tile', thermostat: 'Thermostat tile' };
    return html`
      <section aria-label="Header tiles">
        <p class="empty-hint">Header tiles use fixed positions. Drag headers on the overview to change their order.</p>
        ${types.filter((type) => header[type]).map((type) => this._renderListItem(
          labels[type], this._itemTitle(header[type], ''), type, `headers.${idx}.${type}`,
          () => this._valueChanged(`headers.${idx}.${type}`, undefined)))}
        <div class="action-row">
          ${types.filter((type) => !header[type]).map((type) => html`
            <ha-button appearance="plain" @click=${() => {
              const path = `headers.${idx}.${type}`;
              this._valueChanged(path, type === 'main' ? { main_name: 'Room' } : type === 'weather' ? { name: 'Weather' } : { entity: '' });
              this._openPage(type, path);
            }}>Add ${labels[type].toLowerCase()}</ha-button>
          `)}
        </div>
      </section>
    `;
  }

  // ── Weather Tile Config ──────────────────────────────────────

  private _renderWeatherConfig(weather: HeaderWeather | undefined, basePath: string): TemplateResult {
    const config = weather || {};
    return html`
        <div class="section-content">
            <div class="side-by-side">
              ${this._renderEntityField('Weather Entity', `${basePath}.entity`, config.entity, { domain: 'weather' })}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField('Temperature Sensor', `${basePath}.temp_sensor`, config.temp_sensor, { domain: 'sensor' })}
              ${this._renderEntityField('Humidity Sensor', `${basePath}.humidity_sensor`, config.humidity_sensor, { domain: 'sensor' })}
            </div>
            ${this._renderEntityField('Feels Like Sensor', `${basePath}.feels_like_sensor`, config.feels_like_sensor, { domain: 'sensor' })}
            ${this._renderForecastSourcesConfig(config, basePath)}
            ${this._renderMetricsConfig(
              (config.metrics && config.metrics.length ? config.metrics : this._defaultWeatherMetrics(config)) as any[],
              basePath,
            )}
            ${this._renderChipsConfig(config.chips as any[] || [], basePath)}
          <ha-expansion-panel outlined .header=${'Appearance'}>
            <div class="section-content">
            <div class="side-by-side">
              ${this._renderSelectField('Weather Icon Set', `${basePath}.icon_set`, config.icon_set, ['meteocons', 'custom'])}
            </div>
            ${String(config.icon_set || '').toLowerCase() === 'custom' ? html`
              <div class="side-by-side">
                <space-hub-textfield .hass=${this.hass}
                  label="Custom Icon Base Path"
                  placeholder="/local/weather-icons"
                  .value=${String(config.icon_pack?.base_path ?? (config as any).icon_base_path ?? '')}
                  @input=${(ev: Event) => {
                    this._valueChanged(`${basePath}.icon_pack.base_path`, (ev.target as HTMLInputElement).value);
                  }}
                ></space-hub-textfield>
                <space-hub-textfield .hass=${this.hass}
                  label="Custom Icon Extension"
                  placeholder="svg"
                  .value=${String(config.icon_pack?.extension ?? (config as any).icon_extension ?? '')}
                  @input=${(ev: Event) => {
                    this._valueChanged(`${basePath}.icon_pack.extension`, (ev.target as HTMLInputElement).value);
                  }}
                ></space-hub-textfield>
              </div>
            ` : nothing}
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Temperature Size (px)"
                type="number"
                min="18"
                max="56"
                .value=${String(config.temp_size ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.temp_size`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
              <space-hub-textfield .hass=${this.hass}
                label="Icon Size (px)"
                type="number"
                min="28"
                max="160"
                .value=${String(config.icon_size ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.icon_size`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Icon Offset X (px)"
                type="number"
                .value=${String(config.icon_offset_x ?? '')}
                @input=${(ev: Event) => {
                  const raw = (ev.target as HTMLInputElement).value;
                  const v = Number(raw);
                  this._valueChanged(`${basePath}.icon_offset_x`, raw !== '' && Number.isFinite(v) ? v : undefined);
                }}
              ></space-hub-textfield>
              <space-hub-textfield .hass=${this.hass}
                label="Icon Offset Y (px)"
                type="number"
                .value=${String(config.icon_offset_y ?? '')}
                @input=${(ev: Event) => {
                  const raw = (ev.target as HTMLInputElement).value;
                  const v = Number(raw);
                  this._valueChanged(`${basePath}.icon_offset_y`, raw !== '' && Number.isFinite(v) ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            </div>
          </ha-expansion-panel>
          <ha-expansion-panel outlined .header=${'Forecast graphs'}>
            <div class="section-content">
            <div class="side-by-side">
              <ha-formfield label="Sync forecast graphs">
                <ha-switch
                  .checked=${config.sync_graphs !== false}
                  @change=${(ev: Event) => {
                    this._valueChanged(`${basePath}.sync_graphs`, this._checkedFromEvent(ev) ? undefined : false);
                  }}
                ></ha-switch>
              </ha-formfield>
              ${this._renderSelectField('Forecast Graph Mode', `${basePath}.forecast_graph_mode`, config.forecast_graph_mode || 'separate', ['separate', 'combined'])}
            </div>
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Stale Glow After (min)"
                type="number"
                min="0"
                .value=${String(config.stale_minutes ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.stale_minutes`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Graph Icon Size (px)"
                type="number"
                min="8"
                max="48"
                .value=${String(config.conditions_icon_size ?? DEFAULT_GRAPH_ICON_SIZE)}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.conditions_icon_size`, Number.isFinite(v) && v > 0 && v !== DEFAULT_GRAPH_ICON_SIZE ? v : undefined);
                }}
              ></space-hub-textfield>
              <space-hub-textfield .hass=${this.hass}
                label="Temperature Icon Count"
                type="number"
                min="0"
                max="72"
                .value=${String(config.temperature_icon_count ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.temperature_icon_count`, Number.isFinite(v) && v >= 0 ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Graph Icon Scale"
                type="number"
                min="0.5"
                max="2.5"
                step="0.05"
                .value=${String(config.conditions_icon_scale ?? DEFAULT_GRAPH_ICON_SCALE)}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.conditions_icon_scale`, Number.isFinite(v) && v > 0 && v !== DEFAULT_GRAPH_ICON_SCALE ? v : undefined);
                }}
              ></space-hub-textfield>
              <space-hub-textfield .hass=${this.hass}
                label="Temperature Readout Icon Size (px)"
                type="number"
                min="8"
                max="48"
                .value=${String(config.temperature_readout_icon_size ?? DEFAULT_TEMPERATURE_READOUT_ICON_SIZE)}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.temperature_readout_icon_size`, Number.isFinite(v) && v > 0 && v !== DEFAULT_TEMPERATURE_READOUT_ICON_SIZE ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Temperature Readout Icon Scale"
                type="number"
                min="0.5"
                max="2.5"
                step="0.05"
                .value=${String(config.temperature_readout_icon_scale ?? DEFAULT_TEMPERATURE_READOUT_ICON_SCALE)}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.temperature_readout_icon_scale`, Number.isFinite(v) && v > 0 && v !== DEFAULT_TEMPERATURE_READOUT_ICON_SCALE ? v : undefined);
                }}
              ></space-hub-textfield>
              <space-hub-textfield .hass=${this.hass}
                label="Daily Forecast Icon Size (px)"
                type="number"
                min="8"
                max="48"
                .value=${String(config.daily_icon_size ?? DEFAULT_DAILY_FORECAST_ICON_SIZE)}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.daily_icon_size`, Number.isFinite(v) && v > 0 && v !== DEFAULT_DAILY_FORECAST_ICON_SIZE ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Sensor Grid Columns"
                type="number"
                min="1"
                max="4"
                .value=${String(config.metric_columns ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.metric_columns`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Forecast Graph Hours"
                type="number"
                min="1"
                max="72"
                .value=${String(config.forecast_slots ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.forecast_slots`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
              <space-hub-textfield .hass=${this.hass}
                label="Graph Height (px)"
                type="number"
                min="82"
                max="260"
                .value=${String(config.graph_height ?? '')}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.graph_height`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
              <space-hub-textfield .hass=${this.hass}
                label="Horizontal Grid Lines"
                type="number"
                min="2"
                max="9"
                .value=${String(config.graph_horizontal_lines ?? DEFAULT_GRAPH_HORIZONTAL_LINES)}
                @input=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this._valueChanged(`${basePath}.graph_horizontal_lines`, Number.isFinite(v) && v > 0 ? v : undefined);
                }}
              ></space-hub-textfield>
            </div>
            </div>
          </ha-expansion-panel>
        </div>
    `;
  }

  private _renderForecastSourcesConfig(config: HeaderWeather, basePath: string): TemplateResult {
    const path = `${basePath}.forecast_sources`;
    const sources = Array.isArray(config.forecast_sources) ? config.forecast_sources : [];
    return html`
      <section aria-label="Forecast sources">
        <h3>Additional forecast sources (${sources.length})</h3>
        <p class="empty-hint">Primary forecast comes from Weather Entity. Add other locations to switch between them in the tile.</p>
        ${this._renderSortable(path, sources, (source, i) => this._renderListItem(
          this._itemTitle(source, `Source ${i + 1}`), '', 'source', `${path}.${i}`, () => this._removeItem(path, i)))}
        <ha-button appearance="plain" @click=${() => this._addItem(path, { entity: '', name: '' }, 'source')}>Add forecast source</ha-button>
      </section>
    `;
  }

  private _renderForecastSource(source: any, path: string): TemplateResult {
    const item = typeof source === 'string' ? { entity: source } : source || {};
    return html`
      <ha-form .hass=${this.hass} .data=${item}
        .schema=${[{ name: 'entity', selector: { entity: { domain: 'weather' } } }, { name: 'name', selector: { text: {} } }]}
        .computeLabel=${(schema: { name: string }) => schema.name === 'entity' ? 'Weather Entity' : 'Display name (optional)'}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          this._valueChanged(path, { ...item, ...ev.detail.value });
        }}></ha-form>
    `;
  }

  // ── Main Tile Config ─────────────────────────────────────────

  private _renderMainTileConfig(main: HeaderMain | undefined, basePath: string): TemplateResult {
    const m = main || {};
    return html`
        <div class="section-content">
            <div class="side-by-side">
              <space-hub-textfield .hass=${this.hass}
                label="Name"
                .value=${m.main_name || ''}
                @input=${(ev: Event) => this._valueChanged(`${basePath}.main_name`, (ev.target as HTMLInputElement).value)}
              ></space-hub-textfield>
              <ha-selector .required=${false} .selector=${{ icon: {} }}
                .hass=${this.hass}
                label="Icon"
                .value=${m.main_icon || ''}
                @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.main_icon`, ev.detail.value)}
              ></ha-selector>
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
        </div>
    `;
  }

  // ── Chips Config ─────────────────────────────────────────────

  private _renderChipsConfig(chips: any[], mainPath: string): TemplateResult {
    const path = `${mainPath}.chips`;
    return html`
      <section aria-label="Chips">
        <h3>Chips (${chips.length})</h3>
        ${this._renderSortable(path, chips, (chip, i) => this._renderListItem(
          this._itemTitle(chip, `Chip ${i + 1}`), chip.type || 'custom', 'chip', `${path}.${i}`, () => this._removeItem(path, i)))}
        <ha-button appearance="plain" @click=${() => this._addItem(path, { type: 'custom', entity: '' }, 'chip')}>Add chip</ha-button>
      </section>
    `;
  }

  private _renderSingleChip(chip: any, path: string): TemplateResult {
    return html`
      <div class="section-content">
        <div class="side-by-side">
          ${this._renderSelectField('Type', `${path}.type`, chip.type, CHIP_TYPES)}
          ${this._renderEntityField('Entity', `${path}.entity`, chip.entity)}
        </div>
          <ha-expansion-panel outlined .header=${'Appearance'}>
            <div class="section-content">
        <div class="side-by-side">
          <ha-selector .required=${false} .selector=${{ icon: {} }}
            .hass=${this.hass}
            label="Icon"
            .value=${chip.icon || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon`, ev.detail.value)}
          ></ha-selector>
          <ha-selector .required=${false} .selector=${{ icon: {} }}
            .hass=${this.hass}
            label="Icon (Active)"
            .value=${chip.icon_active || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_active`, ev.detail.value)}
          ></ha-selector>
        </div>
        <div class="side-by-side">
          <ha-selector .required=${false} .selector=${{ icon: {} }}
            .hass=${this.hass}
            label="Icon (Inactive)"
            .value=${chip.icon_inactive || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_inactive`, ev.detail.value)}
          ></ha-selector>
          <ha-selector .required=${false} .selector=${{ icon: {} }}
            .hass=${this.hass}
            label="Icon (Unavailable)"
            .value=${chip.icon_unavailable || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_unavailable`, ev.detail.value)}
          ></ha-selector>
        </div>
        <div class="side-by-side">
          <space-hub-textfield .hass=${this.hass}
            label="Background (Active)"
            .value=${chip.background_active || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.background_active`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
          <space-hub-textfield .hass=${this.hass}
            label="Background (Unavailable)"
            .value=${chip.background_unavailable || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.background_unavailable`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
        <space-hub-textfield .hass=${this.hass}
          label="Icon Color (Unavailable)"
          .value=${chip.icon_color_unavailable || ''}
          @input=${(ev: Event) => this._valueChanged(`${path}.icon_color_unavailable`, (ev.target as HTMLInputElement).value)}
        ></space-hub-textfield>
            </div>
          </ha-expansion-panel>
      </div>
    `;
  }

  private _defaultWeatherMetrics(config: any): any[] {
    const metrics: any[] = [
      { entity: config.wind_speed_sensor, name: 'Wind' },
      { entity: config.wind_gust_sensor, name: 'Gust' },
      { entity: config.temp_min_24h_sensor, name: '24h Min' },
      { entity: config.temp_max_24h_sensor, name: '24h Max' },
      { entity: config.uv_sensor, name: 'UV' },
      { entity: config.solar_lux_sensor, name: 'Solar' },
      { entity: config.pressure_sensor, name: 'Pressure' },
    ].filter((m) => m.entity);
    if (config.rain_state_sensor || config.rain_rate_sensor) {
      metrics.splice(4, 0, {
        type: 'rain',
        name: 'Rain',
        rain_state_sensor: config.rain_state_sensor,
        rain_rate_sensor: config.rain_rate_sensor,
        rain_rate_threshold: config.rain_rate_threshold,
      });
    }
    return metrics;
  }

  private _renderMetricItem(item: any, metricsPath: string, metrics: any[], i: number): TemplateResult {
    const update = (patch: any) => {
      const arr = [...((this._getNestedValue(metricsPath) || metrics) as any[])];
      arr[i] = { ...arr[i], ...patch };
      this._valueChanged(metricsPath, arr);
    };
    const isRain = item.type === 'rain';
    return html`
      <div class="section-content">
        ${isRain ? html`
          <div class="empty-hint">Shows "No rain" / "Raining" with intensity. A wet sensor with no rate above the threshold counts as no rain.</div>
          ${this._renderEntityField('Rain State Sensor', `${metricsPath}.${i}.rain_state_sensor`, item.rain_state_sensor, { domain: 'binary_sensor' })}
          ${this._renderEntityField('Rain Rate Sensor', `${metricsPath}.${i}.rain_rate_sensor`, item.rain_rate_sensor, { domain: 'sensor' })}
          <div class="side-by-side">
            <space-hub-textfield .hass=${this.hass}
              label="Rain Rate Threshold"
              type="number"
              min="0"
              step="0.1"
              .value=${String(item.rain_rate_threshold ?? 0)}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                update({ rain_rate_threshold: Number.isFinite(v) && v >= 0 ? v : undefined });
              }}
            ></space-hub-textfield>
            <space-hub-textfield .hass=${this.hass}
              label="Label (optional)"
              .value=${item.name || ''}
              @input=${(ev: Event) => update({ name: (ev.target as HTMLInputElement).value || undefined })}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <ha-selector .required=${false} .selector=${{ icon: {} }}
              .hass=${this.hass}
              label="Icon (Raining)"
              .value=${item.icon_active || ''}
              @value-changed=${(ev: CustomEvent) => update({ icon_active: ev.detail.value || undefined })}
            ></ha-selector>
            <ha-selector .required=${false} .selector=${{ icon: {} }}
              .hass=${this.hass}
              label="Icon (No Rain)"
              .value=${item.icon_inactive || ''}
              @value-changed=${(ev: CustomEvent) => update({ icon_inactive: ev.detail.value || undefined })}
            ></ha-selector>
          </div>
        ` : html`
          ${this._renderEntityField('Entity', `${metricsPath}.${i}.entity`, item.entity, { domain: 'sensor' })}
          <div class="side-by-side">
            <space-hub-textfield .hass=${this.hass}
              label="Label (optional)"
              .value=${item.name || ''}
              @input=${(ev: Event) => update({ name: (ev.target as HTMLInputElement).value || undefined })}
            ></space-hub-textfield>
            <ha-selector .required=${false} .selector=${{ icon: {} }}
              .hass=${this.hass}
              label="Icon (optional, native if empty)"
              .value=${item.icon || ''}
              @value-changed=${(ev: CustomEvent) => update({ icon: ev.detail.value || undefined })}
            ></ha-selector>
          </div>
        `}
        ${this._renderActionConfig('Tap Action', `${metricsPath}.${i}.tap_action`, item.tap_action)}
        ${this._renderActionConfig('Hold Action', `${metricsPath}.${i}.hold_action`, item.hold_action)}
        ${this._renderActionConfig('Double Tap Action', `${metricsPath}.${i}.double_tap_action`, item.double_tap_action)}
      </div>
    `;
  }

  private _renderMetricsConfig(metrics: any[], mainPath: string): TemplateResult {
    const path = `${mainPath}.metrics`;
    return html`
      <section aria-label="Grid metrics">
        <h3>Grid metrics (${metrics.length})</h3>
        ${this._renderSortable(path, metrics, (item, i) => this._renderListItem(
          this._itemTitle(item, `Metric ${i + 1}`), this._entitySummary(item.entity || item.rain_state_sensor || item.rain_rate_sensor),
          'metric', `${path}.${i}`, () => this._removeItem(path, i)))}
        <div class="action-row">
          <ha-button appearance="plain" @click=${() => this._addItem(path, { entity: '' }, 'metric')}>Add metric</ha-button>
          <ha-button appearance="plain" @click=${() => this._addItem(path, { type: 'rain', name: 'Rain', icon_active: 'mdi:weather-rainy', icon_inactive: 'mdi:water-off-outline' }, 'metric')}>Add rain</ha-button>
        </div>
      </section>
    `;
  }

  // ── AC Config ────────────────────────────────────────────────

  private _renderACConfig(ac: HeaderAC | undefined, basePath: string): TemplateResult {
    const config = ac || {};
    return html`
        <div class="section-content">
            ${this._renderEntityField('Climate Entity', `${basePath}.entity`, config.entity, { domain: 'climate' })}
            ${this._renderSelectField('Glow Mode', `${basePath}.glow_mode`, config.glow_mode, GLOW_MODES)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, config.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, config.hold_action)}
        </div>
    `;
  }

  // ── Thermostat Config ────────────────────────────────────────

  private _renderThermostatConfig(thermostat: HeaderThermostat | undefined, basePath: string): TemplateResult {
    const config = thermostat || {};
    return html`
        <div class="section-content">
            ${this._renderEntityField('Climate Entity', `${basePath}.entity`, config.entity, { domain: 'climate' })}
            ${this._renderSelectField('Glow Mode', `${basePath}.glow_mode`, config.glow_mode, GLOW_MODES)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, config.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, config.hold_action)}
        </div>
    `;
  }

  // ── Switch Rows ──────────────────────────────────────────────

  private _renderSwitchRowsSection(): TemplateResult {
    const rows = (this._config.switch_rows || []) as any[];
    return html`
      <section aria-label="Tile rows">
        <h3>Tile rows (${rows.length})</h3>
        ${this._renderSortable('switch_rows', rows, (row, i) => this._renderListItem(
          `Row ${i + 1}`, (Array.isArray(row) ? row : row.row || []).map((tile: any) => this._itemTitle(tile, 'New tile')).join(', '),
          'row', `switch_rows.${i}`, () => this._removeItem('switch_rows', i)))}
        <ha-button appearance="plain" @click=${() => this._addItem('switch_rows', { row: [] }, 'row')}>Add row</ha-button>
      </section>
    `;
  }

  private _renderSwitchRow(row: any, rowIndex: number): TemplateResult {
    const items: any[] = Array.isArray(row) ? row : (Array.isArray(row?.row) ? row.row : []);
    const itemsPath = Array.isArray(row) ? `switch_rows.${rowIndex}` : `switch_rows.${rowIndex}.row`;
    return html`
      <section aria-label="Tiles">
        <p class="empty-hint">Drag to change the order within this row.</p>
        ${this._renderSortable(itemsPath, items, (sw, i) => this._renderListItem(
          this._itemTitle(sw, `Tile ${i + 1}`), this._entitySummary(sw.entity),
          'switch', `${itemsPath}.${i}`, () => this._removeItem(itemsPath, i)))}
        <ha-button appearance="plain" @click=${() => this._addItem(itemsPath, { entity: '', name: '', icon: 'mdi:toggle-switch' }, 'switch')}>Add tile</ha-button>
      </section>
    `;
  }

  private _renderSwitchItem(sw: any, path: string): TemplateResult {

    return html`
      <div class="section-content">
        ${this._renderEntityField('Controlled Entity', `${path}.entity`, sw.entity)}
        ${this._renderSelectField('Type', `${path}.type`, sw.type, SWITCH_TYPES)}
        <div class="side-by-side">
          <space-hub-textfield .hass=${this.hass}
            label="Name"
            .value=${sw.name || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.name`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
          <ha-selector .required=${false} .selector=${{ icon: {} }}
            .hass=${this.hass}
            label="Inactive State Icon"
            .value=${sw.icon_inactive || sw.icon_off || sw['icon-inactive'] || sw['icon-off'] || sw.icon || ''}
            @value-changed=${(ev: CustomEvent) => this._setSwitchInactiveIcon(path, ev.detail.value)}
          ></ha-selector>
        </div>
          <ha-expansion-panel outlined .header=${'Appearance'}>
            <div class="section-content">
        <div class="side-by-side">
          <ha-selector .required=${false} .selector=${{ icon: {} }}
            .hass=${this.hass}
            label="Active State Icon"
            .value=${sw.icon_active || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon_active`, ev.detail.value)}
          ></ha-selector>
          <space-hub-textfield .hass=${this.hass}
            label="Icon Size"
            .value=${sw.icon_size || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.icon_size`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField('Glow Mode', `${path}.glow_mode`, sw.glow_mode, GLOW_MODES)}
        </div>
        <div class="side-by-side">
          <space-hub-textfield .hass=${this.hass}
            label="Font Size"
            .value=${sw.font_size || sw['font-size'] || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.font_size`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
          <space-hub-textfield .hass=${this.hass}
            label="Font Weight"
            .value=${sw.font_weight || sw['font-weight'] || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.font_weight`, (ev.target as HTMLInputElement).value)}
          ></space-hub-textfield>
        </div>
            </div>
          </ha-expansion-panel>
        ${this._renderEntityField('Hold Entity (more-info on hold)', `${path}.hold_entity`, sw.hold_entity)}

        <h3>Actions</h3>
            ${this._renderActionConfig('Tap Action', `${path}.tap_action`, sw.tap_action)}
            ${this._renderActionConfig('Hold Action', `${path}.hold_action`, sw.hold_action)}
            ${this._renderActionConfig('Double Tap Action', `${path}.double_tap_action`, sw.double_tap_action)}

        <ha-expansion-panel outlined .header=${'State styling'}>
          <div class="section-content">
            ${(['active_states', 'pending_states'] as const).map((field) => html`
              <ha-form .hass=${this.hass}
                .data=${{ enabled: Array.isArray(sw[field]), states: sw[field] || [] }}
                .schema=${[
                  { name: 'enabled', selector: { boolean: {} } },
                  ...(Array.isArray(sw[field]) ? [{ name: 'states', selector: { select: {
                    multiple: true, custom_value: true, options: sw[field],
                  } } }] : []),
                ]}
                .computeLabel=${(schema: { name: string }) => schema.name === 'enabled'
                  ? `Customize ${field === 'active_states' ? 'active' : 'pending'} states` : 'States'}
                @value-changed=${(ev: CustomEvent) => {
                  ev.stopPropagation();
                  this._valueChanged(`${path}.${field}`, ev.detail.value.enabled ? ev.detail.value.states || [] : undefined);
                }}
              ></ha-form>
            `)}
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
          <space-hub-textfield .hass=${this.hass}
            label="Template ${i + 1}"
            .value=${tpl || ''}
            @input=${(ev: Event) => {
              const arr = [...templates];
              arr[i] = (ev.target as HTMLInputElement).value;
              this._valueChanged(`${path}.info_templates`, arr);
            }}
          ></space-hub-textfield>
          <ha-icon-button
            .path=${DELETE_ICON_PATH}
            .label=${`Remove template ${i + 1}`}
            @click=${() => {
              const arr = [...templates];
              arr.splice(i, 1);
              this._valueChanged(`${path}.info_templates`, arr.length ? arr : undefined);
            }}
          ></ha-icon-button>
        </div>
      `)}
      ${templates.length < 2 ? html`
        <ha-button appearance="plain" @click=${() => {
          const arr = [...templates, ''];
          this._valueChanged(`${path}.info_templates`, arr);
        }}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </ha-button>
      ` : nothing}
    `;
  }

  // ── Embedded Cards ────────────────────────────────────────────

  private _renderCardsSection(): TemplateResult {
    const cards = (this._config.cards || []) as any[];
    return html`
      <section aria-label="Embedded cards">
        <h3>Embedded cards (${cards.length})</h3>
        ${this._renderSortable('cards', cards, (card, i) => this._renderListItem(
          this._itemTitle(card, `Card ${i + 1}`), card.type || 'unknown', 'card', `cards.${i}`, () => this._removeItem('cards', i)))}
        <ha-button appearance="plain" data-edit-path="cards" @click=${() => this._openPage('card-picker', 'cards')}>Add card</ha-button>
      </section>
    `;
  }

  private _renderEmbeddedCardItem(card: any, path: string): TemplateResult {
    return html`
      <hui-card-element-editor .hass=${this.hass} .lovelace=${this.lovelace} .value=${card}
        @GUImode-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          this._cardGuiMode = ev.detail.guiMode;
          this._cardGuiAvailable = ev.detail.guiModeAvailable;
        }}
        @config-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          const active = this._pages[this._pages.length - 1];
          if (active?.kind !== 'card' || active.path !== path) return;
          if (ev.detail.guiModeAvailable !== undefined) this._cardGuiAvailable = ev.detail.guiModeAvailable;
          if (ev.detail.error || !ev.detail.config || typeof ev.detail.config.type !== 'string'
            || JSON.stringify(ev.detail.config) === JSON.stringify(card)) return;
          this._valueChanged(path, clone(ev.detail.config));
        }}
      ></hui-card-element-editor>
      <ha-button appearance="plain" .disabled=${!this._cardGuiAvailable} @click=${() => {
        (this.shadowRoot?.querySelector('hui-card-element-editor') as any)?.toggleMode?.();
      }}>${this._cardGuiMode ? 'Show code editor' : 'Show visual editor'}</ha-button>
    `;
  }

  // ── Action Config ────────────────────────────────────────────

  private _renderActionConfig(label: string, path: string, action: any): TemplateResult {
    const normalized = normalizeActionConfig(action);
    const confirmation = this._effectiveConfirmation(path);
    const { parent, switchTap } = this._actionContext(path);
    const enabled = !!confirmation;
    const details = typeof confirmation === 'object' ? confirmation : {};
    return html`
      <ha-expansion-panel outlined .header=${label}>
        <div class="section-content">
          ${normalized?.action === 'fire-dom-event' ? html`
            <ha-yaml-editor .defaultValue=${normalized} @value-changed=${(ev: CustomEvent) => {
              ev.stopPropagation();
              if (ev.detail.isValid === false || !normalizeActionConfig(ev.detail.value)) return;
              this._updateAction(path, ev.detail.value);
            }}></ha-yaml-editor>
          ` : html`
            <ha-form
              class="action-form" .hass=${this.hass}
              .data=${{ action: normalized, entity: parent.entity || parent.tap_entity }}
              .schema=${[{ name: 'action', selector: { ui_action: {} }, context: { entity_id: 'entity' } }]}
              .computeLabel=${() => label}
              @value-changed=${(ev: CustomEvent) => {
                ev.stopPropagation();
                this._updateAction(path, ev.detail.value?.action);
              }}
            ></ha-form>
          `}
          ${normalized?.action === 'more-info'
            ? this._renderEntityField('More-info entity override', `${path}.entity`, normalized.entity)
            : nothing}
          ${normalized?.action === 'navigate' ? html`
            <ha-form .hass=${this.hass}
              .data=${{ navigation_replace: !!normalized.navigation_replace }}
              .schema=${[{ name: 'navigation_replace', selector: { boolean: {} } }]}
              .computeLabel=${() => 'Replace current navigation history entry'}
              @value-changed=${(ev: CustomEvent) => {
                ev.stopPropagation();
                this._valueChanged(`${path}.navigation_replace`, !!ev.detail.value.navigation_replace);
              }}
            ></ha-form>
          ` : nothing}
          ${normalized || switchTap ? html`
            <ha-form class="confirmation-form" .hass=${this.hass}
              .data=${{ enabled, ...details }}
              .schema=${[
                { name: 'enabled', selector: { boolean: {} } },
                ...(enabled ? ['text', 'title', 'confirm_text', 'dismiss_text'].map((name) => ({
                  name, selector: { text: {} },
                })) : []),
              ]}
              .computeLabel=${(schema: { name: string }) => ({
                enabled: 'Require confirmation', text: 'Confirmation message',
                title: 'Confirmation title', confirm_text: 'Confirm button text',
                dismiss_text: 'Cancel button text',
              }[schema.name])}
              @value-changed=${(ev: CustomEvent) => {
                ev.stopPropagation();
                const value = ev.detail.value;
                if (!!value.enabled !== enabled) {
                  this._setActionConfirmation(path, !!value.enabled);
                  return;
                }
                const next = { ...details };
                for (const field of ['text', 'title', 'confirm_text', 'dismiss_text'] as const) {
                  if (value[field]?.trim()) next[field] = value[field];
                  else delete next[field];
                }
                this._writeActionConfirmation(path, normalizeConfirmation(next));
              }}
            ></ha-form>
          ` : nothing}
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Styles ───────────────────────────────────────────────────

  static styles: CSSResultGroup = css`
    :host { display: block; color: var(--primary-text-color); }
    .editor-container, .section-content { display: flex; flex-direction: column; gap: 16px; }
    section { min-width: 0; }
    h3 { font-size: 16px; font-weight: 500; margin: 16px 0 8px; }
    .detail-header { display: flex; align-items: center; gap: 8px; }
    .detail-title { margin: 0; font-size: 20px; font-weight: 500; overflow-wrap: anywhere; }
    .detail-title:focus { outline: none; }
    .sortable-list { display: flex; flex-direction: column; }
    .sortable-item { display: flex; align-items: center; min-width: 0; border-bottom: 1px solid var(--divider-color); }
    .sortable-content { flex: 1; min-width: 0; }
    .drag-handle { flex: 0 0 40px; cursor: grab; color: var(--secondary-text-color); touch-action: none; }
    .drag-handle:active { cursor: grabbing; }
    .list-item { display: flex; align-items: center; min-height: 56px; min-width: 0; gap: 4px; }
    .item-heading { display: flex; flex-direction: column; flex: 1; min-width: 0; padding: 8px 0; overflow-wrap: anywhere; }
    .item-secondary { color: var(--secondary-text-color); font-size: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .list-item ha-icon-button { flex: 0 0 40px; }
    .side-by-side { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; }
    .side-by-side > * { flex: 1 1 220px; min-width: 0; }
    .side-by-side > ha-icon-button { flex: 0 0 40px; }
    .action-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .empty-hint { color: var(--secondary-text-color); margin: 0 0 8px; line-height: 1.5; }
    space-hub-textfield, ha-form, ha-selector { display: block; width: 100%; }
    ha-expansion-panel { display: block; }
    ha-expansion-panel > .section-content { padding: 16px; }
    ha-formfield { display: flex; align-items: center; padding: 4px 0; }
  `;
}
