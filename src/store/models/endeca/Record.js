// @flow
import ProductRecord from './ProductRecord';
import SkuRecord from './SkuRecord';


const PRODUCT_ATTRIBUTE_REGEX = /^product\./;
const SKU_ATTRIBUTE_REGEX = /^sku\./;

class Record {
  product: ProductRecord;
  sku: SkuRecord;
  id: string;
  attributes: Object;

  constructor(props) {
    const productAttributes = {};
    const skuAttributes = {};

    for (const key in props) {
      const value = props[key];

      if (PRODUCT_ATTRIBUTE_REGEX.test(key) && value) {
        productAttributes[key.replace(PRODUCT_ATTRIBUTE_REGEX, '')] = value;
      } else if (SKU_ATTRIBUTE_REGEX.test(key) && value) {
        skuAttributes[key.replace(SKU_ATTRIBUTE_REGEX, '')] = value;
      }
    }

    this.product = new ProductRecord(productAttributes);
    this.sku = new SkuRecord(skuAttributes);
  }

  getAttribute(key: string) {
    return this.attributes[key];
  }
}

export default Record;
