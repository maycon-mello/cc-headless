// @flow
import Service from '~/core/Service';

export default class AuthService extends Service {

  async pageViews(pageViews: number): Promise {
   return this.request.post({
      url: '/analytics/pageViews',
      body: {
        pageViews,
      },
      public: true,
    });
  }
}