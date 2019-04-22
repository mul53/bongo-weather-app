import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Home from './containers/home';
import CardDetail from './containers/cardDetail';

const App = () => (
  <div>
    <nav>
      Navbar
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/location/:city" component={CardDetail} />
    </Switch>
  </div>
);

export default hot(App);
