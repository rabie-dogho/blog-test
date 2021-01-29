import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import blog from './blog';
import auth from './auth';


const combinedReducer = combineReducers({
  blog,
  auth,
})


const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.auth.user) nextState.auth.user = state.auth.user // preserve count value on client side navigation
    return nextState
  } 
    return combinedReducer(state, action)
  
}

// const hydrate = (state = {}, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       return { ...state, ...action.payload };
//     default:
//       return {...state};
//   }
// };

// const rootReducer = combineReducers({
//   hydrate,
//   blog,
//   auth,
// });

export default rootReducer;
