import type { MouseEventHandler } from "react";

export type AvatarProps = {
  photoUrl?: string;
  userName?: string;
  rounded?: true | false;
  src?: string;
  initials?: string;
  className?: string;
  children?: JSX.Element | string | never[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: MouseEventHandler<HTMLDivElement>;
};
