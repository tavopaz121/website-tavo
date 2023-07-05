export default function Card({
  title,
  description,
  image
}: {
  title: string;
  description: string;
  image: { src: string, alt: string}
}) {
  return (
    <div className="bg-white-300 p-5 mb-5 shadow-md w-80">
      <h2>{title}</h2>
      <p>{description}</p>  
      <img src={image.src} alt={image.alt} />
    </div>
  );
}
