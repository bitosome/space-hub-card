/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, CSSResultGroup } from 'lit';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { SpaceHubEditorConfig } from './types';
import { customElement, property, state } from 'lit/decorators';
import { formfieldDefinition } from '../elements/formfield';
import { selectDefinition } from '../elements/select';
import { switchDefinition } from '../elements/switch';
import { textfieldDefinition } from '../elements/textfield';

@customElement('space-hub-card-editor')
export class SpaceHubCardEditor extends ScopedRegistryHost(LitElement) implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: SpaceHubEditorConfig;

  @state() private _helpers?: any;

  @state() private _validationErrors: string[] = [];

  private _initialized = false;

  static elementDefinitions = {
    ...textfieldDefinition,
    ...selectDefinition,
    ...switchDefinition,
    ...formfieldDefinition,
  };

  public setConfig(config: SpaceHubEditorConfig): void {
    this._config = config;
    this._validateConfiguration();
    this.loadCardHelpers();
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
      this._initialize();
    }

    return true;
  }

  get _title(): string {
    return this._config?.title || '';
  }

  get _tile_height(): number {
    return this._config?.tile_height || 80;
  }

  get _chip_icon_size(): number {
    return this._config?.chip_icon_size || 14;
  }

  get _main_icon_size(): number {
    return this._config?.main_icon_size || 48;
  }

  get _chip_font_size(): number {
    return this._config?.chip_font_size || 12;
  }

  get _card_shadow_color(): string {
    return this._config?.card_shadow_color || '#000000';
  }

  get _card_shadow_intensity(): number {
    return this._config?.card_shadow_intensity || 0.5;
  }

  get _unavailable_pulse_color(): string {
    return this._config?.unavailable_pulse_color || '#ff3b30';
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._helpers) {
      return html``;
    }

    return html`
      <div class="card-config">
        ${this._validationErrors.length > 0 ? html`
          <div class="validation-errors">
            <h3>⚠️ Configuration Issues</h3>
            <ul>
              ${this._validationErrors.map(error => html`<li>${error}</li>`)}
            </ul>
          </div>
        ` : ''}
        
        <h3>Basic Settings</h3>
        <mwc-textfield
          label="Card Title"
          .value=${this._title}
          .configValue=${'title'}
          @input=${this._valueChanged}
          helper="Optional title displayed on the card"
        ></mwc-textfield>

        <h3>Visual Settings</h3>
        <mwc-textfield
          type="number"
          label="Tile Height (px)"
          .value=${this._tile_height}
          .configValue=${'tile_height'}
          @input=${this._valueChanged}
          helper="Height of tiles in pixels (default: 80)"
          min="30"
          max="200"
        ></mwc-textfield>

        <mwc-textfield
          type="number"
          label="Chip Icon Size (px)"
          .value=${this._chip_icon_size}
          .configValue=${'chip_icon_size'}
          @input=${this._valueChanged}
          helper="Size of icons in chips/badges (default: 14)"
          min="8"
          max="32"
        ></mwc-textfield>

        <mwc-textfield
          type="number"
          label="Main Icon Size (px)"
          .value=${this._main_icon_size}
          .configValue=${'main_icon_size'}
          @input=${this._valueChanged}
          helper="Size of main tile icons (default: 48)"
          min="16"
          max="128"
        ></mwc-textfield>

        <mwc-textfield
          type="number"
          label="Chip Font Size (px)"
          .value=${this._chip_font_size}
          .configValue=${'chip_font_size'}
          @input=${this._valueChanged}
          helper="Font size for chip text (default: 12)"
          min="8"
          max="20"
        ></mwc-textfield>

        <h3>Shadow & Effects</h3>
        <mwc-textfield
          label="Card Shadow Color"
          .value=${this._card_shadow_color}
          .configValue=${'card_shadow_color'}
          @input=${this._valueChanged}
          helper="Color for card shadow (e.g., #000000, red)"
        ></mwc-textfield>

        <mwc-textfield
          type="number"
          label="Card Shadow Intensity"
          .value=${this._card_shadow_intensity}
          .configValue=${'card_shadow_intensity'}
          @input=${this._valueChanged}
          helper="Shadow intensity from 0 to 1 (default: 0.5)"
          min="0"
          max="1"
          step="0.1"
        ></mwc-textfield>

        <mwc-textfield
          label="Unavailable Pulse Color"
          .value=${this._unavailable_pulse_color}
          .configValue=${'unavailable_pulse_color'}
          @input=${this._valueChanged}
          helper="Color when entities are unavailable (default: #ff3b30)"
        ></mwc-textfield>

        <div class="configuration-note">
          <h3>📝 Configuration Note</h3>
          <p>To configure headers (main tiles, AC, thermostat) and switch rows, you'll need to edit the YAML directly. The visual editor above only covers basic settings.</p>
          <p>See the <strong>README.md</strong> for complete configuration examples.</p>
        </div>
      </div>
    `;
  }

  private _initialize(): void {
    if (this.hass === undefined) return;
    if (this._config === undefined) return;
    if (this._helpers === undefined) return;
    this._initialized = true;
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
  }

  private _validateConfiguration(): void {
    this._validationErrors = [];
    
    if (!this._config) {
      this._validationErrors.push('Configuration is missing');
      return;
    }

    try {
      // Use the same validation logic as the main card
      this._validateConfig(this._config);
    } catch (error) {
      if (error instanceof Error) {
        // Parse the error message and extract individual validation errors
        const message = error.message.replace('Invalid space-hub-card configuration:\n', '');
        this._validationErrors = message.split('\n').map(line => line.replace('• ', ''));
      }
    }
  }

  private _validateConfig(config: SpaceHubEditorConfig): void {
    const errors: string[] = [];

    // Validate headers if provided
    if (config.headers && Array.isArray(config.headers)) {
      config.headers.forEach((header: any, index) => {
        if (!header) {
          errors.push(`Header ${index + 1}: Header configuration cannot be empty`);
          return;
        }

        // Validate AC configuration
        if (header.ac) {
          if (!header.ac.entity) {
            errors.push(`Header ${index + 1}: AC tile requires an 'entity' field`);
          } else if (typeof header.ac.entity !== 'string' || !header.ac.entity.includes('.')) {
            errors.push(`Header ${index + 1}: AC entity '${header.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`);
          }
        }

        // Validate Thermostat configuration
        if (header.thermostat) {
          if (!header.thermostat.entity) {
            errors.push(`Header ${index + 1}: Thermostat tile requires an 'entity' field`);
          } else if (typeof header.thermostat.entity !== 'string' || !header.thermostat.entity.includes('.')) {
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
          
          if (!hasContent) {
            errors.push(`Header ${index + 1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);
          }

          // Validate entity IDs if provided
          const entityFields = ['tap_entity', 'hold_entity', 'light_group_entity', 'temp_sensor', 'humidity_sensor'];
          entityFields.forEach(field => {
            const value = main[field];
            if (value && (typeof value !== 'string' || !value.includes('.'))) {
              errors.push(`Header ${index + 1}: Main tile ${field} '${value}' must be a valid entity ID`);
            }
          });
        }

        // If header has AC or Thermostat but no main, warn about required main configuration
        if ((header.ac || header.thermostat) && !header.main) {
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
        if (!Array.isArray(items) || items.length === 0) {
          errors.push(`Switch row ${index + 1}: Switch row must contain at least one switch item`);
          return;
        }

        items.forEach((item: any, itemIndex) => {
          if (!item || !item.entity) {
            errors.push(`Switch row ${index + 1}, item ${itemIndex + 1}: Switch item requires an 'entity' field`);
          } else if (typeof item.entity !== 'string' || !item.entity.includes('.')) {
            errors.push(`Switch row ${index + 1}, item ${itemIndex + 1}: Switch entity '${item.entity}' must be a valid entity ID`);
          }
        });
      });
    }

    // If there are validation errors, throw them
    if (errors.length > 0) {
      throw new Error(`Invalid space-hub-card configuration:\n${errors.map(e => `• ${e}`).join('\n')}`);
    }
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '') {
        const tmpConfig = { ...this._config };
        delete tmpConfig[target.configValue];
        this._config = tmpConfig;
      } else {
        let value = target.checked !== undefined ? target.checked : target.value;
        
        // Convert numeric values
        if (target.type === 'number' && value !== '') {
          value = Number(value);
        }
        
        this._config = {
          ...this._config,
          [target.configValue]: value,
        };
      }
    }
    
    // Re-validate after changes
    this._validateConfiguration();
    
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static styles: CSSResultGroup = css`
    .card-config {
      padding: 16px;
    }
    
    mwc-textfield {
      margin-bottom: 16px;
      display: block;
      width: 100%;
    }
    
    h3 {
      margin: 24px 0 12px 0;
      color: var(--primary-text-color);
      font-size: 16px;
      font-weight: 500;
    }
    
    .validation-errors {
      background: var(--error-color, #ff5252);
      color: white;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
    
    .validation-errors h3 {
      margin-top: 0;
      color: white;
    }
    
    .validation-errors ul {
      margin: 8px 0 0 16px;
      padding: 0;
    }
    
    .validation-errors li {
      margin-bottom: 4px;
    }
    
    .configuration-note {
      background: var(--primary-color);
      color: var(--text-primary-color);
      padding: 16px;
      border-radius: 8px;
      margin-top: 24px;
    }
    
    .configuration-note h3 {
      margin-top: 0;
      color: var(--text-primary-color);
    }
    
    .configuration-note p {
      margin-bottom: 8px;
      line-height: 1.4;
    }
    
    .configuration-note p:last-child {
      margin-bottom: 0;
    }
  `;
}
