import { all } from 'redux-saga/effects';
import BlogSagas from './blog';
import AuthSagas from './auth';

export default function* rootSaga() {
  yield all([
    ...BlogSagas,
     ...AuthSagas]);
}
