import { vendorConstants } from "../constants";
var newusers = {};
export function vendors(state = {}, action) {
  switch (action.type) {
    case vendorConstants.GET_ALL_REQUEST:
      return { ...state, loading: true };
    case vendorConstants.GET_ALL_SUCCESS:
      return { ...state, vendors: action.vendors, loading: false };
    case vendorConstants.GET_ALL_FAILURE:
      return { ...state, error: action.error, loading: false };

    case vendorConstants.GET_RATES_REQUEST:
      return { ...state, loading: true };
    case vendorConstants.GET_RATES_SUCCESS:
      return { ...state, vendors: action.vendors, loading: false };
    case vendorConstants.GET_RATES_FAILURE:
      return { ...state, error: action.error, loading: false };

    case vendorConstants.GET_BY_ID_REQUEST:
      return { ...state, selected_vendor: null, loading: true };
    case vendorConstants.GET_BY_ID_SUCCESS:
      return { ...state, selected_vendor: action.rates, loading: false };
    case vendorConstants.GET_BY_ID_FAILURE:
      return { ...state, error: action.error, loading: false };

    case vendorConstants.ADD_VENDOR_REQUEST:
      return { ...state, vendor: null, loading: true };
    case vendorConstants.ADD_VENDOR_SUCCESS:
      console.log("logging VENDORdata:", action.vendor);
      return { ...state, vendor: action.vendor, loading: false };
    case vendorConstants.ADD_VENDOR_FAILURE:
      return { ...state, error: action.error, loading: false };

    case vendorConstants.GET_RATES_BY_STATE_REQUEST:
      return { ...state, loading: true };
    case vendorConstants.GET_RATES_BY_STATE_SUCCESS:
      return { ...state, vendors: action.vendors, loading: false };
    case vendorConstants.GET_RATES_BY_STATE_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}
