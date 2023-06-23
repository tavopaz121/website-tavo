import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, Form } from "@remix-run/react";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);

  return json(user);
}

export const action = async ({ request }: ActionArgs) => {
  const { uid } = await getLoggedUser(request);
  const form = await request.formData();
  console.log(form, uid);
};

export default function Index() {
  const user = useLoaderData();

  return (
    <div>
      <h1>Bienvenido. {user?.displayName ? `${user.displayName}.` : ""} </h1>

      <Link to="/publish" data-cy="btn-publish">
        Publica tu comida sana
      </Link>

      {user && (
        <Form method="post" action="/logout">
          <button type="submit">Cerrar sesion</button>
        </Form>
      )}
    </div>
  );
}
