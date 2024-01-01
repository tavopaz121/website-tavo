export interface ButtonWebsiteProps {
  className?: string;
  children: JSX.Element | string;
  icon?: JSX.Element;
  rounded?: boolean;
  disabled?: boolean;
  color?: "white" | "black" | "transparent" | "pink";
  typeHover?: "pinkBar" | "scaleButton" | "opacity" | "none";
}

export interface ButtonLinkProps extends ButtonWebsiteProps {
  href: string;
  linkClassName?: string;
}
