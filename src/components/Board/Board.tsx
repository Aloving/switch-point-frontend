import React from 'react';
import { Button } from '@material-ui/core';

import { PointGroupContainer } from '../../containers';

import { IPointGroup } from '../../interfaces';

import styles from './Board.module.css';

interface IBoardProps {
  lists: IPointGroup[];
  editId: string | null;
  onListAdd?: (name: string, description: string) => void;
}

export const Board = ({ lists, editId }: IBoardProps) => {
  return (
    <div className={styles.root}>
      {lists.map(({ id, name, description, points }) => (
        <div className={styles.group} key={id}>
          <PointGroupContainer
            id={id}
            name={name}
            description={description}
            points={points}
            isLoading={false}
            isEditMode={id === editId}
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
