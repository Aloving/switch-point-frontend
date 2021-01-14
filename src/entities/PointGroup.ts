import { IPoint } from './Point';

export interface IPointGroup {
  id: number | string;
  name: string;
  description: string;
  points: IPoint[];
}
