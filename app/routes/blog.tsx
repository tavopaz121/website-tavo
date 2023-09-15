import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/firebase/models/posts.server";
import Card from "~/components/Card/Card";
import { mapPostsToCards } from "~/mappers/mapPostsToCards";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const posts = await getPosts();

  return json({ posts: mapPostsToCards(posts) });
}

export default function Index() {
  const loaderData = useLoaderData();
  const { posts } = loaderData;

  return (
    <>
      <section
        className="grid gap-2 p-2"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {posts.map(
          ({ id, to, title, image, createdAt, createdAtLocale, user }) => (
            <Card
              title={title}
              image={image}
              createdAt={createdAt}
              createdAtLocale={createdAtLocale}
              user={user}
              key={id}
              className="rounded-xl overflow-hidden flex flex-col justify-between"
              AnchorElement={Link}
              anchorProps={{ to: `/${to}` }}
              footerChildren={
                <>
                  <Link to={to} className="flex items-center">
                    <FaInfoCircle className="mr-2" />
                    <span>Read more</span>
                  </Link>
                </>
              }
            />
          ),
        )}
      </section>
    </>
  );
}
