/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css, CSSResultGroup, TemplateResult, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant } from 'custom-card-helpers';
import type { SpaceHubConfig, SpaceHubHeader, HeaderMain, HeaderAC, HeaderThermostat } from './space-hub';
import { clone } from './const';

// Chip types supported by the card
const CHIP_TYPES = ['lock', 'door', 'presence', 'illuminance', 'gate', 'sliding_gate', 'smart_plug', 'custom'] as const;
// Switch tile types
const SWITCH_TYPES = ['switch', 'smart_plug'] as const;
// Glow modes
const GLOW_MODES = ['static', 'pulse', 'none'] as const;
// Action types supported by HA
const ACTION_TYPES = ['more-info', 'toggle', 'call-service', 'perform-action', 'navigate', 'url', 'none'] as const;

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
      'ha-entity-picker',
      'ha-icon-picker',
      'ha-select',
      'ha-textfield',
      'ha-expansion-panel',
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

  private _handleSelectChanged(path: string, ev: Event): void {
    const target = ev.currentTarget as { value?: string } | null;
    this._valueChanged(path, target?.value);
  }

  private _renderSelectField(label: string, path: string, value: string | undefined, options: readonly string[]): TemplateResult {
    const selected = value || options[0] || '';
    return html`
      <ha-select
        label=${label}
        .value=${selected}
        @selected=${(ev: Event) => this._handleSelectChanged(path, ev)}
        @closed=${(ev: Event) => ev.stopPropagation()}
        fixedMenuPosition
        naturalMenuWidth
      >
        ${options.map((option) => html`
          <ha-list-item .value=${option} ?selected=${option === selected}>${option}</ha-list-item>
        `)}
      </ha-select>
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
            <ha-textfield
              label="Tile Height (px)"
              type="number"
              .value=${String(this._config.tile_height ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('tile_height', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></ha-textfield>
            <ha-textfield
              label="Main Icon Size (px)"
              type="number"
              .value=${String(this._config.main_icon_size ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('main_icon_size', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></ha-textfield>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(this._config.chip_icon_size ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('chip_icon_size', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></ha-textfield>
            <ha-textfield
              label="Chip Font Size (px)"
              type="number"
              .value=${String(this._config.chip_font_size ?? '')}
              @input=${(ev: Event) => {
                const v = Number((ev.target as HTMLInputElement).value);
                this._valueChanged('chip_font_size', Number.isFinite(v) && v > 0 ? v : undefined);
              }}
            ></ha-textfield>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="Shadow Color"
              .value=${this._config.card_shadow_color || ''}
              @input=${(ev: Event) => this._valueChanged('card_shadow_color', (ev.target as HTMLInputElement).value)}
            ></ha-textfield>
            <ha-textfield
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
            ></ha-textfield>
          </div>
          <ha-textfield
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color || ''}
            @input=${(ev: Event) => this._valueChanged('unavailable_pulse_color', (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
        </div>
      </ha-expansion-panel>
    `;
  }

  // ── Headers ──────────────────────────────────────────────────

  private _renderHeadersSection(): TemplateResult {
    const headers = this._config.headers || [];
    return html`
      <ha-expansion-panel outlined .header=${`Headers (${headers.length})`}>
        <div class="section-content">
          ${headers.length > 1 ? html`
            <div class="tab-bar">
              ${headers.map((_, i) => html`<button class="tab-btn${this._selectedHeaderIndex === i ? ' active' : ''}" @click=${() => { this._selectedHeaderIndex = i; this.requestUpdate(); }}>Header ${i + 1}</button>`)}
            </div>
          ` : nothing}
          ${headers.length ? this._renderHeader(headers[this._selectedHeaderIndex] || headers[0], this._selectedHeaderIndex) : html`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${headers.length > 0 ? html`
              <button class="editor-btn danger" @click=${() => this._removeHeader(this._selectedHeaderIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${this._selectedHeaderIndex + 1}
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
      ${this._renderMainTileConfig(header.main, `${base}.main`)}
      ${this._renderACConfig(header.ac, `${base}.ac`)}
      ${this._renderThermostatConfig(header.thermostat, `${base}.thermostat`)}
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
              <ha-textfield
                label="Name"
                .value=${m.main_name || ''}
                @input=${(ev: Event) => this._valueChanged(`${basePath}.main_name`, (ev.target as HTMLInputElement).value)}
              ></ha-textfield>
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
          <ha-textfield
            label="Background (Active)"
            .value=${chip.background_active || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.background_active`, (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
          <ha-textfield
            label="Background (Unavailable)"
            .value=${chip.background_unavailable || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.background_unavailable`, (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
        </div>
        <ha-textfield
          label="Icon Color (Unavailable)"
          .value=${chip.icon_color_unavailable || ''}
          @input=${(ev: Event) => this._valueChanged(`${path}.icon_color_unavailable`, (ev.target as HTMLInputElement).value)}
        ></ha-textfield>
      </div>
    `;
  }

  // ── AC Config ────────────────────────────────────────────────

  private _renderACConfig(ac: HeaderAC | undefined, basePath: string): TemplateResult {
    const hasAC = !!ac;
    return html`
      <ha-expansion-panel outlined .header=${'AC Tile'}>
        <div class="section-content">
          ${!hasAC ? html`
            <button class="editor-btn" @click=${() => { this._valueChanged(basePath, { entity: '' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          ` : html`
            ${this._renderEntityField('Climate Entity', `${basePath}.entity`, ac!.entity, { domain: 'climate' })}
            ${this._renderSelectField('Glow Mode', `${basePath}.glow_mode`, ac!.glow_mode, GLOW_MODES)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, ac!.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, ac!.hold_action)}
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
    return html`
      <ha-expansion-panel outlined .header=${'Thermostat Tile'}>
        <div class="section-content">
          ${!has ? html`
            <button class="editor-btn" @click=${() => { this._valueChanged(basePath, { entity: '' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          ` : html`
            ${this._renderEntityField('Climate Entity', `${basePath}.entity`, thermostat!.entity, { domain: 'climate' })}
            ${this._renderSelectField('Glow Mode', `${basePath}.glow_mode`, thermostat!.glow_mode, GLOW_MODES)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, thermostat!.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, thermostat!.hold_action)}
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
    return html`
      <ha-expansion-panel outlined .header=${`Switch Rows (${rows.length})`}>
        <div class="section-content">
          ${rows.length > 1 ? html`
            <div class="tab-bar">
              ${rows.map((_, i) => html`<button class="tab-btn${this._selectedSwitchRowIndex === i ? ' active' : ''}" @click=${() => { this._selectedSwitchRowIndex = i; this.requestUpdate(); }}>Row ${i + 1}</button>`)}
            </div>
          ` : nothing}
          ${rows.length
            ? this._renderSwitchRow(rows[this._selectedSwitchRowIndex] || rows[0], this._selectedSwitchRowIndex)
            : html`<div class="empty-hint">No switch rows configured.</div>`
          }
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${rows.length > 0 ? html`
              <button class="editor-btn danger" @click=${() => this._removeSwitchRow(this._selectedSwitchRowIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${this._selectedSwitchRowIndex + 1}
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
        ${items.map((sw, i) => this._renderSwitchItem(sw, `${itemsPath}.${i}`, i, itemsPath))}
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

  private _renderSwitchItem(sw: any, path: string, index: number, rowPath: string): TemplateResult {
    return html`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${sw.name || this._friendlyEntityName(sw.entity) || `Switch ${index + 1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(sw.entity)}</span>
          </div>
          <ha-icon-button
            .path=${'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'}
            @click=${() => {
              const arr = (this._getNestedValue(rowPath) || []) as any[];
              arr.splice(index, 1);
              this._valueChanged(rowPath, [...arr]);
            }}
          ></ha-icon-button>
        </div>
        ${this._renderEntityField('Controlled Entity', `${path}.entity`, sw.entity)}
        <div class="side-by-side">
          <ha-textfield
            label="Name"
            .value=${sw.name || ''}
            @input=${(ev: Event) => this._valueChanged(`${path}.name`, (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${sw.icon || ''}
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.icon`, ev.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField('Type', `${path}.type`, sw.type, SWITCH_TYPES)}
          ${this._renderSelectField('Glow Mode', `${path}.glow_mode`, sw.glow_mode, GLOW_MODES)}
        </div>
        ${this._renderEntityField('Hold Entity (more-info on hold)', `${path}.hold_entity`, sw.hold_entity)}

        <ha-expansion-panel outlined .header=${'Styling'}>
          <div class="section-content">
            <div class="side-by-side">
              <ha-textfield
                label="Icon Size"
                .value=${sw.icon_size || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.icon_size`, (ev.target as HTMLInputElement).value)}
              ></ha-textfield>
              <ha-textfield
                label="Font Size"
                .value=${sw.font_size || sw['font-size'] || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.font_size`, (ev.target as HTMLInputElement).value)}
              ></ha-textfield>
            </div>
            <ha-textfield
              label="Font Weight"
              .value=${sw.font_weight || sw['font-weight'] || ''}
              @input=${(ev: Event) => this._valueChanged(`${path}.font_weight`, (ev.target as HTMLInputElement).value)}
            ></ha-textfield>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${'Confirmation'}>
          <div class="section-content">
            <ha-formfield label="Require confirmation on tap">
              <ha-switch
                .checked=${!!sw.confirmation}
                @change=${(ev: Event) => {
                  const checked = (ev.target as any).checked;
                  this._valueChanged(`${path}.confirmation`, checked ? 'Are you sure?' : undefined);
                }}
              ></ha-switch>
            </ha-formfield>
            ${sw.confirmation ? html`
              <ha-textfield
                label="Confirmation Text"
                .value=${typeof sw.confirmation === 'string' ? sw.confirmation : (sw.confirmation?.text || 'Are you sure?')}
                @input=${(ev: Event) => this._valueChanged(`${path}.confirmation`, (ev.target as HTMLInputElement).value)}
              ></ha-textfield>
            ` : nothing}
          </div>
        </ha-expansion-panel>

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
          <ha-textfield
            label="Template ${i + 1}"
            .value=${tpl || ''}
            @input=${(ev: Event) => {
              const arr = [...templates];
              arr[i] = (ev.target as HTMLInputElement).value;
              this._valueChanged(`${path}.info_templates`, arr);
            }}
          ></ha-textfield>
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
          ${cards.map((card, i) => this._renderEmbeddedCardItem(card, i))}
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

  private _renderEmbeddedCardItem(card: any, index: number): TemplateResult {
    return html`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>Card ${index + 1}: ${card.type || 'unknown'}</span>
          <ha-icon-button
            .path=${'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'}
            @click=${() => {
              const arr = [...(this._config.cards || []) as any[]];
              arr.splice(index, 1);
              this._valueChanged('cards', arr.length ? arr : undefined);
            }}
          ></ha-icon-button>
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
    const hasAction = !!action;
    return html`
      <ha-expansion-panel outlined .header=${label}>
        <div class="section-content">
          ${!hasAction ? html`
            <button class="editor-btn" @click=${() => this._valueChanged(path, { action: 'more-info' })}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${label}
            </button>
          ` : html`
            ${this._renderSelectField('Action', `${path}.action`, action?.action, ACTION_TYPES)}
            ${action?.action === 'navigate' ? html`
              <ha-textfield
                label="Navigation Path"
                .value=${action.navigation_path || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.navigation_path`, (ev.target as HTMLInputElement).value)}
              ></ha-textfield>
            ` : nothing}
            ${action?.action === 'url' ? html`
              <ha-textfield
                label="URL"
                .value=${action.url_path || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.url_path`, (ev.target as HTMLInputElement).value)}
              ></ha-textfield>
            ` : nothing}
            ${action?.action === 'call-service' || action?.action === 'perform-action' ? html`
              <ha-textfield
                label="Service"
                .value=${action.service || ''}
                @input=${(ev: Event) => this._valueChanged(`${path}.service`, (ev.target as HTMLInputElement).value)}
              ></ha-textfield>
              <ha-yaml-editor
                label="Service Data"
                .defaultValue=${action.service_data || {}}
                @value-changed=${(ev: CustomEvent) => {
                  ev.stopPropagation();
                  this._valueChanged(`${path}.service_data`, ev.detail.value);
                }}
              ></ha-yaml-editor>
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
    }
    .side-by-side > * {
      flex: 1;
      min-width: 0;
    }
    .tab-bar {
      display: flex;
      gap: 4px;
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
    ha-textfield, ha-select, ha-form, ha-icon-picker {
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
