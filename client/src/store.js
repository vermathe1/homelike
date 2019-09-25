import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {createLogger} from "redux-logger";

const logger = createLogger();
const initialState = {};
const middleWare = [thunk,logger];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));

export default store;
