// @flow

export type TaxPriceInfoConstructor = {
  cityTax: number;
  secondaryCurrencyTaxAmount: number;
  amount: number;
  valueAddedTax: number;
  countyTax: number;
  isTaxIncluded: boolean;
  miscTax: number;
  districtTax: number;
  stateTax: number;
  countryTax: number;
}

export default class TaxPriceInfo {
  cityTax: number;
  secondaryCurrencyTaxAmount: number;
  amount: number;
  valueAddedTax: number;
  countyTax: number;
  isTaxIncluded: boolean;
  miscTax: number;
  districtTax: number;
  stateTax: number;
  countryTax: number;

  constructor(props: TaxPriceInfoConstructor) {
    this.cityTax = props.cityTax;
    this.secondaryCurrencyTaxAmount = props.secondaryCurrencyTaxAmount;
    this.amount = props.amount;
    this.valueAddedTax = props.valueAddedTax;
    this.countyTax = props.countyTax;
    this.isTaxIncluded = props.isTaxIncluded;
    this.miscTax = props.miscTax;
    this.districtTax = props.districtTax;
    this.stateTax = props.stateTax;
    this.countryTax = props.countryTax;
  }
}