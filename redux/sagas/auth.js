import { call, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import { loginApi, registerAccountApi } from '../../api/auth';
// import { setLocalStorage } from '../../hooks';
import { AuthActionTypes } from '../actions';
import { alert } from '../../helper/alert';
import { setAuthInfo } from '../../helper/auth';


function* registerAccountSaga({ values }) {
  try {
    // yield put(setAuthState('user', values));
    const response = yield call(registerAccountApi, values);
    alert(response.type, response.message);
    if (response.code === 200) {
      Router.push('/login');
    }
  } catch (e) {
    console.error(e);
    alert('error', 'Sorry an error occured !');
  }
}

function* loginSaga({ values }) {
  try {
    const response = yield call(loginApi, values);
    alert(response.type, response.message);
    if (response.code === 200) {
      setAuthInfo(response.data);
      Router.push('/articles');
      // console.log('success');
    }
  } catch (e) {
    console.error(e);
    alert('error', 'Sorry an error occured !');
  }
}

export default [
  takeLatest(AuthActionTypes.REGISTER_ACCOUNT, registerAccountSaga),
  takeLatest(AuthActionTypes.LOGIN, loginSaga),
];
