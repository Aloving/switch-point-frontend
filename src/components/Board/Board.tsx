import React from 'react';
import { Button } from '@material-ui/core';

import { IPointGroup } from '../../interfaces';
import { PointGroupContainer } from '../../containers';
import styles from './Board.module.css';

interface IBoardProps {
  lists: IPointGroup[];
  editId?: string | number;
  onListAdd?: (name: string, description: string) => void;
  onPointAdd?: (groupId: string, name: string, description: string) => void;
  onListUpdate?: (payload: IPointGroup) => void;
}

export const Board = ({ lists }: IBoardProps) => {
  return (
    <div className={styles.root}>
      {lists.map(({ id, name, description, points }) => (
        <div className={styles.group}>
          <PointGroupContainer
            key={id}
            id={id}
            name={name}
            description={description}
            points={points}
            isEditMode={false}
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
