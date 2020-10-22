import { verifierConstants } from "../constants";
import { verifierService } from "../services";
import { alertActions } from "./index";
import { ToastsContainer, ToastsStore } from "react-toasts";

export const verifierActions = {
  getAll,
  getById,
  clear,
  create,
  editVerifier,
};

function clear() {
  return { type: verifierConstants.CLEAR };
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    verifierService.getAll().then(
      (data) => {
        console.log(data);
        dispatch(success(data));
        dispatch(alertActions.success("Verifiers loaded."));
        ToastsStore.success("Verifiers loaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        // ToastsStore.success("Verifiers loaded.!");
      }
    );
  };

  function request() {
    return { type: verifierConstants.GET_ALL_REQUEST };
  }
  function success(data) {
    return { type: verifierConstants.GET_ALL_SUCCESS, verifiers: data.users };
  }
  function failure(error) {
    return { type: verifierConstants.GET_ALL_FAILURE, error };
  }
}
function create(data) {
  console.log("logging create action:", data);
  return (dispatch) => {
    dispatch(request());
    verifierService.create(data).then(
      (verifier) => {
        dispatch(success(verifier));
        dispatch(alertActions.success(verifier.message));
        ToastsStore.success("verifier registered succesfully!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        ToastsStore.success("error!");
      }
    );
  };

  function request() {
    return { type: verifierConstants.ADD_VERIFIER_REQUEST };
  }
  function success(verifier) {
    return { type: verifierConstants.ADD_VERIFIER_SUCCESS, verifier };
  }
  function failure(error) {
    return { type: verifierConstants.ADD_VERIFIER_FAILURE, error };
  }
}
function getById(id) {
  return (dispatch) => {
    dispatch(request());

    verifierService.getById(id).then(
      (data) => {
        if (data.success) dispatch(success(data.user));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: verifierConstants.GET_BY_ID_REQUEST };
  }
  function success(verifier) {
    return { type: verifierConstants.GET_BY_ID_SUCCESS, verifier };
  }
  function failure(error) {
    return { type: verifierConstants.GET_BY_ID_FAILURE, error };
  }
}

function editVerifier(data) {
  return (dispatch) => {
    dispatch(request());

    verifierService.editVerifier(data).then(
      (verifier) => {
        dispatch(success(verifier));
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
    return { type: verifierConstants.EDIT_VERIFIER_REQUEST };
  }
  function success(verifier) {
    return { type: verifierConstants.EDIT_VERIFIER_SUCCESS, verifier };
  }
  function failure(error) {
    return { type: verifierConstants.EDIT_VERIFIER_FAILURE, error };
  }
}
