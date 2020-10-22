import { userConstants } from "../constants";
import { USER_KEY } from "../helpers";
import { storageService } from "../services/storage.service";

let user = storageService.getData(USER_KEY);
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
      };
    case userConstants.LOGOUT:
      return {};

    default:
      return state;
  }
}
