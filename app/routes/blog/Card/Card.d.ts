import type { ElementType } from "react";

export type CardProps = {
  title: string;
  id: string;
  to: string;
  createdAt: string;
  user: {photoURL: string, displayName: string}
  image: { src: string; alt: string };
  tags: string;
  summary: string;
  className?: string;
  Container?: ElementType;
  style?: Object;
  footerChildren?: JSX.Element | string | null | undefined;
  AnchorElement?: ElementType;
  anchorProps: { [key: string]: string };
};
