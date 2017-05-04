import axios from 'axios';

// Action type
export const LOGIN = 'LOGIN';

const ROOT_URL = '';

export function loginAction() {
  const request = axios.post(`${ROOT_URL}/login`, props);

  return {
    type: LOGIN,
    payload: request
  }
}
