import {IErrorEventDefinition} from './IErrorEventDEfinition';
import {IEventElement} from './IEventElement';

export interface IErrorEventElement extends IEventElement {
  eventDefinitions: Array<IErrorEventDefinition>;
}
