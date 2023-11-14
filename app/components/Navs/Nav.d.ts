import type { ReactNode } from "react";

export type PropsNav = {
  handleMenuButton: () => void;
  logo?: ReactNode;
  hasLogo?: boolean;
  items?: { to: string; label: string; isButton?: boolean }[];
  secondaryItems?:
    | { to: string; label: string; isButton?: boolean }[]
    | undefined;
  aLign?: "center" | "start" | "end" | "between" | "around" | "evenly";
  children?: ReactNode;
  isHidden?: boolean;
  isHome?: boolean;
  highLighClassName?: string;
};
