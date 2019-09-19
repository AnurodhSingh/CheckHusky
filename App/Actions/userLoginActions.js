import * as CONST from '../Utils/Constants';

export function userLogin(user) {
  return {
    type: CONST.USER_LOGIN,
    user
  };
}
export function userLoginSuccess(user) {
  return {
    type: CONST.USER_LOGIN_SUCCESS,
    payload: {
      user
    }
  };
}
export function userLoginFailure(error) {
  return {
    type: CONST.USER_LOGIN_FAILURE,
  };
}

export function userLogout() {
  return {
    type: CONST.USER_LOGOUT,
  };
}

export function userLogoutSuccess() {
  return {
    type: CONST.USER_LOGOUT_SUCCESS,
  };
}

export function userLogoutFailure() {
  return {
    type: CONST.USER_LOGOUT_FAILURE,
  };
}