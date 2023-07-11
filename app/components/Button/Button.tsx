import type { ButtonProps } from './Button.d'

const styleBtn = {
  green: 'bg-lime-500 text-white hover:bg-lime-600',
  orange: 'bg-orange-500 text-white hover:bg-orange-600',
  black: 'bg-gray-500 text-white hover:bg-gray-600',
  default: 'bg-blue-500 text-white hover:bg-blue-600',
}

const styleSizeBtn = {
  xs: 'px-3 py-2 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-5 py-3 text-base',
  xl: 'px-6 py-3.5 text-base',
}

export default function Button({
  idButton,
  className,
  size = 'md',
  text,
  disabled,
  color = 'default',
  type,
  onClick,
  children,
  ...moreProps
}: ButtonProps) {
  const buttonClassName = `block border border-1 rounded-lg font-bold ${
    className ? className : ''
  } ${styleBtn[color]} ${styleSizeBtn[size]}`

  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      id={idButton}
      className={buttonClassName}
      disabled={disabled}
      {...moreProps}>
      {text && text}
      {children}
    </button>
  )
}
