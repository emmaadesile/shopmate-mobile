import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signup from "./reducers/signupReducer";
import signin from "./reducers/singinReducer";
import products from "./reducers/productsReducer";
import productDetails from "./reducers/productDetailsReducer";
import addProductsToShoppingCart from "./reducers/addProductsToShoppingCartReducer";
import getProductsInShoppingCart from "./reducers/getProductsInShoppingCartReducer";
import deleteItemFromCart from "./reducers/deleteItemFromCartReducer";
import updateAddress from "./reducers/updateAddress";
import getCustomer from "./reducers/getCustomerReducer";

const rootReducer = combineReducers({
  signup,
  signin,
  products,
  productDetails,
  addProductsToShoppingCart,
  getProductsInShoppingCart,
  deleteItemFromCart,
  updateAddress,
  getCustomer
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
