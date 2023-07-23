import type { LoaderArgs } from "@remix-run/node";
import { Form, useParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";
import Button from "~/components/Button/Button";

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);
  return json({ user });
}

export default function UserProfile() {
  const paramUrl = useParams();
  const userName = paramUrl.userName;

  const loaderData = useLoaderData();
  const { user } = loaderData;

  return (
    <>
      {user?.displayName == userName ? <Content user={user} /> : <Error />}
    </>
  )
}

function Content({ user }) {
  return (
    <div>
      <h2>
        {user?.displayName}
      </h2>
      <p>
        Correo: <b>{user?.email}</b>
      </p>
      <p>
        Numero de telefono: <b>{user?.phoneNumber}</b>
      </p>

      <Form method="post" action="/logout">
        <Button color="black" type="submit" >
          Cerrar sesión
        </Button>
      </Form>
    </div>
  )
}

function Error() {
  return (
    <div>
      <h2>Error al cargar usuario</h2>
    </div>
  )
}