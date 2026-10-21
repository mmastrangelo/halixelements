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

/**
 * Detail of `cartItemAdded` from `halix-add-to-cart`: the cart the object was added to and the cart's items
 * after the add, with server-computed prices.
 */
export interface AddToCartItemAddedEvent {
  cart: { objKey: string; [key: string]: unknown };
  items: Array<{
    shoppingCartItem: { objKey: string; itemKey: string; itemQuantity: number; calculatedPrice: number; [key: string]: unknown };
    name: string;
    [key: string]: unknown;
  }>;
}

/**
 * Detail of `cartError` from `halix-add-to-cart`: the message shown beside the button, which is the server's
 * reason when the cart rejected the object.
 */
export type AddToCartErrorEvent = string;
