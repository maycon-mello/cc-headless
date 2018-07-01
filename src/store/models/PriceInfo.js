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
  secondaryCurrencyTaxAmount: number;
  secondaryCurrencyTotal: number;
};

/**
 * 
 * @property {number} amount - Amount of order
 * @property {number} tax - The current total tax amount in monetry currency
 * @property {number} shipping - Shipping price of order
 * @property {number} total - Total amount of order 
 * @property {number} shippingSurchargeValue - Extra handling costs for shipping the products
 * @property {number} secondaryCurrencyTotal - The current total (sum of shipping and tax)amount in monetry currency
 * @property {number} secondaryCurrencyShippingAmount - The current total shipping amount in monetry currency
 * @property {number} primaryCurrencyTotal - The current total in loyalty points in case of multi currency
 * @property {number} secondaryCurrencyShippingSurchargeValue  - Extra handling costs for shipping the products in monetry currency
 * @property {number} currencyCode - Currency code
 * @property {number} subTotal - Sub total
 * @property {object} rawResponse - raw response from api
 */
class PriceInfo {
  
  amount: number;
  tax: number;
  shipping: number;
  total: number;
  shippingSurchargeValue: number;
  lkpValExcludingFreeShip: number;
  subTotal: number;
  currencyCode: string;
  totalWithoutTax: number;
  secondaryCurrencyTaxAmount: number;
  secondaryCurrencyTotal: number;
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
    this.secondaryCurrencyTotal = props.secondaryCurrencyTotal;
    this.lkpValExcludingFreeShip = props.lkpValExcludingFreeShip;
    this.rawResponse = props;
  }
}

export default PriceInfo;
