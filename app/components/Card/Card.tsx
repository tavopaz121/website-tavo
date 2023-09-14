import type { CardProps } from "./Card.d";

export default function Card({
  title,
  image,
  className,
  Container = "article",
  style = {},
  footerChildren = null,
  AnchorElement = "a",
  anchorProps = {},
}: CardProps) {
  const clsN = `border bg-white-300 shadow-md ${className ?? ""}`;
  const imgClsN = `object-cover
  object-center
  [max-inline-size:100%]
  [inline-size:100%]
  [block-size:auto]
  [aspect-ratio:3/2]`.replace(/\n\s\s/g, " ");

  return (
    <Container className={clsN} style={style ?? ""}>
      <AnchorElement {...anchorProps}>
        <img src={image.src} alt={image.alt} className={imgClsN} />
      </AnchorElement>

      <section className="px-4 py-2">
        <h3>
          <AnchorElement {...anchorProps}>{title}</AnchorElement>
        </h3>
      </section>

      {footerChildren && (
        <footer className="flex flex-wrap p-4">{footerChildren}</footer>
      )}
    </Container>
  );
}
