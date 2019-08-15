import {
  UPDATE_ADDRESS_LOADING,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_ERROR
} from "../actions/updateAddress";

const initialState = {
  customer: [],
  loading: false,
  message: "",
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        customer: action.payload.customer,
        message: action.payload.message
      };

    case UPDATE_ADDRESS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
