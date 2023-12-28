import type { ButtonWebsiteProps } from "./ButtonWebsite.d";
import { COLORS, HOVERS } from "./ButtonWernsite.classNames";

export default function ButtonWebsite({
  className,
  children,
  icon,
  rounded,
  disabled,
  color,
  typeHover = "none",
}: ButtonWebsiteProps) {
  const border = rounded ? `rounded-full` : "rounded-sm";
  const colorButton = COLORS[color || "white"];

  let hoverSytles = "";
  let hoverBar = "";

  if (typeHover === "pinkBar") {
    hoverBar = HOVERS["pinkBar"];
    hoverSytles = "";
  } else {
    hoverBar = "hidden";
    hoverSytles = HOVERS[typeHover];
  }

  const buttonClasname = `relative group block font-semibold overflow-hidden ${border} ${colorButton} ${
    className ? className : "py-4 px-6"
  } ${hoverSytles}`;

  return (
    <button className={`${buttonClasname}`} disabled={disabled}>
      <div className={`${hoverBar}`} />
      <div className="relative flex items-center justify-center">
        {children}
        {icon && <span className="ml-4">{icon}</span>}
      </div>
    </button>
  );
}
