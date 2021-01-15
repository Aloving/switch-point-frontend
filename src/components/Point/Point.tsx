import React from 'react';
import { Button } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';

import { IPoint } from '../../entities';

type IPointProps = IPoint;

export const Point = ({ name, isActive }: IPointProps) => {
  return (
    <Button
      variant="contained"
      color={isActive ? 'primary' : 'default'}
      startIcon={<AdjustIcon />}
    >
      {name}
    </Button>
  );
};
