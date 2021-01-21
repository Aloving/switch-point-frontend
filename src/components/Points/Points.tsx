import React from 'react';
import { FieldArray } from 'formik';

import { IPoint } from '../../interfaces';
import { Point } from '../Point';
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
            <Point
              {...point}
              disabled={disabled}
              index={index}
              isEditMode={isEditMode}
              onPointDelete={() => remove(index)}
            />
          </div>
        ));
      }}
    </FieldArray>
  );
};
