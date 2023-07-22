import type { LoaderArgs } from "@remix-run/node";
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
  const loaderData = useLoaderData();
  const { user } = loaderData;

  let content = (
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

      <Button color="black" >
        Cerrar sesión
      </Button>
    </div>
  )

  let error = (
    <div>
      <h2>Por favor inicie sesion</h2>
    </div>
  )

  return (
    <>
      {user?.displayName ? content : error}
    </>
  )
}
