import React from 'react';

import { Navigation } from './components';
import { BoardContainer } from './containers';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className={styles.board}>
        <BoardContainer />
      </div>
    </div>
  );
};
