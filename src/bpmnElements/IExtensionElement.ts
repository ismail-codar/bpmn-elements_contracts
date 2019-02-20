import {IModdleElement} from './IModdleElement';
import {IPropertiesElement} from './IPropertiesElement';

export interface IExtensionElement extends IModdleElement {
  $type: string;
  values?: Array<IPropertiesElement>;
}
