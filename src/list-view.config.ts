export type ListActionDisplay = 'buttons' | 'menu';
export type ListResourceType = 'filter' | 'display';
export type ListActionCategory = 'toolbar' | 'row' | 'selection';

/**
 * Operators supported by list action hide/disable conditions.
 *
 * These match the element-condition operators used by the underlying action controls.
 */
export type ListActionConditionOperator =
  | 'equals'
  | 'equal'
  | 'notEqual'
  | 'notEquals'
  | 'equalsIgnoreCase'
  | 'notEqualsIgnoreCase'
  | 'beginsWith'
  | 'endsWith'
  | 'contains'
  | 'notContains'
  | 'greaterThanOrEqualTo'
  | 'lessThanOrEqualTo'
  | 'lessThan'
  | 'greaterThan'
  | 'empty'
  | 'notEmpty';

/**
 * Condition used to hide or disable an action for a specific row.
 *
 * Conditions are evaluated against the current record. They are only meaningful for row/detail actions; toolbar and
 * multi-select actions do not have a row object available for condition evaluation.
 */
export interface ListActionCondition {
  source: string;
  operator: ListActionConditionOperator;
  value: string;
  booleanOperator?: 'and' | 'or';
}

/**
 * Shared display/runtime fields supported by list actions.
 *
 * The underlying framework runtime expects `name`, not `label`. `label` is included only as a compatibility alias for
 * builder-style authoring; the wrapper does not translate it, so AI-generated configs should always set `name`.
 */
export interface ListActionBase {
  id: string;
  name: string;
  icon?: string;
  requiredPrivs?: number[];
  forceButtonDisplay?: boolean;
  alwaysShowLabel?: boolean;
  showInDetail?: boolean;
  separator?: boolean;
  width?: string;

  /**
   * Compatibility alias for some builder-internal UIs.
   *
   * The runtime reads `name`, not `label`.
   */
  label?: string;
}

export interface ListConditionalActionConfig {
  hideCondition?: ListActionCondition[];
  disableCondition?: ListActionCondition[];
}

/**
 * Shared config for detail-launching add/open actions.
 *
 * The builder exposes only this subset even though the lower-level detail component supports additional parameters.
 */
export interface ListDetailActionConfig extends ListConditionalActionConfig {
  formTemplateKeys?: string[];
  autoSave?: boolean;
  hideListControls?: boolean;
}

/**
 * Detail config supported for row-level open actions.
 */
export interface ListRowDetailActionConfig extends ListDetailActionConfig {
  readOnly?: boolean;

  /**
   * Shows the print button inside the opened detail view.
   *
   * The builder UI currently labels this as "Print button". The runtime field consumed by the list detail wrapper is
   * `printForm`.
   */
  printForm?: boolean;
}

export interface ListDynamicModuleActionConfig<TModule extends string = string> extends ListConditionalActionConfig {
  dynamicModule: TModule;
  bypassFullObjectRetrieval?: boolean;
  purchasableElementId?: string;
}

export interface ListHttpGetActionConfig extends ListConditionalActionConfig {
  url: string;
}

/**
 * Config for the built-in list copy action.
 *
 * The wrapper/runtime do not synthesize `copyUrl`; manual configs must provide it.
 */
export interface ListCopyActionConfig extends ListConditionalActionConfig {
  copyUrl: string;
  allowMultiple?: boolean;
  dynamicModule?: 'ListViewMultiCopyModule';
}

export type ListToolbarActionId = 'add' | 'gridEdit' | 'printList' | 'import' | 'openInvoice';
export type ListRowActionId =
  | 'details'
  | 'detailsNewTab'
  | 'folders'
  | 'addToCart'
  | 'copy'
  | 'changeHistory'
  | 'openWorkflow'
  | 'modifyAccess';
export type ListSelectionActionId =
  | 'massEdit'
  | 'massDelete'
  | 'massDeleteEmptyList'
  | 'printForms'
  | 'assignPurchases'
  | 'sendPurchaseMessage'
  | 'notifyPeople'
  | 'massInitiateWorkflow'
  | 'refreshWorkflowInstances'
  | 'bypassWorkflowSteps';

export interface ListToolbarAddAction extends ListActionBase {
  id: 'add';
  actionType: 'add';
  actionConfig?: ListDetailActionConfig;
}

export interface ListToolbarGridEditAction extends ListActionBase {
  id: 'gridEdit';
  actionType: 'gridEdit';
}

export interface ListToolbarPrintListAction extends ListActionBase {
  id: 'printList';
  actionType: 'printList';
}

