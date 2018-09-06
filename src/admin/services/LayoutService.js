// @flow
import Service from '~/core/Service';
import ContextProvider from '~/core/ContextProvider';

export default class LayoutService extends Service {
  static instance = undefined;


  async getLayouts() {
    const { data } = await this.request.get({
      url: '/ccadmin/v1/layouts',
    });

    return data;
  }

  async getStructure(id: string) {
    const { data } = await this.request.get({
      url: `/ccadmin/v1/layouts/${id}/structure`,
      headers: {
        'x-ccasset-language': 'en'
      }
    });

    return data;
  }

  static getInstance(): LayoutService {
    if (this.instance === undefined) {
      this.instance = new LayoutService(ContextProvider.getContext());
    }

    return this.instance;
  }
}