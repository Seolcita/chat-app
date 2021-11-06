/** @format */

import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
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
      {!user ? (
        <Route path="/" component={Login} />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            {/* <Switch> */}
            <Route path="/room/:roomId" component={Chat} />
            {/* </Switch> */}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
