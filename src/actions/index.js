import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FILE, SPENT, LIMIT } from './types';

// Action type
export const LOGIN = 'LOGIN';

const ROOT_URL = 'http://10.141.95.142:3000/api';

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

export function faceLogin({ username, image }) {
  username = 'whdawn'; // to be deleted
  return function(dispatch) {
    console.log("face login");
    console.log("username", username);
    console.log("image", image);
    console.log("image type", image.type);
    axios.post(`${ROOT_URL}/compare_faces`,
      { username, image },
      {headers: {'Content-Type': 'multipart/form-data'}}
    )
      .then(response => {
        // if (response.message === 'Success') {
          console.log("faceLogin res", response);
          //   - update state to indicate that user is authenticated
          dispatch({ type: AUTH_USER });
          //   - update state to indicate the type of the user
          //   check
          let user_type = response.user_type;
          dispatch({ type: user_type.toUpperCase() });
          //   - save first name
          //   check
          localStorage.setItem('firstName', response.data.firstName);
          //   - redirect to main scene
          browserHistory.push('/main');
        // } else {
        //   dispatch(authError('You don\'t seem to be a registered user'));
        // }
      })
      .catch(() => {
        alert('You don\'t seem to be a registered user');
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: SPENT,
          payload: response.data.spent,
        });
        dispatch({
          type: LIMIT,
          payload: response.data.limit,
        });
      });
  }
}
