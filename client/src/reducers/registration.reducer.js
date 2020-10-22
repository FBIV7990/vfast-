import { userConstants } from "../constants";

const initialState = {
  registering: false,
  registered: false,
  verifying: false,
  verified: false,
};

export function registration(state = {}, action) {
  console.log("Logging action type from Registration....", action.type);

  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      console.log("logging register action", action.user);
      return { ...state, registered: true, user: action.user };
    case userConstants.REGISTER_FAILURE:
      return { error: action.error };

    case userConstants.OTP_REQUEST:
      return { ...state, verifying: true };
    case userConstants.OTP_SUCCESS:
      console.log("logging otpAction:", action);
      return { ...state, verified: true, user: action.user };
    case userConstants.OTP_FAILURE:
      return { ...state, error: action.error };

    case userConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
