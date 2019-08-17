import axios from "axios";
import { BASEURL } from "react-native-dotenv";
import { AsyncStorage } from "react-native";

export const GET_CUSTOMER_LOADING = "GET_CUSTOMER_LOADING";
export const GET_CUSTOMER_ERROR = "GET_CUSTOMER_ERROR";
export const GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS";

const getCustomerLoading = loading => ({
  type: GET_CUSTOMER_LOADING,
  payload: loading
});

const getCustomerSuccess = ({ customer, isSuccessful }) => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: { customer, isSuccessful }
});

const getCustomerError = error => ({
  type: GET_CUSTOMER_ERROR,
  payload: error
});

const getCustomer = () => async dispatch => {
  dispatch(getCustomerLoading(true));

  const userToken = await AsyncStorage.getItem("userToken");

  axios
    .get(`${BASEURL}/customer`, {
      headers: {
        "user-key": userToken
      }
    })
    .then(response => {
      if (response.status === 200) {
        return dispatch(
          getCustomerSuccess({ customer: response.data, isSuccessful: true })
        );
      }
    })
    .catch(error => {
      if (error.message) {
        return dispatch(getCustomerError(error.message));
      } else {
        const message = "An error occurred while getting the customer";
        return dispatch(getCustomerError(message));
      }
    });
};

export default getCustomer;