export interface ListToolbarImportAction extends ListActionBase {
  id: 'import';
  actionType: 'import';
}

export interface ListToolbarOpenInvoiceAction extends ListActionBase {
  id: 'openInvoice';
  actionType: 'dynamicModal';

  /**
   * Opens the sales-transaction admin detail modal.
   *
   * Builder availability: always offered in the toolbar action picker.
   *
   * Runtime restriction: the launched module expects sales-transaction context. Its opener handles either:
   * - a `SalesTransaction` object
   * - an object with `salesTransactionKey`
   *
   * Because toolbar actions are launched without a current row object in the standard list runtime, this action is not
   * generally safe for arbitrary `halix-list-view` usage unless the surrounding application provides compatible context.
   */
  actionConfig: ListDynamicModuleActionConfig<'SalesTransactionDetailAdminModule'>;
}

export interface ListRowDetailsAction extends ListActionBase {
  id: 'details';
  actionType: 'details';
  actionConfig?: ListRowDetailActionConfig;
}

export interface ListRowDetailsNewTabAction extends ListActionBase {
  id: 'detailsNewTab';
  actionType: 'detailsNewTab';
  actionConfig?: ListRowDetailActionConfig;
}

export interface ListRowFoldersAction extends ListActionBase {
  id: 'folders';
  actionType: 'folders';
  actionConfig?: ListConditionalActionConfig;
}

export interface ListRowAddToCartAction extends ListActionBase {
  id: 'addToCart';
  actionType: 'dynamicModal';
  actionConfig: ListDynamicModuleActionConfig<'AddPurchasableToCartModule'>;
}

export interface ListRowCopyAction extends ListActionBase {
  id: 'copy';
  actionType: 'copy';
  actionConfig: ListCopyActionConfig;
}

export interface ListRowChangeHistoryAction extends ListActionBase {
  id: 'changeHistory';
  actionType: 'dynamicModal';

  /**
   * Opens the change-history modal for the current row.
   *
   * Builder availability: only offered when the list's root data element has `enableChangeLogging` enabled in the data
   * model. If that metadata is not enabled, the platform builder does not surface this action.
   */
  actionConfig: ListDynamicModuleActionConfig<'ChangeHistoryModule'>;
}

export interface ListRowOpenWorkflowAction extends ListActionBase {
  id: 'openWorkflow';
  actionType: 'dynamicModal';

  /**
   * Opens the workflow wizard for a workflow-instance row.
   *
   * Builder availability: only offered when `dataElementId === 'workflowInstance'`.
   */
  actionConfig: ListDynamicModuleActionConfig<'WorkflowWizardModule'>;
}

export interface ListRowModifyAccessAction extends ListActionBase {
  id: 'modifyAccess';
  actionType: 'dynamicModal';

  /**
   * Opens proxy-access management for the current row.
   *
   * Builder availability: only offered when the list's root data element is marked `userProxy` in the data model.
   *
   * Runtime expectation: the row represents a user-proxy record that can be managed through the proxy-access flow.
   */
  actionConfig: ListDynamicModuleActionConfig<'ProxyAccessModule'>;
}

export interface ListSelectionMassEditAction extends ListActionBase {
  id: 'massEdit';
  actionType: 'massEdit';
}

export interface ListSelectionMassDeleteAction extends ListActionBase {
  id: 'massDelete';
  actionType: 'massDelete';
}

export interface ListSelectionMassDeleteEmptyListAction extends ListActionBase {
  id: 'massDeleteEmptyList';
  actionType: 'massDeleteEmptyList';
}

export interface ListSelectionPrintFormsAction extends ListActionBase {
  id: 'printForms';
  actionType: 'printForms';
}

export interface ListSelectionAssignPurchasesAction extends ListActionBase {
  id: 'assignPurchases';
  actionType: 'dynamicModal';

  /**
   * Runtime config for the assign-purchases modal.
   *
   * The builder UI currently edits this via a field labeled "Purchasable item element"; the runtime field name used by
   * the modal is `purchasableElementId`.
   */
  actionConfig: ListDynamicModuleActionConfig<'AssignPurchaseModule'> & {
    purchasableElementId: string;
  };
}

export interface ListSelectionSendPurchaseMessageAction extends ListActionBase {
  id: 'sendPurchaseMessage';
  actionType: 'dynamicModal';

  /**
   * Sends a message to the selected purchase assignments.
   *
   * Builder availability: only offered when the underlying list element ID is `purchaseAssignment`.
   */
  actionConfig: ListDynamicModuleActionConfig<'SendPurchaseMessageModule'>;
}

