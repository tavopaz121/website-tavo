import PostDate from "../post-date";
import PostTags from "../post-tags";
import { Link } from "@remix-run/react";
import type { PostItemProps } from "./post-item.d";

export default function PostItem({
  to,
  title,
  createdAt,
  summary,
  authorImg,
  author,
  tags,
  imageSrc,
  imageAlt,
}: PostItemProps) {
  return (
    <article
      className="flex flex-col h-full max-sm:mb-10"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <header>
        <Link to={`/${to}`} className="block mb-6">
          <figure className="relative h-0 pb-[56.25%] overflow-hidden rounded-sm">
            <img
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              src={imageSrc}
              width={352}
              height={198}
              alt={imageAlt}
            />
          </figure>
        </Link>

        {tags && (
          <div className="mb-3">
            <PostTags tags={tags} />
          </div>
        )}
        <h3 className="h4 mb-2">
          <Link
            to={`/${to}`}
            className="hover:text-gray-300 text-white transition duration-150 ease-in-out"
          >
            {title}
          </Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow line-clamp-2">{summary}</p>
      <footer className="flex items-center mt-4">
        <a
          href="https://www.facebook.com/jaime.cervantes"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-full shrink-0 mr-4"
            src={authorImg}
            width={40}
            height={40}
            alt={author}
          />
        </a>
        <div className="font-medium">
          <a
            href="https://www.facebook.com/jaime.cervantes"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
          >
            {author}
          </a>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500">
            <PostDate dateString={createdAt} />
          </span>
        </div>
      </footer>
    </article>
  );
}
