import {IEventDefinition} from './IEventDefinition';

export interface ILinkEventDefinition extends IEventDefinition {
  name: string;
  id?: string;
}
