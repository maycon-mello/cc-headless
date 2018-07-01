// @flow
export interface AddressConstructor {
  repositoryId: string;
  alias: ?string;
  firstName: string;
  middleName: ?string;
  lastName: string;
  companyName: ?string;
  country: string;
  city: string;
  postalCode: string;
  address1: string;
  address2: ?string;
  address3: ?string;
  prefix: ?string;
  jobTitle: ?string;
  county: ?string;
  suffix: ?string;
  phoneNumber: ?string;
  faxNumber: ?string;
  state: string;
  email: ?string;
}

export default class Address {
  repositoryId: string;
  alias: ?string;
  firstName: string;
  middleName: ?string;
  lastName: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  address1: string;
  companyName: ?string;
  address2: ?string;
  address3: ?string;
  prefix: ?string;
  jobTitle: ?string;
  county: ?string;
  suffix: ?string;
  phoneNumber: ?string;
  faxNumber: ?string;
  rawResponse: Object;
  email: ?string;  

  constructor(props: AddressConstructor) {
    this.repositoryId = props.repositoryId;
    this.alias = props.alias;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.companyName = props.companyName;
    this.country = props.country;
    this.address1 = props.address1;
    this.address2 = props.address2;
    this.address3 = props.address3;
    this.city = props.city;
    this.prefix = props.prefix;
    this.postalCode = props.postalCode;
    this.jobTitle = props.jobTitle;
    this.county = props.county;
    this.suffix = props.suffix;
    this.phoneNumber = props.phoneNumber;
    this.faxNumber = props.faxNumber;
    this.middleName = props.middleName;
    this.state = props.state;
    this.email = props.email;
    this.rawResponse = props;
  }
}