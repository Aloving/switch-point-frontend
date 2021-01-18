import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';

import { IPoint } from '../../interfaces';
import { EditPoint } from '../EditPoint';

interface IPointProps extends IPoint {
  disabled: boolean;
  index: number;
  isEditMode: boolean;
  onPointToggle?: (id: string | number, checked: boolean) => void;
  onPointDelete?: () => void;
}

export const Point = ({
  disabled,
  id,
  index,
  isActive,
  isEditMode,
  name,
  onPointDelete,
  onPointToggle,
}: IPointProps) => {
  const handleOnClick = useCallback(() => {
    onPointToggle && onPointToggle(id, !isActive);
  }, [onPointToggle, id, isActive]);

  return isEditMode ? (
    <EditPoint
      index={index}
      onPointDelete={onPointDelete}
      name={name}
      disabled={disabled}
    />
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
