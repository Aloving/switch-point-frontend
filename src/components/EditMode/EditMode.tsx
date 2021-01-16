import React from 'react';

import { IPoint, IPointGroup } from '../../entities';

interface IEditModeProps extends IPointGroup {
  onEdit?: (group: IPointGroup) => void;
  id: number | string;
  name: string;
  description: string;
  points: IPoint[];
}

export const EditMode = (props: IEditModeProps) => {};
