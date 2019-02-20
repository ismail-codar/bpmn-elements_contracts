import {IModdleElement} from './IModdleElement';

export interface ICallActivityElement extends IModdleElement {
  calledElement?: string;
  calledElementBinding?: string;
  calledElementTenantId?: string;
  calledElementVersion?: string;
  variableMappingClass?: string;
  variableMappingDelegateExpression?: string;
}
