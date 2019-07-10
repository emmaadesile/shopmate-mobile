import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signup from "./reducers/signupReducer";
import signin from "./reducers/singinReducer";

const rootReducer = combineReducers({
  signup,
  signin
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
