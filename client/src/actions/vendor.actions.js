import { vendorConstants } from "../constants";
import { vendorService } from "../services";
import { alertActions } from "./index";
import { ToastsContainer, ToastsStore } from "react-toasts";

export const vendorActions = {
  getRates,
  addRates,
  updateRates,
  getAll,
  getById,
  getByState,
  clear,
  create,
  editVendor,
};

function getRates() {
  return (dispatch) => {
    dispatch(request());

    vendorService.get_rates().then(
      (result) => {
        if (result.success) {
          dispatch(success(result.vendors));
          dispatch(alertActions.success(result.message));
        } else {
          dispatch(failure(result.message));
          dispatch(alertActions.error(result.message));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: vendorConstants.GET_RATES_REQUEST };
  }
  function success(vendors) {
    return { type: vendorConstants.GET_RATES_SUCCESS, vendors };
  }
  function failure(error) {
    return { type: vendorConstants.GET_RATES_FAILURE, error };
  }
}

function getByState(state) {
  return (dispatch) => {
    dispatch(request());

    vendorService.getByState(state).then(
      (result) => {
        if (result.success) {
          dispatch(success(result.vendors));
          dispatch(alertActions.success(result.message));
        } else {
          dispatch(failure(result.message));
          dispatch(alertActions.error(result.message));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: vendorConstants.GET_RATES_BY_STATE_REQUEST };
  }
  function success(vendors) {
    return { type: vendorConstants.GET_RATES_BY_STATE_SUCCESS, vendors };
  }
  function failure(error) {
    return { type: vendorConstants.GET_RATES_BY_STATE_FAILURE, error };
  }
}

function addRates(data) {
  return (dispatch) => {
    dispatch(request());

    vendorService.add_rates(data).then(
      (result) => {
        if (result.success) {
          dispatch(success(result));
          dispatch(alertActions.success(result.message));
          ToastsStore.success("Rates added!");
        } else {
          dispatch(failure(result.message));
          dispatch(alertActions.error(result.message));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: vendorConstants.ADD_RATES_REQUEST };
  }
  function success(vendor) {
    return { type: vendorConstants.ADD_RATES_SUCCESS, vendor };
  }
  function failure(error) {
    return { type: vendorConstants.ADD_RATES_FAILURE, error };
  }
}

function clear() {
  return { type: vendorConstants.CLEAR };
}

function updateRates(data) {
  return (dispatch) => {
    dispatch(request());

    vendorService.update_rates(data).then(
      (result) => {
        if (result.success) {
          dispatch(success(result));
          dispatch(alertActions.success("User saved successfully"));
          ToastsStore.success("Rates updated succesful!");
        } else {
          ToastsStore.success("Error in updating rates");
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        console.log(error);
        // ToastAndroid.show(error,ToastAndroid.LONG);
      }
    );
  };

  function request() {
    return { type: vendorConstants.UPDATE_RATES_REQUEST };
  }
  function success(user) {
    return { type: vendorConstants.UPDATE_RATES_SUCCESS, user };
  }
  function failure(error) {
    return { type: vendorConstants.UPDATE_RATES_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    vendorService.getAll().then(
      (data) => {
        dispatch(success(data));
        dispatch(alertActions.success("Vendors loaded."));

        ToastsStore.success("Vendors loaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: vendorConstants.GET_ALL_REQUEST };
  }
  function success(data) {
    return { type: vendorConstants.GET_ALL_SUCCESS, vendors: data.users };
  }
  function failure(error) {
    return { type: vendorConstants.GET_ALL_FAILURE, error };
  }
}

function editVendor(data) {
  return (dispatch) => {
    dispatch(request());

    vendorService.editVendor(data).then(
      (vendor) => {
        dispatch(success(vendor));
        dispatch(alertActions.success("Profile Edited!"));
        ToastsStore.success("Profile Edited!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        // ToastsStore.success("Verifiers loaded.!");
      }
    );
  };

  function request() {
    return { type: vendorConstants.EDIT_VENDOR_REQUEST };
  }
  function success(vendor) {
    return { type: vendorConstants.EDIT_VENDOR_SUCCESS, vendor };
  }
  function failure(error) {
    return { type: vendorConstants.EDIT_VENDOR_FAILURE, error };
  }
}

function getById(id) {
  return (dispatch) => {
    dispatch(request());

    vendorService.getById(id).then(
      (data) => {
        if (data.success) dispatch(success(data.vendor_rate));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: vendorConstants.GET_BY_ID_REQUEST };
  }
  function success(rates) {
    return { type: vendorConstants.GET_BY_ID_SUCCESS, rates };
  }
  function failure(error) {
    return { type: vendorConstants.GET_BY_ID_FAILURE, error };
  }
}
function create(data) {
  console.log("logging create action:", data);
  return (dispatch) => {
    dispatch(request());
    vendorService.create(data).then(
      (vendor) => {
        dispatch(success(vendor));
        dispatch(alertActions.success(vendor.message));
        ToastsStore.success("vendor registered succesfully!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        ToastsStore.success("error!");
      }
    );
  };

  function request() {
    return { type: vendorConstants.ADD_VENDOR_REQUEST };
  }
  function success(vendor) {
    return { type: vendorConstants.ADD_VENDOR_SUCCESS, vendor };
  }
  function failure(error) {
    return { type: vendorConstants.ADD_VENDOR_FAILURE, error };
  }
}
