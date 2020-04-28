import React from 'react';
import { Tags } from './views/Tags';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Statistics } from 'views/Statistics';
import { Money } from 'views/Money';
import { NoMatch } from 'views/NoMatch';
import { Nav } from 'components/Nav';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/tags'>
          <Tags />
        </Route>
        <Route path='/money'>
          <Money />
        </Route>
        <Route path='/statistics'>
          <Statistics />
        </Route>
        <Redirect exact from='/' to='/money' />
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
