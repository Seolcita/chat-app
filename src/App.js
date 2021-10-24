/** @format */

import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

import './scss/base.scss';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route exact path="/room/:roomId" component={Chat}></Route>
            {/* <Route path="/room/:roomId">
              <Chat />
            </Route> */}
            <Route exact path="/">
              <h1> Bunny</h1>
            </Route>
          </Switch>
          {/* {React-Router >> Chat Screen} */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
