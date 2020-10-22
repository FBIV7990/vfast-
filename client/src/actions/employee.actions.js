import { employerConstants, employeeConstants } from "../constants";
import { employerService } from "../services";
import { alertActions } from "./index";
import { employeeService } from "../services/employee.service";
import { ToastsContainer, ToastsStore } from "react-toasts";

export const employeeActions = {
  addEmployee,
  getAll,
  getById,
  getByEmployerId,
  uploadDocument,
  addMany,
  clear,
  update,
};

function update(data) {
  console.log("logging data action:", data);
  // alert(id)
  return (dispatch) => {
    dispatch(request());
    employeeService.update(data).then(
      (employee) => {
        dispatch(success(employee));
        ToastsStore.success("employee updated!");
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: employeeConstants.UPDATE_EMPLOYEE_REQUEST };
  }
  function success(employee) {
    return { type: employeeConstants.UPDATE_EMPLOYEE_SUCCESS, employee };
  }
  function failure(error) {
    return { type: employeeConstants.UPDATE_EMPLOYEE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());
    employerService.getAll().then(
      (data) => {
        dispatch(success(data));
        dispatch(alertActions.success("Employers loaded."));
        ToastsStore.success("Employers loaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: employerConstants.GET_ALL_REQUEST };
  }
  function success(data) {
    return {
      type: employerConstants.GET_ALL_SUCCESS,
      employees: data.employees,
    };
  }
  function failure(error) {
    return { type: employerConstants.GET_ALL_FAILURE, error };
  }
}

function addMany(data) {
  return (dispatch) => {
    dispatch(request());
    employeeService.addMany(data).then(
      (data) => {
        dispatch(success(data));
        dispatch(alertActions.success("Employees Saved."));
        ToastsStore.success("Employers loaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: employeeConstants.ADD_MANY_EMPLOYEE_REQUEST };
  }
  function success(data) {
    return {
      type: employeeConstants.ADD_MANY_EMPLOYEE_SUCCESS,
      employees: data.employees,
    };
  }
  function failure(error) {
    return { type: employeeConstants.ADD_MANY_EMPLOYEE_FAILURE, error };
  }
}

function addEmployee(data) {
  return (dispatch) => {
    dispatch(request());
    employeeService.add(data).then(
      (employee) => {
        dispatch(success(employee));
        dispatch(alertActions.success("Employers loaded."));
        ToastsStore.success("Employers loaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: employeeConstants.ADD_EMPLOYEE_REQUEST };
  }
  function success(employee) {
    return { type: employeeConstants.ADD_EMPLOYEE_SUCCESS, employee };
  }
  function failure(error) {
    return { type: employeeConstants.ADD_EMPLOYEE_FAILURE, error };
  }
}

function getById(id) {
  // alert(id)
  return (dispatch) => {
    dispatch(request());
    employeeService.getById(id).then(
      (employee) => {
        dispatch(success(employee));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: employeeConstants.GET_BY_ID_REQUEST };
  }
  function success(employee) {
    return {
      type: employeeConstants.GET_BY_ID_SUCCESS,
      employee: employee.employee,
    };
  }
  function failure(error) {
    return { type: employeeConstants.GET_BY_ID_FAILURE, error };
  }
}

function uploadDocument(data) {
  console.log("data:", data);
  return (dispatch) => {
    dispatch(request());
    employeeService.uploadDocument(data).then(
      (employee) => {
        dispatch(success(employee));
        dispatch(alertActions.success("Documents uploaded"));
        ToastsStore.success("Documents uploaded.!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
        ToastsStore.warning("Documents uploaded.!");
      }
    );
  };

  function request() {
    return { type: employeeConstants.UPLOAD_DOCUMENT_REQUEST };
  }
  function success(employee) {
    return { type: employeeConstants.UPLOAD_DOCUMENT_SUCCESS, employee };
  }
  function failure(error) {
    return { type: employeeConstants.UPLOAD_DOCUMENT_FAILURE, error };
  }
}

function getByEmployerId(id) {
  return (dispatch) => {
    dispatch(request());
    employeeService.getByEmployerId(id).then(
      (data) => {
        if (data.success) dispatch(success(data.employees));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: employeeConstants.GET_BY_EMPLOYER_ID_REQUEST };
  }
  function success(employees) {
    return { type: employeeConstants.GET_BY_EMPLOYER_ID_SUCCESS, employees };
  }
  function failure(error) {
    return { type: employeeConstants.GET_BY_EMPLOYER_ID_FAILURE, error };
  }
}

function clear() {
  return { type: employerConstants.CLEAR };
}
