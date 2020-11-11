export const ACTION = 'LOGIN';
export const ACTION_SUCCESS = 'LOGIN_SUCCESS';
export const ACTION_ERROR = 'LOGIN_ERROR';

export function action() {
  return {
    type: ACTION
  };
}

export function actionSuccess(payload) {
  return {
    type: ACTION_SUCCESS,
    payload
  };
}

export function actionError(error) {
  return {
    type: ACTION_ERROR,
    error
  };
}