export interface ListSelectionNotifyPeopleAction extends ListActionBase {
  id: 'notifyPeople';
  actionType: 'dynamicModal';

  /**
   * Sends a group/ad-hoc message to the selected records.
   *
   * Builder availability: only offered when the list's root data element is marked `userProxy` in the data model.
   *
   * Runtime expectation: selection keys identify recipients of the current list's data element type. The messaging
   * module infers the recipient element from the current component resource context.
   */
  actionConfig: ListDynamicModuleActionConfig<'WebappNotifyMultipleModule'>;
}

export interface ListSelectionMassInitiateWorkflowAction extends ListActionBase {
  id: 'massInitiateWorkflow';
  actionType: 'dynamicModal';

  /**
   * Launches workflow initiation for the selected records.
   *
   * Builder availability: only offered when the list's root data element is marked `userProxy` in the data model.
   */
  actionConfig: ListDynamicModuleActionConfig<'MassInitiateWorkflowsModule'>;
}

export interface ListSelectionRefreshWorkflowInstancesAction extends ListActionBase {
  id: 'refreshWorkflowInstances';
  actionType: 'httpGet';

  /**
   * Refreshes the currently visible workflow instances through a workflow-specific HTTP endpoint.
   *
   * Builder availability: only offered when the underlying list element ID is `workflowInstance`.
   */
  actionConfig: ListHttpGetActionConfig & {
    url: '/workflows/sandboxes/:sandboxKey/workflowInstances/:organizationKey';
  };
}

export interface ListSelectionBypassWorkflowStepsAction extends ListActionBase {
  id: 'bypassWorkflowSteps';
  actionType: 'dynamicModal';

  /**
   * Opens the workflow-step bypass flow for the selected workflow instances.
   *
   * Builder availability: only offered when the underlying list element ID is `workflowInstance`.
   */
  actionConfig: ListDynamicModuleActionConfig<'WorkflowBypassStepsModule'>;
}

type ListDataElementConditionalRowAction<TDataElementId extends string> =
  TDataElementId extends 'workflowInstance' ? ListRowOpenWorkflowAction : never;

type ListDataElementConditionalSelectionAction<TDataElementId extends string> =
  | (TDataElementId extends 'workflowInstance'
      ? ListSelectionRefreshWorkflowInstancesAction | ListSelectionBypassWorkflowStepsAction
      : never)
  | (TDataElementId extends 'purchaseAssignment' ? ListSelectionSendPurchaseMessageAction : never);

/**
 * Escape hatch for non-standard or currently unmodelled actions.
 *
 * Prefer one of the category-specific action interfaces above when using a standard system action, since those capture
 * the expected `actionType` and action-specific config shape.
 */
export interface ListCustomAction extends ListActionBase {
  actionType: string;
  actionConfig?: Record<string, unknown>;
}

export type ListToolbarAction =
  | ListToolbarAddAction
  | ListToolbarGridEditAction
  | ListToolbarPrintListAction
  | ListToolbarImportAction
  | ListToolbarOpenInvoiceAction
  | ListCustomAction;

export type ListRowAction =
  | ListRowDetailsAction
  | ListRowDetailsNewTabAction
  | ListRowFoldersAction
  | ListRowAddToCartAction
  | ListRowCopyAction
  | ListRowChangeHistoryAction
  | ListRowModifyAccessAction
  | ListCustomAction;

export type ListSelectionAction =
  | ListSelectionMassEditAction
  | ListSelectionMassDeleteAction
  | ListSelectionMassDeleteEmptyListAction
  | ListSelectionPrintFormsAction
  | ListSelectionAssignPurchasesAction
  | ListSelectionNotifyPeopleAction
  | ListSelectionMassInitiateWorkflowAction
  | ListCustomAction;

/**
 * Union of all list action shapes accepted by this SDK.
 *
 * Prefer the category-specific `ListToolbarAction`, `ListRowAction`, and `ListSelectionAction` aliases where possible.
 */
export type ListLaunchableAction = ListToolbarAction | ListRowAction | ListSelectionAction;

/**
 * Grouped toolbar menu rendered as a single icon button.
 *
 * Only toolbar-compatible actions should be included in `actions`.
 */
export interface ListActionMenu {
  icon: string;
  actions: ListToolbarAction[];
  requiredPrivs?: number[];
}

export interface ListResource {
  id: string;
  name: string;
  hidden?: boolean;
  costly?: boolean;
  resourceType: ListResourceType;
  system: boolean;
  type?: string;
  details?: string;
}

