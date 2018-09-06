// @flow
import Service from '~/core/Service';
import Collection from '../models/Collection';
import ContextProvider from '~/core/ContextProvider';

type GetCollectionOptions = {
  catalogId: string,
  expand: string,
  maxLevel: 4,
  fields: string,
};

const defaultCollectionOptions = {
  maxLevel: 4,
  catalogId: 'cloudCatalog',
  expand: 'childCategories',
  fields: 'id,displayName,childCategories.categoryImages,childCategories.id,childCategories.displayName,childCategories.route,childCategories.childCategories.id,childCategories.childCategories.route,childCategories.childCategories.displayName,childCategories.childCategories.childCategories.id,childCategories.childCategories.childCategories.displayName,childCategories.childCategories.childCategories.route',
}

export default class CollectionService extends Service {
  static instance = undefined;

  async getRootById(catalogId: string, options: GetCollectionOptions): Promise<Collection> {
    const { data } = await this.request.get({
      url: `/ccstore/v1/collections/${catalogId}`,
      form: {
        ...defaultCollectionOptions,
        ...options, 
      },
      public: true,
    });

    return (data);
  }

  async getById(catalogId: string, options: GetCollectionOptions = {}): Promise<Collection> {
    const { data } = await this.request.get({
      url: `/ccstore/v1/collections/${catalogId}`,
      form: {
        ...options, 
      },
      public: true,
    });

    return (data);
  }

  static getInstance(): CollectionService {
    if (this.instance === undefined) {
      this.instance = new CollectionService(ContextProvider.getContext());
    }

    return this.instance;
  }
}