import axios from "axios";
import { BASEURL } from "react-native-dotenv";
import { showMessage } from "react-native-flash-message";
import { saveUserToken } from "./authAction";

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
      if (response.status === 200) {
        dispatch(signinLoading(false));
        dispatch(signinSuccess(response.data.customer));

        const userToken = response.data.accessToken;
        saveUserToken("userToken", userToken);
      }
    })
    .catch(error => {
      dispatch(signinLoading(false));
      const message = error.message || "Invalid login credentials";
      dispatch(signinError(error.message || "Invalid login credentials"));
      showMessage({
        message,
        type: "error"
      });
    });
};

export default signin;
