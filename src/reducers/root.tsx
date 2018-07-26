import links from 'Reducers/links';
import { combineReducers, Reducer } from 'redux';

const rootReducer: Reducer = combineReducers({
  links,
});

export default rootReducer;
