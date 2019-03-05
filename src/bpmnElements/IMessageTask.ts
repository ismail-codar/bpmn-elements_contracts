import {IMessage} from './IMessage';
import {IModdleElement} from './IModdleElement';

export interface IMessageTask extends IModdleElement {
  messageRef?: IMessage;
}
