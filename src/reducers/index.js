import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import userTypeReducer from './user_type_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userTypeReducer
});

export default rootReducer;
