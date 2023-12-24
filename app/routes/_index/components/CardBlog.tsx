import { Link } from "@remix-run/react";

interface TypeBlog {
  image: string;
  fecha: string;
  titulo: string;
  anchor: string;
  className: string;
  isMain: boolean;
}

export default function Blog({
  image,
  fecha,
  titulo,
  anchor,
  className,
  isMain,
}: TypeBlog) {
  return (
    <Link
      to={anchor}
      className={`relative flex items-center flex-wrap ${
        isMain
          ? "flex-col h-auto"
          : "flex-row max-md:flex-col max-md:h-auto h-full"
      } ${className}`}
    >
      <div
        className={`${
          isMain ? "" : "w-2/5 max-md:w-full"
        } overflow-hidden h-full`}
      >
        <img
          decoding="async"
          loading="lazy"
          className="h-full w-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div
        className={`${
          isMain ? "pt-3" : "w-3/5 max-md:w-full max-md:pt-3 max-md:pl-0 pl-3"
        } h-full flex items-center`}
      >
        <div className="max-w-2xl">
          <span className="block text-gray-400 mb-1">{fecha}</span>
          <p className="text-2xl font-semibold text-gray-900">{titulo}</p>
        </div>
      </div>
    </Link>
  );
}
