import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import PageIllustration from "~/components/Blog/page-illustration";
import Sidebar from "~/components/Siderbar/sidebar";
import { mapPostsToCards } from "../blog._index/mappers/mapPostsToCards";
import Pagination from "~/components/Blog/Pagination/pagination";
import ArticlesList from "~/components/Blog/ArticlesList/ArticlesList";
import SideBarList from "~/components/Siderbar/sidebarList";
import { listCategorysTags } from "~/data/listCategorysTags";

export async function loader({ request, params }: LoaderArgs) {
  const numPage = Number(params.page || 1);
  const category = params?.category?.toLowerCase().replace(/\s/g, "-");
  const by: any = {
    field: "categories",
    value: category,
    operator: "array-contains",
  };
  const { posts, nextPage, prevPage, total } = await getPosts(numPage, 10, by);

  return json({
    posts: mapPostsToCards(posts),
    nextPage,
    prevPage,
    numPage: numPage,
    total,
    category,
  });
}

export default function Categoria() {
  const loaderData = useLoaderData();
  const { posts, numPage, total, category } = loaderData;

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
                  : `Artículos de ${category}, página ${numPage}`
              }
            >
              <Sidebar>
                <SideBarList
                  listCategorys={listCategorysTags}
                  title="Lista de categorías"
                />
              </Sidebar>
            </ArticlesList>

            {/*  Pagination */}
            {total > 0 && (
              <Pagination
                currentPage={numPage}
                numPages={total}
                startPath={`/categoria/${category}`}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
