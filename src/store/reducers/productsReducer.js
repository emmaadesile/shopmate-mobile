import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from "../actions/productsAction";

const initialState = {
  products: [],
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
