import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const employerService = {
  getAll,
  getById,
  create,
  getRates,
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

  return fetch(`${apiUrl}/users?type=employer`, requestOptions).then(
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
  return fetch(`${apiUrl}/users/createEmployer`, requestOptions).then(
    helperService.handleResponse
  );
}

function getRates(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/employerRates/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}
