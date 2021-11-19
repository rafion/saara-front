import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default Routes;
