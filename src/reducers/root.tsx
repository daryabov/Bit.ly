import { combineReducers } from 'redux';
import linksReducer from './links';

const rootReducer = combineReducers({
  linksReducer,
});

export default rootReducer;
