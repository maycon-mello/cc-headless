// @flow
import Service from '~/core/Service';
import ContextProvider from '~/core/ContextProvider';

export default class AuthService extends Service {
  static instance = undefined;


  async login(applicationKey: string = this.context.applicationKey) {
    const { data } = await this.request.post({
      url: '/ccadmin/v1/login',
      form: {
        grant_type: 'client_credentials',
      },
      urlEncoded: true,
      headers: {
        Authorization: `Bearer ${applicationKey}`,
      }
    });

    return data;
  }

  static getInstance(): AuthService {
    if (this.instance === undefined) {
      this.instance = new AuthService(ContextProvider.getContext());
    }

    return this.instance;
  }
}