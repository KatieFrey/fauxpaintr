import { createStore, applyMiddleware } from "redux";
import pictureReducer from "./pictureReducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  pictureReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
