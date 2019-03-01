import {IEventDefinition} from './IEventDefinition';
import {IModdleElement} from './IModdleElement';

export interface ITimerEventDefinition extends IEventDefinition {
  timeCycle: IModdleElement;
  timeDate: IModdleElement;
  timeDuration: IModdleElement;
}
