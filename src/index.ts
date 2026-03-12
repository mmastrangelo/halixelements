export interface DetailConfig {
  dataType: string;
  dataElementId: string;
  key?: string;
  title?: string;
  formTemplateKey?: string;
  formTemplateId?: string;
  fullObjectUrl?: string;
  saveUrl?: string;
  detailEventModule?: string;
}

export interface ListViewConfig {
  dataType: string;
  componentStateKey: string;
  listLocation: 'mainBody' | 'other';
  compact?: boolean;
  preselectedKeys?: string[];
}

export interface ListViewCurrentRecordEvent {
  record: Record<string, unknown> | null;
}

export interface ListViewTotalRecordsEvent {
  total: number;
}

export interface ListViewDetailModeEvent {
  active: boolean;
}

export interface DetailSavedEvent {
  data: Record<string, unknown>;
}

export type HalixListViewElement = HTMLElement & {
  config: ListViewConfig;
  addEventListener(
    type: 'currentRecord',
    listener: (e: CustomEvent<ListViewCurrentRecordEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'detailMode',
    listener: (e: CustomEvent<ListViewDetailModeEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'totalRecords',
    listener: (e: CustomEvent<ListViewTotalRecordsEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
};

export type HalixStandaloneDetailElement = HTMLElement & {
  config: DetailConfig;
  addEventListener(
    type: 'saved',
    listener: (e: CustomEvent<DetailSavedEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
};

declare global {
  interface HTMLElementTagNameMap {
    'halix-list-view': HalixListViewElement;
    'halix-standalone-detail': HalixStandaloneDetailElement;
  }
}

// Keep one concrete runtime export so strict ESM/CDN tooling sees a normal module.
export const HALIX_PLATFORM_ELEMENTS_SDK = true;
