import { invoiceConstants } from "../constants";
import { invoiceService } from "../services";
import { alertActions } from "./index";
import { ToastsStore } from "react-toasts";

export const invoiceActions = {
  getAll,
  add,
  clear,
  getById,
};

function add(data) {
  return (dispatch) => {
    dispatch(request());

    invoiceService.add(data).then(
      (invoice) => {
        dispatch(success(invoice));
        dispatch(alertActions.success("Info loaded."));
        ToastsStore.success("Info loaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        ToastsStore.warning(" Error in Info loading.!");
      }
    );
  };

  function request() {
    return { type: invoiceConstants.ADD_INVOICE_REQUEST };
  }
  function success(invoice) {
    return { type: invoiceConstants.ADD_INVOICE_SUCCESS, invoice };
  }
  function failure(error) {
    return { type: invoiceConstants.ADD_INVOICE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    invoiceService.getAll().then(
      (data) => {
        if (data.success) {
          dispatch(alertActions.success("Invoice loaded."));
          dispatch(success(data.invoices));
        } else dispatch(failure("Error in loading invoices"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: invoiceConstants.GET_ALL_INVOICE_REQUEST };
  }
  function success(invoices) {
    return {
      type: invoiceConstants.GET_ALL_INVOICE_SUCCESS,
      invoices: invoices,
    };
  }
  function failure(error) {
    return { type: invoiceConstants.GET_ALL_INVOICE_FAILURE, error };
  }
}

function getById(id) {
  return (dispatch) => {
    dispatch(request());

    invoiceService.getById(id).then(
      (data) => {
        console.log(data.invoice);
        dispatch(alertActions.success("Invoice loaded."));
        dispatch(success(data.invoice));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: invoiceConstants.GET_INVOICE_BY_ID_REQUEST };
  }
  function success(invoice) {
    return { type: invoiceConstants.GET_INVOICE_BY_ID_SUCCESS, invoice };
  }
  function failure(error) {
    return { type: invoiceConstants.GET_INVOICE_BY_ID_FAILURE, error };
  }
}

function clear() {
  return { type: invoiceConstants.CLEAR };
}
