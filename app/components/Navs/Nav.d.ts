export type PropsNav = {
  handleMenuButton: () => void;
  logo?: string;
  hasLogo?: boolean;
  items?: { to: string; label: string; isButton?: boolean }[];
  secondaryItems?:
    | { to: string; label: string; isButton?: boolean }[]
    | undefined;
  aLign?: "center" | "start" | "end" | "between" | "around" | "evenly";
  children?: React.ReactNode;
  isHidden?: boolean;
};
