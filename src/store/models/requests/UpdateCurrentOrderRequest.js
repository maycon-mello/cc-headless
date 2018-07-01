// @flow
import ShippingGroup from '../order/ShippingGroup';
import ShoppingCart from '../order/ShoppingCart';
import PaymentGroup from '../order/PaymentGroup';
import Order from '../order/Order';
import OrderRequest from './OrderRequest';

/**
 * @typedef UpdateCurrentOrderRequestConstructor
 * @extends store.models.requests.OrderRequestConstructor
 * @memberof store.models.requests
 * @type Object
 * @property {string} orderId - Order id 
 * @property {boolean} reprice - Currently this flag is used in combination with orderId parameter. If flag is true orderId is mandatory. Used only for orders in pending approval state.
 * @inheritdoc
 */
export type UpdateCurrentOrderRequestConstructor = {
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
class UpdateCurrentOrderRequest extends OrderRequest {
  id: string;
  op: string;

  /**
   * Create OrderRequest
   * @param {store.models.requests.UpdateCurrentOrderRequestConstructor} props 
   */
  constructor(props: UpdateCurrentOrderRequestConstructor) {
    super(props);
    this.id = props.id;
    this.op = props.op || 'update';
    this.reprice = props.reprice;
  }

  /**
   * 
   * @param {store.models.Order} order 
   * @param {store.models.requests.UpdateCurrentOrderRequestConstructor} options 
   * @example
   * 
   * UpdateCurrentOrderRequest.createFromOrder(order, {
   *   op: 'update',
   * })
   */
  static createFromOrder(order: Order, options: ?UpdateCurrentOrderRequestConstructor) {
    const props = {
      id: order.orderId || order.id,
      shoppingCart: order.shoppingCart,
      combineLineItems: 'yes',
      ...options,
    }

    return new UpdateCurrentOrderRequest(props);
  }
}

export default UpdateCurrentOrderRequest;
