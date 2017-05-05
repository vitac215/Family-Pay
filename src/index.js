import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/app';

import RequireAuth from './components/require_auth';

import IndexLogin from './components/index_login';
import FaceLogin from './components/face_login';
import Main from './components/main';

import AdminDashboard from './components/admin_dashboard';
import AddMember from './components/add_member';
import ManageMember from './components/manage_member';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
