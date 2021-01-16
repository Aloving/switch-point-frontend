import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

import { IPointGroup } from '../../entities';
import { Point } from '../Point';
import { Actions } from './components';
import styles from './PointGroup.module.css';

export interface IPointGroupProps extends IPointGroup {
  isEditMode: boolean;
  onGroupUpdate?: (group: IPointGroup) => void;
}

export const PointGroup = ({
  points,
  description,
  name,
  isEditMode,
}: IPointGroupProps) => {
  return (
    <div>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar variant="rounded">R</Avatar>}
          action={<Actions />}
          title={name}
          titleTypographyProps={{
            align: 'left',
          }}
          subheaderTypographyProps={{
            align: 'left',
          }}
          subheader={description}
        />
        <Divider variant="middle" />
        <CardContent>
          {points.map((point) => (
            <div className={styles.point}>
              <Point {...point} key={point.id} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
