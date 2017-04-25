import React from 'react';
import { Router, Route } from 'dva/router';
import Post from './routes/Posts';
import Test from './routes/test';
import Index from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/post" component={Post} />
      <Route path="/test" component={Test} />
    </Router>
  );
}

export default RouterConfig;

