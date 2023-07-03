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
  hasError?: true | false;
  error?: string | null | undefined;
  children?: JSX.Element | never[] | string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  clsN?: string;
  placeholder?: string;
  pattern?: string;
}