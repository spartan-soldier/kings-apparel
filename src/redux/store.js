import {createStore, applyMiddleware} from 'redux';//state store

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer ,applyMiddleware(...middlewares))

export default store;