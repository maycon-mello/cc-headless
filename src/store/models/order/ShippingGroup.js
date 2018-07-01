// @flow
import Address from '../Address';
import TaxPriceInfo from './TaxPriceInfo';
import ShippingMethod from './ShippingMethod';
import PriceInfo from './PriceInfo';
import DiscountInfo from './DiscountInfo';
import CommerceItem from './CommerceItem'

export type ShippingGroupConstructor = {
  taxPriceInfo: TaxPriceInfo;
  shippingMethod: ShippingMethod;
  shippingGroupId: string;
  type: string;
  submittedDate: string;
  priceInfo: PriceInfo;
  discountInfo: DiscountInfo;
  recurringChargePriceInfo: PriceInfo;
  shipOnDate: string;
  trackingInfo: Array<Object>;
  actualShipDate: string;
  shippingAddress: Address;
  items: Array<CommerceItem>;
  trackingNumber: string;
  status: string;
}

export default class ShippingGroup {
  taxPriceInfo: TaxPriceInfo;
  shippingMethod: ShippingMethod;
  shippingGroupId: string;
  type: string;
  submittedDate: string;
  priceInfo: PriceInfo;
  discountInfo: DiscountInfo;
  recurringChargePriceInfo: PriceInfo;
  shipOnDate: string;
  trackingInfo: Array<Object>;
  actualShipDate: string;
  shippingAddress: Address;
  items: Array<CommerceItem>;
  trackingNumber: string;
  status: string;
  rawResponse: Object;

  constructor(props: ShippingGroupConstructor) {
    this.taxPriceInfo = new TaxPriceInfo(props.taxPriceInfo);
    this.shippingMethod = new ShippingMethod(props.shippingMethod);
    this.shippingGroupId = props.shippingGroupId;
    this.type = props.type;
    this.submittedDate = props.submittedDate;
    this.priceInfo = new PriceInfo(props.priceInfo);
    this.discountInfo = new DiscountInfo(props.discountInfo);
    this.recurringChargePriceInfo = props.recurringChargePriceInfo;
    this.shipOnDate = props.shipOnDate;
    this.trackingInfo = props.trackingInfo;
    this.actualShipDate = props.actualShipDate;
    this.shippingAddress = new Address(props.shippingAddress);
    this.items = props.items ? props.items.map(item => new CommerceItem(item)) : [];
    this.trackingNumber = props.trackingNumber;
    this.status = props.status;
    this.rawResponse = props;
  }
}