import { all, select, takeLatest } from 'redux-saga/effects';
import { InterfaceState } from 'Types';

export function* updateStorageSaga() {
  try {
    const links:string[] = yield select((state: InterfaceState) => state.links && state.links.list);

    localStorage.setItem('links', JSON.stringify(links));
  } catch (err) {
    throw err;
  }
}

export default function* () {
  yield all([
    takeLatest('ADD', updateStorageSaga),
    takeLatest('ADD_CLICK', updateStorageSaga),
    takeLatest('REMOVE', updateStorageSaga)
  ]);
}
