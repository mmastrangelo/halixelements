/**
 * @description Typed DOM declarations for the Halix Elements SDK custom elements.
 *
 * This module covers the five exported element tags:
 * - `halix-list-view`
 * - `halix-standalone-detail`
 * - `halix-attribute-input`
 * - `halix-gateway-payment`
 * - `halix-add-to-cart`
 *
 * Import with:
 * `import '@halix/platform-elements-sdk';`
 *
 * Use this module when you need the typed element interfaces and event payloads
 * associated with the SDK's prebuilt Halix web components.
 */
import type { AddToCartConfig } from './add-to-cart.config';
import type { AttributeInputConfig } from './attribute-input.config';
import type { DetailConfig } from './detail.config';
import type { GatewayPaymentConfig } from './gateway-payment.config';
import type {
  AddToCartErrorEvent,
  AddToCartItemAddedEvent,
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

/**
 * `halix-add-to-cart` adds one object of a payable data element to the platform shopping cart. The object must
 * belong to a payable element and the price comes from the server.
 */
export type HalixAddToCartElement = HTMLElement & {
  config: AddToCartConfig;
  addEventListener(
    type: 'cartItemAdded',
    listener: (e: CustomEvent<AddToCartItemAddedEvent>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: 'cartError',
    listener: (e: CustomEvent<AddToCartErrorEvent>) => void,
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
    'halix-add-to-cart': HalixAddToCartElement;
    'halix-attribute-input': HalixAttributeInputElement;
    'halix-gateway-payment': HalixGatewayPaymentElement;
    'halix-list-view': HalixListViewElement;
    'halix-standalone-detail': HalixStandaloneDetailElement;
  }
}
