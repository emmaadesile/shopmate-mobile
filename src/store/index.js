import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signup from "./reducers/signupReducer";
import signin from "./reducers/singinReducer";
import auth from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth,
  signup,
  signin
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
