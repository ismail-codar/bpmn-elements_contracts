import {IMessage} from './IMessage';
import {IModdleElement} from './IModdleElement';

export interface IMessageElement extends IModdleElement {
  messageRef?: IMessage;
}
