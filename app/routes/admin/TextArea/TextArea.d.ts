import type { ChangeEventHandler } from "react";

export type TextAreaProps = {
  title?: string;
  name?: string;
  rows?: number;
  error?: string;
  className?: string;
  required?: boolean;
  id?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
};
