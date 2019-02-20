import {IConditionExpression} from './IConditionExpression';
import {IDocumentation} from './IDocumentation';
import {IExtensionElement} from './IExtensionElement';
import {IProcessRef} from './IProcessRef';
import {IPropertiesElement} from './IPropertiesElement';

export interface IModdleElement {
  id: string;
  name: string;
  documentation: Array<IDocumentation>;
  $type: string;
  $attrs?: any;
  $parent?: IModdleElement;
  extensionElements?: IExtensionElement;
  eventDefinitions?: Array<IModdleElement>;
  conditionExpression?: IConditionExpression;
  flowElements?: Array<IModdleElement>;
  di?: IModdleElement;
  fill?: string;
  stroke?: string;
  laneSets?: Array<IModdleElement>;
  lanes?: Array<IModdleElement>;
  participants?: Array<IModdleElement>;
  processRef?: IProcessRef;
  default?: IModdleElement;
  timeDuration?: IModdleElement;
  timeCycle?: IModdleElement;
  timeDate?: IModdleElement;
  condition?: IModdleElement;
  body?: string;
  variableName?: string;
  variableEvent?: string;
  text?: string;
  incoming?: Array<IModdleElement>;
  outgoing?: Array<IModdleElement>;
  sourceRef?: IModdleElement;
  calledElement?: string;
}
