import React from 'react';
import { Container } from '@material-ui/core';

import { Board, Navigation, PointGroup } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Board />
    </div>
  );
}

export default App;
