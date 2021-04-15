// This is where we will create the store and add thunk and any additional middle ware
import {
    userReducer,
    programsReducer,
    membersReducer,
    clubsReducer,
} from './ducks';

import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
);

export const rootReducer = combineReducers({
    user: userReducer,
    programs: programsReducer,
    members: membersReducer,
    clubs: clubsReducer,
});

export const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );