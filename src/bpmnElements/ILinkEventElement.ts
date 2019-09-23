import {IEventElement} from './IEventElement';
import {ILinkEventDefinition} from './ILinkEventDefinition';

export interface ILinkEventElement extends IEventElement {
  eventDefinitions: Array<ILinkEventDefinition>;
}
