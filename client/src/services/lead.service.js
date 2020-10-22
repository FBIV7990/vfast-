import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const leadService = {
  add,
  update,
  getAll,
  remove,
  updateMany,
  getById,
  addMany,
};

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/leads`, requestOptions).then(
    helperService.handleResponse
  );
}

function add(lead) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  };
  return fetch(`${apiUrl}/leads/add`, requestOptions).then(
    helperService.handleResponse
  );
}

function update(lead) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  };
  return fetch(`${apiUrl}/leads/update`, requestOptions).then(
    helperService.handleResponse
  );
}

function addMany(leads) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leads),
  };
  return fetch(`${apiUrl}/leads/addMany`, requestOptions).then(
    helperService.handleResponse
  );
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/leads/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}
function updateMany(leads) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leads),
  };
  return fetch(`${apiUrl}/leads/updateMany`, requestOptions).then(
    helperService.handleResponse
  );
}

function remove(lead) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  };
  return fetch(`${apiUrl}/leads/delete`, requestOptions).then(
    helperService.handleResponse
  );
}
