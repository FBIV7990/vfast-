import { presetFormConstants } from "../constants";
import { presetFormService } from "../services";
import { alertActions } from "./index";
import { ToastsStore } from "react-toasts";

export const presetFormActions = {
  getAll,
  clear,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());

    presetFormService.get().then(
      (data) => {
        dispatch(success(data));
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
    return { type: presetFormConstants.GET_FORM_REQUEST };
  }
  function success(data) {
    return { type: presetFormConstants.GET_FORM_SUCCESS, checks: data.checks };
  }
  function failure(error) {
    return { type: presetFormConstants.GET_FORM_FAILURE, error };
  }
}

function clear() {
  return { type: presetFormConstants.CLEAR };
}
