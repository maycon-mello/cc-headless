// @flow
import DynamicProperty from './DynamicProperty';
import CommerceItemPriceInfo from './CommerceItemPriceInfo';
import SkuProperty from './SkuProperty';
import DiscountInfo from './DiscountInfo';

export type CommerceItemConstructor = {
  primaryThumbImageURL: string;
  rawTotalPrice: number;
  returnedQuantity: number;
  dynamicProperties: Array<DynamicProperty>;
  displayName: string;
  shippingSurchargeValue: number;
  availabilityDate: string,
  // Create model for this info
  externalData: Array<any>,
  discountAmount: number;
  preOrderQuantity: number;
  commerceItemId: string;
  price: number;
  // Create model for variants
  variant: Array<Object>,
  onSale: boolean;
  primaryImageAltText: string;
  stateDetailsAsUser: string;
  commerceId: string;
  unitPrice: number;
  primaryImageTitle: string;
  amount: number;
  quantity: number;
  productId: string;
  salePrice: number;
  detailedItemPriceInfo: Array<CommerceItemPriceInfo>;
  active: boolean;
  catRefId: string;
  skuProperties: Array<SkuProperty>;
  discountInfo: Array<DiscountInfo>,
  route: string;
  shopperInput: Object,
  backOrderQuantity: number;
  listPrice: number;
  status: string;
}

export default class CommerceItem {
  primaryThumbImageURL: string;
  rawTotalPrice: number;
  returnedQuantity: number;
  dynamicProperties: Array<DynamicProperty>;
  displayName: string;
  shippingSurchargeValue: number;
  availabilityDate: string;
  // Create model for this info
  externalData: Array<any>;
  discountAmount: number;
  preOrderQuantity: number;
  commerceItemId: string;
  price: number;
  // Create model for variants
  variant: Array<Object>;
  onSale: boolean;
  primaryImageAltText: string;
  stateDetailsAsUser: string;
  commerceId: string;
  unitPrice: number;
  primaryImageTitle: string;
  amount: number;
  quantity: number;
  productId: string;
  salePrice: number;
  detailedItemPriceInfo: Array<CommerceItemPriceInfo>;
  active: boolean;
  catRefId: string;
  skuProperties: Array<SkuProperty>;
  discountInfo: Array<DiscountInfo>;
  route: string;
  shopperInput: Object;
  backOrderQuantity: number;
  listPrice: number;
  status: string;

  constructor(props: CommerceItemConstructor) {
    this.primaryThumbImageURL = props.primaryThumbImageURL;
    this.rawTotalPrice = props.rawTotalPrice;
    this.returnedQuantity = props.returnedQuantity;
    this.dynamicProperties = props.dynamicProperties.map(item => new DynamicProperty(item));
    this.displayName = props.displayName;
    this.shippingSurchargeValue = props.shippingSurchargeValue;
    this.availabilityDate = props.availabilityDate;
    this.externalData = props.externalData;
    this.discountAmount = props.discountAmount;
    this.preOrderQuantity = props.preOrderQuantity;
    this.commerceItemId = props.commerceItemId;
    this.price = props.price;
    this.variant = props.variant;
    this.onSale = props.onSale;
    this.primaryImageAltText = props.primaryImageAltText;
    this.stateDetailsAsUser = props.stateDetailsAsUser;
    this.commerceId = props.commerceId;
    this.unitPrice = props.unitPrice;
    this.primaryImageTitle = props.primaryImageTitle;
    this.amount = props.amount;
    this.quantity = props.quantity;
    this.productId = props.productId;
    this.salePrice = props.salePrice;
    this.detailedItemPriceInfo = props.detailedItemPriceInfo.map(item => new CommerceItemPriceInfo(item));
    this.active = props.active;
    this.catRefId = props.catRefId;
    this.skuProperties = props.skuProperties.map(item => new SkuProperty(item));
    this.discountInfo = props.discountInfo.map(item => new DiscountInfo(item));
    this.route = props.route;
    this.shopperInput = props.shopperInput;
    this.backOrderQuantity = props.backOrderQuantity;
    this.listPrice = props.listPrice;
    this.status = props.status;
  }
}