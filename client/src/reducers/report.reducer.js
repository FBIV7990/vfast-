import { reportConstants } from "../constants";

export function reports(state = {}, action) {
  switch (action.type) {
    case reportConstants.ADD_REPORT_REQUEST:
      return { ...state, loading: true };
    case reportConstants.ADD_REPORT_SUCCESS:
      return { ...state, report: action.report, loading: false };
    case reportConstants.ADD_REPORT_FAILURE:
      return { ...state, error: action.error, loading: false };

    case reportConstants.GET_ALL_REPORT_REQUEST:
      return { ...state, loading: true };
    case reportConstants.GET_ALL_REPORT_SUCCESS:
      return { ...state, reports: action.reports, loading: false };
    case reportConstants.GET_ALL_REPORT_FAILURE:
      return { ...state, error: action.error, loading: false };

    case reportConstants.GET_REPORT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case reportConstants.GET_REPORT_BY_ID_SUCCESS:
      return { ...state, report: action.report, loading: false };
    case reportConstants.GET_REPORT_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case reportConstants.SET_SELECTED_REPORT:
      console.log("logging actionid:", action.id);
      const report =
        state.reports &&
        state.reports.find((reports) =>
          reports._id === action.id ? reports : ""
        );
      return { ...state, selectedReport: report };

    default:
      return state;
  }
}
