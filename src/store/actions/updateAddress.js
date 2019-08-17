import axios from "axios";
import { BASEURL } from "react-native-dotenv";
import { showMessage } from "react-native-flash-message";
import { getUserToken } from "../actions/authAction";

export const UPDATE_ADDRESS_LOADING = "UPDATE_ADDRESS_LOADING";
export const UPDATE_ADDRESS_SUCCESS = "UPDATE_ADDRESS_SUCCESS";
export const UPDATE_ADDRESS_ERROR = "UPDATE_ADDRESS_ERROR";

const updateAddressLoading = loading => ({
  type: UPDATE_ADDRESS_LOADING,
  payload: loading
});

const updateAddressSuccess = ({ customer, message, isSuccessful }) => ({
  type: UPDATE_ADDRESS_SUCCESS,
  payload: { customer, message, isSuccessful }
});

const updateAddressError = error => ({
  type: UPDATE_ADDRESS_ERROR,
  payload: error
});

const updateAddress = (
  address_1,
  address_2,
  city,
  region,
  postal_code,
  country,
  shipping_region_id,
  mob_phone
) => async dispatch => {
  const userToken = await getUserToken();
  dispatch(updateAddressLoading(true));

  axios
    .put(
      `${BASEURL}/customers/address`,
      {
        address_1,
        address_2,
        city,
        region,
        postal_code,
        country,
        shipping_region_id,
        mob_phone
      },
      {
        headers: {
          "user-key": userToken
        }
      }
    )
    .then(response => {
      dispatch(updateAddressLoading(false));
      if (response.status === 200) {
        const message = "Address was successfully updated";
        dispatch(
          updateAddressSuccess({
            message,
            isSuccessful: true,
            customer: response.data
          })
        );

        showMessage({
          message,
          type: "success"
        });
      }
    })
    .catch(error => {
      dispatch(updateAddressLoading(false));

      if (error.message) {
        showMessage({
          message: error.message,
          type: "error"
        });
        return dispatch(updateAddressError(error.message));
      } else {
        const message =
          "An error occurred while updating the customer's address";
        showMessage({
          message: message,
          type: "error"
        });
        return dispatch(updateAddressError(message));
      }
    });
};

export default updateAddress;
