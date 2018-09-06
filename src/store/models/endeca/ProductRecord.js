// @flow
import { getString, getDate, getBoolean, getFloat, getInt } from './util';

class ProductRecord {
  constructor(props) {
    Object.assign(this, props);
    this.url = getString(props.url);
    this.active = getBoolean(props.active);
    this.notForIndividualSale = getBoolean(props.notForIndividualSale);
    this.smallImageURLs = props.smallImageURLs;
    this.mediumImageURLs = props.mediumImageURLs;
    this.sourceImageURLs = props.sourceImageURLs;
    this.thumbImageURLs = props.thumbImageURLs;
    this.fullImageURLs = props.fullImageURLs;
    this.largeImageURLs = props.largeImageURLs;
    this.primaryMediumImageURL = getString(props.primaryMediumImageURL);
    this.primarySmallImageURL = getString(props.primarySmallImageURL);
    this.primaryLargeImageURL = getString(props.primaryLargeImageURL);
    this.productImagesMetadata =getString(props.productImagesMetadata); 
    this.catalogId = props.catalogId;
    this.repositoryId = getString(props.repositoryId);
    this.primaryFullImageURL = getString(props.primaryFullImageURL);
    this.route = getString(props.route);
    this.listPrice = getFloat(props.listPrice);
    this.baseUrl = getString(props.baseUrl);
    this.creationDate = getDate(props.creationDate);
    this.dateAvailable = getDate(props.dateAvailable);
    this.primaryThumbImageURL = getString(props.primaryThumbImageURL);
    this.displayName = getString(props.displayName);
    this.configurable = getBoolean(props.configurable);
    this.priceRange = getString(props.priceRange);
    this.daysAvailable = getInt(props.daysAvailable);
  }
}

export default ProductRecord;
