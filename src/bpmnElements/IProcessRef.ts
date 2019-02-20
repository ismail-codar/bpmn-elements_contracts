import {IDefinitions} from './IDefinitions';
import {IModdleElement} from './IModdleElement';

export interface IProcessRef extends IModdleElement {
  $parent: IDefinitions;
  extensionElement: IModdleElement;
  flowElement: Array<IModdleElement>;
  isExecutable: boolean;
  laneSets: Array<IModdleElement>;
  versionTag: string;
}
