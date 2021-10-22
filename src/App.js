/** @format */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './scss/base.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* {React-Router >> Chat Screen} */}
      </div>
    </>
  );
};

export default App;
