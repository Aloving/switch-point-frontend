import { HttpTransport } from './httpTransport';
import { AuthTransport } from './authTransport';
import { PointService } from './services';

export const authTransport = new AuthTransport({
  httpTransport: new HttpTransport(),
  window,
});

export const pointService = new PointService(authTransport);
