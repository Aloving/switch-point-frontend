import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';

import { IPointGroup } from '../../entities';
import { PointGroup } from '../../components/PointGroup';

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
  ...props
}: IPointGroupContainerProps) => {
  const handleSubmit = useCallback((values) => {
    onEdit && onEdit({ ...values, id });
  }, []);

  return (
    <Formik
      initialValues={{ name, description, points }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <PointGroup id={id} {...values} {...props} />
        </Form>
      )}
    </Formik>
  );
};
