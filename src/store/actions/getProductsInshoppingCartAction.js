import axios from "axios";
import { BASEURL, CART_ID } from "react-native-dotenv";

export const GET_PRODUCTS_IN_SHOPPING_CART_LOADING =
  "GET_PRODUCTS_IN_SHOPPING_CART_LOADING";
export const GET_PRODUCTS_IN_SHOPPING_CART_SUCCESS =
  "GET_PRODUCTS_IN_SHOPPING_CART_SUCCESS";
export const GET_PRODUCTS_IN_SHOPPING_CART_ERROR =
  "GET_PRODUCTS_IN_SHOPPING_CART_ERROR";

const getProductsInShoppingCartLoading = loading => ({
  type: GET_PRODUCTS_IN_SHOPPING_CART_LOADING,
  payload: loading
});

const getProductsInShoppingCartSuccess = products => ({
  type: GET_PRODUCTS_IN_SHOPPING_CART_SUCCESS,
  payload: products
});

const getProductsInShoppingCartError = error => ({
  type: GET_PRODUCTS_IN_SHOPPING_CART_ERROR,
  payload: error
});

const getProductsInShoppingCart = () => dispatch => {
  dispatch(getProductsInShoppingCartLoading(true));

  axios
    .get(`${BASEURL}/shoppingcart/${CART_ID}`)
    .then(response => {
      dispatch(getProductsInShoppingCartLoading(false));
      if (response.status === 200) {
        dispatch(getProductsInShoppingCartSuccess(response.data));
      }
    })
    .catch(error => {
      if (error.message) {
        return dispatch(getProductsInShoppingCartError(error.message));
      }

      return dispatch(
        getProductsInShoppingCartError(
          "An error occurred while getting the products from the shopping cart"
        )
      );
    });
};

export default getProductsInShoppingCart;
