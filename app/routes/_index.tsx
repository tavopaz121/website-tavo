import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";
import { getPosts } from "~/firebase/models/posts.server";
import Nav from "~/components/Navs/Nav";
import Hero from "~/components/pages/home/Hero";
import { items, secondaryItems } from "~/data/navItems";

import { useState } from "react";
import logoPensemos from "app/assets/imgs/pensemosweb.svg";

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
  const [isHidden, setIsHidden] = useState<boolean>(true);

  function handleMenuButton() {
    setIsHidden(!isHidden);
  }

  return (
    <>
      <main>
        <section className="relative pb-20 overflow-hidden min-h-screen bg-black">
          <Hero />
          <Nav
            handleMenuButton={handleMenuButton}
            logo={logoPensemos}
            items={items}
            secondaryItems={secondaryItems}
            hasLogo={true}
            aLign="center"
            isHidden={isHidden}
          />
        </section>
      </main>
    </>
  );
}
