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
