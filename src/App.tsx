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
import styled from 'styled-components';
import { Nav } from 'components/Nav';
const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

export default App;
