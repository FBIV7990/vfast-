import { authHeader } from "../store";
import { helperService } from "./helper.service";
import { apiUrl } from "../helpers";

export const locationService = {
  getAll,
  getCities,
};

async function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/locations?countryId=101`, requestOptions).then(
    helperService.handleResponse
  );
}

async function getCities(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/locations?stateId=${id}`, requestOptions).then(
    helperService.handleResponse
  );
}
