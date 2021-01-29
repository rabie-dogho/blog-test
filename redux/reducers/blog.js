import { BlogActionTypes } from '../actions';



const INITIAL_STATE = {
  // ...INITIAL_TIDES_STATE
  list: [],
  test: "This is a test state stored in redux",
  article: {
    id: "",
    title:"",
    image:"",
    body:""
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.SET_BLOG_STATE:
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
