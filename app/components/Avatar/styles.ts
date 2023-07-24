export const styleSizeAvatar = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-20 h-20",
  xl: "w-36 h-36",
};

export const styleSizeText = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-xl",
  lg: "text-4xl",
  xl: "text-6xl",
};

export function getBackgroundColor(initial: string) {
  const initialUpperCase = initial.toUpperCase();

  if (initialUpperCase >= "A" && initialUpperCase <= "I") {
    return "bg-[#F28705]";
  } else if (initialUpperCase >= "J" && initialUpperCase <= "R") {
    return "bg-[#F9A825]";
  } else if (initialUpperCase >= "S" && initialUpperCase <= "Z") {
    return "bg-[#900C3F]";
  }

  return "bg-[#262626]";
}
