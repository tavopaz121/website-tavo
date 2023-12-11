export type PostItemProps = {
  id?: string;
  to?: string;
  title?: string;
  image?: { src: string; alt: string };
  createdAt: string;
  summary?: string;
  authorImg?: string;
  author?: string;
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
};
