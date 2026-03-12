export type { DetailConfig } from './detail-config';
export type {
  DetailSavedEvent,
  ListViewCurrentRecordEvent,
  ListViewDetailModeEvent,
  ListViewTotalRecordsEvent,
} from './events';
export type { HalixListViewElement, HalixStandaloneDetailElement } from './element-declarations';
export type { ListViewConfig } from './list-view-config';

export const DETAIL_CONFIG_FIELDS = [
  'dataType',
  'dataElementId',
  'key',
  'title',
  'formTemplateKey',
  'formTemplateId',
  'fullObjectUrl',
  'saveUrl',
  'detailEventModule',
] as const;

export const LIST_VIEW_LOCATIONS = ['mainBody', 'other'] as const;

export const LIST_VIEW_CONFIG_FIELDS = [
  'dataType',
  'componentStateKey',
  'listLocation',
  'compact',
  'preselectedKeys',
] as const;

export const HALIX_ELEMENT_EVENT_NAMES = {
  listView: ['currentRecord', 'detailMode', 'totalRecords'],
  standaloneDetail: ['saved'],
} as const;

export const HALIX_ELEMENT_TAGS = [
  'halix-list-view',
  'halix-standalone-detail',
] as const;

export const HALIX_PLATFORM_ELEMENTS_VERSION = '1.0.8';

export function getHalixElementsSdkInfo() {
  return {
    packageName: '@halix/platform-elements-sdk-test',
    version: HALIX_PLATFORM_ELEMENTS_VERSION,
  };
}

export const HALIX_PLATFORM_ELEMENTS_SDK = {
  packageName: '@halix/platform-elements-sdk-test',
};
