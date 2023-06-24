import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, Form } from "@remix-run/react";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";
import { getPosts } from "~/firebase/db.server";

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);
  const posts = await getPosts();

  return json({ user, posts });
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

      {
        posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
          )
        )
      }

      {user && (
        <Form method="post" action="/logout">
          <button type="submit">Cerrar sesion</button>
        </Form>
      )}
    </div>
  );
}
