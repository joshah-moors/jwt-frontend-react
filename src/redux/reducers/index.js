import { ADD_ARTICLE } from '../actions/types';

import { USER_LOGIN, USER_LOGOUT } from '../actions/types';

const initialState = {
  articles: [],
  login: false,
  user: null,
};


function rootReducer(state = initialState, action) {
  // Catch the add article action - remember have to work with IMMUTABLE OBJECTS!!!
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
    // .push() modified array in place - example of what NOT to do
    //state.articles.push(action.payload);
  } else if (action.type === USER_LOGIN) {
    return Object.assign({}, state, {
      login: true,
      user: action.payload.user
    });
  } else if (action.type === USER_LOGOUT) {
    return Object.assign({}, state, {
      login: false,
      user: null
    });
  }
  return state;
};


export default rootReducer;