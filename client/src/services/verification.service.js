import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const verificationService = {
  add,
  getAll,
  getById,
};

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/verifications`, requestOptions).then(
    helperService.handleResponse
  );
}
function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/verifications/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}

function add(verification) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(verification),
  };
  return fetch(`${apiUrl}/verifications/add`, requestOptions).then(
    helperService.handleResponse
  );
}
