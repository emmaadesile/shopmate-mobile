import {
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR
} from "../actions/productDetailsAction";

const initialState = {
  loading: false,
  error: "",
  product: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload
      };
    case GET_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
