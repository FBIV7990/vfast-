import { verifierConstants } from "../constants";

export function verifiers(state = {}, action) {
  switch (action.type) {
    case verifierConstants.GET_ALL_REQUEST:
      return { ...state, loading: true };
    case verifierConstants.GET_ALL_SUCCESS:
      return { ...state, verifiers: action.verifiers, loading: false };
    case verifierConstants.GET_ALL_FAILURE:
      return { ...state, error: action.error, loading: false };

    case verifierConstants.GET_BY_ID_REQUEST:
      return { ...state, selected_verifier: null, loading: true };
    case verifierConstants.GET_BY_ID_SUCCESS:
      return { ...state, selected_verifier: action.verifier, loading: false };
    case verifierConstants.GET_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case verifierConstants.ADD_VERIFIER_REQUEST:
      return { ...state, verifier: null, loading: true };
    case verifierConstants.ADD_VERIFIER_SUCCESS:
      console.log("logging verifierdata:", action.verifier);
      return { ...state, verifier: action.verifier, loading: false };
    case verifierConstants.ADD_VERIFIER_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}
