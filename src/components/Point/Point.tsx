import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';

import { IPoint } from '../../entities';

interface IPointProps extends IPoint {
  onPointToggle?: (id: string | number, checked: boolean) => void;
}

export const Point = ({ name, isActive, id, onPointToggle }: IPointProps) => {
  const handleOnClick = useCallback(() => {
    onPointToggle && onPointToggle(id, !isActive);
  }, [onPointToggle, id, isActive]);

  return (
    <Button
      variant="contained"
      color={isActive ? 'primary' : 'default'}
      startIcon={<AdjustIcon />}
      onClick={handleOnClick}
    >
      {name}
    </Button>
  );
};
