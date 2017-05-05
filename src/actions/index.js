import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FILE } from './types';

// Action type
export const LOGIN = 'LOGIN';

const ROOT_URL = 'http://10.141.93.202:3000/api';

export function loginAction({ username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/login`, { username, password })
      .then(response => {
        console.log('message', response.message);
        // request is good,
        //   - save token
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('token', response.data.token);
        //   - redirect to /face_login
        browserHistory.push('/face_login');
      })
      .catch((error) => {
        // If request is bad...
        // - Show an error to the user
        // dispatch(authError('The username or password is wrong'));
        // dispatch(authError(error));
        alert('The username or password is wrong');
      });
  }
}

export function uploadImg(file) {
  return {
    type: FILE,
    payload: file
  }
}

export function faceLogin(image) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/compare_faces`, { username, image })
      .then(response => {
        if (response.message === success) {
          //   - update state to indicate that user is authenticated
          dispatch({ type: AUTH_USER });
          //   - update state to indicate the type of the user
          //   check
          dispatch({ type: response.user_type });
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
