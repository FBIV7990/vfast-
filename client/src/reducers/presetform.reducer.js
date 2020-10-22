import { presetFormConstants } from "../constants";

export function presetform(state = {}, action) {
  switch (action.type) {
    case presetFormConstants.GET_FORM_REQUEST:
      return { ...state, loading: true };
    case presetFormConstants.GET_FORM_SUCCESS:
      return { ...state, checks: action.checks, loading: false };
    case presetFormConstants.GET_FORM_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}
