import type { MouseEventHandler } from 'react'

export type ButtonProps = {
  idButton?: string
  clsN?: string
  text?: string
  disabled?: boolean
  primary?: true | false
  secondary?: true | false
  alternative?: true | false
  xs?: true | false
  sm?: true | false
  bs?: true | false
  lg?: true | false
  xl?: true | false
  type?: 'button' | 'submit' | 'reset'
  children?: JSX.Element | never[] | string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
