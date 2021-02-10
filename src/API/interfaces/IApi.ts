import { IAuthTransport } from './IAuthTransport';
import { IPointService } from './IPointService';

export interface IApi {
  authTransport: IAuthTransport;
  pointService: IPointService;
}
