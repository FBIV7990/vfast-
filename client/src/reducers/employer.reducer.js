import { employerConstants } from "../constants";
var newusers = {};
export function employers(state = {}, action) {
  switch (action.type) {
    case employerConstants.GET_ALL_REQUEST:
      return { ...state, loading: true };
    case employerConstants.GET_ALL_SUCCESS:
      return { ...state, employers: action.employers, loading: false };
    case employerConstants.GET_ALL_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employerConstants.GET_BY_ID_REQUEST:
      return { ...state, selected_employer: null, loading: true };
    case employerConstants.GET_BY_ID_SUCCESS:
      return { ...state, user: action.user, loading: false };
    case employerConstants.GET_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employerConstants.GET_RATES_BY_ID_REQUEST:
      return { ...state, loading: true };
    case employerConstants.GET_RATES_BY_ID_SUCCESS:
      return { ...state, rates: action.rates, loading: false };
    case employerConstants.GET_RATES_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case employerConstants.ADD_EMPLOYER_REQUEST:
      return { ...state, employer: null, loading: true };
    case employerConstants.ADD_EMPLOYER_SUCCESS:
      return { ...state, employer: action.employer, loading: false };
    case employerConstants.ADD_EMPLOYER_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}
