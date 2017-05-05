import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/app';

import RequireAuth from './components/require_auth';

import { AUTH_USER } from './actions/types';

import IndexLogin from './components/index_login';
import FaceLogin from './components/face_login';
import Main from './components/main';

import AdminDashboard from './components/admin_dashboard';
import AddMember from './components/add_member';
import ManageMember from './components/manage_member';
import ViewDetail from './components/view_detail';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexLogin} />
        <Route path="/face_login" component={FaceLogin} />
        <Route path="/main" component={Main} />
        {/* <Route path="/main" component={RequireAuth(FaceLogin)} /> */}
        {/* <Route path="/main" component={RequireAuth(Main)} /> */}
        <Route path="/admin_dashboard" component={AdminDashboard} />
        <Route path="/add_member" component={AddMember} />
        <Route path="/manage_member" component={ManageMember} />
        <Route path="/view_detail" component={ViewDetail} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
