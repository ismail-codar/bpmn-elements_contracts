import {IModdleElement} from './IModdleElement';
import {IProcessRef} from './IProcessRef';

export interface IPoolElement extends IModdleElement {
  processRef?: IProcessRef;
}
