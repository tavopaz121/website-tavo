import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Blogs from "./components/Blogs";
import Contacto from "./components/Contacto";
import Principios from "./components/Principios";
import { items, secondaryItems } from "~/data/navItems";
import Nav from "~/components/Navs/Nav";
import { useEffect, useRef, useState } from "react";

import type { LinksFunction } from "@remix-run/node";

import videoPoster from "./imgs/background-video-inicio.webp";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

export const meta = metaFn;
export const loader = loaderSeoFn("inicio");

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
          preText="¿Visibilidad en línea deficiente?"
          title="¡Desbloquea el Éxito Digital!"
          subtitle="Desarrollo web/app ágil"
          videoPoster={videoPoster}
          videoSrcs={{
            mp4: "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-6.4s__.mp4?alt=media&token=3e2941d4-1b75-40dc-9ed8-ed4eed6476ef",
            webm: "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-6.4s__.webm?alt=media&token=ec9429ad-0d66-4da2-bafe-4504248a5419",
            ogv: "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-6.4s__.ogv?alt=media&token=eb4e4e9f-7e4a-4157-8f72-515f135045f6",
          }}
          timing={1}
        />
      </section>

      <article ref={targetRef} className="overflow-hidden">
        <Servicios />
        <Principios hasParticles={true} />
        <Nosotros />
        <Blogs />
        <Contacto />
      </article>
    </>
  );
}
