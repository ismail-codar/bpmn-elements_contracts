import {IModdleElement} from './IModdleElement';
import {ISignal} from './ISignal';

export interface ISignalElement extends IModdleElement {
  signalRef?: ISignal;
}
