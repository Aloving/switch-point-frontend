import { ApiResponseEnum } from '../enums/ApiResponse';
import { HttpStatus } from '../enums/HttpStatus';

export interface ApiResponseInterface<T = any> {
  status: ApiResponseEnum;
  statusCode: HttpStatus;
  data: T;
  errors: any;
}
