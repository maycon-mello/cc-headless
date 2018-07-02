// @flow
import ShoppingCartItem from './ShoppingCartItem';
import type { ShoppingCartItemConstructor } from './ShoppingCartItem';
import Coupon from './Coupon';


export type ShoppingCartConstructor = {
  items: Array<ShoppingCartItem>;
  numberOfItems: number;
  coupons: Array<Coupon>;
}

/**
 * @memberOf store.models
 */
class ShoppingCart {
  items: Array<ShoppingCartItem>
  numberOfItems: number;
  coupons: Array<Coupon>

  constructor(props: ShoppingCartConstructor) {
    this.items = (props.items || []).map(item => new ShoppingCartItem(item));
    this.numberOfItems = props.numberOfItems;
    this.coupons = (props.coupons || []).map(item => new Coupon(item));
  }

  getItemBySku(skuId: string): ?ShoppingCartItem {
    return this.items.find(item => item.catRefId === skuId);
  }

  updateItem(skuId: string, props: Object): ShoppingCart {
    this.items = this.items.map(item => {
      if (item.catRefId !== skuId) {
        return item;
      }

      return new ShoppingCartItem({
        ...item.rawResponse,
        ...props,
      });
    });

    return this;
  }

  addItem(props: ShoppingCartItemConstructor): ShoppingCart {
    const itemFound = this.getItemBySku(props.skuId);

    if (itemFound) {
      props = {
        ...itemFound.rawResponse,
        ...props,
        quantity: itemFound.quantity + (props.quantity || 0),
      };
      this.updateItem(props.skuId, props); 
    } else {
      this.items = [
        ...this.items,
        new ShoppingCartItem(props),
      ];
    }

    return this;
  }

  /**
   * Increase or decrease item quantity
   * 
   * @param {string} skuId - skuId
   * @param {number} quantity - Use positive number to increase and negative number to decrease
   */
  updateQuantity(skuId: string, quantity: number): ShoppingCart {
    return this.addItem({
      skuId,
      quantity,
    });
  }

  /**
   * Remove cart item
   * @param {string} skuId 
   * @return {ShoppingCart} shoppingCart
   */
  removeItem(skuId: string): ShoppingCart {
    this.items = this.items.filter(item => item.skuId !== skuId);
    return this;
  }
}

export default ShoppingCart;
