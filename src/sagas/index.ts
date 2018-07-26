import { all } from 'redux-saga/effects';
import updateStorage from './updateStorage';

export default function* rootSaga() {
  yield all([
    updateStorage(),
  ]);
}
