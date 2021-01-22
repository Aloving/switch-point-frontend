import React from 'react';
import { FieldArray } from 'formik';

import { IPoint } from '../../interfaces';
import { PointContainer } from '../../containers';
import styles from './Points.module.css';

export interface IPointsProps {
  disabled: boolean;
  isEditMode: boolean;
}

export const Points: React.FC<IPointsProps> = ({ disabled, isEditMode }) => {
  return (
    <FieldArray name="points">
      {({ remove, form }) => {
        const points: IPoint[] = form.values.points as IPoint[];

        return points.map((point, index) => (
          <div className={styles.point} key={point.id}>
            <PointContainer
              disabled={disabled}
              index={index}
              isEditMode={isEditMode}
              deletePoint={() => remove(index)}
            />
          </div>
        ));
      }}
    </FieldArray>
  );
};
