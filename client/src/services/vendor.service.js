import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const vendorService = {
  add_rates,
  update_rates,
  get_rates,
  getByState,
  getAll,
  getById,
  create,
  editVendor,
};

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/vendors/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/users?type=vendor`, requestOptions).then(
    helperService.handleResponse
  );
}
function get_rates(user) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/vendors`, requestOptions).then(
    helperService.handleResponse
  );
}

function getByState(state) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/vendors/getByState/${state}`, requestOptions).then(
    helperService.handleResponse
  );
}

function add_rates(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${apiUrl}/vendors/add_rates`, requestOptions).then(
    helperService.handleResponse
  );
}

function update_rates(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${apiUrl}/vendors/update_rates`, requestOptions).then(
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
  return fetch(`${apiUrl}/users/createVendor`, requestOptions).then(
    helperService.handleResponse
  );
}
function editVendor(data) {
  console.log("logging create:", data);
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data,
  };
  return fetch(`${apiUrl}/users/editVendor`, requestOptions).then(
    helperService.handleResponse
  );
}
