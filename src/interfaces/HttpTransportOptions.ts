export interface IHttpTransportOptions {
  headers?: {
    [key: string]: any;
    Authorization?: string;
  };
  paramsSerializer?: (param: any) => string;
}
