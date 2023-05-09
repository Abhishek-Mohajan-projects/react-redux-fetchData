import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./components/services/reducers/todosReducers";
const { createStore } = require("redux");

export const store = createStore(todosReducer, applyMiddleware(thunk));
