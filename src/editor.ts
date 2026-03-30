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

  public setConfig(config: SpaceHubConfig): void {
    this._config = clone(config);
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

  // ── Render ───────────────────────────────────────────────────

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="editor-container">
        <div class="mode-toggle">
          <mwc-button
            dense
            .outlined=${!this._yamlMode}
            @click=${() => { this._yamlMode = false; this._yamlError = ''; }}
          >Visual Editor</mwc-button>
          <mwc-button
            dense
            .outlined=${this._yamlMode}
            @click=${() => { this._yamlMode = true; }}
          >YAML</mwc-button>
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
      ${this._renderGeneralSection()}
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `;
  }

  // ── General ──────────────────────────────────────────────────

  private _renderGeneralSection(): TemplateResult {
    return html`
      <ha-expansion-panel outlined .header=${'General'} .expanded=${true}>
        <div class="section-content">
          <ha-textfield
            label="Title"
            .value=${this._config.title || ''}
            @input=${(ev: Event) => this._valueChanged('title', (ev.target as HTMLInputElement).value)}
          ></ha-textfield>
        </div>
      </ha-expansion-panel>
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
              ${headers.map((_, i) => html`
                <mwc-button
                  dense
                  .outlined=${this._selectedHeaderIndex === i}
                  @click=${() => { this._selectedHeaderIndex = i; this.requestUpdate(); }}
                >Header ${i + 1}</mwc-button>
              `)}
            </div>
          ` : nothing}
          ${headers.length ? this._renderHeader(headers[this._selectedHeaderIndex] || headers[0], this._selectedHeaderIndex) : html`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <mwc-button @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </mwc-button>
            ${headers.length > 0 ? html`
              <mwc-button class="danger" @click=${() => this._removeHeader(this._selectedHeaderIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${this._selectedHeaderIndex + 1}
              </mwc-button>
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
            <mwc-button @click=${() => { this._valueChanged(basePath, { main_name: 'Room' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </mwc-button>
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
            <ha-entity-picker
              .hass=${this.hass}
              label="Light Group Entity (tap toggles)"
              .value=${m.light_group_entity || ''}
              allow-custom-entity
              @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.light_group_entity`, ev.detail.value)}
            ></ha-entity-picker>
            <div class="side-by-side">
              <ha-entity-picker
                .hass=${this.hass}
                label="Tap Entity"
                .value=${m.tap_entity || ''}
                allow-custom-entity
                @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.tap_entity`, ev.detail.value)}
              ></ha-entity-picker>
              <ha-entity-picker
                .hass=${this.hass}
                label="Hold Entity (more-info)"
                .value=${m.hold_entity || ''}
                allow-custom-entity
                @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.hold_entity`, ev.detail.value)}
              ></ha-entity-picker>
            </div>
            <div class="side-by-side">
              <ha-entity-picker
                .hass=${this.hass}
                label="Temperature Sensor"
                .value=${m.temp_sensor || ''}
                .includeDomains=${['sensor']}
                allow-custom-entity
                @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.temp_sensor`, ev.detail.value)}
              ></ha-entity-picker>
              <ha-entity-picker
                .hass=${this.hass}
                label="Humidity Sensor"
                .value=${m.humidity_sensor || ''}
                .includeDomains=${['sensor']}
                allow-custom-entity
                @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.humidity_sensor`, ev.detail.value)}
              ></ha-entity-picker>
            </div>
            <ha-select
              label="Glow Mode"
              .value=${m.glow_mode || 'static'}
              @selected=${(ev: Event) => this._valueChanged(`${basePath}.glow_mode`, (ev.target as any).value)}
              @closed=${(ev: Event) => ev.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${GLOW_MODES.map((mode) => html`<mwc-list-item .value=${mode}>${mode}</mwc-list-item>`)}
            </ha-select>
            ${this._renderChipsConfig(m.chips as any[] || [], basePath)}
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, m.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, m.hold_action)}
            ${this._renderActionConfig('Double Tap Action', `${basePath}.double_tap_action`, m.double_tap_action)}
            <mwc-button class="danger" @click=${() => this._valueChanged(basePath, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </mwc-button>
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
          <mwc-button @click=${() => {
            const current = (this._getNestedValue(chipsPath) || []) as any[];
            current.push({ type: 'custom', entity: '' });
            this._valueChanged(chipsPath, current);
          }}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </mwc-button>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderSingleChip(chip: any, path: string, index: number, chipsPath: string): TemplateResult {
    return html`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>Chip ${index + 1}: ${chip.type || 'custom'}</span>
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
          <ha-select
            label="Type"
            .value=${chip.type || 'custom'}
            @selected=${(ev: Event) => this._valueChanged(`${path}.type`, (ev.target as any).value)}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${CHIP_TYPES.map((t) => html`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
          </ha-select>
          <ha-entity-picker
            .hass=${this.hass}
            label="Entity"
            .value=${chip.entity || ''}
            allow-custom-entity
            @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.entity`, ev.detail.value)}
          ></ha-entity-picker>
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
            <mwc-button @click=${() => { this._valueChanged(basePath, { entity: '' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </mwc-button>
          ` : html`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${ac!.entity || ''}
              .includeDomains=${['climate']}
              allow-custom-entity
              @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.entity`, ev.detail.value)}
            ></ha-entity-picker>
            <ha-select
              label="Glow Mode"
              .value=${ac!.glow_mode || 'static'}
              @selected=${(ev: Event) => this._valueChanged(`${basePath}.glow_mode`, (ev.target as any).value)}
              @closed=${(ev: Event) => ev.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${GLOW_MODES.map((mode) => html`<mwc-list-item .value=${mode}>${mode}</mwc-list-item>`)}
            </ha-select>
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, ac!.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, ac!.hold_action)}
            <mwc-button class="danger" @click=${() => this._valueChanged(basePath, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </mwc-button>
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
            <mwc-button @click=${() => { this._valueChanged(basePath, { entity: '' }); }}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </mwc-button>
          ` : html`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${thermostat!.entity || ''}
              .includeDomains=${['climate']}
              allow-custom-entity
              @value-changed=${(ev: CustomEvent) => this._valueChanged(`${basePath}.entity`, ev.detail.value)}
            ></ha-entity-picker>
            <ha-select
              label="Glow Mode"
              .value=${thermostat!.glow_mode || 'static'}
              @selected=${(ev: Event) => this._valueChanged(`${basePath}.glow_mode`, (ev.target as any).value)}
              @closed=${(ev: Event) => ev.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${GLOW_MODES.map((mode) => html`<mwc-list-item .value=${mode}>${mode}</mwc-list-item>`)}
            </ha-select>
            ${this._renderActionConfig('Tap Action', `${basePath}.tap_action`, thermostat!.tap_action)}
            ${this._renderActionConfig('Hold Action', `${basePath}.hold_action`, thermostat!.hold_action)}
            <mwc-button class="danger" @click=${() => this._valueChanged(basePath, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </mwc-button>
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
              ${rows.map((_, i) => html`
                <mwc-button
                  dense
                  .outlined=${this._selectedSwitchRowIndex === i}
                  @click=${() => { this._selectedSwitchRowIndex = i; this.requestUpdate(); }}
                >Row ${i + 1}</mwc-button>
              `)}
            </div>
          ` : nothing}
          ${rows.length
            ? this._renderSwitchRow(rows[this._selectedSwitchRowIndex] || rows[0], this._selectedSwitchRowIndex)
            : html`<div class="empty-hint">No switch rows configured.</div>`
          }
          <div class="action-row">
            <mwc-button @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </mwc-button>
            ${rows.length > 0 ? html`
              <mwc-button class="danger" @click=${() => this._removeSwitchRow(this._selectedSwitchRowIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${this._selectedSwitchRowIndex + 1}
              </mwc-button>
            ` : nothing}
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _addSwitchRow(): void {
    if (!this._config.switch_rows) this._config.switch_rows = [];
    (this._config.switch_rows as any[]).push({ row: [{ entity: '', name: 'New Switch', icon: 'mdi:toggle-switch' }] });
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
        <mwc-button @click=${() => {
          const arr = (this._getNestedValue(itemsPath) || []) as any[];
          arr.push({ entity: '', name: '', icon: 'mdi:toggle-switch' });
          this._valueChanged(itemsPath, [...arr]);
        }}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </mwc-button>
      </div>
    `;
  }

  private _renderSwitchItem(sw: any, path: string, index: number, rowPath: string): TemplateResult {
    return html`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>${sw.name || sw.entity || `Switch ${index + 1}`}</span>
          <ha-icon-button
            .path=${'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'}
            @click=${() => {
              const arr = (this._getNestedValue(rowPath) || []) as any[];
              arr.splice(index, 1);
              this._valueChanged(rowPath, [...arr]);
            }}
          ></ha-icon-button>
        </div>
        <ha-entity-picker
          .hass=${this.hass}
          label="Entity"
          .value=${sw.entity || ''}
          allow-custom-entity
          @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.entity`, ev.detail.value)}
        ></ha-entity-picker>
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
          <ha-select
            label="Type"
            .value=${sw.type || 'switch'}
            @selected=${(ev: Event) => this._valueChanged(`${path}.type`, (ev.target as any).value)}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${SWITCH_TYPES.map((t) => html`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
          </ha-select>
          <ha-select
            label="Glow Mode"
            .value=${sw.glow_mode || 'static'}
            @selected=${(ev: Event) => this._valueChanged(`${path}.glow_mode`, (ev.target as any).value)}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${GLOW_MODES.map((mode) => html`<mwc-list-item .value=${mode}>${mode}</mwc-list-item>`)}
          </ha-select>
        </div>
        <ha-entity-picker
          .hass=${this.hass}
          label="Hold Entity (more-info on hold)"
          .value=${sw.hold_entity || ''}
          allow-custom-entity
          @value-changed=${(ev: CustomEvent) => this._valueChanged(`${path}.hold_entity`, ev.detail.value)}
        ></ha-entity-picker>

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
              this._valueChanged(`${path}.info_templates`, arr.filter((t) => t));
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
        <mwc-button @click=${() => {
          const arr = [...templates, ''];
          this._valueChanged(`${path}.info_templates`, arr);
        }}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </mwc-button>
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
          <mwc-button @click=${() => {
            const arr = [...cards, { type: 'tile', entity: '' }];
            this._valueChanged('cards', arr);
          }}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </mwc-button>
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
            <mwc-button @click=${() => this._valueChanged(path, { action: 'more-info' })}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${label}
            </mwc-button>
          ` : html`
            <ha-select
              label="Action"
              .value=${action?.action || 'more-info'}
              @selected=${(ev: Event) => this._valueChanged(`${path}.action`, (ev.target as any).value)}
              @closed=${(ev: Event) => ev.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${ACTION_TYPES.map((a) => html`<mwc-list-item .value=${a}>${a}</mwc-list-item>`)}
            </ha-select>
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
            <mwc-button class="danger" @click=${() => this._valueChanged(path, undefined)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </mwc-button>
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
    .mode-toggle mwc-button[outlined] {
      --mdc-theme-primary: var(--primary-color);
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
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
    .tab-bar mwc-button[outlined] {
      --mdc-theme-primary: var(--primary-color);
    }
    .action-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 4px;
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
      align-items: center;
      font-weight: 500;
    }
    .empty-hint {
      color: var(--secondary-text-color);
      font-style: italic;
      padding: 8px 0;
    }
    .danger {
      --mdc-theme-primary: var(--error-color, #db4437);
    }
    ha-textfield, ha-select, ha-entity-picker, ha-icon-picker {
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
