import React, { useCallback, useRef } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { connect } from 'react-redux';

import { PointGroup } from '../../components/PointGroup';

import { createPoint } from '../../helpers';

import { IPointGroup, IPointGroupForm } from '../../interfaces';
import { boardActions } from '../../store/reducers/board';

export interface IPointGroupContainerProps extends IPointGroup {
  isEditMode: boolean;
  isLoading: boolean;
  applyChanges?: (group: IPointGroup) => void;
  setEditMode: (groupId: IPointGroup['id']) => void;
  resetEditMode: () => void;
}

export const PointGroupContainerPure = ({
  applyChanges,
  description,
  id,
  isEditMode,
  isLoading,
  name,
  points,
  resetEditMode,
  setEditMode,
  ...props
}: IPointGroupContainerProps) => {
  const formikRef = useRef<FormikProps<IPointGroupForm>>(null);
  // @todo remove fake state, there will be a global edit mode callback
  const handleSeEditMode = useCallback(() => {
    setEditMode && setEditMode(id);
  }, [id, setEditMode]);
  const handleSubmit = useCallback(
    (values) => {
      resetEditMode();
      applyChanges && applyChanges({ ...values, id });
    },
    [applyChanges, resetEditMode],
  );
  const handleOnAddPoint = useCallback(() => {
    handleSeEditMode();
    if (formikRef.current) {
      const currentPoints = formikRef.current.values.points;
      const pointsHelpers = formikRef.current.getFieldHelpers('points');

      pointsHelpers.setValue([...currentPoints, createPoint({ name: '' })]);
    }
  }, [handleSeEditMode, formikRef]);

  return (
    <Formik<IPointGroupForm>
      initialValues={{ name, description, points }}
      onSubmit={handleSubmit}
      innerRef={formikRef}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <PointGroup
            {...props}
            isEditMode={isEditMode}
            applyChanges={handleSubmit}
            onAddPoint={handleOnAddPoint}
            onEdit={handleSeEditMode}
            disabled={isLoading}
          />
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  applyChanges: boardActions.updateGroup,
  setEditMode: boardActions.setEditMode,
  resetEditMode: boardActions.resetEditMode,
};

export const PointGroupContainer = connect(
  null,
  mapDispatchToProps,
)(PointGroupContainerPure);
