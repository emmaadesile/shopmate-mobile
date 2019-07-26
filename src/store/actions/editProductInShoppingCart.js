import axios from "axios";
import { BASEURL } from "react-native-dotenv";

export const EDIT_PRODUCT_LOADING = "EDIT_PRODUCT_LOADING";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";

const editProductLoading = loading => ({
  type: EDIT_PRODUCT_LOADING,
  payload: loading
});

const editProductSuccess = product => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product
});

const editProductError = error => ({
  type: EDIT_PRODUCT_ERROR,
  payload: error
});

const editProduct = (item_id, quantity) => dispatch => {
  dispatch(editProductLoading(true));

  axios
    .put(`${BASEURL}/shoppingcart/update/${item_id}`, {
      item_id,
      quantity
    })
    .then(response => {
      dispatch(editProductLoading(false));

      const { data } = response;

      if (response.status === 200) {
        dispatch(editProductSuccess(data));
      }
    })
    .catch(error => {
      dispatch(editProductLoading(false));

      if (error.message) {
        return dispatch(editProductError(error.message));
      }

      dispatch(editProductError("An error occurred while editing the product"));
    });
};

export default editProduct;
