import {IModdleElement} from './IModdleElement';

export interface IForm {
  $type?: string;
  defaultValue?: string;
  type?: string;
  label?: string;
  id?: string;
  values?: Array<IModdleElement>;
}
