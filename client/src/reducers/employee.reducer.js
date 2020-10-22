import { employeeConstants } from "../constants";
export function employees(state = {}, action) {
  switch (action.type) {
    case employeeConstants.ADD_EMPLOYEE_REQUEST:
      return { ...state, loading: true };
    case employeeConstants.ADD_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.employee };
    case employeeConstants.ADD_EMPLOYEE_FAILURE:
      return { ...state, error: action.error };
    case employeeConstants.GET_ALL_REQUEST:
      return { ...state, loading: true };
    case employeeConstants.GET_ALL_SUCCESS:
      return { ...state, employees: action.employees, loading: false };
    case employeeConstants.GET_ALL_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employeeConstants.ADD_MANY_EMPLOYEE_REQUEST:
      return { ...state, loading: true };
    case employeeConstants.ADD_MANY_EMPLOYEE_SUCCESS:
      return { ...state, employees: action.employees, loading: false };
    case employeeConstants.ADD_MANY_EMPLOYEE_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employeeConstants.GET_BY_ID_REQUEST:
      return { ...state, selected_employee: null, loading: true };
    case employeeConstants.GET_BY_ID_SUCCESS:
      console.log("logging reducer data:", action.employee);
      return { ...state, selected_employee: action.employee, loading: false };

    case employeeConstants.GET_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employeeConstants.GET_BY_EMPLOYER_ID_REQUEST:
      return { ...state, employer_employees: null, loading: true };
    case employeeConstants.GET_BY_EMPLOYER_ID_SUCCESS:
      return { ...state, employer_employees: action.employees, loading: false };
    case employeeConstants.GET_BY_EMPLOYER_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employeeConstants.UPLOAD_DOCUMENT_REQUEST:
      return { ...state, employer_employees: null, loading: true };
    case employeeConstants.UPLOAD_DOCUMENT_SUCCESS:
      return { ...state, employer_employees: action.employee, loading: false };
    case employeeConstants.UPLOAD_DOCUMENT_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employeeConstants.UPDATE_EMPLOYEE_REQUEST:
      return { ...state, loading: true };
    case employeeConstants.UPDATE_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.employee, loading: false };
    case employeeConstants.UPDATE_EMPLOYEE_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}
