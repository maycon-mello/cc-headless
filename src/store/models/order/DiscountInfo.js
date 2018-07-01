// @flow
export type DiscountInfoConstructor = {
  unclaimedCouponMultiPromotions: Object;
  orderCouponsMap: Object;
  orderDiscount: number;
  shippingDiscount: number;
  orderImplicitDiscountList: Array<Object>;
  unclaimedCouponsMap: Object;
  claimedCouponMultiPromotions: Object;
  discountDescList: Array<Object>; 
}

export default class DiscountInfo {
  unclaimedCouponMultiPromotions: Object;
  orderCouponsMap: Object;
  orderDiscount: number;
  shippingDiscount: number;
  orderImplicitDiscountList: Array<Object>;
  unclaimedCouponsMap: Object;
  claimedCouponMultiPromotions: Object;
  discountDescList: Array<Object>;

  constructor(props: DiscountInfoConstructor) {
    this.unclaimedCouponMultiPromotions = props.unclaimedCouponMultiPromotions;
    this.orderCouponsMap = props.orderCouponsMap;
    this.orderDiscount = props.orderDiscount;
    this.shippingDiscount = props.shippingDiscount;
    this.orderImplicitDiscountList = props.orderImplicitDiscountList;
    this.unclaimedCouponsMap = props.unclaimedCouponsMap;
    this.claimedCouponMultiPromotions = props.claimedCouponMultiPromotions; 
    this.discountDescList = props.discountDescList;   
  }
}