export interface ListViewColumns extends ListResource {
  resourceType: 'display';
  display: string;
  sort: string;
  system: boolean;
  listDisplay?: unknown;
  listId?: string;
}

export interface ListViewFilter {
  id: string;
  name: string;
  filter: string;
  columnSetId?: string;
}

export interface ListViewConfig<TDataElementId extends string = string> {
  /**
   * Stable per-list state key used by the runtime to cache list state and persist user preferences such as the
   * active display/filter and column widths.
   *
   * If omitted, the wrapper derives `list-${dataElementId}`. Reusing the same key across different logical lists
   * will also reuse their persisted state, so AI-generated configs should set this explicitly when multiple list
   * instances target the same data element but should not share preferences.
   */
  componentStateKey?: string;

  /**
   * Enables the list's compact mode.
   *
   * This is a wrapper/container input rather than part of the core list config. In current framework behavior it
   * mainly affects layout sizing and card presentation behavior; for example, card view disables infinite scroll
   * when compact mode is true.
   */
  compact?: boolean;

  /**
   * Record keys that should be marked as selected after the list finishes initializing.
   *
   * This seeds the selection service once on load; it does not change the list filter or force those records to be
   * visible if they are outside the current result set.
   */
  preselectedKeys?: string[];

  /**
   * Root data element to query.
   *
   * The public type keeps this optional for backwards compatibility, but the wrapper throws if it is missing or
   * blank. Treat this as required.
   */
  dataElementId?: TDataElementId;

  /**
   * Optional parent data element that constrains the list's scope.
   *
   * Use this when the list should show records related to a parent record through either a foreign-key relationship
   * or a child-key-set relationship. If omitted, the list will show all records accessible to the current user in the
   * current navigation context.
   */
  parentDataElementId?: string;

  /**
   * Describes how the parent key should be resolved for `parentDataElementId`.
   *
   * The framework supports system-driven sources such as parent/grandparent/session tokens and a `literal` mode.
   * When using `literal`, also provide `literalParentKey`.
   */
  parentKeySource?: string;

  /**
   * Literal parent key value to use when `parentKeySource` is `literal`.
   *
   * This is ignored for other parent key source modes.
   */
  literalParentKey?: string;

  /**
   * Overrides the default inferred foreign-key field name on the child/root element.
   *
   * Only needed when the relationship does not follow the framework's normal `[parent]Key` naming convention.
   */
  parentKeyField?: string;

  /**
   * Name of a server-side custom data source used instead of the framework's default list retrieval behavior.
   *
   * The backing custom provider must exist on the platform services side; otherwise the runtime falls back to the
   * normal list retrieval logic.
   */
  customDataSource?: string;

  /**
   * Additional system-token-derived parameters for `customDataSource`.
   *
   * Provide either:
   * - an array when the custom data source parameter names are the same as the token names
   * - a map when the expected parameter names differ from the token names
   */
  customDataSourceParams?: string[] | { [param: string]: string };

  /**
   * System-defined display sets available in the list.
   *
   * The wrapper supplies an empty array when omitted, but a usable list normally needs at least one display
   * definition. In the underlying list system, the first entry is the default display and should usually be the most
   * performant option.
   */
  columns?: ListViewColumns[];

  /**
   * System-defined filters available in the list's filter resources.
   *
   * The wrapper supplies an empty array when omitted.
   */
  filters?: ListViewFilter[];

  /**
   * Hides the header row.
   *
   * In current framework templates this primarily affects the simple-list presentation. It does not broadly remove
   * every toolbar or title element in other presentations.
   */
  hideHeader?: boolean;

  /**
   * Controls how row actions are rendered.
   *
   * `buttons` shows individual action buttons. `menu` groups row actions behind a single menu trigger. The wrapper
   * defaults this to `buttons` when omitted.
   */
  actionDisplay?: ListActionDisplay;

  /**
   * Toolbar-level actions available for the list as a whole.
   *
   * These power the main action area above the list. Some built-in action types, such as `add`, have special runtime
   * behavior. For example, in grid edit mode an `add` action triggers inline row creation unless `disableInlineAdd`
   * is true.
   *
   * Some standard toolbar actions are context-sensitive. For example, `openInvoice` is builder-supported but its
   * runtime modal expects sales-transaction context and is not a safe generic choice for arbitrary lists.
   */
  toolbarActions?: (ListToolbarAction | ListActionMenu)[];

