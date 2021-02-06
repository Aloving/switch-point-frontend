import React, { useCallback } from 'react';
import { useField } from 'formik';
import { connect } from 'react-redux';

import { boardActions } from '../../store';
import { Point } from '../../components';

import { IPoint, IPointGroup } from '../../interfaces';

interface IPointContainerProps {
  disabled: boolean;
  index: number;
  isEditMode: boolean;
  togglePoint?: (payload: {
    id: IPoint['id'];
    groupId: IPointGroup['id'];
    isActive: boolean;
  }) => void;
  deletePoint?: (
    id: IPoint['id'],
    pointGroupId: IPoint['pointGroupId'],
  ) => void;
}

export const PointContainerPure = ({
  deletePoint,
  disabled,
  index,
  isEditMode,
  togglePoint,
}: IPointContainerProps) => {
  const [pointField] = useField<IPoint>(`points.${index}`);
  const pointData = pointField.value;
  const handleOnPointToggle = useCallback(() => {
    togglePoint &&
      togglePoint({
        id: pointData.id,
        groupId: pointData.pointGroupId,
        isActive: !pointData.isActive,
      });
  }, [togglePoint, pointData]);
  const handleOnPointDelete = useCallback(() => {
    deletePoint && deletePoint(pointData.id, pointData.pointGroupId);
  }, [deletePoint, pointData]);

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

const mapDispatchToProps = {
  togglePoint: boardActions.toggleActivePoint,
};

export const PointContainer = connect(
  null,
  mapDispatchToProps,
)(PointContainerPure);
