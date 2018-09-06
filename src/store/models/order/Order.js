// @flow

import PriceListGroup from './PriceListGroup';
import DiscountInfo from './DiscountInfo';
import ShippingMethod from './ShippingMethod';
import Address from '../Address';
import TaxPriceInfo from './TaxPriceInfo';
import PriceInfo from './PriceInfo';
import DynamicProperty from '../DynamicProperty';
import PaymentGroup from './PaymentGroup';
import ShippingGroup from './ShippingGroup';
import ShoppingCart from './ShoppingCart';

export type OrderConstructor = {
  id: string;
  orderId: string;  
  creationTime: number;
  sourceSystem: string;
  orderStatus: string;
  submittedDate: string;
  lastModifiedDate: string;
  creationDate: string;
  orderProfileId: string;
  uuid: string;
  state: string;
  priceListGroup: PriceListGroup;
  orderLocale: string;
  discountInfo: DiscountInfo;
  shippingMethod: ShippingMethod;
  trackingInfo: Array<any>;
  approvalSystemMessages: Array<any>;
  giftWithPurchaseOrderMarkers: Array<any>;
  billingAddress: Address;
  shippingAddress: Address;
  taxPriceInfo: TaxPriceInfo;
  priceInfo: PriceInfo;
  dynamicProperties: Array<DynamicProperty>;
  payments: Array<PaymentGroup>;
  shippingGroups: Array<ShippingGroup>;
  shoppingCart: ShoppingCart;
}


/**
 * Order class
 * @memberof store.models
 */
class Order {
  id: string;
  orderId: string;
  creationTime: number;
  sourceSystem: string;
  orderStatus: string;
  submittedDate: string;
  lastModifiedDate: string;
  creationDate: string;
  orderProfileId: string;
  uuid: string;
  state: string;
  priceListGroup: PriceListGroup;
  orderLocale: string;
  discountInfo: DiscountInfo;
  trackingInfo: Array<any>;
  shippingMethod: ShippingMethod; 
  approvalSystemMessages: Array<any>;
  giftWithPurchaseOrderMarkers: Array<any>;  
  billingAddress: Address;
  shippingAddress: Address;
  taxPriceInfo: TaxPriceInfo;
  priceInfo: PriceInfo;
  dynamicProperties: Array<DynamicProperty>;
  payments: Array<PaymentGroup>;
  shippingGroups: Array<ShippingGroup>;
  shoppingCart: ShoppingCart;  
  rawResponse: Object;

  constructor(props: OrderConstructor = {}) {
    this.id = props.id;
    this.orderId = props.orderId;
    this.creationTime = props.creationTime;
    this.sourceSystem = props.sourceSystem;
    this.orderStatus = props.orderStatus;
    this.submittedDate = props.submittedDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.creationDate = props.creationDate;
    this.orderProfileId = props.orderProfileId;
    this.uuid = props.uuid;
    this.state = props.state;
    this.orderLocale = props.orderLocale;    

    if (props.discountInfo) {
      this.discountInfo = new DiscountInfo(props.discountInfo);
    }

    if (props.priceListGroup) {
      this.priceListGroup = new PriceListGroup(props.priceListGroup);
    }

    if (props.shippingMethod) {
      this.shippingMethod = new ShippingMethod(props.shippingMethod);
    }

    this.approvalSystemMessages = props.approvalSystemMessages;
    this.trackingInfo = props.trackingInfo;
    this.giftWithPurchaseOrderMarkers = props.giftWithPurchaseOrderMarkers;

    if (props.billingAddress) {
      this.billingAddress = new Address(props.billingAddress);
    }

    if (props.shippingAddress) { 
      this.shippingAddress = new Address(props.shippingAddress);
    }

    if (props.taxPriceInfo) {
      this.taxPriceInfo = new TaxPriceInfo(props.taxPriceInfo);
    }

    if (props.priceInfo) {
      this.priceInfo = new PriceInfo(props.priceInfo);
    }

    if (props.dynamicProperties) {
      this.dynamicProperties = props.dynamicProperties.map(item => new DynamicProperty(item));
    }

    if (props.payments) {
      this.payments =props.payments.map(item => new PaymentGroup(item));
    }

    if (props.shippingGroups) {
      this.shippingGroups = props.shippingGroups.map(item => new ShippingGroup(item));
    }

    if (props.shoppingCart) {
      this.shoppingCart = new ShoppingCart(props.shoppingCart);
    } else {
      this.shoppingCart = new ShoppingCart({});
    }

    this.rawResponse = props;
  }
}

export default Order;
