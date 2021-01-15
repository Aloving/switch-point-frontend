import React from 'react';

import { Board, Navigation } from './components';

import './App.css';

const listsExample = [
  {
    id: '10',
    name: 'name',
    description: 'descriptions',
    points: [
      {
        id: 1,
        isActive: true,
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
    ],
  },
  {
    id: '111',
    name: 'name',
    description: 'descriptions',
    points: [
      {
        id: 1,
        isActive: true,
        pointGroupId: '111',
        name: 'first point',
        description: 'description of first point',
      },
      {
        id: 2,
        isActive: false,
        pointGroupId: '111',
        name: 'second point',
        description: 'description of first point',
      },
      {
        id: 2,
        isActive: false,
        pointGroupId: '111',
        name: 'second point',
        description: 'description of first point',
      },
      {
        id: 2,
        isActive: false,
        pointGroupId: '111',
        name: 'second point',
        description: 'description of first point',
      },
    ],
  },
];

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Board lists={listsExample} />
    </div>
  );
};
