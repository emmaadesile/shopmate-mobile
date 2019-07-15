import axios from "axios";
import { BASEURL } from "react-native-dotenv";

export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

const getProductsLoading = loading => ({
  type: GET_PRODUCTS_LOADING,
  payload: loading
});

const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

const getProductsError = error => ({
  type: GET_PRODUCTS_ERROR,
  payload: error
});

const getProducts = (page = 1) => dispatch => {
  dispatch(getProductsLoading(true));

  axios
    .get(`${BASEURL}/products?page=${page}`)
    .then(response => {
      dispatch(getProductsLoading(false));
      if (response.status === 200) {
        return dispatch(getProductsSuccess(response.data.rows));
      }
    })
    .catch(error => {
      dispatch(getProductsLoading(false));
      dispatch(getProductsError(error.message || "Error fetching products"));
    });
};

export default getProducts;
