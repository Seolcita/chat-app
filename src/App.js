/** @format */

import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import './scss/base.scss';
import './App.scss';

const App = () => {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  // const [state, dispatch] = useStateValue();

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          // <Route exact path="/login" component={Login} />
          <Route path="/">
            <Login />
          </Route>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                {/* <Route exact path="/room/:roomId" component={Chat}></Route> */}
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                {/* <Route exact path="/">
                  <h1> Bunny</h1>
                </Route> */}
              </Switch>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
