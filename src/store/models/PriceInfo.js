// @flow

export type PriceInfoConstructor = {
  amount: number;
  total: number;
  shipping: number;
  shippingSurchargeValue: number;
  tax: number;
  subTotal: number;
  currencyCode: string;
  totalWithoutTax: number;
  lkpValExcludingFreeShip: number;  
};

export default class PriceInfo {
  amount: number;
  total: number;
  shipping: number;
  shippingSurchargeValue: number;
  lkpValExcludingFreeShip: number;
  tax: number;
  subTotal: number;
  currencyCode: string;
  totalWithoutTax: number;
  rawResponse: Object;

  constructor(props: PriceInfoConstructor) {
    this.amount = props.amount;
    this.total = props.total;
    this.shipping = props.shipping;
    this.shippingSurchargeValue = props.shippingSurchargeValue;
    this.tax = props.tax;
    this.subTotal = props.subTotal;
    this.currencyCode = props.currencyCode;
    this.totalWithoutTax = props.totalWithoutTax;
    this.lkpValExcludingFreeShip = props.lkpValExcludingFreeShip;
    this.rawResponse = props;
  }
}