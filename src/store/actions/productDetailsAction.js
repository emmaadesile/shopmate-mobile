import axios from "axios";
import { BASEURL } from "react-native-dotenv";

export const GET_PRODUCT_DETAILS_LOADING = "GET_PRODUCT_DETAILS_LOADING";
export const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_DETAILS_SUCCESS";
export const GET_PRODUCT_DETAILS_ERROR = "GET_PRODUCT_DETAILS_ERROR";

const getProductLoading = loading => ({
  type: GET_PRODUCT_DETAILS_LOADING,
  payload: loading
});

const getProductSuccess = product => ({
  type: GET_PRODUCT_DETAILS_SUCCESS,
  payload: product
});

const getProductError = error => ({
  type: GET_PRODUCT_DETAILS_ERROR,
  payload: error
});

const getProductDetails = productId => dispatch => {
  dispatch(getProductLoading(true));

  axios
    .get(`${BASEURL}/products/${productId}/details`)
    .then(response => {
      if (response.status === 200) {
        dispatch(getProductLoading(false));
        const product = response.data[0];

        dispatch(getProductSuccess(product));
      }
    })
    .catch(error => {
      if (error.message) {
        dispatch(getProductError(error));
      }
      dispatch(getProductError("An error occurred while fetching the product"));
    });
};

export default getProductDetails;
