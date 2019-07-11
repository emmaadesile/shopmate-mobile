import { AsyncStorage } from "react-native";

export const GET_TOKEN = "GET_TOKEN";
export const GET_TOKEN_ERROR = "GET_TOKEN_ERROR";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const SAVE_TOKEN_ERROR = "SAVE_TOKEN_ERROR";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const REMOVE_TOKEN_ERROR = "REMOVE_TOKEN_ERROR";

export const getToken = token => ({
  type: GET_TOKEN,
  payload: token
});

export const getTokenError = error => ({
  type: GET_TOKEN_ERROR,
  payload: error
});

export const saveToken = token => ({
  type: SAVE_TOKEN,
  payload: token
});

export const saveTokenError = error => ({
  type: SAVE_TOKEN_ERROR,
  payload: error
});

export const removeToken = () => ({
  type: REMOVE_TOKEN
});

export const removeTokenError = error => ({
  type: REMOVE_TOKEN_ERROR,
  payload: error
});

const saveUserToken = (key, value) => async dispatch => {
  try {
    console.log("LOGGING USER TOKEN", value);
    return await dispatch(
      dispatch(saveToken(AsyncStorage.setItem(key, JSON.stringify(value))))
    );
  } catch (error) {
    dispatch(saveTokenError(error.message || "Error saving token"));
  }
};

const getUserToken = () => dispatch => {
  AsyncStorage.getItem("userToken")
    .then(data => {
      dispatch(getToken(JSON.parse(data)));
    })
    .catch(error => {
      dispatch(getTokenError(error.message || "Error getting token"));
    });
};

const removeUserToken = () => dispatch => {
  AsyncStorage.removeItem("userToken")
    .then(data => {
      dispatch(removeToken(data));
    })
    .catch(error => {
      dispatch(removeTokenError(error || "Error removing token"));
    });
};

export { saveUserToken, getUserToken, removeUserToken };
