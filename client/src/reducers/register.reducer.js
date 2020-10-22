import { registerConstants } from "../constants";

export function register(state = {}, action) {
  switch (action.type) {
    case registerConstants.POST_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case registerConstants.POST_REGISTER_SUCCESS:
      console.log("logging Action", action);
      return { ...state, register: action.register };

    case registerConstants.POST_REGISTER_FAILURE:
      return {
        error: action.error,
      };
    case registerConstants.CLEAR: {
    }

    default:
      return state;
  }
}
