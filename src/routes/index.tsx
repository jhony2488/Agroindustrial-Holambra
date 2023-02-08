import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NewProspect from '../pages/NewProspect';
import Page404 from '../pages/404';

const Routes: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/newProspect' exact component={NewProspect} />
        <Route path='*' component={Page404} />
      </Switch>
    </Router>
  );
};

export default Routes;
