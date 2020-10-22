import { USER_KEY } from "../helpers";
import { userConstants, registerConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./index";
import { history } from "../helpers";
import { storageService } from "../services/storage.service";
import { ToastsContainer, ToastsStore } from "react-toasts";

export const userActions = {
  login,
  loginWithLink,
  logout,
  setPassword,
  setProfilePicture,
  register,
  get,
  verifyOTP,
  getAll,
  getById,
  delete: _delete,
  setUsername,
  clear,
  forgetPassword,
  changePassword,
  update,
  getTotal,
  changeRole,
  changeStatus,
  changeActiveStatus,
  deleteUser,
  setProfile,
};

function loginWithLink(data) {
  return (dispatch) => {
    dispatch(request());

    userService.loginWithLink(data).then(
      (user) => {
        if (user.success) {
          dispatch(success(user));
          ToastsStore.success("Login successful!");
          storageService.setData(USER_KEY, user);
          history.go(0);
        } else {
          dispatch(failure(user.message));
          ToastsStore.warning("Enter field correctly!");
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function login(data) {
  return (dispatch) => {
    dispatch(request());

    userService.login(data).then(
      (user) => {
        if (user.success) {
          dispatch(success(user));
          ToastsStore.success("Login successful!");
          storageService.setData(USER_KEY, user);
          history.go(0);
        } else {
          dispatch(failure(user.message));
          ToastsStore.warning("Enter your field correctly!");
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        // ToastsStore.danger("User not found!");
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function clear() {
  return { type: userConstants.CLEAR };
}

function logout() {
  //  return dispatch=>{
  userService.logout();

  history.go(0);
  //    dispatch({type:userConstants.LOGOUT});
  //   dispatch(alertActions.clear());
  //   dispatch(userActions.clear());
  // history.go(0);

  //};
}

function register(data, token) {
  console.log("token:", token);
  return (dispatch) => {
    dispatch(request());
    userService.register(data).then(
      (user) => {
        if (user.success) {
          dispatch(success(user));
          dispatch(alertActions.success(user.message));
          //  ToastsStore.success("User is Saved!")
          ToastsStore.success("Login successful!");
          storageService.setData(USER_KEY, user);
          history.go(0);
        } else {
          dispatch(failure("Error in reistration"));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        ToastsStore.warning("fill out this field!");
      }
    );
  };

  function request() {
    return { type: registerConstants.POST_REGISTER_REQUEST };
  }
  function success(user) {
    return { type: registerConstants.POST_REGISTER_SUCCESS, user };
  }

  function failure(error) {
    return { type: registerConstants.POST_REGISTER_FAILURE, error };
  }
}

function verifyOTP(data) {
  return (dispatch) => {
    dispatch(request());
    userService.verifyOTP(data).then(
      (user) => {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        dispatch(success(user));
        dispatch(alertActions.success(user.message));
        history.push("/setPassword");
      },
      (error) => {
        console.log("Logging error user actions", error);
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        dispatch(alertActions.clear());
      }
    );
  };

  function request() {
    return { type: userConstants.OTP_REQUEST };
  }
  function success(user) {
    return { type: userConstants.OTP_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.OTP_FAILURE, error };
  }
}

function setUsername(username) {
  return (dispatch) => {
    dispatch(setData(username));
  };
  function setData(username) {
    return { type: userConstants.SET_USERNAME, username };
  }
}

function setProfilePicture(data) {
  return (dispatch) => {
    dispatch(request(data));
    userService.setProfilePicture(data).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success("Picture Upload Successfully"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.UPLOAD_PHOTO_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.UPLOAD_PHOTO_SUCCESS, user };
  }
  // function navigate(){return{type:Routes.SetPassword}}
  function failure(error) {
    return { type: userConstants.UPLOAD_PHOTO_FAILURE, error };
  }
}

function update(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.update(user).then(
      (user) => {
        dispatch(success(user));
        console.log("Set User success");
        ToastsStore.success("User saved successfully!");
        dispatch(alertActions.success("User saved successfully"));
        // ToastAndroid.show('User saved successfully',ToastAndroid.LONG);
      },
      (error) => {
        dispatch(failure(error.toString()));
        ToastsStore.success("fill this form correctly!");
        dispatch(alertActions.error(error.toString()));
        console.log(error);
        // ToastAndroid.show(error,ToastAndroid.LONG);
      }
    );
  };

  function request(user) {
    return { type: userConstants.UPDATE_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.UPDATE_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.UPDATE_FAILURE, error };
  }
}

function setPassword(data) {
  return (dispatch) => {
    dispatch(request(data));
    userService.setPassword(data).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success("Password saved successfully"));
        ToastsStore.success("Password saved successfully!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        ToastsStore.success("Enter your password correctly!");
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.SETPASSWORD_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.SETPASSWORD_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.SETPASSWORD_FAILURE, error };
  }
}

function changePassword(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.changePassword(user).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success(user.message));
        ToastsStore.success("Change password successfully!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        ToastsStore.success("Enter your correct password!");
      }
    );
  };

  function request(user) {
    return { type: userConstants.CHANGE_PASSWORD_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.CHANGE_PASSWORD_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.CHANGE_PASSWORD_FAILURE, error };
  }
}

function changeRole(data) {
  return (dispatch) => {
    dispatch(request());
    // dispatch(success(data));
    userService.changeRole(data).then(
      (user) => {
        dispatch(success(data));
        dispatch(alertActions.success("Role updated"));
        ToastsStore.success("Role updated!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        console.log(error);
      }
    );
  };

  function request() {
    return { type: userConstants.CHANGE_ROLE_REQUEST };
  }
  function success(user) {
    return { type: userConstants.CHANGE_ROLE_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.CHANGE_ROLE_FAILURE, error };
  }
}

function changeStatus(data) {
  console.log("logging statusData:", data);
  return (dispatch) => {
    dispatch(request());
    //  dispatch(success(data));
    userService.changeStatus(data).then(
      (user) => {
        dispatch(success(data));
        dispatch(alertActions.success("Status updated"));
        ToastsStore.success("Status updated!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        console.log(error);
      }
    );
  };

  function request() {
    return { type: userConstants.CHANGE_STATUS_REQUEST };
  }
  function success(user) {
    return { type: userConstants.CHANGE_STATUS_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.CHANGE_STATUS_FAILURE, error };
  }
}

function changeActiveStatus(data) {
  return (dispatch) => {
    dispatch(request());
    //  dispatch(success(data));
    userService.changeRole(data).then(
      (user) => {
        dispatch(success(data));
        dispatch(alertActions.success("Role updated"));
        ToastsStore.success("Role updated!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        console.log(error);
      }
    );
  };

  function request() {
    return { type: userConstants.CHANGE_ACTIVE_STATUS_REQUEST };
  }
  function success(user) {
    return { type: userConstants.CHANGE_ACTIVE_STATUS_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.CHANGE_ACTIVE_STATUS_FAILURE, error };
  }
}

function deleteUser(id) {
  console.log("user data:", id);

  return (dispatch) => {
    dispatch(request(id));
    //  dispatch(success(data));
    userService.deleteUser(id).then(
      (user) => {
        dispatch(success(id));
        ToastsStore.success("User Deleted!");
        // dispatch(alertActions.success('Role updated'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        console.log(error);
      }
    );
  };

  function request() {
    return { type: userConstants.DELETE_USER_REQUEST };
  }
  function success(id) {
    return { type: userConstants.DELETE_USER_SUCCESS, id };
  }
  function failure(error) {
    return { type: userConstants.DELETE_USER_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(
      (data) => {
        console.log(data);
        dispatch(alertActions.success("User list loaded."));
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: userConstants.GET_USERS_REQUEST };
  }
  function success(data) {
    return { type: userConstants.GET_USERS_SUCCESS, users: data.users };
  }
  function failure(error) {
    return { type: userConstants.GET_USERS_FAILURE, error };
  }
}

function get() {
  return (dispatch) => {
    dispatch(request());
    userService.get().then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success("User loaded"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: userConstants.GET_CURRENTUSER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GET_CURRENTUSER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GET_CURRENTUSER_FAILURE, error };
  }

  // function request() { return { type: userConstants.GET_USER_REQUEST } }
  // function success(user) { return { type: userConstants.GET_USER_SUCCESS, user } }
  // function failure(error) { return { type: userConstants.GET_USER_FAILURE, error } }
}

function getById(id) {
  return (dispatch) => {
    dispatch(request());

    userService.getById(id).then(
      (data) => {
        if (data.success) dispatch(success(data.user));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_USER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GET_USER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GET_USER_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      ToastsStore.success("User Deleted!"),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

function forgetPassword(data) {
  return (dispatch) => {
    dispatch(request());
    userService.forgetPassword(data).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success("Otp Send successfully"));
      },
      (error) => {
        console.log(error);
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.FORGET_PASSWORD_REQUEST };
  }
  function success(user) {
    return { type: userConstants.FORGET_PASSWORD_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.FORGET_PASSWORD_FAILURE, error };
  }
}

function getTotal() {
  return (dispatch) => {
    dispatch(request());

    userService.getTotal().then(
      (user) => dispatch(success(user.count)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_TOTAL_REQUEST };
  }
  function success(total) {
    return { type: userConstants.GET_TOTAL_SUCCESS, total };
  }
  function failure(error) {
    return { type: userConstants.GET_TOTAL_FAILURE, error };
  }
}

function setProfile(data) {
  return (dispatch) => {
    dispatch(request());
    userService.setProfile(data).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success(user));
        ToastsStore.success("Set profile successful!");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        ToastsStore.success("Fill out fields correctly!");
      }
    );
  };

  function request() {
    return { type: userConstants.SET_PROFILE_REQUEST };
  }
  function success(user) {
    return { type: userConstants.SET_PROFILE_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.SET_PROFILE_FAILURE, error };
  }
}
