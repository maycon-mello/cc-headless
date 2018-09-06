// @flow
import { getString, getDate, getBoolean, getFloat, getInt } from './util';

class SkuRecord {
  constructor(props) {
    Object.assign(this, props);
    this.active = getBoolean(props.active);
    this.activePrice = getFloat(props.activePrice);
    this.availabilityStatus = getString(props.availabilityStatus);
    this.baseUrl = getString(props.baseUrl);
    this.creationDate = getDate(props.creationDate);
    this.displayName = getString(props.displayName);
    this.listPrice = getString(props.listPrice);
    this.onSale = getBoolean(props.onSale);
    this.styleProperty = getString(props.styleProperty);
    this.repositoryId = getString(props.repositoryId);
  }
}

export default SkuRecord;
