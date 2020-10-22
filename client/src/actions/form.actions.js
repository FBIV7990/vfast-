import { formConstants } from "../constants";
import { formService } from "../services";
import { alertActions } from "./index";
import { ToastsContainer, ToastsStore } from "react-toasts";

export const formActions = {
  getAll,
  clear,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());

    formService.getAll().then(
      (data) => {
        dispatch(success(data));
        dispatch(alertActions.success("Forms loaded."));
        ToastsStore.success("Forms loaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: formConstants.GET_ALL_REQUEST };
  }
  function success(data) {
    return { type: formConstants.GET_ALL_SUCCESS, forms: data.forms };
  }
  function failure(error) {
    return { type: formConstants.GET_ALL_FAILURE, error };
  }
}

function clear() {
  return { type: formConstants.CLEAR };
}
