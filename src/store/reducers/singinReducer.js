import {
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR
} from "../actions/signinAction";

import { SAVE_TOKEN } from "../actions/authAction";

const initialState = {
  loading: false,
  isSuccessful: false,
  user: {},
  error: "",
  userToken: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccessful: true,
        user: action.payload
      };

    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSuccessful: false
      };

    default:
      return state;
  }
};

export default reducer;
