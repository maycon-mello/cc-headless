// @flow
import ShoppingCartItem from './ShoppingCartItem';

export type ShoppingCartConstructor = {
  items: Array<ShoppingCartItem>;
  numberOfItems: number;
}

export default class ShoppingCart {
  items: Array<ShoppingCartItem>
  numberOfItems: number;

  constructor(props: ShoppingCartConstructor) {
    this.items = props.items.map(item => new ShoppingCartItem(item));
    this.numberOfItems = props.numberOfItems;
  }
}
