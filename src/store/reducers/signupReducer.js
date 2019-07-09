import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/signupAction";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  isSuccessful: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccessful: true,
        user: action.payload
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: action.payload,
        isSuccessful: false
      };
    default:
      return state;
  }
};

export default reducer;
