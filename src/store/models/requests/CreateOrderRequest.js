// @flow
import ShoppingCart from '../order/ShoppingCart';
import Order from '../order/Order';
import OrderRequest from './OrderRequest';

/**
 * @typedef CreateOrderRequestConstructor
 * @memberof store.models.requests
 */
export type CreateOrderRequestConstructor = {
  combineLineItems: string;
  id: string;
  op: string;
  shoppingCart: ShoppingCart;
}

/**
 * Price Order request
 * @memberof store.models.requests
 */
class CreateOrderRequest {
  id: string;
  op: string;
  combineLineItems: string;
  shoppingCart: ShoppingCart;
  

  /**
   * Create OrderRequest
   * @param {store.models.requests.CreateOrderRequestConstructor} props 
   */
  constructor(props: CreateOrderRequestConstructor) {
    this.id = props.id;
    this.op = props.op || 'create';
    this.combineLineItems = props.combineLineItems || 'no';
    this.shoppingCart = new ShoppingCart(props.shoppingCart);
  }

  /**
   * 
   * @param {store.models.Order} order 
   * @param {store.models.requests.CreateOrderRequestConstructor} options 
   */
  static createFromOrder(order: Order, options: ?CreateOrderRequestConstructor) {
    const props = {
      shoppingCart: order.shoppingCart,
      combineLineItems: 'no',
      ...options,
    }

    return new CreateOrderRequest(props);
  }
}

export default CreateOrderRequest;
