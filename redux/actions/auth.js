export const AuthActionTypes = Object.freeze({
  SET_AUTH_STATE: 'SET_AUTH_STATE',
  REGISTER_ACCOUNT: 'REGISTER_ACCOUNT',
  LOGIN: 'LOGIN',
});

export const setAuthState = (stateName, stateValue, pageName) => ({
  type: AuthActionTypes.SET_AUTH_STATE,
  stateName,
  stateValue,
  pageName,
});

export const registerAccount = (values) => ({
  type: AuthActionTypes.REGISTER_ACCOUNT,
  values,
});

export const login = (values) => ({
  type: AuthActionTypes.LOGIN,
  values,
});
