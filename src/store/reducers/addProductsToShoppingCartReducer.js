import {
  ADD_PRODUCT_TO_CART_LOADING,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR
} from "../actions/addProductsToShoppingCart";

const initialState = {
  loading: false,
  error: "",
  products: [],
  message: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        message: action.payload.message
      };

    case ADD_PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
