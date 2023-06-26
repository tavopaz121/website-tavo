import { useActionData, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { requireAuth } from "~/firebase/auth.server";
import type { LoaderArgs } from "@remix-run/node";
import PwPublisForm from '../components/PwPublishForm/PwPublishForm'

export function meta() {
  return [
    { title: "HealthyFood | Crear Publicación" },
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
  return { uid, form };
}

export default function Publish() {
  const user = useLoaderData();
  const res = useActionData()

  console.log(res)

  return (
    <main className="p-5">
      <PwPublisForm userName={user.displayName} />
    </main>
  );
}
