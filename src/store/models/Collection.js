// @flow
import mapIfExists from '~/core/util/mapIfExists' 
import CategoryImage from './CategoryImage';

export type CollectionConstructor = {
  id: string;
  displayName: string;
  childCategories: Array<CollectionConstructor>;
  categoryImages: Array<CategoryImage>;
}

export default class Collection {
  id: string;
  displayName: string;
  childCategories: Array<Collection>;
  categoryImages: Array<CategoryImage>;

  constructor(props: CollectionConstructor) {
    Object.assign(this, props);

    mapIfExists(this, 'childCategories', category => new Collection(category));
    mapIfExists(this, 'categoryImages', image => new CategoryImage(image));
  }
}