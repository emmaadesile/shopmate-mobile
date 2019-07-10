import axios from "axios";
import { BASEURL } from "react-native-dotenv";

export const SIGNIN_LOADING = "SIGNIN_LOADING";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

const signinLoading = loading => ({
  type: SIGNIN_LOADING,
  payload: loading
});

const signinSuccess = user => ({
  type: SIGNIN_SUCCESS,
  payload: user
});

const signinError = error => ({
  type: SIGNIN_ERROR,
  payload: error
});

const signin = (email, password) => dispatch => {
  dispatch(signinLoading(true));

  return axios
    .post(`${BASEURL}/customers/login`, {
      email,
      password
    })
    .then(response => {
      dispatch(signinLoading(false));

      if (response.status === 200) {
        dispatch(signinSuccess(response.data));
      }
    })
    .catch(error => {
      dispatch(signinLoading(false));
      alert(error.message);
      dispatch(signinError(error.message));
    });
};

export default signin;
