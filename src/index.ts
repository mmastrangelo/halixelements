export { DETAIL_CONFIG_FIELDS } from './detail-config.js';
export type { DetailConfig } from './detail-config';
import './element-declarations.js';
export { HALIX_ELEMENT_EVENT_NAMES } from './events.js';
export type {
  DetailSavedEvent,
  ListViewCurrentRecordEvent,
  ListViewDetailModeEvent,
  ListViewTotalRecordsEvent,
} from './events';
export { HALIX_ELEMENT_TAGS } from './element-declarations.js';
export type { HalixListViewElement, HalixStandaloneDetailElement } from './element-declarations';
export { LIST_VIEW_CONFIG_FIELDS, LIST_VIEW_LOCATIONS } from './list-view-config.js';
export type { ListViewConfig } from './list-view-config';

export const HALIX_PLATFORM_ELEMENTS_SDK = {
  packageName: '@halix/platform-elements-sdk',
};
