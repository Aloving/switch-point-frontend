import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';

import { IPoint } from '../../entities';
import { EditPoint } from '../EditPoint';

interface IPointProps extends IPoint {
  onPointToggle?: (id: string | number, checked: boolean) => void;
  onPointDelete?: () => void;
  index: number;
  isEditMode: boolean;
}

export const Point = ({
  name,
  isActive,
  id,
  onPointToggle,
  index,
  isEditMode,
  onPointDelete,
}: IPointProps) => {
  const handleOnClick = useCallback(() => {
    onPointToggle && onPointToggle(id, !isActive);
  }, [onPointToggle, id, isActive]);

  return isEditMode ? (
    <EditPoint index={index} onPointDelete={onPointDelete} />
  ) : (
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
