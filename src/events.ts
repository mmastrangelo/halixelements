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

export type AttributeInputObjectChangeEvent = Record<string, unknown>;

export type AttributeInputValueChangeEvent = unknown;

export type AttributeInputFocusChangeEvent = unknown;

export interface GatewayPaymentBillingInfoEvent {
  firstName: string;
  lastName: string;
  company?: string;
  streetAddress: string;
  extendedAddress?: string;
  locality: string;
  region: string;
  postalCode: string;
  country?: string;
  paymentSystemIds?: { [merchantKey: string]: string };
  vaulted?: boolean;
  paymentType?: string;
  cardType?: string;
  cardLastTwo?: string;
  nonce?: string;
  paymentMethodToken?: string;
}

export interface GatewayPaymentEntryEvent {
  paymentGateway(): string;
  billingInfo(): GatewayPaymentBillingInfoEvent;
}

export interface GatewayPaymentPreauthEvent {
  paymentEntry?: GatewayPaymentEntryEvent;
  paymentMethod?: 'bankAccount' | 'creditCardOrOther';
  processingFee?: number;
  totalAmount?: number;
  waiveFee?: boolean;
}
