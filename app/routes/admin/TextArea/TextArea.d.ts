import type { ChangeEventHandler } from "react";

export type TextAreaProps = {
  title?: string;
  name?: string;
  rows?: number;
  error?: string;
  className?: string;
  customClasses?: {
    input?: string;
    label?: string;
    error?: string;
  };
  required?: boolean;
  id?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | null;
  value?: string;
};
