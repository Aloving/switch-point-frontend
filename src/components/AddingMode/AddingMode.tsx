import React, { useCallback, useRef } from 'react';
import { Formik, Form, FormikProps } from 'formik';

import { createNewGroup, useGroupFormHelpers } from '../../helpers';
import { IPointGroup, IPointGroupForm } from '../../interfaces';
import { PointGroup } from '../PointGroup';

export interface IAddingModeProps {
  isLoading: boolean;
  editModeId: null | string;

  createGroup(payload: Omit<IPointGroup, 'id'>): void;
  onDelete: () => void;
}

export const AddingMode = ({
  createGroup,
  editModeId,
  isLoading,
  onDelete,
}: IAddingModeProps) => {
  const formikRef = useRef<FormikProps<IPointGroupForm>>(null);
  const { addNewPoint } = useGroupFormHelpers(formikRef);
  const handleSubmit = useCallback(
    (values) => {
      createGroup(values);
    },
    [createGroup],
  );

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={createNewGroup({})}
      innerRef={formikRef}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <PointGroup
            onDelete={onDelete}
            disabled={isLoading}
            isEditMode={!editModeId}
            onAddPoint={addNewPoint}
            applyChanges={handleSubmit}
          />
        </Form>
      )}
    </Formik>
  );
};
