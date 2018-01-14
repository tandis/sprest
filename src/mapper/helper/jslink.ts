/**
 * JSLink Helper Methods
 */
export interface IJSLink {
    /**
     * Internal field to method mapper
     */
    _fieldToMethodMapper: any;

    /**
     * Internal field used by the hideField method.
     */
    _hideEventFl: boolean;

    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    disableEdit(ctx: any, field: any, requireValueFl?: boolean): string;

    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    disableQuickEdit(ctx: any, field: any);

    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    getListView(ctx: any);

    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    getListViewItems(ctx: any);

    /**
     * Returns the selected list view items
     */
    getListViewSelectedItems();

    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    getWebPart(ctx);

    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    hideField(ctx: any, field: any);

    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    removeField(ctx: any, field: any);

    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    renderField(ctx, field, formType?: number);
}