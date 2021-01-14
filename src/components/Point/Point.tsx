import React from 'react';
import { ListItem, Button } from '@material-ui/core';

import { IPoint } from '../../entities';

type IPointProps = IPoint;

export const Point = ({ id, pointGroupId, name, isActive }: IPointProps) => {
  return (
    <>
      {isActive ? (
        <Button variant="contained" color="primary">
          {name}
        </Button>
      ) : (
        <Button variant="contained">{name}</Button>
      )}
    </>
  );
};
