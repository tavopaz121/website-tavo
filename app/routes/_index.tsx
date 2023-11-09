import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { UserRecord } from "firebase-admin/auth";
import { getLoggedUser } from "~/firebase/auth.server";
import { getPosts } from "~/firebase/models/posts.server";
import Nav from "~/components/Navs/Nav";
import NavMobile from "~/components/Navs/NavMobile";

import { useState } from "react";
import logoPensemos from "app/assets/imgs/pensemosweb.svg";

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);
  const posts = await getPosts();

  return json({ user, posts: posts });
}

export const action = async ({ request }: ActionArgs) => {
  const { uid } = await getLoggedUser(request);
  const form = await request.formData();
  console.log(form, uid);
};

const items = [
  { to: "/", label: "Inicio" },
  { to: "/equipo", label: "Equipo" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
  { to: "/blog", label: "Blog" },
];

export default function Index() {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  function handleMenuButton() {
    setIsHidden(!isHidden);
  }

  return (
    <>
      <main>
        <section
          data-testid="banner"
          className="relative pb-20 overflow-hidden min-h-screen bg-black"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-[100vb] object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-dev-short.mp4?alt=media&token=f3b96276-df47-4b54-a33b-340890cea317"
          ></video>

          <div className="absolute top-0 h-[100vb] text-white w-full flex justify-center items-start flex-col mx-auto p-6">
            <span
              className="motion-safe:animate-fadeInDown text-4xl lg:text-6xl font-pensemosweb mb-6 lg:mb-11"
              style={{
                animationDelay: "1s",
                animationFillMode: "both",
              }}
            >
              <mark className="text-white bg-black bg-opacity-70 px-4 pt-1">
                Creá con
              </mark>
            </span>
            <span
              className="motion-safe:animate-fadeInUp font-pensemosweb text-6xl lg:text-10xl mb-5"
              style={{
                animationDelay: "1.5s",
                animationFillMode: "both",
              }}
            >
              <mark className="text-white bg-black bg-opacity-70 px-4 pt-2">
                pensemosweb
              </mark>
            </span>
            <span
              className="motion-safe:animate-fadeInLeft font-pensemosweb text-center text-2xl lg:text-4xl"
              style={{
                animationDelay: "2s",
                animationFillMode: "both",
              }}
            >
              <mark className="text-white bg-gradient-pink px-4 pt-1">
                Desarrollo web ágil
              </mark>
            </span>
          </div>
          <Nav
            handleMenuButton={handleMenuButton}
            logo={logoPensemos}
            items={items}
            secondaryItems={[
              { to: "/productos", label: "Productos", isButton: true },
            ]}
            hasLogo={true}
            aLign="center"
          />

          <NavMobile
            isHidden={isHidden}
            logo={logoPensemos}
            handleMenuButton={handleMenuButton}
            items={items}
          />
        </section>
      </main>
    </>
  );
}
