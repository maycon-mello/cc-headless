// @flow

export default class DynamicProperty {
  id: string;
  value: string | number | boolean;
  type: string;
  required: boolean;
  default: string | number | boolean;
  label: string;
  length: number;
  uiEditorType: string;
  
  constructor(props: DynamicProperty) {
    this.id = props.id;
    this.value = props.value;
    this.type = props.type;
    this.required = props.required;
    this.default = props.default;
    this.label = props.label;
    this.length = props.length;
    this.uiEditorType = props.uiEditorType;
  }
}