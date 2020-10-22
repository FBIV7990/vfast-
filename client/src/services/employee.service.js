import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const employeeService = {
  add,
  getAll,
  getById,
  getByEmployerId,
  addMany,
  uploadDocument,
  update,
};

function update(data) {
  console.log("logging updatedata", data);
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(`${apiUrl}/employees/update`, requestOptions).then(
    helperService.handleResponse
  );
}

function add(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(data),
  };
  return fetch(`${apiUrl}/employees/add`, requestOptions).then(
    helperService.handleResponse
  );
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/employees/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}

function getByEmployerId(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(
    `${apiUrl}/employees/getByEmployerId/${id}`,
    requestOptions
  ).then(helperService.handleResponse);
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/employees`, requestOptions).then(
    helperService.handleResponse
  );
}

function addMany(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(`${apiUrl}/employees/addMany`, requestOptions).then(
    helperService.handleResponse
  );
}
function uploadDocument(data) {
  alert(data);
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data,
  };
  return fetch(`${apiUrl}/employees/uploadDocs`, requestOptions).then(
    helperService.handleResponse
  );
}
