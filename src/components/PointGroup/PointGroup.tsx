import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import { IPointGroup } from '../../entities';
import { Point } from '../Point';

import styles from './PointGroup.module.css';

export interface IPointGroupProps extends IPointGroup {
  onGroupUpdate?: (group: IPointGroup) => void;
}

export const PointGroup = ({ points, description, name }: IPointGroupProps) => {
  return (
    <div>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar variant="rounded">R</Avatar>}
          action={
            <>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <AddIcon />
              </IconButton>
            </>
          }
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
