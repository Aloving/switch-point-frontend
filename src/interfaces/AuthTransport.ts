import { IApiResponse } from './ApiResponse';
import { IHttpTransportOptions } from './HttpTransportOptions';
import { ILoginRequestPayload } from './LoginRequestPayload';
import { ITokensResponse } from './TokenResponse';

type TDataRequest = Record<string, any>;

export interface IAuthTransport {
  token: string | null;
  refreshToken: string | null;
  login(payload: ILoginRequestPayload): Promise<IApiResponse<ITokensResponse>>;
  logout(): void;
  updateToken(refreshToken: string): Promise<IApiResponse<ITokensResponse>>;
  getToken(): Partial<ITokensResponse>;
  clearToken(): void;
  onInit(): void;
  setToken({
    accessToken,
    refreshToken,
  }: Pick<ITokensResponse, 'accessToken' | 'refreshToken'>): void;

  delete<R = any>(
    url: string,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  get<R = any>(
    url: string,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  post<R = any, D = TDataRequest>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  put<R = any, D = TDataRequest>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;

  patch<R = any, D = TDataRequest>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>>;
}
