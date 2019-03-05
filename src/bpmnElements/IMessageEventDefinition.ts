import {IEventDefinition} from './IEventDefinition';
import {IMessage} from './IMessage';

export interface IMessageEventDefinition extends IEventDefinition {
  messageRef?: IMessage;
}
