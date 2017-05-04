import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, AUTH_ERROR } from './types';

// Action type
export const LOGIN = 'LOGIN';

const ROOT_URL = '/api';

export function loginAction({ username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/login`, { username, password })
      .then(response => {
        if (response.message === success) {
          // request is good,
          //   - save token
          localStorage.setItem('token', response.data.token);
          //   - redirect to /face_login
          browserHistory.push('/face_login');
        } else {
          // show an error to the user
          dispatch(authError('The username or the password is incorrect.'));
        }
      });
  }
}

export function faceLogin({ username, image }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/compare_faces`, { username, image })
      .then(response => {
        if (response.message === success) {
          //   - update state to indicate that user is authenticated
          dispatch({ type: AUTH_USER });
          browserHistory.push('/main');
        } else {
          dispatch(authError('You don\'t seem to be a registered user'));
        }
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
