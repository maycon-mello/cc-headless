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

  constructor(props: OrderConstructor) {
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
    this.discountInfo = new DiscountInfo(props.discountInfo);
    this.priceListGroup = new PriceListGroup(props.priceListGroup);
    this.shippingMethod = props.shippingMethod && new ShippingMethod(props.shippingMethod);
    this.approvalSystemMessages = props.approvalSystemMessages;
    this.trackingInfo = props.trackingInfo;
    this.giftWithPurchaseOrderMarkers = props.giftWithPurchaseOrderMarkers;
    this.billingAddress = props.billingAddress && new Address(props.billingAddress);

    if (props.shippingAddress) { 
      this.shippingAddress = new Address(props.shippingAddress);
    }

    this.taxPriceInfo = props.taxPriceInfo && new TaxPriceInfo(props.taxPriceInfo);
    this.priceInfo = new PriceInfo(props.priceInfo);
    this.dynamicProperties = props.dynamicProperties.map(item => new DynamicProperty(item));
    this.payments = props.payments && props.payments.map(item => new PaymentGroup(item));
    this.shippingGroups = props.shippingGroups && props.shippingGroups.map(item => new ShippingGroup(item));
    this.shoppingCart = props.shoppingCart && new ShoppingCart(props.shoppingCart);
    this.rawResponse = props;
  }
}

export default Order;
