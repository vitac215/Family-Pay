import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import FaceIndex from './components/face_index';

// Route domain name => renders app
export default (
  <Route path="/" component={App}>
    <IndexRoute component={FaceIndex} />
  </Route>
);
