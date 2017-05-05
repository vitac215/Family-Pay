import {CHILD_DATA} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SPENT:
      return {...state, spent: action.payload};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
  }

  return state;
}
