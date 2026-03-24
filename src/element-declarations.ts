import type { AttributeInputConfig } from './attribute-input.config';
import type { DetailConfig } from './detail.config';
import type { GatewayPaymentConfig } from './gateway-payment.config';
import type {
  AttributeInputFocusChangeEvent,
  AttributeInputObjectChangeEvent,
  AttributeInputValueChangeEvent,
  DetailSavedEvent,
  GatewayPaymentBillingInfoEvent,
  GatewayPaymentPreauthEvent,
  ListViewCurrentRecordEvent,
  ListViewDetailModeEvent,
  ListViewTotalRecordsEvent,
} from './events';
import type { ListViewConfig } from './list-view.config';

export type HalixAttributeInputElement = HTMLElement & {
  config: AttributeInputConfig;
  addEventListener(
    type: 'objectChange',
    listener: (e: CustomEvent<AttributeInputObjectChangeEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'valueChange',
    listener: (e: CustomEvent<AttributeInputValueChangeEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'focusChange',
    listener: (e: CustomEvent<AttributeInputFocusChangeEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'enter',
    listener: (e: CustomEvent<void>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
};

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

export type HalixGatewayPaymentElement = HTMLElement & {
  config: GatewayPaymentConfig;
  addEventListener(
    type: 'gatewayPreauth',
    listener: (e: CustomEvent<GatewayPaymentPreauthEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'billingUpdated',
    listener: (e: CustomEvent<GatewayPaymentBillingInfoEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'paymentValidity',
    listener: (e: CustomEvent<boolean>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'savedPaymentMethods',
    listener: (e: CustomEvent<boolean>) => void,
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
    'halix-attribute-input': HalixAttributeInputElement;
    'halix-gateway-payment': HalixGatewayPaymentElement;
    'halix-list-view': HalixListViewElement;
    'halix-standalone-detail': HalixStandaloneDetailElement;
  }
}
