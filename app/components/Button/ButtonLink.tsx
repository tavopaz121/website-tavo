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
  isFullContent,
}: ButtonLinkProps) {
  const border = rounded ? `rounded-full` : "rounded-sm";
  const finalClassName = `${border} ${className}`;

  return (
    <Link to={href} className={finalClassName}>
      <ButtonWebsite
        rounded={rounded}
        color={color}
        typeHover={typeHover}
        icon={icon}
        className={linkClassName}
        isFullContent={isFullContent}
      >
        {children}
      </ButtonWebsite>
    </Link>
  );
}
