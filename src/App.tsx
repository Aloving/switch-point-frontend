import React from 'react';
import { Container } from '@material-ui/core';

import { Navigation, PointGroup } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container maxWidth="sm">
        <PointGroup
          id={'10'}
          name={'name'}
          description={'descriptions'}
          points={[
            {
              id: 1,
              isActive: false,
              pointGroupId: '10',
              name: 'first point',
              description: 'description of first point',
            },
            {
              id: 2,
              isActive: false,
              pointGroupId: '10',
              name: 'second point',
              description: 'description of first point',
            },
          ]}
        />
      </Container>
      <Container maxWidth="sm">
        <PointGroup
          id={'10'}
          name={'name'}
          description={'descriptions'}
          points={[
            {
              id: 1,
              isActive: false,
              pointGroupId: '10',
              name: 'first point',
              description: 'description of first point',
            },
            {
              id: 2,
              isActive: false,
              pointGroupId: '10',
              name: 'second point',
              description: 'description of first point',
            },
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
