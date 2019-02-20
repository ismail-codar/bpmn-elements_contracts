import {IError} from './IError';
import {IModdleElement} from './IModdleElement';

export interface IErrorElement extends IModdleElement {
  $type: string;
  errorRef?: IError;
  errorMessageVariable?: string;
}
