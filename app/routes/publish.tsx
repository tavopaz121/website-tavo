import { Form, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { requireAuth } from "~/firebase/auth.server";
import type { LoaderArgs } from "@remix-run/node";
import { createPost } from "~/firebase/models/posts.server";
import type { Post } from "~/types/publish";

export function meta() {
  return [
    { title: "Publica tu comida sana" },
    { name: "description", content: "Publica tu comida sana" },
  ];
}

export async function loader({ request }: LoaderArgs) {
  const user = await requireAuth(request);

  return json({
    displayName: user.displayName
  })
}

export async function action({ request }: LoaderArgs) {
  const { uid, displayName, email, phoneNumber, photoURL } = await requireAuth(request);
  const data = await request.formData();
  const { image, ...post } = Object.fromEntries(data.entries());
  
  await createPost(post, image, { uid, displayName, email, phoneNumber, photoURL });

  return redirect('/');
}

export default function () {
  const user = useLoaderData();
  return (
    <section>
      <h2>{user.displayName}, publica tu nueva comida sana</h2>
      <Form method="POST" encType="multipart/form-data">
        <label>
          Titulo
          <input name="title" />
        </label>
        <label>
          Precio
          <input name="price" />
        </label>
        <label>
          Descripción
          <input name="description" />
        </label>
        <label>
          Imagen
          <input name="image" type="file" />
        </label>

        <button>Publicar</button>
      </Form>
    </section>
  );
}
