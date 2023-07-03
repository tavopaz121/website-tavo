import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, Form } from "@remix-run/react";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";
import { getPosts } from "~/firebase/models/posts.server";
import Card from "~/components/Card/Card";

function mapPosts(posts) {
  return posts.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      image: {
        src: item.image,
        alt: item.title,
      },
    };
  });
}

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);
  const posts = await getPosts();

  return json({ user, posts: mapPosts(posts) });
}

export const action = async ({ request }: ActionArgs) => {
  const { uid } = await getLoggedUser(request);
  const form = await request.formData();
  console.log(form, uid);
};

export default function Index() {
  const loaderData = useLoaderData();
  const { user, posts } = loaderData;

  return (
    <div>
      <h1>Bienvenido. {user?.displayName ? `${user.displayName}.` : ""} </h1>

      <Link to="/publish" data-cy="btn-publish">
        Publica tu comida sana
      </Link>

      {posts.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}

      {user && (
        <Form method="post" action="/logout">
          <button type="submit" data-cy="btn-logout">Cerrar sesion</button>
        </Form>
      )}
    </div>
  );
}
