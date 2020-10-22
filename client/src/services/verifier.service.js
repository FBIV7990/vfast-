import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const verifierService = {
  getAll,
  getById,
  create,
  editVerifier,
};

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/users/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/users?type=verifier`, requestOptions).then(
    helperService.handleResponse
  );
}
function create(data) {
  console.log("logging create:", data);
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data,
  };
  return fetch(`${apiUrl}/users/createVerifier`, requestOptions).then(
    helperService.handleResponse
  );
}

function editVerifier(data) {
  console.log("logging create:", data);
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data,
  };
  return fetch(`${apiUrl}/users/editVerifier`, requestOptions).then(
    helperService.handleResponse
  );
}
