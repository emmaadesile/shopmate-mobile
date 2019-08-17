import {
  GET_CUSTOMER_LOADING,
  GET_CUSTOMER_ERROR,
  GET_CUSTOMER_SUCCESS
} from "../actions/getCustomer";

const initialState = {
  loading: false,
  isSuccessful: "",
  customer: "",
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.payload.customer,
        isSuccessful: action.payload.isSuccessful
      };

    case GET_CUSTOMER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
