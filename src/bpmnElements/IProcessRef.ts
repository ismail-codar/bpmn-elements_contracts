import {IModdleElement} from './IModdleElement';

export interface IProcessRef extends IModdleElement {
  extensionElement: IModdleElement;
  flowElement: Array<IModdleElement>;
  isExecutable: boolean;
  laneSets: Array<IModdleElement>;
  versionTag: string;
}
