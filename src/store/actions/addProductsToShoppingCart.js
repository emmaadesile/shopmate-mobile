import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { BASEURL, CART_ID } from "react-native-dotenv";

export const ADD_PRODUCT_TO_CART_LOADING = "ADD_PRODUCT_TO_CART_LOADING";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR";

const addProductToCartLoading = loading => ({
  type: ADD_PRODUCT_TO_CART_LOADING,
  payload: loading
});

const addProductToCartSuccess = (products, message) => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: { products: products, messsage: message }
});

const addProductToCartError = error => ({
  type: ADD_PRODUCT_TO_CART_ERROR,
  payload: error
});

const addProductToCart = productId => dispatch => {
  dispatch(addProductToCartLoading(true));

  axios
    .post(`${BASEURL}/shoppingcart/add`, {
      cart_id: CART_ID,
      product_id: productId,
      attributes: ""
    })
    .then(response => {
      dispatch(addProductToCartLoading(false));

      if (response.status === 200) {
        dispatch(
          addProductToCartSuccess({
            products: response.data,
            message: "Item was successfully added to the cart"
          })
        );
        showMessage({
          message: "Item was successfully added to the cart",
          type: "success",
          animationDuration: 500
        });
      }
    })
    .catch(error => {
      dispatch(addProductToCartLoading(false));

      if (error.message) {
        return dispatch(addProductToCartError(error.message));
      }

      dispatch(
        addProductToCartError(
          "An error occured while adding the product to the cart"
        )
      );
    });
};

export default addProductToCart;
