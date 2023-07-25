import type { MouseEventHandler } from "react";

export type AvatarProps = {
  photoUrl?: string;
  userName?: string;
  rounded?: boolean;
  className?: string;
  children?: JSX.Element | string | never[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export type AvatarImageProps = {
  src?: string;
  rounded?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export type AvatarTextProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  initials?: string;
};
