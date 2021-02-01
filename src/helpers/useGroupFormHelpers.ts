import React, { useCallback } from 'react';
import { FormikProps } from 'formik';

import { createPoint } from './createPoint';

import { IPointGroupForm } from '../interfaces';

export function useGroupFormHelpers(
  formikRef: React.RefObject<FormikProps<IPointGroupForm>>,
) {
  const addNewPoint = useCallback(() => {
    if (formikRef.current) {
      const currentPoints = formikRef.current.values.points;
      const pointsHelpers = formikRef.current.getFieldHelpers('points');

      pointsHelpers.setValue([...currentPoints, createPoint({ name: '' })]);
    }
  }, [formikRef]);

  return { addNewPoint };
}
