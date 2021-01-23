import React, { useCallback } from 'react';
import { useField } from 'formik';

import { Point } from '../../components/Point';

import { IPoint } from '../../interfaces';

interface IPointContainerProps {
  disabled: boolean;
  index: number;
  isEditMode: boolean;
  togglePoint?: (id: IPoint['id'], checked: boolean) => void;
  deletePoint?: (
    id: IPoint['id'],
    pointGroupId: IPoint['pointGroupId'],
  ) => void;
}

export const PointContainer = ({
  deletePoint,
  disabled,
  index,
  isEditMode,
  togglePoint,
}: IPointContainerProps) => {
  const [pointField] = useField<IPoint>(`points.${index}`);
  const pointData = pointField.value;
  const handleOnPointToggle = useCallback(() => {
    togglePoint && togglePoint(pointData.id, !pointData.isActive);
  }, [pointField]);
  const handleOnPointDelete = useCallback(() => {
    deletePoint && deletePoint(pointData.id, pointData.pointGroupId);
  }, [deletePoint]);

  return (
    <Point
      disabled={disabled}
      index={index}
      isEditMode={isEditMode}
      onPointToggle={handleOnPointToggle}
      onPointDelete={handleOnPointDelete}
    />
  );
};
