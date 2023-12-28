import { Link } from "@remix-run/react";
import Blog from "./CardBlog";
import { useEffect, useRef, useState } from "react";
import ButtonLinkWebsite from "~/components/Button/ButtonLinkWebsite";
import Mayorque from "~/components/Icons/MayorQue";

export default function Blogs({ posts }) {
  const refBlogs = useRef(null);
  const [isHidden, setIsHidden] = useState("hidden");
  let delayLink = 0.0;
  let delayPlus = 0.25;

  function showBlogs(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsHidden("");
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(showBlogs, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    observer.observe(refBlogs.current);

    const divRect = refBlogs.current.getBoundingClientRect();

    if (divRect.top < 0) {
      setIsHidden("");
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-10 lg:py-20 overflow-hidden flex flex-col justify-center items-center container px-4 mx-auto">
      <div className="relative">
        <div className="mb-15 text-center">
          <span
            ref={refBlogs}
            className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-pink-500 bg-orange-50 rounded-full"
          >
            NUESTRO BLOG
          </span>
          <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
            <span>Algunos </span>
            <span className="font-serif italic">Artículos</span>
          </h2>
        </div>

        <div
          className={`grid lg:grid-cols-2 items-center lg:grid-rows-3 lg:max-w-none md:max-w-2xl max-w-lg gap-7 mb-16 justify-center ${isHidden}`}
        >
          {posts.map((post, i) => (
            <Blog
              key={i}
              titulo={post.title}
              anchor={post.to}
              image={post.image}
              fecha={post.createdAt}
              className={i == 0 ? "row-span-2" : ""}
              isMain={i === 0}
              delay={(delayLink += delayPlus)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <ButtonLinkWebsite
            href="/blog"
            color="black"
            icon={<Mayorque />}
            typeHover="pinkBar"
            rounded
          >
            Mira más aquí
          </ButtonLinkWebsite>
        </div>
      </div>
    </section>
  );
}
