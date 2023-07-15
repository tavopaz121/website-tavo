export type ButtonLinkProps = {
  to: string
  color?: 'green' | 'orange' | 'black'
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?: JSX.Element | string
  content?: string | JSX.Element
}
