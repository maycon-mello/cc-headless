// @flow
import DynamicProperty from '../DynamicProperty';
import CommerceItemPriceInfo from './CommerceItemPriceInfo';
import SkuProperty from './SkuProperty';
import DiscountInfo from './DiscountInfo';

export type ShoppingCartItemConstructor = {
  catRefId: string;
  skuId: string;
  quantity: number;
  productId: string;

  primaryThumbImageURL: string;
  rawTotalPrice: number;
  dynamicProperties: Array<DynamicProperty>;
  displayName: string;
  shippingSurchargeValue: number;
  commerceItemId: string;
  price: number;
  // Create model for variants
  variant: Array<Object>;
  onSale: boolean;
  unitPrice: number;
  amount?: number;
  salePrice: number;
  detailedItemPriceInfo: Array<CommerceItemPriceInfo>;
  skuProperties: Array<SkuProperty>;
  discountInfo: Array<DiscountInfo>;
  shopperInput: Object;
  listPrice: number;
  description: string;
  giftWithPurchaseCommerceItemMarkers: Array<any>;
  id: string;
  taxCode: string;
  isItemValid: boolean;
}

export default class ShoppingCartItem {
  skuId: string;
  catRefId: string;
  quantity: number;
  primaryThumbImageURL: string;
  rawTotalPrice: number;
  dynamicProperties: Array<DynamicProperty>;
  displayName: string;
  shippingSurchargeValue: number;
  commerceItemId: string;
  price: number;
  // Create model for variants
  variant: Array<Object>;
  onSale: boolean;
  unitPrice: number;
  amount: number;
  productId: string;
  salePrice: number;
  detailedItemPriceInfo: Array<CommerceItemPriceInfo>;
  skuProperties: Array<SkuProperty>;
  discountInfo: Array<DiscountInfo>;
  shopperInput: Object;
  listPrice: number;
  description: string;
  giftWithPurchaseCommerceItemMarkers: Array<any>;
  id: string;
  taxCode: string;
  isItemValid: boolean;
  rawResponse: Object;

  constructor(props: ShoppingCartItemConstructor) {
    this.primaryThumbImageURL = props.primaryThumbImageURL;
    this.rawTotalPrice = props.rawTotalPrice;
    this.dynamicProperties = (props.dynamicProperties || []).map(item => new DynamicProperty(item));
    this.displayName = props.displayName;
    this.shippingSurchargeValue = props.shippingSurchargeValue;
    this.commerceItemId = props.commerceItemId;
    this.price = props.price;
    this.variant = props.variant;
    this.onSale = props.onSale;
    this.unitPrice = props.unitPrice;
    this.amount = props.amount;
    this.quantity = props.quantity;
    this.productId = props.productId;
    this.salePrice = props.salePrice;
    this.detailedItemPriceInfo = (props.detailedItemPriceInfo || []).map(item => new CommerceItemPriceInfo(item));
    this.catRefId = props.catRefId || props.skuId;
    this.skuId = props.catRefId || props.skuId;
    this.skuProperties = (props.skuProperties || []).map(item => new SkuProperty(item));
    this.discountInfo = (props.discountInfo || []).map(item => new DiscountInfo(item));
    this.shopperInput = props.shopperInput;
    this.listPrice = props.listPrice;
    this.description = props.description;
    this.isItemValid = props.isItemValid;
    this.id = props.id;
    this.giftWithPurchaseCommerceItemMarkers = props.giftWithPurchaseCommerceItemMarkers;
    this.taxCode = props.taxCode; // string;
    this.rawResponse = props;
  }
}
