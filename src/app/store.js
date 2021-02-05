import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer"
import user from "./reducers/userReducer"
import thunk from "redux-thunk"

const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action', action)
    next(action);
}

export default createStore(
    combineReducers({
        math ,
        user }),
    {},
    applyMiddleware(logger, thunk) );