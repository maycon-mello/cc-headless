// @flow
export type SkuPropertyConstructor = {
  propertyType: string;
  name: string;
  id: string;
  value: boolean;
}

export default class SkuProperty {
  propertyType: string;
  name: string;
  id: string;
  value: boolean;

  constructor(props: SkuPropertyConstructor) {
    this.propertyType = props.propertyType;
    this.name = props.name;
    this.id = props.id;
    this.value = props.value;
  }
}