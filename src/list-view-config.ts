export interface ListViewConfig {
  dataType: string;
  componentStateKey: string;
  listLocation: 'mainBody' | 'other';
  compact?: boolean;
  preselectedKeys?: string[];
}

export const LIST_VIEW_LOCATIONS = ['mainBody', 'other'] as const;

export const LIST_VIEW_CONFIG_FIELDS = [
  'dataType',
  'componentStateKey',
  'listLocation',
  'compact',
  'preselectedKeys',
] as const;
