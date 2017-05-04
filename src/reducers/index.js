import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import userTypeReducer from './user_type_reducer';
import uploadImg from './upload_img_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userTypeReducer,
  file: uploadImg
});

export default rootReducer;
