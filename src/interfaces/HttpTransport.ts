import { AxiosRequestConfig } from 'axios';
import { ApiResponseInterface } from './ApiResponse';
import { HttpTransportOptions } from './HttpTransportOptions';

export interface IHttpTransport {
  get<R = any>(
    url: string,
    config?: HttpTransportOptions,
  ): Promise<ApiResponseInterface<R>>;

  post<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: HttpTransportOptions,
  ): Promise<ApiResponseInterface<R>>;

  put<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: HttpTransportOptions,
  ): Promise<ApiResponseInterface<R>>;

  patch<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: HttpTransportOptions,
  ): Promise<ApiResponseInterface<R>>;

  makeRequest<R>(config: AxiosRequestConfig): Promise<ApiResponseInterface<R>>;

  requestMiddleware(
    onFulfilled?: (value: HttpTransportOptions) => HttpTransportOptions,
    onRejected?: (error: any) => any,
  ): void;

  responseMiddleware(
    onFulfilled: (
      value: ApiResponseInterface,
    ) => ApiResponseInterface | Promise<ApiResponseInterface>,
    onRejected?: (error: any) => any,
  ): void;
}
