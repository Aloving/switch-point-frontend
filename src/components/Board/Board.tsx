import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { AddingModeContainer, PointGroupContainer } from '../../containers';

import { IPointGroup } from '../../interfaces';

import styles from './Board.module.css';

interface IBoardProps {
  lists: IPointGroup[];
  editId: string | null;
}

export const Board = ({ lists, editId }: IBoardProps) => {
  const [addingModeOn, setAddingMode] = useState(false);

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
        {!addingModeOn && (
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setAddingMode(true)}
          >
            +
          </Button>
        )}
        {addingModeOn && (
          <AddingModeContainer onClose={() => setAddingMode(false)} />
        )}
      </div>
    </div>
  );
};
