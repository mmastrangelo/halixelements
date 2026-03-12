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
- typed event payload interfaces for emitted custom events

## License

This SDK is source-available for use with the Halix platform.
