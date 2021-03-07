import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './reducers/';
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();
const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk, loggerMiddleware)));

export default store;
