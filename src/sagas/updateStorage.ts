import { all, select, takeLatest } from 'redux-saga/effects';

export function* updateStorageSaga() {
  try {
    const links:string[] = yield select((state: any) => state.links && state.links.list);
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