  /**
   * Actions intended to operate on the current multi-selection.
   *
   * These drive the selection toolbar/menu. In read-only mode, mutating built-in selection actions such as mass edit
   * and mass delete are suppressed by the grid presentation.
   *
   * Several predefined selection actions are only valid for specific list metadata. Examples:
   * - `notifyPeople` and `massInitiateWorkflow` require a root data element marked `userProxy`
   * - `sendPurchaseMessage` requires the underlying list element ID `purchaseAssignment`
   * - `refreshWorkflowInstances` and `bypassWorkflowSteps` require the underlying list element ID `workflowInstance`
   *
   * Compile-time note: this SDK enforces the `purchaseAssignment` and `workflowInstance` cases when `dataElementId`
   * is provided as a string literal type.
   */
  selectionActions?: (ListSelectionAction | ListDataElementConditionalSelectionAction<TDataElementId>)[];

  /**
   * Actions available per row/record.
   *
   * These render either as buttons or a row menu based on `actionDisplay`. They are also passed into the detail
   * wrapper when a row action opens detail mode.
   *
   * Several predefined row actions are only valid for specific list metadata. Examples:
   * - `changeHistory` requires a root data element with `enableChangeLogging`
   * - `openWorkflow` requires `dataElementId === 'workflowInstance'`
   * - `modifyAccess` requires a root data element marked `userProxy`
   *
   * Compile-time note: this SDK enforces the `workflowInstance` case when `dataElementId` is provided as a string
   * literal type.
   */
  rowActions?: (ListRowAction | ListDataElementConditionalRowAction<TDataElementId>)[];

  /**
   * Custom confirmation text shown when deleting from detail mode.
   *
   * This does not itself enable delete behavior; it only changes the warning message used by delete-capable flows.
   */
  deleteWarning?: string;

  /**
   * Explicit width, in pixels, for the grid command column that contains row actions.
   *
   * If omitted, the runtime calculates command column width from the rendered actions.
   */
  commandColumnWidthOverride?: number;

  /**
   * Hides folder controls and prevents the left folder pane from being shown.
   *
   * In the underlying list UI this also indirectly prevents users from creating filters through folder-related list
   * resource affordances.
   */
  hideFolders?: boolean;

  /**
   * Hides the selection action toolbar and also removes the selection checkbox column.
   *
   * This is most relevant to the grid presentation.
   */
  hideActionToolbar?: boolean;

  /**
   * Hides only the selection toolbar icon/launcher while leaving the selection checkboxes available.
   *
   * Use this when the list still needs row selection for some other integration but should not show the standard
   * selection action affordance.
   */
  hideActionToolbarIcon?: boolean;

  /**
   * Hides the display-set chooser used to switch visible columns.
   *
   * This affects the grid presentation's display dropdown/menu.
   */
  hideDisplays?: boolean;

  /**
   * Hides the export option from the import/export menu.
   *
   * This does not remove custom toolbar actions such as import; those are controlled by `toolbarActions`.
   */
  hideExport?: boolean;

  /**
   * Hides the navigation buttons normally shown on child/grandchild sub-lists.
   *
   * This is only relevant when the list is being used in those nested navigation contexts.
   */
  hideNavButtons?: boolean;

  /**
   * Extra root-element properties or related properties to fetch with each row.
   *
   * By default, the list fetch only includes fields needed for the active display, sort, and filter. Use this when
   * actions or custom rendering need additional data that is not otherwise part of the fetch.
   */
  additionalPropertiesToFetch?: string[];

  /**
   * Disables inline row creation in grid edit mode.
   *
   * This is useful when a custom save path or other business logic means new records must go through a normal action
   * flow instead of the grid's direct add-row behavior.
   */
  disableInlineAdd?: boolean;

  /**
   * Prevents the grid presentation from expanding to consume the full available height.
   *
   * This is primarily a layout flag for embedded or constrained list placements.
   */
  collapsedHeight?: boolean;

  /**
   * Hides the toolbar area in presentations that render one.
   *
   * In current templates this is used by the card and simple-list presentations. It is not the main control for the
   * grid toolbar.
   */
  hideToolbar?: boolean;

  /**
   * Wraps cell text instead of truncating it.
   *
   * In the current framework templates this is implemented by the simple-list presentation.
   */
  wrapText?: boolean;

  /**
   * Hides column-management controls such as add/remove-column affordances.
   *
   * In the current framework templates this is implemented by the simple-list presentation.
   */
  hideColumnControls?: boolean;

  /**
   * Marks the list as read-only.
   *
   * The runtime uses this to suppress editing-oriented UI such as add/grid-edit actions and to pass read-only mode
   * into launched detail flows. Read-only does not remove non-mutating actions automatically.
   */
  readOnly?: boolean;
}
