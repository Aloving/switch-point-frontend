import React from 'react';

import { Navigation } from './components';
import { BoardContainer } from './containers';

import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BoardContainer />
    </div>
  );
};
