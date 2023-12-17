import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import PageIllustration from "~/components/Blog/page-illustration";
import Sidebar from "~/components/Siderbar/sidebar";
import { mapPostsToCards } from "../blog._index/mappers/mapPostsToCards";
import Pagination from "~/components/Blog/Pagination/pagination";
import ArticlesList from "~/components/Blog/ArticlesList/ArticlesList";
import SideBarList from "~/components/Siderbar/sidebarList";
import { listCategorysTags } from "~/data/listCategorysTags";
import aosStyles from "aos/dist/aos.css";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const numPage = Number(url.pathname.split("/").at(-1));
  const { posts, nextPage, prevPage, total } = await getPosts(numPage);

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
  });
}

export function links() {
  return [{ rel: "stylesheet", href: aosStyles, content: "text/css" }];
}

export default function Blog() {
  const loaderData = useLoaderData();
  const { posts, numPage, total } = loaderData;

  return (
    <>
      <section className="relative bg-gray-900 px-8 max-sm:px-4">
        <PageIllustration />
        <div className="max-w-full">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Articles list */}
            <ArticlesList posts={posts} title={`Artículos página ${numPage}`}>
              <Sidebar>
                <SideBarList
                  listCategorys={listCategorysTags}
                  title="Categorias"
                />
              </Sidebar>
            </ArticlesList>

            {/*  Pagination */}
            <Pagination currentPage={numPage} numPages={total} />
          </div>
        </div>
      </section>
    </>
  );
}
