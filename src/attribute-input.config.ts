/**
 * @description Configuration for the `halix-attribute-input` web component.
 *
 * Import with:
 * `import '@halix/platform-elements-sdk';`
 *
 * Use this when you want a single metadata-driven field renderer that respects
 * Halix attribute types, validation rules, formatting, and codesets.
 *
 * Basic Lit usage:
 * `html\`<halix-attribute-input .config=${fieldConfig}></halix-attribute-input>\``
 *
 * This is a thin wrapper around the platform's metadata-driven attribute input renderer. The runtime resolves the
 * attribute metadata from `dataElementId` plus `attributeId` and then chooses the actual control to render from that
 * metadata and the attribute's resolved format.
 */
export interface AttributeInputConfig {
  /**
   * Object being edited.
   *
   * The underlying component mutates this object in place when values change and then emits both the updated object and
   * the current field value. AI-generated usage should almost always provide an object so edits land on the intended
   * record.
   */
  object?: Record<string, unknown>;

  /**
   * Root data element used to resolve attribute metadata.
   *
   * This does not just label the object type; it drives metadata lookup through the property service and therefore
   * determines the rendered control, formatting, required/read-only rules, and code-set behavior.
   */
  dataElementId: string;

  /**
   * Optional root attribute path used when the edited attribute lives under a nested object.
   *
   * This affects metadata lookup only. The edited value still comes from `attributeId`.
   */
  rootAttributeId?: string;

  /**
   * Attribute path to read from and write back to on `object`.
   */
  attributeId: string;

  /**
   * Renders the field read-only.
   *
   * The underlying component may also force read-only when the attribute metadata itself is read-only.
   */
  readOnly?: boolean;

  /**
   * Forces the required state even if the metadata does not mark the attribute required.
   */
  forcedRequired?: boolean;

  /**
   * Applies error styling.
   *
   * This is visual state only; it does not perform validation by itself.
   */
  error?: boolean;

  /**
   * Enables condensed rendering where supported.
   *
   * In practice this mainly affects some read-only layouts rather than changing field semantics.
   */
  condensed?: boolean;

  /**
   * Requests shorter/smaller input controls where supported by the rendered input type.
   */
  reduceFieldHeight?: boolean;

  /**
   * Tab index forwarded to the rendered control.
   */
  tabIndex?: number;

  /**
   * Placeholder text for input types that support placeholders.
   */
  placeholder?: string;

  /**
   * Disables browser autocapitalization for input types that support it.
   */
  disableAutocapitalize?: boolean;

  /**
   * Allows editing even when the resolved attribute metadata is read-only.
   *
   * The underlying component uses this for cases like transient filter values that want an attribute's rendering rules
   * without honoring its persisted read-only restriction.
   */
  forceEditable?: boolean;

  /**
   * Optional manual width class for the rendered control.
   *
   * If omitted, the runtime derives an input width from the attribute metadata when possible.
   */
  inputWidthClass?: string;

  /**
   * Overrides the configured row count for textarea-style inputs.
   */
  rowsOverride?: string;

  /**
   * Optional label rendered after the control.
   *
   * This is especially useful for checkbox-like inputs where the post-label acts like inline descriptive text.
   */
  postLabel?: string;

  /**
   * Format-specific display options.
   *
   * This is a loose pass-through used by certain rendered input types such as radio/image variants. Shape and effect
   * depend on the resolved underlying control.
   */
  displayStyle?: unknown;
}
