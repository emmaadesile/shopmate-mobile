import {
  GET_PRODUCTS_IN_SHOPPING_CART_LOADING,
  GET_PRODUCTS_IN_SHOPPING_CART_ERROR,
  GET_PRODUCTS_IN_SHOPPING_CART_SUCCESS
} from "../actions/getProductsInshoppingCartAction";

const initialState = {
  loading: false,
  error: "",
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_IN_SHOPPING_CART_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case GET_PRODUCTS_IN_SHOPPING_CART_SUCCESS:
      return {
        ...state,
        products: action.payload
      };

    case GET_PRODUCTS_IN_SHOPPING_CART_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
