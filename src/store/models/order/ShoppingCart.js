// @flow
import ShoppingCartItem from './ShoppingCartItem';
import Coupon from './Coupon';

export type ShoppingCartConstructor = {
  items: Array<ShoppingCartItem>;
  numberOfItems: number;
  coupons: Array<Coupon>;
}

export default class ShoppingCart {
  items: Array<ShoppingCartItem>
  numberOfItems: number;
  coupons: Array<Coupon>

  constructor(props: ShoppingCartConstructor) {
    this.items = (props.items || []).map(item => new ShoppingCartItem(item));
    this.numberOfItems = props.numberOfItems;
    this.coupons = (props.coupons || []).map(item => new Coupon(item));
  }
}
