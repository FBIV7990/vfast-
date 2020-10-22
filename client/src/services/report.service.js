import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const reportService = {
  add,
  getAll,
  getById,
};

function add(data) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data,
  };

  return fetch(`${apiUrl}/reports/add`, requestOptions).then(
    helperService.handleResponse
  );
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/reports`, requestOptions).then(
    helperService.handleResponse
  );
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/reports/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}
