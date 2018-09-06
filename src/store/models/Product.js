// @flow
import CategoryImage from './CategoryImage';

export type ProductConstructor = {
  id: string;
  displayName: string;
}

export default class Product {
  id: string;
  displayName: string;

  constructor(props: ProductConstructor) {
    Object.assign(this, props);
  }
}