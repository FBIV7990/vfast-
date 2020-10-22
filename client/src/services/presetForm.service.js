import { authHeader } from "../store";
import { apiUrl, USER_KEY } from "../helpers";
import { helperService } from "./helper.service";

export const presetFormService = {
  get,
};

function get() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiUrl}/checkInfo`, requestOptions).then(
    helperService.handleResponse
  );
}
