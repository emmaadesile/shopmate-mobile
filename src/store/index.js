import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signup from "./reducers/signupReducer";

const rootReducer = combineReducers({
  signup
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
