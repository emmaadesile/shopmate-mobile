import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signup from "./reducers/signupReducer";
import signin from "./reducers/singinReducer";
import products from "./reducers/productsReducer";
import nav from "./reducers/navReducer";

const rootReducer = combineReducers({
  signup,
  signin,
  products,
  nav
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
