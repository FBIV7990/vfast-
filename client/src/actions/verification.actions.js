import { verificationConstants } from "../constants";
import { alertActions } from "./index";
import { verificationService } from "../services";
import { ToastsContainer, ToastsStore } from "react-toasts";

export const verificationActions = {
  getAll,
  add,
  clear,
  getById,
};

function getById(id) {
  return (dispatch) => {
    dispatch(request());

    verificationService.getById(id).then(
      (Verification) => {
        if (Verification.success) dispatch(success(Verification.verification));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: verificationConstants.GET_BY_ID_REQUEST };
  }
  function success(Verification) {
    return { type: verificationConstants.GET_BY_ID_SUCCESS, Verification };
  }
  function failure(error) {
    return { type: verificationConstants.GET_BY_ID_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());
    verificationService.getAll().then(
      (data) => {
        if (data.success) {
          dispatch(success(data));
          dispatch(alertActions.success("Verifications loaded."));
          ToastsStore.success("Verifications loaded.!");
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: verificationConstants.GET_ALL_VERIFICATION_REQUEST };
  }
  function success(data) {
    return {
      type: verificationConstants.GET_ALL_VERIFICATION_SUCCESS,
      verifications: data.verifications,
    };
  }
  function failure(error) {
    return { type: verificationConstants.GET_ALL_VERIFICATION_FAILURE, error };
  }
}

function add(data) {
  return (dispatch) => {
    dispatch(request());
    verificationService.add(data).then(
      (data) => {
        dispatch(success(data));
        ToastsStore.success("Add verifications successful.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: verificationConstants.ADD_VERIFICATION_REQUEST };
  }
  function success(data) {
    return {
      type: verificationConstants.ADD_VERIFICATION_SUCCESS,
      verification: data,
    };
  }
  function failure(error) {
    return { type: verificationConstants.ADD_VERIFICATION_FAILURE, error };
  }
}

function clear() {
  return { type: verificationConstants.CLEAR };
}
