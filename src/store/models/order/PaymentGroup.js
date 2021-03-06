// @flow

export type PaymentGroupConstructor = {
  paymentGroupId: string;
  amount: number;
  customPaymentProperties: Object;
  gatewayName: string;
  // TODO: Verify the correct type for this value
  uiIntervention: any;
  paymentMethod: string;
  isAmountRemaining: boolean;
  customProperties: Object;  
  paymentState: string;
  type: string;
  currencyCode: string;
}

class PaymentGroup {
  paymentGroupId: string;
  amount: number;
  customPaymentProperties: Object;
  gatewayName: string;
  // TODO: Verify the correct type for this value
  uiIntervention: any;
  paymentMethod: string;
  isAmountRemaining: boolean;
  paymentState: string;
  customProperties: Object;
  type: string;
  currencyCode: string;

  constructor(props: PaymentGroupConstructor) {
    this.paymentGroupId = props.paymentGroupId;
    this.amount = props.amount;
    this.customPaymentProperties = props.customPaymentProperties;
    this.customProperties = props.customProperties;
    this.gatewayName = props.gatewayName;
    this.uiIntervention = props.uiIntervention;
    this.paymentMethod = props.paymentMethod;
    this.isAmountRemaining = props.isAmountRemaining;
    this.paymentState = props.paymentState;
    this.type = props.type;
    this.currencyCode = props.currencyCode;
  }
}

export default PaymentGroup;
