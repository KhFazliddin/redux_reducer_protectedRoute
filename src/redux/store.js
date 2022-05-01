import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";
import UserReducer from "./userSlice";
// import { combineReducers, compose, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import todo from "../reducer/todo";

// const rootReducer = combineReducers({
//   todo,
// });
// const store = createStore(rootReducer, composeWithDevTools());

export const store = configureStore({
  reducer: {
    todo,
    products: ProductReducer,
    users: UserReducer,
  },
});
