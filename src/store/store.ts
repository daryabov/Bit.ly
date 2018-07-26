import { applyMiddleware, createStore } from 'redux';

import rootReducer from 'Reducers/root';
import createSagaMiddleware from 'redux-saga';
import sagas from 'Sagas';

const sagaMiddleware = createSagaMiddleware();
const links:any = localStorage.getItem('links');
const INITIAL_STATE = {
  links: {
    list: links ? JSON.parse(links) : [],
  }
}
const store = configureStore(INITIAL_STATE);

function configureStore(initialState: any) {
  return createStore(rootReducer, initialState!, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(sagas);

export default store;