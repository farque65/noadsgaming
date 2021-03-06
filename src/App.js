import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import LeaderBoard from './LeaderBoard';
import GamingTools from './GamingTools';
import Dice from './Dice';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/gametools">
              <Header/>
              <GamingTools />
          </Route>
          <Route path="/dice">
              <Header/>
              <Dice />
          </Route>
          <Route path="/leaderboard">
              <Header backButton="/"/>
              <LeaderBoard />
          </Route>
          <Route path="/">
              <Header/>
              <LeaderBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
