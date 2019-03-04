import {IEventElement} from './IEventElement';
import {IMessageEventDefinition} from './IMessageEventDefinition';

export interface IMessageEventElement extends IEventElement {
  eventDefinitions: Array<IMessageEventDefinition>;
}
