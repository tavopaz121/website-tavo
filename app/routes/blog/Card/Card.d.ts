import type { ElementType } from "react";

export type CardProps = {
  title: string;
  image: { src: string; alt: string };
  className?: string;
  Container?: ElementType;
  style?: Object;
  footerChildren?: JSX.Element | string | null | undefined;
  AnchorElement?: ElementType;
  anchorProps: { [key: string]: string };
};
