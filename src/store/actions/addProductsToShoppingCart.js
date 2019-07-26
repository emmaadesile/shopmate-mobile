import axios from "axios";
import { BASEURL, CART_ID } from "react-native-dotenv";

export const ADD_PRODUCT_TO_CART_LOADING = "ADD_PRODUCT_TO_CART_LOADING";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR";

const addProductToCartLoading = loading => ({
  type: ADD_PRODUCT_TO_CART_LOADING,
  payload: loading
});

const addProductToCartSuccess = products => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: products
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

      if (response.statues === 200) {
        dispatch(addProductToCartSuccess(response.data));
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
