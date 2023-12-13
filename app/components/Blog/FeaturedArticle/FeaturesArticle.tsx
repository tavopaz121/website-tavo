import PostDate from "../post-date";
import PostTags from "../post-tags";
import type { FeaturedArticleProps } from "./featuredArticle.d";

export default function FeaturesArticle({
  to,
  imageSrc,
  imageAlt,
  tags,
  title,
  summary,
  userPhoto,
  userDisplayName,
  createdAt,
}: FeaturedArticleProps) {
  return (
    <div className="pb-12 md:pb-20">
      <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        <a
          href={to}
          className="relative block group"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div
            className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
            aria-hidden="true"
          ></div>

          <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <img
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              src={imageSrc}
              width="540"
              height="303"
              alt={imageAlt}
            />
          </figure>
        </a>
        <div data-aos="fade-left" data-aos-delay="200">
          <header>
            <div className="mb-3">
              {tags && (
                <div className="mb-3">
                  <PostTags tags={tags} />
                </div>
              )}
            </div>
            <h3 className="h3 text-2xl lg:text-3xl mb-2">
              <a
                href={to}
                className="hover:text-gray-300 transition duration-150 ease-in-out text-white"
              >
                {title}
              </a>
            </h3>
          </header>
          <p className="text-lg text-gray-400 grow line-clamp-3">{summary}</p>
          <footer className="flex items-center mt-4">
            <a
              href="https://www.facebook.com/jaime.cervantes"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-full shrink-0 mr-4"
                src={userPhoto}
                width={40}
                height={40}
                alt={userDisplayName}
              />
            </a>
            <div>
              <a
                href="https://www.facebook.com/jaime.cervantes"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
              >
                {userDisplayName}
              </a>
              {createdAt && (
                <>
                  <span className="text-gray-700"> - </span>
                  <span className="text-gray-500">
                    <PostDate dateString={createdAt} />
                  </span>
                </>
              )}
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
