export interface TestPayload {
  message: string;
  version: string;
}

export const TEST_VERSION = '1.0.1';

export const TEST_CONSTANTS = {
  packageName: 'halix-platform-elements-sdk-test-unscoped',
  hello: 'world',
} as const;

export function getTestPayload(): TestPayload {
  return {
    message: 'hello',
    version: TEST_VERSION,
  };
}

export function addNumbers(a: number, b: number): number {
  return a + b;
}
