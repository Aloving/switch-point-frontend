import React from 'react';
import { Button } from '@material-ui/core';

import { PointGroupContainer } from '../../containers';

import { IPointGroup } from '../../interfaces';

import styles from './Board.module.css';

interface IBoardProps {
  lists: IPointGroup[];
  editId: string | null;
  onListAdd?: (name: string, description: string) => void;
  onPointAdd?: (groupId: string, name: string, description: string) => void;
  onListUpdate?: (payload: IPointGroup) => void;
  setEditMode: (id: string) => void;
}

export const Board = ({ lists, editId, setEditMode }: IBoardProps) => {
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
            setEditMode={setEditMode}
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
