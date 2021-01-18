import React, { useCallback, useRef, useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';

import { IPointGroup, IPointGroupForm } from '../../interfaces';
import { PointGroup } from '../../components/PointGroup';
import { createPoint } from '../../helpers';

interface IPointGroupContainerProps extends IPointGroup {
  isEditMode: boolean;
  onEdit?: (group: IPointGroup) => void;
}

export const PointGroupContainer = ({
  name,
  description,
  points,
  id,
  onEdit,
  isEditMode: editMode,
  ...props
}: IPointGroupContainerProps) => {
  const formikRef = useRef<FormikProps<IPointGroupForm>>(null);
  const [isEditMode, setIsEditMode] = useState(editMode);
  const handleSubmit = useCallback((values) => {
    onEdit && onEdit({ ...values, id });
    setIsEditMode(false);
  }, []);
  const handleOnAddPoint = useCallback(() => {
    setIsEditMode(true);
    if (formikRef.current) {
      const currentPoints = formikRef.current.values.points;
      const pointsHelpers = formikRef.current.getFieldHelpers('points');

      pointsHelpers.setValue([...currentPoints, createPoint({ name: '' })]);
    }
  }, [isEditMode, setIsEditMode, formikRef]);
  const handleOnEdit = useCallback(() => {
    setIsEditMode(true);
  }, []);

  return (
    <Formik<Omit<IPointGroup, 'id'>>
      initialValues={{ name, description, points }}
      onSubmit={handleSubmit}
      innerRef={formikRef}
    >
      {({ handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <PointGroup
            id={id}
            {...values}
            {...props}
            isEditMode={isEditMode}
            applyChanges={handleSubmit}
            onAddPoint={handleOnAddPoint}
            onEdit={handleOnEdit}
            disabled={false}
          />
        </Form>
      )}
    </Formik>
  );
};
