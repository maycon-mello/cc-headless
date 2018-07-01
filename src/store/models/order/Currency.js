// @flow
export type CurrencyConstructor = {
  currencyType: string;
  symbol: string;
  deleted: boolean;
  displayName: string;
  repositoryId: string;
  fractionalDigits: number;
  currencyCode: string;
  numericCode: string;
};

export default class Currency {
  currencyType: string;
  symbol: string;
  deleted: boolean;
  displayName: string;
  repositoryId: string;
  fractionalDigits: number;
  currencyCode: string;
  numericCode: string;

  constructor(props: CurrencyConstructor) {
    this.currencyType = props.currencyType;
    this.symbol = props.symbol;
    this.deleted = props.deleted;
    this.displayName = props.displayName;
    this.repositoryId = props.repositoryId;
    this.fractionalDigits = props.fractionalDigits;
    this.currencyCode = props.currencyCode;
    this.numericCode = props.numericCode;
  }
}
