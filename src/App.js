/** @format */

import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

// Components
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

// CSS
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
          <div className="app__body">
            <Sidebar />
            <Route path="/room/:roomId" component={Chat} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
