// @flow
import ShippingGroup from "../order/ShippingGroup";
import ShoppingCart from "../order/ShoppingCart";
import PaymentGroup from "../order/PaymentGroup";

/**
 * @typedef CouponConstructor
 * @memberof store.models
 * @type Object
 * @property {string} code - Coupon code
 * @property {string} description - Coupon description
 * @property {string} id - Coupon id
 * @property {string} level - Coupon level
 * @property {string} totalAdjustment - Total adjustment
 * @property {string} status - Coupon status
 * 
 */
export type CouponConstructor = {
  code: string;
  description: string;
  id: string;
  level: string;
  totalAdjustment: string;
  status: string;
}

/**
 * Order Coupon
 * @memberof store.models
 * @property {string} code - Coupon code
 * @property {string} description - Coupon description
 * @property {string} id - Coupon id
 * @property {string} level - Coupon level
 * @property {string} totalAdjustment - Total adjustment
 * @property {string} status - Coupon status
 */
class Coupon {
  code: string;
  description: string;
  id: string;
  level: string;
  totalAdjustment: string;
  status: string;

  /**
   * Create UpdateOrderRequest
   * @param {store.models.requests.UpdateOrderRequestConstructor} props 
   */
  constructor(props: CouponConstructor) {
    this.code = props.code;
    this.level = props.level;
    this.description = props.description;
    this.id = props.id;
    this.totalAdjustment = props.totalAdjustment;
    this.status = props.status;   
  }
}

export default Coupon;
