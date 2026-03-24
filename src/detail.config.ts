/**
 * @description Configuration for the `halix-standalone-detail` web component.
 *
 * Import with:
 * `import '@halix/platform-elements-sdk';`
 *
 * Use this when you want the platform's standard metadata-driven record detail
 * or form experience instead of building the full form yourself.
 *
 * Basic Lit usage:
 * `html\`<halix-standalone-detail .config=${detailConfig}></halix-standalone-detail>\``
 */
export interface DetailConfig {
  /**
   * Object type code used when resolving the current object from session context.
   *
   * This matters primarily when `key` is omitted. The standalone-detail runtime calls
   * `session.getCurrentObject(dataType, dataElementId)` and uses that object's key if one is found.
   */
  dataType: string;

  /**
   * Root data element edited by the detail.
   *
   * This is required by the underlying detail runtime and is used both to look up metadata and to initialize the
   * common detail component.
   */
  dataElementId: string;

  /**
   * Key of the record to edit.
   *
   * If omitted, the runtime tries to resolve the current object from session context using `dataType` and
   * `dataElementId`. If neither a `key` nor a matching current object is available, the detail behaves like a new/add
   * detail.
   */
  key?: string;

  /**
   * Optional modal title.
   *
   * This is used when the framework opens the standalone detail in `StandaloneDetailModalComponent`. It is not rendered
   * by the embedded `halix-standalone-detail` web component itself.
   */
  title?: string;

  /**
   * Form template key to use for rendering.
   *
   * This is forwarded to the underlying standalone-detail runtime as the sole supported template selector in this SDK.
   */
  formTemplateKey?: string;
}
