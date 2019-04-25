import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Home from './containers/home';
import CardDetail from './containers/cardDetail';
import Navbar from './components/navbar';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/location/:city" component={CardDetail} />
    </Switch>
  </div>
);

export default hot(App);
