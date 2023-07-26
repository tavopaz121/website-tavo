import { useMemo } from "react";

type UserName = string | undefined;

type Initials = string;

export function useInitials(userName: UserName): Initials {
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

  return initials;
}
