import { Link } from "@remix-run/react";
import ButtonWebsite from "./ButtonWebsite";
import type { ButtonLinkProps } from "./ButtonWebsite.d";

export default function ButtonLink({
  href,
  children,
  linkClassName,
  className,
  rounded,
  color,
  typeHover,
  icon,
}: ButtonLinkProps) {
  const border = rounded ? `rounded-full` : "rounded-sm";
  const style = `${border} ${linkClassName} relative block`;

  return (
    <Link to={href} className={style}>
      <ButtonWebsite
        rounded={rounded}
        color={color}
        typeHover={typeHover}
        icon={icon}
        className={className}
      >
        {children}
      </ButtonWebsite>
    </Link>
  );
}
