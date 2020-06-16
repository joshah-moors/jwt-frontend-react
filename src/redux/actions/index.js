import { ADD_ARTICLE } from './types';
import { USER_LOGIN, USER_LOGOUT } from './types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function userLogin(payload) {
  return { type: USER_LOGIN, payload }
};

export function userLogout(payload) {
  return { type: USER_LOGOUT, payload}
};