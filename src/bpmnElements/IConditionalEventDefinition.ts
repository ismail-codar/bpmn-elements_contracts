import {IConditionExpression} from './IConditionExpression';
import {IEventDefinition} from './IEventDefinition';

export interface IConditionalEventDefinition extends IEventDefinition {
  condition?: IConditionExpression;
  variableEvent?: string;
  variableName?: string;
}
