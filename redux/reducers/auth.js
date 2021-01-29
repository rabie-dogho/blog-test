import { AuthActionTypes } from '../actions';

const INITIAL_STATE = {
  // ...INITIAL_TIDES_STATE
  user: {},
};

const authReducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_STATE:
      if (!action.pageName) {
        return {
          ...state,
          [action.stateName]: action.stateValue,
        };
      }
      return {
        ...state,
        [action.pageName]: {
          ...state[action.pageName],
          [action.stateName]: action.stateValue,
        },
      };

    default:
      return state;
  }
};

export default authReducer
