import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import { mapPostsToCards } from "./mappers/mapPostsToCards";
import PostDate from "~/components/Blog/post-date";
import PostTags from "~/components/Blog/post-tags";
import PageIllustration from "~/components/Blog/page-illustration";
import PostItem from "~/components/Blog/post-item";
import type { CardProps } from "./Card/Card.d";
import Sidebar from "~/components/Blog/sidebar";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const numPage = Number(url.searchParams.get("pagina"));
  const { posts, nextPage, prevPage } = await getPosts(numPage);
  return json({ posts: mapPostsToCards(posts), nextPage, prevPage });
}

export default function Blog() {
  const loaderData = useLoaderData();
  const { posts } = loaderData;

  const featuredPost = posts[0];

  return (
    <>
      <section className="relative bg-gray-900">
        <PageIllustration />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <a
                  href={featuredPost.to}
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
                      src={featuredPost.image.src}
                      width="540"
                      height="303"
                      alt={featuredPost.image.alt}
                    />
                  </figure>
                </a>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    <div className="mb-3">
                      <div className="mb-3">
                        <PostTags tags={featuredPost.tags} />
                      </div>
                    </div>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      <a
                        href={featuredPost.to}
                        className="hover:text-gray-300 transition duration-150 ease-in-out text-white"
                      >
                        {featuredPost.title}
                      </a>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow line-clamp-3">
                    {featuredPost.summary}
                  </p>
                  <footer className="flex items-center mt-4">
                    <a href="/">
                      <img
                        className="rounded-full shrink-0 mr-4"
                        src={featuredPost.user.photoURL}
                        width={40}
                        height={40}
                        alt={featuredPost.user.displayName}
                      />
                    </a>
                    <div>
                      <a
                        href="/"
                        className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {featuredPost.user.displayName}
                      </a>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500">
                        <PostDate dateString={featuredPost.createdAt} />
                      </span>
                    </div>
                  </footer>
                </div>
              </article>
            </div>

            {/* Articles list */}
            <section>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div className="lg:flex lg:justify-between">
                    {/* Main content */}
                    <div
                      className="lg:grow"
                      data-aos="fade-down"
                      data-aos-delay="200"
                    >
                      {/* Section title */}
                      <p className="text-3xl text-white mb-8">
                        Últimos Artículos
                      </p>

                      {/* Articles container */}
                      <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
                        {posts
                          .slice(1)
                          .map(
                            ({
                              id,
                              to,
                              title,
                              image,
                              createdAt,
                              user,
                              tags,
                              summary,
                            }: CardProps) => (
                              <PostItem
                                key={id}
                                to={to}
                                title={title}
                                createdAt={createdAt}
                                authorImg={user.photoURL}
                                author={user.displayName}
                                tags={tags}
                                imageSrc={image.src}
                                imageAlt={image.alt}
                                summary={summary}
                              />
                            ),
                          )}
                      </div>
                    </div>

                    <Sidebar />
                  </div>
                </div>
              </div>
            </section>

            {/*  Pagination */}
            <nav
              className="flex justify-center pt-16"
              role="navigation"
              aria-label="Pagination Navigation"
            >
              <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-[2.5rem] justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">
                    Prev
                  </span>
                </li>
                <li className="m-1">
                  <a
                    href="/"
                    className="inline-flex h-10 min-w-[2.5rem] justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-pink-600 transition-colors duration-150 ease-in-out"
                  >
                    1
                  </a>
                </li>
                <li className="m-1">
                  <a
                    href="/"
                    className="inline-flex h-10 min-w-[2.5rem] justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-pink-600 transition-colors duration-150 ease-in-out"
                  >
                    2
                  </a>
                </li>
                <li className="m-1">
                  <a
                    href="/"
                    className="inline-flex h-10 min-w-[2.5rem] justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-pink-600 transition-colors duration-150 ease-in-out"
                  >
                    3
                  </a>
                </li>
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-[2.5rem] justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">
                    ...
                  </span>
                </li>
                <li className="m-1">
                  <a
                    href="/"
                    className="inline-flex h-10 min-w-[2.5rem] justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-pink-600 transition-colors duration-150 ease-in-out"
                  >
                    12
                  </a>
                </li>
                <li className="m-1">
                  <a
                    href="/"
                    className="inline-flex h-10 min-w-[2.5rem] justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-pink-600 transition-colors duration-150 ease-in-out"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
