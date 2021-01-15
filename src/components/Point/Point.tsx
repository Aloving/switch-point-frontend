import React from 'react';
import { ListItem, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AdjustIcon from '@material-ui/icons/Adjust';

import { IPoint } from '../../entities';

type IPointProps = IPoint;

export const Point = ({ id, pointGroupId, name, isActive }: IPointProps) => {
  return (
    <>
      <Button
        variant="contained"
        color={isActive ? 'primary' : 'default'}
        startIcon={<AdjustIcon />}
      >
        {name}
      </Button>
    </>
  );
};
