import type { ButtonWebsiteProps } from "./ButtonWebsite.d";
import { COLORS, HOVERS } from "./ButtonWebsite.classNames";

export default function ButtonWebsite({
  className,
  children,
  icon,
  rounded,
  disabled,
  color,
  typeHover = "none",
  isFullContent,
  type,
}: ButtonWebsiteProps) {
  const border = rounded ? `rounded-full` : "rounded-sm";
  const colorButton = color ? COLORS[color || "white"] : "";
  const fullContent = `w-full h-full`;

  let hoverSytles = "";
  let hoverBar = "";

  if (typeHover === "bottomBar") {
    hoverBar = HOVERS["bottomBar"];
    hoverSytles = "";
  } else {
    hoverBar = "hidden";
    hoverSytles = HOVERS[typeHover];
  }

  const buttonClasname = `relative w-full group inline-block font-semibold overflow-hidden ${border} ${
    className ? "" : colorButton
  } ${isFullContent ? fullContent : "py-4 px-6"} ${hoverSytles}`;

  return (
    <button className={`${buttonClasname}`} disabled={disabled} type={type}>
      <div className={`${hoverBar}`} />
      <div className="relative flex items-center justify-center">
        {children}
        {icon && <span className="ml-4">{icon}</span>}
      </div>
    </button>
  );
}
