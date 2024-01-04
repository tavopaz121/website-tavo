export interface ButtonWebsiteProps {
  className?: string;
  children: JSX.Element | string;
  icon?: JSX.Element;
  rounded?: boolean;
  disabled?: boolean;
  color?: "white" | "black" | "transparent" | "pink";
  typeHover?: "bottomBar" | "scale" | "opacity" | "none";
  isFullContent?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface ButtonLinkProps extends ButtonWebsiteProps {
  href: string;
  linkClassName?: string;
}
