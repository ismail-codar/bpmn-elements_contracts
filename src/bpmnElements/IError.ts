export interface IError {
  $type: string;
  id: string;
  errorCode?: string;
  name?: string;
  $attrs?: ErrorAttributes;
}

export type ErrorAttributes = {
  ['camunda:errorMessage']: string;
}
