import type { AvatarProps } from "./Avatar.d";
import { useMemo } from "react";
import { getBackgroundColor, styleSizeAvatar, styleSizeText } from "./styles";

export default function Avatar({
  userName,
  photoUrl,
  size,
  children,
  className,
  rounded,
  onClick,
  ...moreProps
}: AvatarProps) {
  const initials = useMemo(() => {
    if (userName) {
      const names = userName.split(" ");
      const initialsArray = names.map((name) => name.charAt(0).toUpperCase());

      if (names.length === 1) {
        return (
          names[0].charAt(0).toUpperCase() + names[0].charAt(1).toUpperCase()
        );
      }

      return initialsArray.slice(0, 2).join("");
    }
    return "";
  }, [userName]);

  const backgroundColor = getBackgroundColor(initials.charAt(0));

  const styleContainer = `relative grid place-items-center ${backgroundColor} ${
    styleSizeAvatar[size || "md"]
  } ${rounded ? "rounded-full" : "rounded"} ${
    onClick ? "cursor-pointer" : ""
  } ${className ? className : ""}`;

  return (
    <figure
      data-testid="avatar"
      onClick={onClick}
      className={styleContainer}
      {...moreProps}
    >
      {photoUrl ? (
        <AvatarImage rounded={rounded} src={photoUrl} size={size} />
      ) : (
        <AvatarText initials={initials} size={size} />
      )}
      {children}
    </figure>
  );
}

function AvatarImage({ src, size, rounded }: AvatarProps) {
  return (
    <img
      className={`${styleSizeAvatar[size || "md"]} object-cover ${
        rounded ? "rounded-full" : "rounded"
      }`}
      src={src}
      alt="Avatar del usuario"
    />
  );
}

function AvatarText({ size, initials }: AvatarProps) {
  return (
    <span
      className={`font-medium text-pw-white ${styleSizeText[size || "md"]}`}
    >
      {initials}
    </span>
  );
}
