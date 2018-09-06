// @flow
import Service from '~/core/Service';
import ContextProvider from '~/core/ContextProvider';
import Events from '~/core/Events';

const event = Events.getEventEmitter('SkuService');

class SkuService extends Service {
  static instance = undefined;

  async getById(skuId: string): Promise<any> {
    const { data } = await this.request.get({
      url: `/ccstore/v1/skus/${skuId}`,
      public: true,
    });

    event('getById', skuId);

    return data;
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new SkuService(ContextProvider.getContext());
    }

    return this.instance;
  }
}

export default SkuService;
