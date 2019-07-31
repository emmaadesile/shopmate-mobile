import {
  DELETE_ITEM_FROM_CART_LOADING,
  DELETE_ITEM_FROM_CART_SUCCESS,
  DELETE_ITEM_FROM_CART_ERROR
} from "../actions/deleteItemFromCart";

const initialState = {
  loading: false,
  message: "",
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM_FROM_CART_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case DELETE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        message: action.payload
      };

    case DELETE_ITEM_FROM_CART_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
