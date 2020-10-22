import { leadConstants } from "../constants";
export function leads(state = {}, action) {
  switch (action.type) {
    case leadConstants.ADD_LEAD_REQUEST:
      return { ...state, loading: true };
    case leadConstants.ADD_LEAD_SUCCESS:
      return { ...state, lead: action.lead };
    case leadConstants.ADD_LEAD_FAILURE:
      return { ...state, error: action.error };

    case leadConstants.GET_ALL_REQUEST:
      return { ...state, loading: true };
    case leadConstants.GET_ALL_SUCCESS:
      return { ...state, leads: action.leads, loading: false };
    case leadConstants.GET_ALL_FAILURE:
      return { ...state, error: action.error, loading: false };

    case leadConstants.ADD_UPDATE_LEAD_REQUEST:
      return { ...state, loading: true };
    case leadConstants.ADD_UPDATE_LEAD_SUCCESS:
      return { ...state, leads: action.leads, loading: false };
    case leadConstants.ADD_UPDATE_LEAD_FAILURE:
      return { ...state, error: action.error, loading: false };

    case leadConstants.GET_BY_EMPLOYEE_ID_REQUEST:
      return { ...state, loading: true };
    case leadConstants.GET_BY_EMPLOYEE_ID_SUCCESS:
      return { ...state, selected_lead: action.lead, loading: false };
    case leadConstants.GET_BY_EMPLOYEE_ID_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}
