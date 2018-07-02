// @flow
import ShippingGroup from '../order/ShippingGroup';
import ShoppingCart from '../order/ShoppingCart';
import PaymentGroup from '../order/PaymentGroup';
import Order from '../order/Order';
import OrderRequest from './OrderRequest';

/**
 * @typedef UpdateOrderRequestConstructor
 * @extends store.models.requests.OrderRequestConstructor
 * @memberof store.models.requests
 * @type Object
 * @property {string} orderId - Order id 
 * @property {boolean} reprice - Currently this flag is used in combination with orderId parameter. If flag is true orderId is mandatory. Used only for orders in pending approval state.
 * @inheritdoc
 */
export type UpdateOrderRequestConstructor = {
  combineLineItems: string;
  id: string;
  op: string;  
  payments?: Array<PaymentGroup>;
  shippingGroups?: Array<ShippingGroup>;
  shoppingCart: ShoppingCart;
  reprice?: boolean;
}

/**
 * Price Order request
 * @memberof store.models.requests
 * @extends store.models.requests.OrderRequest
 * @property {string} orderId - Order id
 * @property {boolean} reprice - Currently this flag is used in combination with orderId parameter. If flag is true orderId is mandatory. Used only for orders in pending approval state.
 * @inheritdoc
 */
class UpdateOrderRequest extends OrderRequest {
  id: string;
  op: string;
  reprice: ?boolean;  

  /**
   * Create OrderRequest
   * @param {store.models.requests.UpdateOrderRequestConstructor} props 
   */
  constructor(props: UpdateOrderRequestConstructor) {
    super(props);
    this.id = props.id;
    this.reprice = props.reprice;
  }

  /**
   * 
   * @param {store.models.Order} order 
   * @param {store.models.requests.UpdateOrderRequestConstructor} options
   */
  static createFromOrder(order: Order, options: ?UpdateOrderRequestConstructor) {
    const props = {
      id: order.orderId || order.id,
      payment: order.payments,
      shippingGroups: order.shippingGroups,
      shoppingCart: order.shoppingCart,
      combineLineItems: 'yes',
      ...options,
    }

    return new UpdateOrderRequest(props);
  }
}

export default UpdateOrderRequest;
