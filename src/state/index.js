// This is where we will create the store and add thunk and any additional middle ware
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'reudx-thunk';

// import each duck state slice
import {} from './ducks';

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const rootReducer = combineReducers({});

export const store = createStoreWithMiddleware(rootReducer, window.__Redu);
