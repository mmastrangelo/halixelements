/**
 * @description Configuration for the `halix-add-to-cart` web component.
 *
 * Import with:
 * `import '@halix/platform-elements-sdk';`
 *
 * Use this when a custom element should offer an object for purchase with no SDK code: the component renders a
 * button, adds the object to the platform shopping cart on click, and shows added and error states. Payments are
 * collected only through the cart. Elements that need their own button call `hx.addToCart` from the action SDK.
 *
 * Basic Lit usage:
 * `html\`<halix-add-to-cart .config=${addToCartConfig}></halix-add-to-cart>\``
 */
export interface AddToCartConfig {
  /**
   * Data element ID of the object to add.
   *
   * The element must be payable, which means it has `name` and a numeric `price`. The server rejects an object of
   * any other element, and the component shows the server's message.
   */
  dataElementId: string;

  /**
   * Key of the object to add.
   *
   * The price comes from the server, from this object's `price` or the sandbox pricing action; the config never
   * carries an amount. The server also rejects an object that is disabled or outside its open and close dates.
   */
  objKey: string;

  /**
   * Whole number of units to add. Defaults to 1.
   */
  quantity?: number;

  /**
   * Button label. Defaults to "Add to cart".
   */
  label?: string;

  /**
   * Optional form data stored on the cart line, such as the shopper's choices. It is not displayed in the cart; put
   * text the shopper should see in `displayInfo`.
   */
  formData?: Record<string, unknown>;

  /**
   * Optional plain-text lines the shopper sees on the cart row and the receipt, e.g. `['Reference: A-17']`.
   *
   * The server trims each line, drops empty ones, and rejects more than 5 lines, a line over 200 characters, or a line
   * with line breaks, control characters or angle brackets; the component shows the server's message.
   */
  displayInfo?: string[];
}
