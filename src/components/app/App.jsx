import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from '../../pages/LandingPage';
import FormPage from '../../pages/FormPage';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={FormPage} />

      </Switch>
    </Router>
  );
}
