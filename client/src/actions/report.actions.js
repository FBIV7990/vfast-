import { reportConstants } from "../constants";
import { reportService } from "../services";
import { alertActions } from "./index";
import { ToastsStore } from "react-toasts";

export const reportActions = {
  getAll,
  add,
  clear,
  setSelectedReport,
  getById,
};

function add(data) {
  console.log("logging data report:", data);
  return (dispatch) => {
    dispatch(request());

    reportService.add(data).then(
      (report) => {
        dispatch(success(report));
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
    return { type: reportConstants.ADD_REPORT_REQUEST };
  }
  function success(report) {
    return { type: reportConstants.ADD_REPORT_SUCCESS, report };
  }
  function failure(error) {
    return { type: reportConstants.ADD_REPORT_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    reportService.getAll().then(
      (data) => {
        console.log(data);
        dispatch(alertActions.success("Reports loaded."));
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: reportConstants.GET_ALL_REPORT_REQUEST };
  }
  function success(data) {
    return {
      type: reportConstants.GET_ALL_REPORT_SUCCESS,
      reports: data.reports,
    };
  }
  function failure(error) {
    return { type: reportConstants.GET_ALL_REPORT_FAILURE, error };
  }
}

function getById(id) {
  return (dispatch) => {
    dispatch(request());

    reportService.getById(id).then(
      (data) => {
        console.log(data);
        dispatch(alertActions.success("Reports loaded."));
        dispatch(success(data.report));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: reportConstants.GET_REPORT_BY_ID_REQUEST };
  }
  function success(report) {
    return { type: reportConstants.GET_REPORT_BY_ID_SUCCESS, report };
  }
  function failure(error) {
    return { type: reportConstants.GET_REPORT_BY_ID_FAILURE, error };
  }
}
function setSelectedReport(reportId) {
  alert(reportId);
  return (dispatch) => {
    dispatch({ type: reportConstants.SET_SELECTED_REPORT, id: reportId });
  };
}

function clear() {
  return { type: reportConstants.CLEAR };
}
