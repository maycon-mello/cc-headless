// @flow
import ShippingGroup from "../order/ShippingGroup";
import ShoppingCart from "../order/ShoppingCart";
import PaymentGroup from "../order/PaymentGroup";

/**
 * @typedef UpdateOrderRequestConstructor
 * @memberof store.models.requests
 * @type Object
 * @property {boolean} combineLineItems - Combine line items
 * @property {string} id - Order id
 * @property {op} op - Update operation
 * @property {Array<store.models.order.PaymentGroup>} payments - Payment groups
 * @property {Array<store.models.order.ShippingGroup>} shippingGroups - Shipping groups
 * @property {store.models.order.ShoppingCart} shoppingCart - Shopping cart
 * 
 */
export type UpdateOrderRequestConstructor = {
  combineLineItems: boolean;
  id: string;
  op: string;
  payments: Array<PaymentGroup>;
  shippingGroups: Array<ShippingGroup>;
  shoppingCart: ShoppingCart;
}

/**
 * Update order request
 * @memberof store.models.requests
 * @property {boolean} combineLineItems - Combine line items
 * @property {string} id - Order id
 * @property {op} op - Update operation
 * @property {Array<store.models.order.PaymentGroup>} payments - Payment groups
 * @property {Array<store.models.order.ShippingGroup>} shippingGroups - Shipping groups
 * @property {store.models.order.ShoppingCart} shoppingCart - Shopping cart
 */
class UpdateOrderRequest {
  combineLineItems: boolean;
  id: string;
  op: string;
  payments: Array<PaymentGroup>;
  shippingGroups: Array<ShippingGroup>;
  shoppingCart: ShoppingCart;

  /**
   * Create UpdateOrderRequest
   * @param {store.models.requests.UpdateOrderRequestConstructor} props 
   */
  constructor(props: UpdateOrderRequest) {
    this.combineLineItems = props.combineLineItems;
    this.id = props.id;
    this.op = props.op;
    this.payments = (props.payments || []).map(item => new PaymentGroup(item));
    this.shippingGroups = (props.shippingGroups || []).map(item => new ShippingGroup(item));
    this.shoppingCart = new ShoppingCart(props.shoppingCart);
  }
}

export default UpdateOrderRequest;
