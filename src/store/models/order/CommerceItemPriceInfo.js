// @flow
export type CommerceItemPriceInfoConstructor = {
  amount: number;
  discounted: boolean;
  secondaryCurrencyTaxAmount: number;
  quantity: number;
  orderDiscountShare: number;
  detailedUnitPrice: number;
  tax: number;
  currencyCode: string;
};

export default class CommerceItemPriceInfo {
  amount: number;
  tax: number;
  currencyCode: string;
  discounted: boolean;
  secondaryCurrencyTaxAmount: number;
  quantity: number;
  orderDiscountShare: number;
  detailedUnitPrice: number;
  rawResponse: Object;

  constructor(props: CommerceItemPriceInfoConstructor) {
    this.amount = props.amount;
    this.tax = props.tax;
    this.currencyCode = props.currencyCode;
    this.discounted = props.discounted;
    this.secondaryCurrencyTaxAmount = props.secondaryCurrencyTaxAmount;
    this.quantity = props.quantity;
    this.orderDiscountShare = props.orderDiscountShare;
    this.detailedUnitPrice = props.detailedUnitPrice;
    this.rawResponse = props;
  }
}
