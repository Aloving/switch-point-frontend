import React from 'react';
import { Button } from '@material-ui/core';

import { IPointGroup } from '../../entities';
import { PointGroup } from '../PointGroup';
import styles from './Board.module.css';

interface IBoardProps {
  lists: IPointGroup[];
  onListAdd: (name: string, description: string) => void;
  onPointAdd: (groupId: string, name: string, description: string) => void;
  onListUpdate: (payload: IPointGroup) => void;
}

export const Board = ({ lists, onListUpdate }: IBoardProps) => {
  return (
    <div className={styles.root}>
      {lists.map((list) => (
        <div className={styles.group}>
          <PointGroup
            key={list.id}
            id={list.id}
            name={list.name}
            description={list.description}
            points={list.points}
            onGroupUpdate={onListUpdate}
          />
        </div>
      ))}
      <div className={styles.group}>
        <Button variant="outlined" color="primary" size="large">
          +
        </Button>
      </div>
    </div>
  );
};
