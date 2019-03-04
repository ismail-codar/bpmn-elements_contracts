import {IEscalationEventDefinition} from './IEscalationEventDefinition';
import {IEventElement} from './IEventElement';

export interface IEscalationEventElement extends IEventElement {
  eventDefinitions: Array<IEscalationEventDefinition>;
}
