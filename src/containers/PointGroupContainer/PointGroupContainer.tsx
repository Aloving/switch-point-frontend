import React, { useCallback, useRef } from 'react';
import { Formik, Form, FormikProps } from 'formik';

import { PointGroup } from '../../components/PointGroup';

import { createPoint } from '../../helpers';

import { IPointGroup, IPointGroupForm } from '../../interfaces';

export interface IPointGroupContainerProps extends IPointGroup {
  isEditMode: boolean;
  isLoading: boolean;
  applyChanges?: (group: IPointGroup) => void;
  setEditMode: (groupId: IPointGroup['id']) => void;
}

export const PointGroupContainer = ({
  applyChanges,
  description,
  id,
  isEditMode,
  isLoading,
  name,
  points,
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
      applyChanges && applyChanges({ ...values, id });
    },
    [applyChanges],
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
