// @flow
import ShippingGroup from "../order/ShippingGroup";
import ShoppingCart from "../order/ShoppingCart";
import PaymentGroup from "../order/PaymentGroup";
import Order from "../order/Order";

/**
 * @typedef OrderRequestConstructor
 * @memberof store.models.requests
 * @type Object
 * @property {boolean} combineLineItems - Combine line items
 * @property {Array<store.models.order.PaymentGroup>} payments - Payment groups
 * @property {Array<store.models.order.ShippingGroup>} shippingGroups - Shipping groups
 * @property {store.models.order.ShoppingCart} shoppingCart - Shopping cart
 * @property {boolean} reprice - Currently this flag is used in combination with orderId parameter. If flag is true orderId is mandatory. Used only for orders in pending approval state.
 */
export type OrderRequestConstructor = {
  combineLineItems: string;
  payments?: Array<PaymentGroup>;
  shippingGroups?: Array<ShippingGroup>;
  shoppingCart: ShoppingCart;
}

/**
 * Order request
 * @memberof store.models.requests
 * @property {boolean} combineLineItems - Combine line items
 * @property {Array<store.models.order.PaymentGroup>} payments - Payment groups
 * @property {Array<store.models.order.ShippingGroup>} shippingGroups - Shipping groups
 * @property {store.models.order.ShoppingCart} shoppingCart - Shopping cart
 * @property {boolean} reprice - Currently this flag is used in combination with orderId parameter. If flag is true orderId is mandatory. Used only for orders in pending approval state.
 */
class OrderRequest {
  combineLineItems: string;
  payments: ?Array<PaymentGroup>;
  shippingGroups: ?Array<ShippingGroup>;
  shoppingCart: ShoppingCart;

  /**
   * Create OrderRequest
   * @param {store.models.requests.OrderRequestConstructor} props 
   */
  constructor(props: OrderRequestConstructor) {
    this.combineLineItems = props.combineLineItems;
    this.payments = props.payments ? props.payments.map(item => new PaymentGroup(item)) : [];
    const shippingGroups = (props.shippingGroups || [])
      .map(item => new ShippingGroup(item))
      .filter(ShippingGroup.isValid);

    if (shippingGroups.length > 0) {
      this.shippingGroups = shippingGroups;
    }

    this.shoppingCart = new ShoppingCart(props.shoppingCart);

    console.log(props.shippingGroups);
  }
}

export default OrderRequest;
