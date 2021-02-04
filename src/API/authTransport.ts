import { ApiResponseEnum } from '../enums/ApiResponse';
import { HttpStatus } from '../enums/HttpStatus';
import {
  IApiResponse,
  IAuthTransport,
  IHttpTransport,
  IHttpTransportOptions,
  ILoginRequestPayload,
  ITokensResponse,
} from '../interfaces';

interface IAuthTransportOptions {
  httpTransport: IHttpTransport;
  window: Window;
  token?: string | null;
  refreshToken?: string | null;
}

export class AuthTransport implements IAuthTransport {
  private token: string | null;
  private refreshToken: string | null;
  private window: Window;
  private onLogoutSubscribers: unknown[] = [];
  private onLoginSubscribers: unknown[] = [];
  public client: IHttpTransport;

  constructor({
    httpTransport,
    refreshToken,
    token,
    window,
  }: IAuthTransportOptions) {
    this.client = httpTransport;
    this.window = window;

    this.token = token || null;
    this.refreshToken = refreshToken || null;

    this.onInit();
  }

  private getAuthorizationHeader(): string {
    return `Bearer ${this.token}`;
  }

  private onInit(): void {
    this.addAuthRequestMiddleware();
    this.addAuthResponseMiddleware();
  }

  private addAuthRequestMiddleware(): void {
    this.client.requestMiddleware(
      (config = {}) => {
        if (!this.token) {
          return config;
        }

        const newConfig: IHttpTransportOptions = {
          ...config,
          headers: {
            ...config.headers,
            Authorization: this.getAuthorizationHeader(),
          },
        };

        return newConfig;
      },
      (e) => Promise.reject(e),
    );
  }

  private addAuthResponseMiddleware(): void {
    this.client.responseMiddleware(
      (r) => r,
      async (error) => {
        if (
          !this.refreshToken ||
          error.response.status !== HttpStatus.UNAUTHORIZED ||
          error.config.retry
        ) {
          throw error;
        }

        const {
          data: { refreshToken, accessToken },
        } = await this.updateToken(this.refreshToken);

        this.setToken({ refreshToken, accessToken });

        const newRequest = {
          ...error.config,
          retry: true,
        };

        return this.client.makeRequest(newRequest);
      },
    );
  }

  private subscribeConfig(
    config?: IHttpTransportOptions,
  ): IHttpTransportOptions {
    const newConfig = config || { headers: {} };

    return {
      ...newConfig,
      headers: {
        ...newConfig.headers,
        Authorization: this.getAuthorizationHeader(),
      },
    };
  }

  private clearToken(): void {
    this.token = null;
    this.refreshToken = null;
  }

  private setToken({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }): void {
    this.token = accessToken;
    this.refreshToken = refreshToken;
  }

  async login({
    login,
    password,
  }: ILoginRequestPayload): Promise<IApiResponse<ITokensResponse>> {
    const response = await this.client.post<ITokensResponse>('/auth/login', {
      login,
      password,
    });
    const { status, data } = response;
    if (status === ApiResponseEnum.SUCCESS) {
      this.token = data.accessToken;
      this.refreshToken = data.refreshToken;
      this.onLoginSubscribers.forEach((subscriber) => {
        if (typeof subscriber === 'function') {
          subscriber();
        }
      });
    }

    return response;
  }

  logout = () => {
    this.clearToken();

    this.onLogoutSubscribers.forEach((subscriber) => {
      if (typeof subscriber === 'function') {
        subscriber();
      }
    });
  };

  getToken(): Partial<ITokensResponse> {
    return {
      accessToken: this.token || undefined,
      refreshToken: this.refreshToken || undefined,
    };
  }

  updateToken(refreshToken: string): Promise<IApiResponse<ITokensResponse>> {
    return this.client.post<ITokensResponse, { refreshToken: string }>(
      '/auth/refreshToken',
      {
        refreshToken,
      },
    );
  }

  get<R = any>(
    url: string,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>> {
    return this.client.get<R>(url, this.subscribeConfig(config));
  }

  post<R = any, D = Record<string, any>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>> {
    return this.client.post<R, D>(url, data, this.subscribeConfig(config));
  }

  put<R = any, D = Record<string, any>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>> {
    return this.client.put<R, D>(url, data, this.subscribeConfig(config));
  }

  patch<R = any, D = Record<string, any>>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>> {
    return this.client.patch<R, D>(url, data, this.subscribeConfig(config));
  }

  delete<R = any>(
    url: string,
    config?: IHttpTransportOptions,
  ): Promise<IApiResponse<R>> {
    return this.client.delete(url, this.subscribeConfig(config));
  }
}
