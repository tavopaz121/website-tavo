import type { ChangeEventHandler } from "react";

export type SelectFileProps = {
  title?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  accept?: string;
  name?: string;
  customClasses?: {
    input?: string;
    label?: string;
    error?: string;
  };
  children?: JSX.Element | never[] | string;
  className?: string;
};
