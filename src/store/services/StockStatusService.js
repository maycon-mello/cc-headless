// @flow
import Service from '~/core/Service';
import ContextProvider from '~/core/ContextProvider';

export default class StockStatusService extends Service {
  static instance = undefined;

  async getById(productId: string): Promise<any> {
    const { data } = await this.request.get({
      url: `/ccstore/v1/stockStatus/${productId}`,
      public: true,
    });

    return data;
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new StockStatusService(ContextProvider.getContext());
    }

    return this.instance;
  }
}