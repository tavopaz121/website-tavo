import Hero from "~/components/pages/home/Hero";
import Servicios from "~/components/pages/home/Servicios";
import Nosotros from "~/components/pages/home/Nosotros";
import Blogs from "~/components/pages/home/Blogs";
import Contacto from "~/components/pages/home/Contacto";
import { items, secondaryItems } from "~/data/navItems";
import Nav from "~/components/Navs/Nav";
import { useEffect, useRef, useState } from "react";
import Principios from "~/components/pages/home/Principios";

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
        <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/videos%2Fbg-inicio-3s-darker.mp4?alt=media&token=d66dd8d8-378a-4c35-968d-e1d3e31971d0" />
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
