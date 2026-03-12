export interface ListViewConfig {
  dataType: string;
  componentStateKey: string;
  listLocation: 'mainBody' | 'other';
  compact?: boolean;
  preselectedKeys?: string[];
}
