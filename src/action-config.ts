/* eslint-disable @typescript-eslint/no-explicit-any */

export interface SpaceHubActionTarget {
  entity_id?: string | string[];
  device_id?: string | string[];
  area_id?: string | string[];
  [key: string]: any;
}

export interface SpaceHubConfirmationExemption {
  user: string;
}

export interface SpaceHubConfirmationConfig {
  text?: string;
  title?: string;
  confirm_text?: string;
  dismiss_text?: string;
  exemptions?: SpaceHubConfirmationExemption[];
}

export interface SpaceHubActionBaseConfig {
  confirmation?: boolean | SpaceHubConfirmationConfig;
}

export interface SpaceHubToggleActionConfig extends SpaceHubActionBaseConfig {
  action: 'toggle';
}

export interface SpaceHubPerformActionConfig extends SpaceHubActionBaseConfig {
  action: 'perform-action';
  perform_action?: string;
  data?: Record<string, any>;
  target?: SpaceHubActionTarget;
  // Legacy fields still accepted for migration and YAML backward compatibility.
  service?: string;
  service_data?: Record<string, any>;
}

export interface SpaceHubNavigateActionConfig extends SpaceHubActionBaseConfig {
  action: 'navigate';
  navigation_path?: string;
  navigation_replace?: boolean;
}

export interface SpaceHubUrlActionConfig extends SpaceHubActionBaseConfig {
  action: 'url';
  url_path?: string;
}

export interface SpaceHubMoreInfoActionConfig extends SpaceHubActionBaseConfig {
  action: 'more-info';
  entity?: string;
}

export interface SpaceHubAssistActionConfig extends SpaceHubActionBaseConfig {
  action: 'assist';
  pipeline_id?: string;
  start_listening?: boolean;
}

export interface SpaceHubNoActionConfig extends SpaceHubActionBaseConfig {
  action: 'none';
}

export interface SpaceHubFireDomEventActionConfig extends SpaceHubActionBaseConfig {
  action: 'fire-dom-event';
}

export interface SpaceHubLegacyCallServiceActionConfig extends SpaceHubActionBaseConfig {
  action: 'call-service';
  service?: string;
  service_data?: Record<string, any>;
}

export type SpaceHubActionConfig =
  | SpaceHubToggleActionConfig
  | SpaceHubPerformActionConfig
  | SpaceHubNavigateActionConfig
  | SpaceHubUrlActionConfig
  | SpaceHubMoreInfoActionConfig
  | SpaceHubAssistActionConfig
  | SpaceHubNoActionConfig
  | SpaceHubFireDomEventActionConfig
  | SpaceHubLegacyCallServiceActionConfig;

type ActionHolder = {
  tap_action?: unknown;
  hold_action?: unknown;
  double_tap_action?: unknown;
};

const ACTION_TYPES = new Set([
  'more-info',
  'toggle',
  'perform-action',
  'navigate',
  'url',
  'assist',
  'none',
  'fire-dom-event',
  'call-service',
]);

const isRecord = (value: unknown): value is Record<string, any> =>
  !!value && typeof value === 'object' && !Array.isArray(value);

export const hasActionOverride = (value: ActionHolder | undefined | null): boolean =>
  !!(value?.tap_action || value?.hold_action || value?.double_tap_action);

export const normalizeConfirmation = (value: unknown): boolean | SpaceHubConfirmationConfig | undefined => {
  if (value === undefined || value === null || value === false) return undefined;
  if (value === true) return true;
  if (typeof value === 'string') {
    const text = value.trim();
    return text ? { text } : true;
  }
  if (!isRecord(value)) return undefined;

  const confirmation: SpaceHubConfirmationConfig = {};
  if (typeof value.text === 'string' && value.text.trim()) confirmation.text = value.text;
  if (typeof value.title === 'string' && value.title.trim()) confirmation.title = value.title;
  if (typeof value.confirm_text === 'string' && value.confirm_text.trim()) confirmation.confirm_text = value.confirm_text;
  if (typeof value.dismiss_text === 'string' && value.dismiss_text.trim()) confirmation.dismiss_text = value.dismiss_text;
  if (Array.isArray(value.exemptions)) {
    const exemptions = value.exemptions
      .filter((entry): entry is SpaceHubConfirmationExemption =>
        !!entry && typeof entry === 'object' && typeof (entry as SpaceHubConfirmationExemption).user === 'string'
      )
      .map((entry) => ({ user: entry.user }));
    if (exemptions.length) confirmation.exemptions = exemptions;
  }

  return Object.keys(confirmation).length ? confirmation : true;
};

export const normalizeActionConfig = (value: unknown): SpaceHubActionConfig | undefined => {
  if (!isRecord(value) || typeof value.action !== 'string' || !ACTION_TYPES.has(value.action)) {
    return undefined;
  }

  if (value.action === 'call-service' || value.action === 'perform-action') {
    const normalized: SpaceHubPerformActionConfig = {
      ...value,
      action: 'perform-action',
      perform_action: typeof value.perform_action === 'string'
        ? value.perform_action
        : (typeof value.service === 'string' ? value.service : undefined),
      data: isRecord(value.data)
        ? value.data
        : (isRecord(value.service_data) ? value.service_data : undefined),
      target: isRecord(value.target) ? value.target : undefined,
      confirmation: normalizeConfirmation(value.confirmation),
    };
    return normalized;
  }

  return {
    ...value,
    confirmation: normalizeConfirmation(value.confirmation),
  } as SpaceHubActionConfig;
};
