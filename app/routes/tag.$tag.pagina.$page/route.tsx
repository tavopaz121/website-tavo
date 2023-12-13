import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import PageIllustration from "~/components/Blog/page-illustration";
import PostItem from "~/components/Blog/PostItem/post-item";
import Sidebar from "~/components/Siderbar/sidebar";
import { mapPostsToCards } from "../blog._index/mappers/mapPostsToCards";
import type { CardProps } from "../blog._index/Card/Card";
import Pagination from "~/components/Blog/Pagination/pagination";

export async function loader({ request, params }: LoaderArgs) {
  const numPage = Number(params.page || 1);
  const tag = params?.tag?.toLowerCase().replace(/\s/g, "-");
  const by: any = {
    field: "tags",
    value: tag,
    operator: "array-contains",
  };
  const { posts, nextPage, prevPage, total } = await getPosts(numPage, 10, by);

  const limitPages = Math.ceil(total / 10);

  if (numPage > limitPages) {
    return redirect("/blog");
  }

  return json({
    posts: mapPostsToCards(posts),
    nextPage,
    prevPage,
    numPage: numPage,
    total,
    tag,
  });
}

export default function BlogTag() {
  const loaderData = useLoaderData();
  const { posts, numPage, total, tag } = loaderData;

  return (
    <>
      <section className="relative bg-gray-900">
        <PageIllustration />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/*  Featured article */}

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
                        Artículos con etiqueta {tag}, página {numPage}
                      </p>

                      {/* Articles container */}
                      <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
                        {posts.map(
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
            <Pagination
              currentPage={numPage}
              numPages={total}
              startPath={`/tag/${tag}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
