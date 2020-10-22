import { leadConstants } from "../constants";
import { alertActions } from "./index";
import { leadService } from "../services/lead.service";
import { ToastsContainer, ToastsStore } from "react-toasts";

export const leadActions = {
  getAll,
  addMany,
  updateMany,
  getByEmployeeId,
  clear,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());
    leadService.getAll().then(
      (data) => {
        if (data.success) {
          dispatch(success(data));
          dispatch(alertActions.success("Leads loaded."));
          ToastsStore.success("Leads loaded!");
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        ToastsStore.warning("Error in loading leads!");
      }
    );
  };

  function request() {
    return { type: leadConstants.GET_ALL_REQUEST };
  }
  function success(data) {
    return { type: leadConstants.GET_ALL_SUCCESS, leads: data.leads };
  }
  function failure(error) {
    return { type: leadConstants.GET_ALL_FAILURE, error };
  }
}

function addMany(data) {
  return (dispatch) => {
    dispatch(request());
    leadService.addMany(data).then(
      (data) => {
        dispatch(success(data));
        dispatch(alertActions.success("Leads Saved."));
        ToastsStore.success("Leads saved!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        ToastsStore.warning(" Error in saving leads!");
      }
    );
  };

  function request() {
    return { type: leadConstants.ADD_MANY_LEAD_REQUEST };
  }
  function success(data) {
    return { type: leadConstants.ADD_MANY_LEAD_SUCCESS, leads: data.result };
  }
  function failure(error) {
    return { type: leadConstants.ADD_MANY_LEAD_FAILURE, error };
  }
}

function updateMany(data) {
  return (dispatch) => {
    dispatch(request());
    leadService.updateMany(data).then(
      (data) => {
        dispatch(success(data));
        dispatch(alertActions.success("Leads Updated."));
        ToastsStore.success("Leads Updated.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        ToastsStore.success("Error in updating leads.!");
      }
    );
  };

  function request() {
    return { type: leadConstants.UPDATE_MANY_LEAD_REQUEST };
  }
  function success(data) {
    return { type: leadConstants.UPDATE_MANY_LEAD_SUCCESS, leads: data.result };
  }
  function failure(error) {
    return { type: leadConstants.UPDATE_MANY_LEAD_FAILURE, error };
  }
}

function getByEmployeeId(id) {
  return (dispatch) => {
    dispatch(request());
    leadService.getById(id).then(
      (lead) => {
        if (lead.success) {
          dispatch(success(lead.lead));
          dispatch(alertActions.success("Leads By Id."));
          ToastsStore.success("Leads By Id!");
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: leadConstants.GET_BY_EMPLOYEE_ID_REQUEST };
  }
  function success(lead) {
    return { type: leadConstants.GET_BY_EMPLOYEE_ID_SUCCESS, lead };
  }
  function failure(error) {
    return { type: leadConstants.GET_BY_EMPLOYEE_ID_FAILURE, error };
  }
}

function clear() {
  return { type: leadConstants.CLEAR };
}
