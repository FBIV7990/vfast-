import { formConstants } from "../constants";

export function forms(state = {}, action) {
  switch (action.type) {
    case formConstants.GET_ALL_REQUEST:
      return { ...state, loading: true };
    case formConstants.GET_ALL_SUCCESS:
      return { ...state, forms: action.forms, loading: false };
    case formConstants.GET_ALL_FAILURE:
      return { ...state, error: action.error, loading: false };

    case formConstants.GET_BY_ID_REQUEST:
      return { ...state, selected_form: null, loading: true };
    case formConstants.GET_BY_ID_SUCCESS:
      return { ...state, selected_form: action.form, loading: false };
    case formConstants.GET_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}
