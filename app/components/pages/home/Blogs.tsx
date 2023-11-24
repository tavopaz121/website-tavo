import startCicle from "app/assets/imgs/cta/star-circle-right.svg";
import blueLeft from "app/assets/imgs/cta/blue-light-left.png";
import imageBlog from "app/assets/imgs/corazon-agilidad.webp";
import imageBlog2 from "app/assets/imgs/individuosEInteracciones.webp";
import imageBlog3 from "app/assets/imgs/Portada-IntroLEanStartup-.webp";

import Blog from "../../HomePage/CardBlog";
import { useEffect, useRef, useState } from "react";

const blogs = [
  {
    image: imageBlog,
    fecha: "Oct 02, 2019",
    contenido:
      "El manifiesto ágil, siempre he pensado que las cosas simples son las mejores.",
    anchor: "https://www.pensemosweb.com/el-corazon-agil-manifiesto/",
  },
  {
    image: imageBlog2,
    fecha: "Agt 18, 2019",
    contenido: "¿CÓMO SURGIÓ EL DESARROLLO ÁGIL? PRINCIPIOS FUNDAMENTALES",
    anchor:
      "https://www.pensemosweb.com/como-surgio-el-desarrollo-agil-principios-fundamentales/",
  },
  {
    image: imageBlog3,
    fecha: "Dic 29, 2018",
    contenido:
      "Introducción Lean Startup, utilización del conocimiento y creatividad de los individuos.",
    anchor: "https://www.pensemosweb.com/introduccion-lean-startup/",
  },
];

export default function Blogs() {
  const contentBlogs = useRef(null);
  const [isHidden, setIsHidden] = useState("hidden");
  let delay = 0.4;
  let plusDelay = 0.3;

  const options = { root: null, rootMargin: "0px", threshold: 0.5 };

  useEffect(() => {
    const observer = new IntersectionObserver(showBlogs, options);
    observer.observe(contentBlogs.current);
  });

  const showBlogs = (
    entris: IntersectionObserverEntry[],
    oberver: IntersectionObserver,
  ) => {
    entris.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsHidden("");
      }
    });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <img
        className="absolute top-0 right-0 xl:mt-10 -mr-24 lg:-mr-0"
        src={startCicle}
        alt=""
      />
      <img
        className="hidden sm:block absolute bottom-0 left-0 -mb-48 lg:mb-0"
        src={blueLeft}
        alt=""
      />
      <div className="relative container px-4 mx-auto" ref={contentBlogs}>
        <div className="max-w-2xl mx-auto mb-15 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-pink-500 bg-orange-50 rounded-full">
            NUESTRO BLOG
          </span>
          <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
            <span>Algunos </span>
            <span className="font-serif italic">Articulos</span>
          </h2>
        </div>

        <div className={`max-w-5xl mx-auto ${isHidden}`}>
          {blogs.map((blog, i) => (
            <Blog key={i} {...blog} delay={(delay += plusDelay)} />
          ))}
        </div>

        <div className="pt-12 border-t-2 border-gray-100 text-center">
          <a
            className="relative group inline-block py-4 px-7 font-semibold text-gray-900 hover:text-orange-50 rounded-full bg-orange-50 transition duration-300 overflow-hidden border-b-3 border-gray-500"
            href="https://www.pensemosweb.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <span className="relative">Mira más aquí</span>
          </a>
        </div>
      </div>
    </section>
  );
}
