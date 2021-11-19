import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import { Auth } from './pages/Auth';
import { Home } from './pages/Home';

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Auth}/>
    </BrowserRouter>
  );
}

export default Routes;