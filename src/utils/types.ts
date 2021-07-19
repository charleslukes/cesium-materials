export type InputTypes = 'text' | 'date' | 'number' | 'color';
export type CesiumMaterialTypes = Array<{
  name: string;
  value: string | number;
  type: InputTypes;
  fieldKey: string;
}>;
