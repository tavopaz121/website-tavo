import { Form, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { requireAuth } from "~/firebase/auth.server";
import type { LoaderArgs } from "@remix-run/node";

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
  const { uid } = await requireAuth(request)
  const form = await request.formData();
  console.log(uid, form);
}

export default function () {
  const user = useLoaderData();
  return (
    <section>
      <h2>{user.displayName}, publica tu nueva comida sana</h2>
      <Form method="POST">
        <label>
          Titulo
          <input name="title" />
        </label>
        <label>
          Descripción
          <input name="description" />
        </label>
        <label>
          Imagen
          <input type="file" />
        </label>

        <button>Publicar</button>
      </Form>
    </section>
  );
}
