import axios from "axios";
import { BASEURL } from "react-native-dotenv";
import { showMessage } from "react-native-flash-message";

export const DELETE_ITEM_FROM_CART_LOADING = "DELETE_ITEM_FROM_CART_LOADING";
export const DELETE_ITEM_FROM_CART_SUCCESS = "DELETE_ITEM_FROM_CART_SUCCESS";
export const DELETE_ITEM_FROM_CART_ERROR = "DELETE_ITEM_FROM_CART_ERROR";

const deleteItemFromCartLoading = loading => ({
  type: DELETE_ITEM_FROM_CART_LOADING,
  payload: loading
});

const deleteItemFromCartSuccess = message => ({
  type: DELETE_ITEM_FROM_CART_SUCCESS,
  payload: message
});

const deleteItemFromCartError = error => ({
  type: DELETE_ITEM_FROM_CART_ERROR,
  payload: error
});

const deleteItemFromCart = itemId => dispatch => {
  dispatch(deleteItemFromCartLoading(true));

  axios
    .delete(`${BASEURL}/shoppingcart/removeProduct/${itemId}`)
    .then(response => {
      dispatch(deleteItemFromCartLoading(false));

      if (response.status === 200) {
        const message = "Item was deleted from the cart";
        dispatch(deleteItemFromCartSuccess(message));

        showMessage({
          message: "Item was deleted from the cart",
          type: "success",
          animationDuration: 500
        });
      }
    })
    .catch(error => {
      dispatch(deleteItemFromCartLoading(false));

      if (error.message) {
        return dispatch(deleteItemFromCartError(error.message));
      }

      dispatch(
        deleteItemFromCartError("An error occured while deleting the item")
      );
      showMessage({
        message: "An error occured while deleting the item",
        type: "danger",
        animationDuration: 500
      });
    });
};

export default deleteItemFromCart;
