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

export const HALIX_ELEMENT_EVENT_NAMES = {
  listView: ['currentRecord', 'detailMode', 'totalRecords'],
  standaloneDetail: ['saved'],
} as const;
