import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import PageIllustration from "~/components/Blog/page-illustration";
import ArticlesList from "~/components/Blog/ArticlesList/ArticlesList";
import Sidebar from "~/components/Siderbar/sidebar";
import { mapPostsToCards } from "../blog._index/mappers/mapPostsToCards";
import Pagination from "~/components/Blog/Pagination/pagination";
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
    category,
  });
}

export default function BlogTag() {
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
              title={`Artículos con etiqueta ${category}, página ${numPage}`}
            >
              <Sidebar>
                <SideBarList
                  listCategorys={listCategorysTags}
                  title="Lista de categorias"
                />
              </Sidebar>
            </ArticlesList>

            {/*  Pagination */}
            <Pagination
              currentPage={numPage}
              numPages={total}
              startPath={`/categoria/${category}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
