import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";
import { getPosts } from "~/firebase/models/posts.server";
import Hero from "~/components/pages/home/Hero";
import Servicios from "~/components/pages/home/Servicios";
import Nosotros from "~/components/pages/home/Nosotros";
import Equipo from "~/components/pages/home/Equipo";
import Blogs from "~/components/pages/home/Blogs";
import Contacto from "~/components/pages/home/Contacto";

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);
  const posts = await getPosts();

  return json({ user, posts: posts });
}

export const action = async ({ request }: ActionArgs) => {
  const { uid }: any = await getLoggedUser(request);
  const form = await request.formData();
  console.log(form, uid);
};

export default function Index() {
  return (
    <>
      <section className="relative pb-20 overflow-hidden min-h-screen bg-black">
        <Hero />
      </section>
      <Servicios />
      <Nosotros />
      <Equipo />
      <Blogs />
      <Contacto />
    </>
  );
}
