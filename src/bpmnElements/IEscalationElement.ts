import {IEscalation} from './IEscalation';
import {IModdleElement} from './IModdleElement';

export interface IEscalationElement extends IModdleElement {
  escalationRef?: IEscalation;
  escalationCodeVariable?: string;
}
