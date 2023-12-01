import Hero from "~/components/pages/home/Hero";
import Servicios from "~/components/pages/home/Servicios";
import Nosotros from "~/components/pages/home/Nosotros";
import Blogs from "~/components/pages/home/Blogs";
import Contacto from "~/components/pages/home/Contacto";
import { items, secondaryItems } from "~/data/navItems";
import Nav from "~/components/Navs/Nav";
import { useEffect, useRef, useState } from "react";
import Principios from "~/components/pages/home/Principios";
import poster from "app/assets/imgs/inicio/background-video-inicio.webp";
import type { LinksFunction } from "@remix-run/node";
import videoPoster from "app/assets/imgs/inicio/background-video-inicio.webp";

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: videoPoster, as: "image", type: "image/webp" },
  ];
};

export default function Index() {
  const targetRef = useRef<HTMLElement>(null);
  const [borderClasses, setBorderClasses] = useState<string>("");

  useEffect(() => {
    const callback = (entries: any, observer: any) => {
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
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observe = new IntersectionObserver(callback, options);
    observe.observe(targetRef.current!);

    return () => observe.disconnect();
  }, []);

  return (
    <>
      <Nav
        items={items}
        secondaryItems={secondaryItems}
        isHome={true}
        borderClasses={borderClasses}
      />
      <section className="relative pb-20 overflow-hidden min-h-screen bg-black px-4">
        <Hero
          preText="Creá con"
          title="pensemosweb"
          subtitle="Desarrollo web/app ágil"
          videoPoster={poster}
          videoSrcs={{
            mp4: "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-6.4s__.mp4?alt=media&token=3e2941d4-1b75-40dc-9ed8-ed4eed6476ef",
            webm: "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-6.4s__.webm?alt=media&token=ec9429ad-0d66-4da2-bafe-4504248a5419",
            ogv: "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-6.4s__.ogv?alt=media&token=eb4e4e9f-7e4a-4157-8f72-515f135045f6",
          }}
          timing={1}
        />
      </section>

      <article ref={targetRef}>
        <Principios />
        <Servicios />
        <Nosotros />
        <Blogs />
        <Contacto />
      </article>
    </>
  );
}
