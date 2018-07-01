// @flow

export type ShippingMethodConstructor = {
  shippingTax: number;
  value: string;
  cost: number;
  taxCode: string;
  secondaryCurrencyTaxAmount: number;
  shippingMethodDescription: string;
}

export default class ShippingMethod {
  shippingTax: number;
  value: string;
  cost: number;
  taxCode: string;
  secondaryCurrencyTaxAmount: number;
  shippingMethodDescription: string;

  constructor(props: ShippingMethodConstructor) {
    this.shippingTax = props.shippingTax;
    this.shippingTax = props.shippingTax;
    this.cost = props.cost;
    this.taxCode = props.taxCode;
    this.secondaryCurrencyTaxAmount = props.secondaryCurrencyTaxAmount;
    this.shippingMethodDescription = props.shippingMethodDescription;
  }
}