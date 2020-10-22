import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const invoiceService = {
  add,
  getAll,
  getById,
};

function add(data) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-type": "application/json" },
    body: data,
  };

  return fetch(`${apiUrl}/invoices/add`, requestOptions).then(
    helperService.handleResponse
  );
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/invoices`, requestOptions).then(
    helperService.handleResponse
  );
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/invoices/${id}`, requestOptions).then(
    helperService.handleResponse
  );
}
