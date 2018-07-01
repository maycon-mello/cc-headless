// @flow
import ShippingGroup from '../order/ShippingGroup';
import ShoppingCart from '../order/ShoppingCart';
import PaymentGroup from '../order/PaymentGroup';
import Order from '../order/Order';
import OrderRequest from './OrderRequest';

/**
 * @typedef PriceOrderRequestConstructor
 * @memberof store.models.requests
 * @type Object
 * @property {boolean} combineLineItems - Combine line items
 * @property {string} orderId - Order id 
 * @property {Array<store.models.order.PaymentGroup>} payments - Payment groups
 * @property {Array<store.models.order.ShippingGroup>} shippingGroups - Shipping groups
 * @property {store.models.order.ShoppingCart} shoppingCart - Shopping cart
 * @property {boolean} reprice - Currently this flag is used in combination with orderId parameter. If flag is true orderId is mandatory. Used only for orders in pending approval state.
 */
export type PriceOrderRequestConstructor = {
  combineLineItems: string;
  orderId: string;  
  payments?: Array<PaymentGroup>;
  shippingGroups?: Array<ShippingGroup>;
  shoppingCart: ShoppingCart;
  reprice?: boolean;
}

/**
 * Price Order request
 * @memberof store.models.requests
 * @extends store.models.requests.OrderRequest
 * @property {boolean} combineLineItems - Combine line items
 * @property {string} orderId - Order id
 * @property {Array<store.models.order.PaymentGroup>} payments - Payment groups
 * @property {Array<store.models.order.ShippingGroup>} shippingGroups - Shipping groups
 * @property {store.models.order.ShoppingCart} shoppingCart - Shopping cart
 * @property {boolean} reprice - Currently this flag is used in combination with orderId parameter. If flag is true orderId is mandatory. Used only for orders in pending approval state.
 */
class PriceOrderRequest extends OrderRequest {
  orderId: string;
  reprice: ?boolean;

  /**
   * Create OrderRequest
   * @param {store.models.requests.OrderRequestConstructor} props 
   */
  constructor(props: PriceOrderRequestConstructor) {
    super(props);

    this.orderId = props.orderId;
    this.reprice = props.reprice;
  }

  static createFromOrder(order: Order, options: ?PriceOrderRequestConstructor) {
    const props = {
      orderId: order.orderId,
      shoppingCart: order.shoppingCart,
      combineLineItems: 'yes',
      ...options,
    }

    return new PriceOrderRequest(props);
  }
}

export default PriceOrderRequest;
