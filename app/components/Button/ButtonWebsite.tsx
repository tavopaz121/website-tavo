type ButtonWebsiteProps = {
  children: JSX.Element | string;
  icon?: JSX.Element;
  rounded: boolean;
  color?: "white" | "black" | "transparent" | "pink";
  typeHover?: "pinkBar" | "scaleButton" | "none";
};

const COLORS = {
  white: "bg-white text-black border border-gray-800 shadow",
  black: "bg-gray-900 text-white",
  transparent: "bg-transparent text-black border border-gray-800",
  pink: "bg-gradient-pink text-white",
};

const HOVERS = {
  pinkBar:
    "absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-105 transition duration-500",
  scaleButton: "hover:scale-110 transition duration-100",
  none: "hover:opacity-80",
};

export default function ButtonWebsite({
  children,
  icon,
  rounded,
  color,
  typeHover,
}: ButtonWebsiteProps) {
  const border = rounded && `rounded-full`;
  const colorButton = COLORS[color || "white"];

  let hoverSytles = "",
    hoverBar = "";
  if (typeHover == "pinkBar") {
    hoverBar = HOVERS["pinkBar"];
    hoverSytles = "";
  } else {
    hoverBar = "hidden";
    hoverSytles = HOVERS[typeHover || "none"];
  }

  const buttonClasname = `relative rounded-sm group inline-block py-4 px-6 font-semibold overflow-hidden ${border} ${colorButton}`;

  return (
    <button className={`${buttonClasname} ${hoverSytles}`}>
      <div className={`${hoverBar}`} />
      <div className="relative flex items-center justify-center">
        <span>{children}</span>
        {icon && <span className="ml-4">{icon}</span>}
      </div>
    </button>
  );
}
