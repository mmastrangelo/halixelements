export type GatewayPaymentMethod = 'bankAccount' | 'creditCardOrOther';
export type GatewayPaymentAchMode = 'default' | 'achOnly' | 'noAch';

/**
 * Billing info shape accepted as `defaultBillingInfo`.
 *
 * In real framework usage this is usually the current payer object, not necessarily always the current session user.
 * `session.userProxy` is a common choice for user-scoped flows, but account/member/client flows often pass the
 * account owner, payer, or other billable client object instead.
 *
 * The public wrapper surface intentionally exposes only the flat billing fields below. The underlying framework
 * component is more permissive internally, but AI/user-authored configs should provide the normalized flat shape.
 */
export interface GatewayPaymentDefaultBillingInfo {
  name?: string;
  firstName?: string;
  lastName?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
  emailAddress?: string;
  paymentSystemIds?: { [merchantKey: string]: string };
}

export interface GatewayPaymentConfig {
  /**
   * Base purchase amount before any processing fee is added.
   *
   * A falsy amount causes the underlying component to render no payment UI, so AI-generated configs should treat this
   * as required and provide a positive number.
   */
  amount: number;

  /**
   * Enables the compact/vertical layout variant.
   */
  compact?: boolean;

  /**
   * Timestamp-like value used by the underlying payment subcomponents when deciding whether to reload payment state.
   *
   * This is passed through as-is.
   */
  loadTime?: number;

  /**
   * Payee key for the payment.
   *
   * If omitted, the wrapper defaults to the current session organization proxy key, falling back to
   * `session.organizationProxy?.objKey` when needed.
   */
  payeeKey?: string;

  /**
   * Controls whether ACH/bank-account payment is allowed.
   *
   * - `default`: card and ACH are both allowed
   * - `achOnly`: bank account only
   * - `noAch`: card/other only
   */
  achMode?: GatewayPaymentAchMode;

  /**
   * Payer key for the payment.
   *
   * If omitted, the wrapper defaults to the current session user proxy key.
   */
  payerKey?: string;

  /**
   * Enables the small-modal layout mode used by some payment subcomponents.
   */
  smallModal?: boolean;

  /**
   * Requires the user to save the entered payment method when supported by the active gateway.
   */
  requirePmtMethodSave?: boolean;

  /**
   * Custom label for the "save payment method" affordance when supported by the active gateway.
   */
  customPmtSaveLabel?: string;

  /**
   * Hides previously saved/vaulted payment methods.
   */
  hideSavedPaymentMethods?: boolean;

  /**
   * Default billing/contact information used to pre-populate payment billing fields.
   *
   * Typically this should be the current payer object. `session.userProxy` is common when the current user is paying
   * for themself, but many existing flows instead pass the actual account owner, payer, or client being billed.
   *
   * Use the flat `GatewayPaymentDefaultBillingInfo` shape exposed here.
   */
  defaultBillingInfo?: GatewayPaymentDefaultBillingInfo;

  /**
   * Shows the payment header above the purchase/fee summary.
   */
  showHeader?: boolean;

  /**
   * Optional externally controlled payment method selection.
   *
   * If omitted, the underlying component manages the active method internally.
   */
  paymentMethod?: GatewayPaymentMethod;
}
