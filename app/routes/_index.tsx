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
import { items, secondaryItems } from "~/data/navItems";
import Nav from "~/components/Navs/Nav";
import { useEffect, useRef, useState } from "react";

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
  const contentRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [borderClasses, setBorderClasses] = useState<string>("");

  useEffect(() => {
    const callback = (entries: any, observer: any) => {
      console.log(entries);
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setBorderClasses("border border-x-0 border-t-0 border-pink-500");
        } else {
          setBorderClasses("");
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "73px 0px 0px 0px",
      threshold: 0.1,
    };
    const observe = new IntersectionObserver(callback, options);
    observe.observe(contentRef.current!);
  }, []);

  console.log("borderClasses==> " + borderClasses);

  return (
    <>
      <Nav
        items={items}
        secondaryItems={secondaryItems}
        isHome={true}
        borderClasses={borderClasses}
      />
      <section
        ref={heroRef}
        className="relative pb-20 overflow-hidden min-h-screen bg-black px-4"
      >
        <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-3s-darker.mp4?alt=media&token=d66dd8d8-378a-4c35-968d-e1d3e31971d0" />
      </section>
      <article ref={contentRef}>
        <Servicios />
        <Nosotros />
        <Equipo />
        <Blogs />
        <Contacto />
      </article>
    </>
  );
}
