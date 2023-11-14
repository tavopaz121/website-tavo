import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";
import { getPosts } from "~/firebase/models/posts.server";
import Hero from "~/components/pages/home/Hero";

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
      <section className="relative pb-20 overflow-hidden min-h-screen bg-black px-4">
        <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-3s-darker.mp4?alt=media&token=d66dd8d8-378a-4c35-968d-e1d3e31971d0" />
      </section>
    </>
  );
}
