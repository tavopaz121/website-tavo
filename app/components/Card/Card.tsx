export default function Card({
  title,
  description,
  image,
  createdAt,
  createdAtLocale,
}: {
  title: string;
  description: string;
  image: { src: string; alt: string };
  createdAt: Date;
  createdAtLocale: string;
}) {
  return (
    <div className="bg-white-300 p-5 mb-5 shadow-md w-80">
      <h2>{title}</h2>
      <p>{description}</p>
      <time dateTime={createdAt?.toString()}>{createdAtLocale}</time>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}
