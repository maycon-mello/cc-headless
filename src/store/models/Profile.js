// @flow
import type { EntityRef } from './EntityRef';
import DynamicProperty from './DynamicProperty';
import Address from './Address';
import PriceListGroup from './PriceListGroup';

// TODO: Api test on occ apis, to ensure the attributes didn't change
export type OccProfileResponse = {
  repositoryId: string;
  id: string;
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  locale: string;
  numberOfOrders: number;
  gender: string;
  receiveEmail: string;
  firstPurchaseDate: string;
  lastPurchaseDate: string;
  registrationDate: string;
  lastVisitDate: string;
  previousVisitDate: string;
  firstVisitDate: string;
  lifetimeAOV: number;
  lifetimeSpend: number;
  lastPurchaseAmount: number;
  catalog: EntityRef;
  dynamicProperties: Array<DynamicProperty>;
  secondaryAddresses: Map<String, Address>;
  shippingAddresses: Array<Address>;
  shippingAddress: Address;
  priceListGroup: PriceListGroup;
}

export default class Profile {
  repositoryId: string;
  id: string;
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  locale: string;
  numberOfOrders: number;
  gender: string;
  receiveEmail: string;
  firstPurchaseDate: Date;
  lastPurchaseDate: Date;
  registrationDate: Date;
  lastVisitDate: Date;
  previousVisitDate: Date;
  firstVisitDate: Date;
  lifetimeAOV: number;
  lifetimeSpend: number;
  lastPurchaseAmount: number;
  rawResponse: Object;
  catalog: EntityRef;
  dynamicProperties: Array<DynamicProperty>;
  secondaryAddresses: Map<String, Address>;
  shippingAddresses: Array<Address>;
  shippingAddress: Address;
  priceListGroup: PriceListGroup;

  constructor(props: OccProfileResponse) {
    this.id = props.id;
    this.repositoryId = props.repositoryId;
    this.email = props.email;
    this.login = props.login;
    this.locale = props.locale;
    this.numberOfOrders = props.numberOfOrders;
    this.gender = props.gender;
    this.receiveEmail = props.receiveEmail;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.firstPurchaseDate = new Date(props.firstPurchaseDate);
    this.lastPurchaseDate = new Date(props.lastPurchaseDate);
    this.registrationDate = new Date(props.registrationDate);
    this.lastVisitDate = new Date(props.lastVisitDate);
    this.previousVisitDate = new Date(props.previousVisitDate);
    this.firstVisitDate = new Date(props.firstVisitDate);
    this.lifetimeAOV = props.lifetimeAOV;
    this.lifetimeSpend = props.lifetimeSpend;
    this.lastPurchaseAmount = props.lastPurchaseAmount;
    this.catalog = props.catalog;
    this.dynamicProperties = props.dynamicProperties.map(item => new DynamicProperty(item));
    this.shippingAddresses = props.shippingAddresses.map(item => new Address(item));
    this.shippingAddress = props.shippingAddress && new Address(props.shippingAddress);
    this.priceListGroup = new PriceListGroup(props.priceListGroup);
    this.rawResponse = props;
    this.secondaryAddresses = Profile.getSecondaryAddresses(props.secondaryAddresses);
  }

  /**
   * Get dynamic property value
   * 
   * @param {string} id 
   */
  getDynamicProperty(id: string):any {
    const property = this.dynamicProperties.find(prop => prop.id === id);
    return property ? property.value : undefined;
  }

  static getSecondaryAddresses(addressMap: Object): Object {
    const map = {};

    for (const key in addressMap) {
      map[key] = new Address(addressMap[key]);
    }

    return map;
  }
}