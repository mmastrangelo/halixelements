import type { DetailConfig } from './detail-config';
import type {
  DetailSavedEvent,
  ListViewCurrentRecordEvent,
  ListViewDetailModeEvent,
  ListViewTotalRecordsEvent,
} from './events';
import type { ListViewConfig } from './list-view-config';

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
