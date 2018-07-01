// @flow
import DynamicProperty from "./DynamicProperty";
import PriceListGroup from "./PriceListGroup";

export type OrderListItemConstructor = {
  orderId: string;
  cost: number;
  shippingSurchargeValue: number;
  priceListGroup: PriceListGroup;
  dynamicProperties: Array<DynamicProperty>;
  tax: number;
  subTotal: number;
  creationDate: string;
  submittedDate: string;
  totalWithoutTax: number;
  total: number;
  siteId: string;
  state: string;
  currencyCode: string;
  stateDetailsAsUser: string;
  status: string;
  approvalSystemMessages: Array<Object>;
  lastModifiedDate: string;
}

export default class OrderListItem {
  orderId: string;
  cost: number;
  shippingSurchargeValue: number;
  priceListGroup: PriceListGroup;
  dynamicProperties: Array<DynamicProperty>;
  tax: number;
  subTotal: number;
  creationDate: Date;
  submittedDate: Date;
  totalWithoutTax: number;
  total: number;
  siteId: string;
  state: string;
  currencyCode: string;
  stateDetailsAsUser: string;
  status: string;
  approvalSystemMessages: Array<Object>;
  lastModifiedDate: Date;

  constructor(props: OrderListItemConstructor) {
    this.orderId = props.orderId;
    this.cost = props.cost;
    this.shippingSurchargeValue = props.shippingSurchargeValue;
    this.priceListGroup = new PriceListGroup(props.priceListGroup);
    this.dynamicProperties = props.dynamicProperties.map(item => new DynamicProperty(item));
    this.tax = props.tax;
    this.subTotal = props.subTotal;
    this.creationDate = new Date(props.creationDate);
    this.submittedDate = new Date(props.submittedDate);
    this.totalWithoutTax = props.totalWithoutTax;
    this.total = props.total;
    this.siteId = props.siteId;
    this.state = props.state;
    this.currencyCode = props.currencyCode;
    this.stateDetailsAsUser = props.stateDetailsAsUser;
    this.status = props.status;
    this.approvalSystemMessages = props.approvalSystemMessages;
    this.lastModifiedDate = new Date(props.lastModifiedDate);
  }
}