import { USER_KEY } from "../helpers";
import { storageService } from "./storage.service";
export const helperService = { handleResponse };

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    //const data = text;
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // console.log("Logout Called");
        //location.reload(true);
      }
      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }

    return data;
  });
}

function logout() {
  // remove user from local storage to log user out
  // localStorage.removeItem(USER_KEY);
  storageService.removeData(USER_KEY);
}
