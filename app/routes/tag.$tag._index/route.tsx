import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import PageIllustration from "~/components/Blog/page-illustration";
import { mapPostsToCards } from "../blog._index/mappers/mapPostsToCards";
import Pagination from "~/components/Blog/Pagination/pagination";
import ArticlesList from "~/components/Blog/ArticlesList/ArticlesList";
import Sidebar from "~/components/Siderbar/sidebar";
import SideBarList from "~/components/Siderbar/sidebarList";
import { listCategorysTags } from "~/data/listCategorysTags";

export async function loader({ request, params }: LoaderArgs) {
  const numPage = Number(params.page || 1);
  const tag = params?.tag?.toLowerCase().replace(/\s/g, "-");
  const by: any = {
    field: "tags",
    value: tag,
    operator: "array-contains",
  };
  const { posts, nextPage, prevPage, total } = await getPosts(numPage, 10, by);

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
      <section className="relative bg-gray-900 px-8 max-sm:px-4">
        <PageIllustration />
        <div className="max-w-full">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Articles list */}
            <ArticlesList
              posts={posts}
              title={
                total <= 0
                  ? "Sin artículos encontrados"
                  : `Artículos con etiqueta ${tag}, página ${numPage}`
              }
            >
              <Sidebar>
                <SideBarList
                  title="Lista de Tags"
                  listCategorys={listCategorysTags}
                />
              </Sidebar>
            </ArticlesList>
            {/*  Pagination */}
            {total > 0 && (
              <Pagination
                currentPage={numPage}
                numPages={total}
                startPath={`/tag/${tag}`}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
