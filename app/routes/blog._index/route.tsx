import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import { mapPostsToCards } from "./mappers/mapPostsToCards";
import PageIllustration from "~/components/Blog/page-illustration";
import Sidebar from "~/components/Siderbar/sidebar";
import Pagination from "~/components/Blog/Pagination/pagination";
import FeaturesArticle from "~/components/Blog/FeaturedArticle/FeaturesArticle";
import ArticlesList from "~/components/Blog/ArticlesList/ArticlesList";
import SideBarList from "~/components/Siderbar/sidebarList";
import { listCategorysTags } from "~/data/listCategorysTags";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const numPage = Number(url.searchParams.get("pagina"));
  const { posts, nextPage, prevPage, total } = await getPosts(numPage);

  return json({ posts: mapPostsToCards(posts), nextPage, prevPage, total });
}

export default function Blog() {
  const loaderData = useLoaderData();
  const { posts, total } = loaderData;

  const featuredPost = posts[0];

  return (
    <>
      <section className="relative bg-gray-900 px-8 max-sm:px-4">
        <PageIllustration />
        <div className="max-w-full">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/*  Featured article */}
            <FeaturesArticle
              to={featuredPost.to}
              imageSrc={featuredPost.image.src}
              imageAlt={featuredPost.image.alt}
              tags={featuredPost.tags}
              title={featuredPost.title}
              summary={featuredPost.summary}
              createdAt={featuredPost.createdAt}
              userPhoto={featuredPost.user.photoURL}
              userDisplayName={featuredPost.user.displayName}
            />

            {/* Articles list */}
            <ArticlesList posts={posts.slice(1)} title="Últimos Artículos">
              <Sidebar>
                <SideBarList
                  listCategorys={listCategorysTags}
                  title="Categorías"
                />
              </Sidebar>
            </ArticlesList>
            <Pagination currentPage={1} numPages={total} />
          </div>
        </div>
      </section>
    </>
  );
}
