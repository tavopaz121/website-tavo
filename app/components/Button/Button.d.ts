import type { MouseEventHandler } from 'react';

export type ButtonProps = {
  idButton?: string;
  className?: string;
  text?: string;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'alternative' | 'default';
  type?: 'button' | 'submit' | 'reset';
  children?: JSX.Element | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
