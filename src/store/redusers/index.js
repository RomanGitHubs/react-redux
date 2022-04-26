import { combineReducers } from 'redux';
import listTodos from './todos';

const rootReducer = combineReducers({ listTodos });

export default rootReducer;
