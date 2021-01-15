import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Divider,
  CardActions,
  IconButton,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';

import { IPointGroup } from '../../entities';
import { Point } from '../Point';

import styles from './PointGroup.module.css';

type IPointGroupProps = IPointGroup;

export const PointGroup = ({ points, description, name }: IPointGroupProps) => {
  return (
    <div className={styles.root}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar variant="rounded">R</Avatar>}
          action={
            <>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <EditIcon />
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
