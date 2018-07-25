import { createStore } from 'redux';

import rootReducer from 'Reducers/root';

function configureStore(initialState?: object) {
  return createStore(rootReducer, initialState!);
}

const store = configureStore();

export default store;