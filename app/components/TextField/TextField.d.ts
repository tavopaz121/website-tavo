import type { ChangeEventHandler } from "react";

export type TextFieldProps = {
  isInvalid?: true | false;
  label?: string;
  required?: true | false;
  autoFocus?: true | false;
  name: string;
  value?: string
  type: string;
  autoComplete?: string; 
  error?: string | null | undefined;
  children?: JSX.Element | never[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  clsN?: string;
  placeholder?: string;
}