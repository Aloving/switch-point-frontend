import { AxiosRequestConfig } from 'axios';
import { IApiResponseInterface } from './ApiResponse';
import { IHttpTransportOptions } from './HttpTransportOptions';

export interface IHttpTransport {
  get<R = any>(
    url: string,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponseInterface<R>>;

  post<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponseInterface<R>>;

  put<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponseInterface<R>>;

  patch<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponseInterface<R>>;

  makeRequest<R>(config: AxiosRequestConfig): Promise<IApiResponseInterface<R>>;

  requestMiddleware(
    onFulfilled?: (value: IHttpTransportOptions) => IHttpTransportOptions,
    onRejected?: (error: any) => any,
  ): void;

  responseMiddleware(
    onFulfilled: (
      value: IApiResponseInterface,
    ) => IApiResponseInterface | Promise<IApiResponseInterface>,
    onRejected?: (error: any) => any,
  ): void;
}
