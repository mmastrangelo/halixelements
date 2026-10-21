# Halix Elements SDK

The **Halix Platform Elements SDK** (`@halix/platform-elements-sdk`) provides the public TypeScript types used by Halix custom elements when interacting with Halix-provided web components such as list views and standalone details.

This package is intentionally thin. It contains only erased-at-compile-time TypeScript types and ships no proprietary framework or Angular runtime code.

## Installation

```bash
npm install @halix/platform-elements-sdk
```

## Usage

```ts
import type { ListViewConfig, DetailConfig } from '@halix/platform-elements-sdk';

const listConfig: ListViewConfig = {
  dataType: 'Member',
  componentStateKey: 'member-list',
  listLocation: 'mainBody'
};

const detailConfig: DetailConfig = {
  dataType: 'Member',
  dataElementId: 'Member'
};
```

## Package Contents

- `ListViewConfig`: config for `halix-list-view`
- `DetailConfig`: config for `halix-standalone-detail`
- `AddToCartConfig`: config for `halix-add-to-cart`
- typed event payload interfaces for emitted custom events

## Add to cart

`halix-add-to-cart` renders a button that adds one object to the platform shopping cart, and shows added and error states. The object must belong to a payable data element (one with `name` and a numeric `price`), and the price comes from the server. Payments are collected only through the cart.

```ts
import type { AddToCartConfig } from '@halix/platform-elements-sdk';

const addToCartConfig: AddToCartConfig = {
  dataElementId: 'eventTicket',
  objKey: ticket.objKey,
  quantity: 1,
  label: 'Buy ticket'
};

html`<halix-add-to-cart
  .config=${addToCartConfig}
  @cartItemAdded=${(e) => console.log(e.detail.items)}
  @cartError=${(e) => console.warn(e.detail)}
></halix-add-to-cart>`;
```

`cartItemAdded` carries the cart and its items after the add; `cartError` carries the message shown beside the button, which is the server's reason when the cart rejects the object. Elements that need their own button call `hx.addToCart` from `@halix/action-sdk`.

## License

This SDK is source-available for use with the Halix platform.
