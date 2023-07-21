import type { ElementType } from "react";

export default function Card({
  title,
  description,
  image,
  createdAt,
  createdAtLocale,
  className,
  Container = "article",
  style = {},
}: {
  title: string;
  description: string;
  image: { src: string; alt: string };
  createdAt: Date;
  createdAtLocale: string;
  className?: string;
  Container?: ElementType;
  style?: Object;
}) {
  const clsN = `border bg-white-300 p-5 shadow-md ${className ?? ""}`;

  return (
    <Container className={clsN} style={style ?? ""}>
      <h2>{title}</h2>
      <p>{description}</p>
      <time dateTime={createdAt?.toString()} className="first-letter:uppercase">
        {createdAtLocale}
      </time>
      <img src={image.src} alt={image.alt} />
    </Container>
  );
}
