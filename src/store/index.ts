import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
