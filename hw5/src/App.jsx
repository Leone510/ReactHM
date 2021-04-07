import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Contests from './containers/Contests/Contests';
import Competition from './components/Competition/Competition';
import CreateContest from './components/CreateContest/CreateContest';
import './App.css';
import './containers/Contests/contests.css';
import './components/ContestCard/contestCard.css';
import './containers/Competitions/competition.css'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Contests/>}/>
            <Route path="/competition/:id" render={(id) => <Competition id={id.match.params.id} />}/>
            <Route path="/create" render={(id) => <CreateContest/>}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
