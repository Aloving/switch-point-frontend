import { AxiosRequestConfig } from 'axios';
import { IApiResponse } from './ApiResponse';
import { IHttpTransportOptions } from './HttpTransportOptions';

export interface IHttpTransport {
  get<R = any>(
    url: string,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  post<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  put<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  patch<R = any, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  delete<R = any>(
    url: string,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  makeRequest<R>(config: AxiosRequestConfig): Promise<IApiResponse<R>>;

  requestMiddleware(
    onFulfilled?: (value: IHttpTransportOptions) => IHttpTransportOptions,
    onRejected?: (error: any) => any,
  ): void;

  responseMiddleware(
    onFulfilled: (value: IApiResponse) => IApiResponse | Promise<IApiResponse>,
    onRejected?: (error: any) => any,
  ): void;
}
