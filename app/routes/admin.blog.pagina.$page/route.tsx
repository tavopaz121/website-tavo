import { json, redirect, type LoaderArgs } from "@remix-run/node";
import ArticlesList from "~/components/Blog/ArticlesList/ArticlesList";
import { getPosts } from "~/firebase/models/posts.server";
import { mapPostsToCards } from "../blog._index/mappers/mapPostsToCards";
import { useLoaderData } from "@remix-run/react";
import PageIllustration from "~/components/Blog/page-illustration";
import Pagination from "~/components/Blog/Pagination/pagination";
import PostItem from "~/components/Blog/PostItem/post-item";
import type { CardProps } from "~/components/Blog/ArticlesList/Card.d";
import Dropdown from "~/components/Blog/Dropdown/Dropdown";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const numPage = Number(url.pathname.split("/").at(-1));
  const { posts, nextPage, prevPage, total } = await getPosts(numPage);

  const limitPages = Math.ceil(total / 10);

  if (numPage > limitPages || posts.length <= 0) {
    return redirect("/admin/blog");
  }

  return json({
    posts: mapPostsToCards(posts),
    nextPage,
    prevPage,
    numPage: numPage,
    total,
  });
}

export default function Posts() {
  const loaderData = useLoaderData();
  const { posts, total, numPage } = loaderData;
  return (
    <section className="relative bg-gray-900 px-8 max-sm:px-4 overflow-hidden">
      <PageIllustration />
      <div className="max-w-full">
        <div className="pb-12 md:pb-20 mt-16">
          {/* Articles list */}
          <ArticlesList title="Administración de blog">
            <div
              className={`grid gap-12 sm:grid-cols-3 sm:gap-x-6 md:gap-y-8 items-start max-sm:block`}
            >
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
                  >
                    <Dropdown
                      slug={to}
                      className="absolute right-0 top-0 z-30 p-2"
                    />
                  </PostItem>
                ),
              )}
            </div>
          </ArticlesList>

          <Pagination
            currentPage={numPage}
            startPath="/admin/blog"
            numPages={total}
          />
        </div>
      </div>
    </section>
  );
}
