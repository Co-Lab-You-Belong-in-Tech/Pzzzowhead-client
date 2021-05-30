import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from '../../pages/LandingPage';
import FormPage from '../../pages/FormPage';
import Navigation from '../Navigation';

import Ready from '../../form/Ready';
import NameNumber from '../../form/NameNumber';
import SleepSetup from '../../form/SleepSetup';
import WindDown from '../../form/WindDown';
import Pzzzownality from '../../form/Pzzzownality';
import Confirmation from '../../form/Confirmation';
import Celebrate from '../../form/Celebrate';


export default function App() {

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/form" component={FormPage} />

        {/* Form cards */}
        <Route path="/form/ready" 
          render={(routerProps) => <Ready {...routerProps} /> } 
        />
        <Route path="/form/nameandnumber" 
          render={(routerProps) => <NameNumber {...routerProps} /> } 
        />
        <Route path="/form/winddown" 
          render={(routerProps) => <WindDown {...routerProps} /> } 
        />
        <Route path="/form/pzzzownality" 
          render={(routerProps) => <Pzzzownality {...routerProps} /> } 
        />
        <Route path="/form/confirmation" 
          render={(routerProps) => <Confirmation {...routerProps} /> } 
        />
        <Route path="/form/celebrate" 
          render={(routerProps) => <Celebrate {...routerProps} /> } 
        />
      </Switch>
    </Router>
  );
}
