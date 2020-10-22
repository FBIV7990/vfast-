import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";
import { storageService } from "./storage.service";

export const userService = {
  isSignedIn,
  login,
  loginWithLink,
  logout,
  register,
  setPassword,
  verifyOTP,
  getAll,
  getById,
  changeRole,
  changeStatus,
  setProfilePicture,
  forgetPassword,
  changePassword,
  setProfile,
  deleteUser,
  get,
};

function get() {
  console.log("calling user get method");
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  //   var user= localStorage.getItem(USER_KEY);

  var user = storageService.getData(USER_KEY);
  //   var user=JSON.parse(json);
  console.log("logging GETuser:", user);
  if (user)
    return fetch(`${apiUrl}/users/${user.id}`, requestOptions).then(
      helperService.handleResponse
    );
  return;
}

function isSignedIn() {
  const res = storageService.getData(USER_KEY);
  if (!res) {
    return false;
  } else {
    return true;
  }
}

function login(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(`${apiUrl}/users/login`, requestOptions).then(
    helperService.handleResponse
  );
}

function loginWithLink(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(`${apiUrl}/verifications/initiateByLink`, requestOptions).then(
    helperService.handleResponse
  );
}

function logout() {
  //  return new Promise(async(resolve,reject)=>{
  // localStorage.removeItem(USER_KEY);
  storageService.removeData(USER_KEY);
  //resolve(true);
  // })
  // remove user from local storage to log user out
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  console.log("Logging req options ..", requestOptions);
  return fetch(`${apiUrl}/users/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/users`, requestOptions).then(
    helperService.handleResponse
  );
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${apiUrl}/users/register`, requestOptions).then(
    helperService.handleResponse
  );
}

function verifyOTP(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${apiUrl}/users/verifyOTP`, requestOptions).then(
    helperService.handleResponse
  );
}

function changeRole(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${apiUrl}/users/changeRole`, requestOptions).then(
    helperService.handleResponse
  );
}

function changeStatus(user) {
  console.log("logging user status:", user);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(user),
  };
  return fetch(`${apiUrl}/users/changeStatus`, requestOptions).then(
    helperService.handleResponse
  );
}

function setProfilePicture(user) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
    body: user.data,
  };
  return fetch(`${apiUrl}/users/updatePhoto/${user.id}`, requestOptions).then(
    helperService.handleResponse
  );
}

function setPassword(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${apiUrl}/users/setPassword`, requestOptions).then(
    helperService.handleResponse
  );
}

function changePassword(user) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${apiUrl}/users/changePassword`, requestOptions).then(
    helperService.handleResponse
  );
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/users/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}
function forgetPassword(data) {
  const res = { username: data };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(res),
  };
  console.log(requestOptions);
  return fetch(`${apiUrl}/users/forgetPassword`, requestOptions).then(
    helperService.handleResponse
  );
}

function setProfile(data) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data,
  };

  return fetch(`${apiUrl}/users/setProfile`, requestOptions).then(
    helperService.handleResponse
  );
}
function deleteUser(data) {
  console.log("logging delete service:", data);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(data),
  };
  return fetch(`${apiUrl}/users/delete`, requestOptions)
    .then(helperService.handleResponse)
    .catch((err) => {
      console.log(err);
    });
}
