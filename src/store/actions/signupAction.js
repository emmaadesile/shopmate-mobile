import axios from "axios";
import { BASEURL } from "react-native-dotenv";

export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

const signupLoading = loading => ({
  type: SIGNUP_LOADING,
  payload: loading
});

const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user
});

const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error
});

const signup = (name, email, password) => dispatch => {
  dispatch(signupLoading(true));
  return axios
    .post(`${BASEURL}/customers`, {
      name,
      email,
      password
    })
    .then(result => {
      dispatch(signupLoading(false));

      if (result.status === 200) {
        dispatch(signupSuccess(result.data));
      }
    })
    .catch(error => dispatch(signupError(error.message)));
};

export default signup;
