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
    <div
      className={`relative flex items-center flex-wrap ${
        isMain ? "flex-col h-auto" : "flex-row h-full"
      } ${className}`}
    >
      <div className={`${isMain ? "" : "w-2/5"} overflow-hidden h-full`}>
        <img
          decoding="async"
          loading="lazy"
          className="h-full w-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div
        className={`${isMain ? "pt-3" : "w-3/5 pl-3"} h-full flex items-center`}
      >
        <div className="max-w-2xl">
          <span className="block text-gray-400 mb-1">{fecha}</span>
          <p className="text-2xl font-semibold text-gray-900">{titulo}</p>
        </div>
      </div>
    </div>
  );
}
