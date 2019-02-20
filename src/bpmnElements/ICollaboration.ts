import {IModdleElement} from './IModdleElement';

export interface ICollaboration extends IModdleElement {
  participants: Array<IModdleElement>;
}
