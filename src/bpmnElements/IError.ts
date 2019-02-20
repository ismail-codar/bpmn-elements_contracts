import {IDocumentation} from './IDocumentation';

export interface IError {
  $type: string;
  documentation: Array<IDocumentation>;
  errorCode?: string;
  id: string;
  name: string;
}
