// @flow
import Currency from "./Currency";
import type { CurrencyConstructor } from './Currency';
import type { EntityRef } from '../EntityRef';

export type PriceListGroupConstructor = {
  id: string;
  repositoryId: string;
  isTaxIncluded: boolean;
  displayName: string;
  active: boolean;
  isPointsBased: boolean;
  locale: string;
  deleted: boolean;
  taxCalculationType: string;
  shippingSurchargePriceList: EntityRef;
  listPriceList: EntityRef;
  salePriceList: EntityRef;
  currency: Currency;
  includeAllProducts: boolean;
  endDate: any;
  startDate: any;
}

export default class PriceListGroup { 
  id: string;
  repositoryId: string;
  isTaxIncluded: boolean;
  displayName: string;
  active: boolean;
  isPointsBased: boolean;
  locale: string;
  deleted: boolean;
  taxCalculationType: string;
  shippingSurchargePriceList: EntityRef;
  listPriceList: EntityRef;
  salePriceList: EntityRef;
  currency: Currency;
  includeAllProducts: boolean;
  endDate: ?Date;
  startDate: ?Date;
  rawResponse: Object;

  constructor(props: PriceListGroupConstructor) {
    this.id = props.id;
    this.repositoryId = props.repositoryId;
    this.isTaxIncluded = props.isTaxIncluded;
    this.displayName = props.displayName;
    this.active = props.active;
    this.isPointsBased = props.isPointsBased;
    this.locale = props.locale;
    this.deleted = props.deleted;
    this.taxCalculationType = props.taxCalculationType;
    this.shippingSurchargePriceList = props.shippingSurchargePriceList;
    this.listPriceList = props.listPriceList;
    this.salePriceList = props.salePriceList;
    this.currency = new Currency(props.currency);
    this.includeAllProducts = props.includeAllProducts;
    this.endDate = props.endDate && new Date(props.endDate);
    this.startDate = props.startDate && new Date(props.startDate);
    this.rawResponse = props;    
  }
}