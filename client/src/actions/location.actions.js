import { locationConstants } from "../constants";
import { locationService } from "../services";
import { alertActions } from "./alert.actions";

export const locationActions = {
  getAll,
  clear,
  getCities,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());
    locationService.getAll().then(
      (location) => dispatch(success(location)),
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: locationConstants.GET_LOCATION_REQUEST };
  }
  function success(location) {
    return { type: locationConstants.GET_LOCATION_SUCCESS, location };
  }
  function failure(error) {
    return { type: locationConstants.GET_LOCATION_FAILURE, error };
  }
}
function getCities(id) {
  return (dispatch) => {
    dispatch(request());
    locationService.getCities(id).then(
      (cities) => dispatch(success(cities)),
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: locationConstants.GET_CITIES_REQUEST };
  }
  function success(cities) {
    return { type: locationConstants.GET_CITIES_SUCCESS, cities };
  }
  function failure(error) {
    return { type: locationConstants.GET_CITIES_FAILURE, error };
  }
}

function clear() {
  return { type: locationConstants.CLEAR };
}

// prefixed function name with underscore because delete is a reserved word in javascript
