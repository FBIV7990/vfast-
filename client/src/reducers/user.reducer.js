import { userConstants } from "../constants";
var newusers = {};

const initialState = {
  loggedIn: false,
};

export function users(state = {}, action) {
  switch (action.type) {
    // case userConstants.USER_LOGIN_REQUEST:
    //   return { loading: true,loggedIn:false };
    // case userConstants.USER_LOGIN_SUCCESS:
    //   return { user: action.user, loading: false,loggedIn:true };
    // case userConstants.USER_LOGIN_FAILURE:
    //   return { error: action.error, loading: false,loggedIn:false };

    case userConstants.USER_REGISTER_REQUEST:
      return { loading: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return { user: action.user, loading: false };
    case userConstants.USER_REGISTER_FAILURE:
      return { error: action.error, loading: false };

    case userConstants.GET_CURRENTUSER_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_CURRENTUSER_SUCCESS:
      console.log("GET USER:", action);
      return { ...state, currentUser: action.user };
    case userConstants.GET_CURRENTUSER_FAILURE:
      return { ...state, error: action.error };

    case userConstants.GET_USERS_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_USERS_SUCCESS:
      return { ...state, users: action.users, loading: false };
    case userConstants.GET_USERS_FAILURE:
      return { ...state, error: action.error, loading: false };

    case userConstants.GET_USER_REQUEST:
      return { ...state, selected_user: null, loading: true };
    case userConstants.GET_USER_SUCCESS:
      console.log("logging getUser:", action.user);
      return { ...state, selected_user: action.user, loading: false };
    case userConstants.GET_USER_FAILURE:
      return { ...state, error: action.error, loading: false };

    case userConstants.CHANGE_ROLE_REQUEST:
      return { ...state, loading: true };
    case userConstants.CHANGE_ROLE_SUCCESS:
      if (state.users) {
        newusers = state.users.map((user) => {
          if (user._id == action.user.id) user.account.role = action.user.role;
          return user;
        });
        return { ...state, users: newusers, loading: false };
      } else {
        const selected_user = state.selected_user;
        if (selected_user.account) {
          selected_user.account.role = action.role;
        }
        return { ...state, selected_user: selected_user, loading: false };
      }

    case userConstants.CHANGE_ROLE_FAILURE:
      return { ...state, loading: false };

    case userConstants.CHANGE_STATUS_REQUEST:
      return { ...state, loading: true };
    case userConstants.CHANGE_STATUS_SUCCESS:
      if (state.users) {
        newusers = state.users.map((user) => {
          if (user._id == action.user.id)
            user.account.status = action.user.status;
          return user;
        });
        return { ...state, users: newusers, loading: false };
      } else {
        const selected_user = state.selected_user;
        selected_user.account.status = action.status;

        return { ...state, selected_user: selected_user, loading: false };
      }
    case userConstants.CHANGE_STATUS_FAILURE:
      return { ...state, loading: false };

    case userConstants.CHANGE_ACTIVE_STATUS_REQUEST:
      return { ...state, loading: true };
    case userConstants.CHANGE_ACTIVE_STATUS_SUCCESS:
      newusers = state.users.map((user) => {
        if (user._id == action.user.id) user.account.active = action.user.value;
        return user;
      });
      return { ...state, users: newusers, loading: false };
    case userConstants.CHANGE_ACTIVE_STATUS_FAILURE:
      return { ...state, loading: false };

    case userConstants.DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case userConstants.DELETE_USER_SUCCESS:
      console.log("del users", state.id);
      newusers =
        state.users &&
        state.users.filter((user) => {
          return user._id !== action.id;
        });
      return { ...state, users: newusers, loading: false };
    case userConstants.DELETE_USER_FAILURE:
      return { ...state, loading: false };

    case userConstants.SET_PROFILE_REQUEST:
      return { ...state, loading: true };
    case userConstants.SET_PROFILE_SUCCESS:
      console.log("setProfile reducer:", action);
      return { ...state, user: action.user };
    case userConstants.SET_PROFILE_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
