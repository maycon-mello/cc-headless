// @flow
import Service from '~/core/Service';
import ContextProvider from '~/core/ContextProvider';
import Product from '../models/Product';

export type GetProductListOptions = {
  totalResults: boolean;
  totalExpandedResults: boolean;
  catalogId: string;
  limit: number;
  offset: number;
  categoryId: string;
  includeChildren: boolean;
  storePriceListGroupId: string;
  fields: string;
}

export type GetProductByIdOptions = {
  fields: string;
}

export default class ProductService extends Service {
  static instance = undefined;

  async getById(productId: string, options: GetProductByIdOptions): Promise {
    const { data } = await this.request.get({
      url: `/ccstore/v1/products/${productId}`,
      form: options,
      public: true,
    });

    return new Product(data);
  }

  async getList(options: GetProductListOptions): Promise {
    const { data } = await this.request.get({
      url: `/ccstore/v1/products`,
      form: options,
      public: true,
    });

    return data;
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new ProductService(ContextProvider.getContext());
    }

    return this.instance;
  }
}