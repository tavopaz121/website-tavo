import type { ReactNode } from "react";

export type PropsNav = {
  items?: { to: string; label: string; isButton?: boolean }[];
  secondaryItems?:
    | { to: string; label: string; isButton?: boolean }[]
    | undefined;
  isHome?: boolean;
  children?: ReactNode;
  borderClasses?: string;
};

export type PropsNavLg = PropsNav & {
  handleMenuButton: () => void;
  hasLogo?: boolean;
  aLign?: "center" | "start" | "end" | "between" | "around" | "evenly";
  hasScrolledDown?: boolean;
  highLightClasses?: string;
  logoColor?: string;
  anchorClasses?: string;
};

export type PropsNavMobile = PropsNav & {
  handleMenuButton: () => void;
  logo: ReactNode;
  aLign?: "center" | "start" | "end" | "between" | "around" | "evenly";
  isHidden?: boolean;
};
