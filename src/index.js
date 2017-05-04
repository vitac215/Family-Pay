import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import IndexLogin from './components/index_login';
import FaceLogin from './components/face_login';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexLogin} />
        <Route path="/face_login" component={FaceLogin} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
