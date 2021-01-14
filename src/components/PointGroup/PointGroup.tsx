import React from 'react';
import {
  List,
  makeStyles,
  Paper,
  Theme,
  createStyles,
  Grid,
  Container,
} from '@material-ui/core';

import { IPointGroup } from '../../entities';
import { Point } from '../Point';

import './PointGroup.css';

type IPointGroupProps = IPointGroup;

export const PointGroup = ({ points, description, name }: IPointGroupProps) => {
  return (
    <>
      {points.map((point) => (
        <Point {...point} key={point.id} />
      ))}
    </>
  );
};
