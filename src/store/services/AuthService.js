// @flow
import Service from '~/core/Service';
import AuthResponse from '~/core/models/AuthResponse';

export type VerifyResponse = {
  success: boolean,
  links: Array<Object>,
};

export type LogoutResponse = {
  result: boolean,
  links: Array<Object>,
};

export default class AuthService extends Service {
  /**
   * Profile login
   * 
   * @param {string} username 
   * @param {string} password 
   */
  async login(username: string, password: string): Promise<AuthResponse> {
    const { data } = await this.request.post({
      url: '/login',
      form: {
        username: username,
        password: password,
        grant_type: 'password',
      },
      public: true,
      urlEncoded: true,
    });

    return new AuthResponse(data);
  }

  async refresh(): Promise<AuthResponse> {
    const { data } = await this.request.post({
      url: '/refresh',
    });

    return new AuthResponse(data);
  }

  async verify(): Promise<VerifyResponse> {
    const { data } = await this.request.post({
      url: '/verify',
    });

    return data;  
  }

  async logout(): Promise<LogoutResponse> {
    const { data } = await this.request.post({
      url: '/logout',
    });

    return data;  
  }
}