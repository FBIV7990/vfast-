import { invoiceConstants } from "../constants";

export function invoices(state = {}, action) {
  switch (action.type) {
    case invoiceConstants.ADD_INVOICE_REQUEST:
      return { ...state, loading: true };
    case invoiceConstants.ADD_INVOICE_SUCCESS:
      return { ...state, invoice: action.invoice, loading: false };
    case invoiceConstants.ADD_INVOICE_FAILURE:
      return { ...state, error: action.error, loading: false };

    case invoiceConstants.GET_ALL_INVOICE_REQUEST:
      return { ...state, loading: true };
    case invoiceConstants.GET_ALL_INVOICE_SUCCESS:
      return { ...state, invoices: action.invoices, loading: false };
    case invoiceConstants.GET_ALL_INVOICE_FAILURE:
      return { ...state, error: action.error, loading: false };

    case invoiceConstants.GET_INVOICE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case invoiceConstants.GET_INVOICE_BY_ID_SUCCESS:
      return { ...state, invoice: action.invoice, loading: false };
    case invoiceConstants.GET_INVOICE_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case invoiceConstants.SET_SELECTED_INVOICE:
      const invoice =
        state.invoices &&
        state.invoices.find((invoices) =>
          invoices._id === action.id ? invoices : ""
        );
      return { ...state, selectedInvoice: invoice };

    default:
      return state;
  }
}
