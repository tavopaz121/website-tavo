import type { ButtonProps } from './Button.d'

const styleBtn = {
  green: 'bg-pw-green text-white hover:bg-pw-green/80',
  orange: 'bg-pw-orange text-white hover:bg-pw-orange/80',
  black: 'bg-pw-black text-white hover:bg-pw-black/80',
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
  className,
  size = 'md',
  text,
  disabled,
  color,
  type,
  onClick,
  children,
  ...moreProps
}: ButtonProps) {
  const buttonClassName = `block border border-1 rounded-lg font-bold ${
    className ? className : ''
  } ${styleBtn[color || 'default']} ${styleSizeBtn[size]}`

  return (
    <button
      data-testid="button"
      onClick={onClick}
      type={type || 'button'}
      className={buttonClassName}
      disabled={disabled}
      {...moreProps}>
      {text && text}
      {children}
    </button>
  )
}
