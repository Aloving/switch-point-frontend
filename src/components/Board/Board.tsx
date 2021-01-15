import React from 'react';
import { Container } from '@material-ui/core';

import styles from './Board.module.css';
import { PointGroup } from '../PointGroup';

export const Board = () => {
  return (
    <div className={styles.root}>
      <PointGroup
        id={'10'}
        name={'name'}
        description={'descriptions'}
        points={[
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
        ]}
      />
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
    </div>
  );
};
