import feedbackLoop from "app/assets/imgs/inicio/feedback-loop.webp";
import WorkMetodo from "../../HomePage/WorkNosotros";

import { useRef, useEffect, useState } from "react";

export default function Nosotros() {
  const [animations, setAnimations] = useState({ left: "", right: "" });
  const referenceTitle = useRef(null);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    const observer = new IntersectionObserver(showAnimations, options);
    observer.observe(referenceTitle.current);

    //This is useful when reloading page and/or when user scroll up to the target
    const scrollPosition = window.scrollY;
    if (
      referenceTitle &&
      referenceTitle.current &&
      scrollPosition > referenceTitle?.current?.offsetHeight
    ) {
      setAnimations({
        left: "motion-safe:animate-fadeInLeft motion-safe:opacity-100",
        right: "motion-safe:animate-fadeInRight motion-safe:opacity-100",
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [referenceTitle]);

  const showAnimations = (
    entris: IntersectionObserverEntry[],
    oberver: IntersectionObserver,
  ) => {
    entris.forEach((entry) => {
      if (entry.isIntersecting) {
        setAnimations({
          left: "motion-safe:animate-fadeInLeft motion-safe:opacity-100",
          right: "motion-safe:animate-fadeInRight motion-safe:opacity-100",
        });
      }
    });
  };

  return (
    <section className={`container mx-auto relative px-4 py-10 lg:py-20`}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-pink-500 bg-orange-50 rounded-full">
          NOSOTROS/EQUIPO
        </span>
        <h2
          ref={referenceTitle}
          className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8"
        >
          <span>Nosotros </span>/
          <span className="font-serif italic">Equipo</span>
        </h2>
      </div>
      <div className={`flex flex-wrap gap-5 justify-between`}>
        <div
          className={`xs:max-w-xs sm:max-w-lg lg:max-w-xl motion-safe:opacity-0 ${animations.left}`}
          style={{
            animationDelay: "0.5s",
            animationFillMode: "both",
          }}
        >
          <p className="font-heading text-2xl font-semibold text-gray-900 mb-4">
            ¡Potencia tu negocio con nuestros servicios de desarrollo Ágil! 🚀
          </p>

          <p className="font-heading">
            Ama y cuida tu recurso máximo, no renovable, tu tiempo.
          </p>

          <WorkMetodo />
        </div>

        <div
          className={`w-full lg:w-1/3 xl:w-1/2 flex items-center motion-safe:opacity-0 ${animations.right}`}
          style={{
            animationDelay: "0.5s",
            animationFillMode: "both",
          }}
        >
          <img
            decoding="async"
            loading="lazy"
            className="w-full object-cover rounded-3xl"
            src={feedbackLoop}
            alt="Ciclo de retroalimentación y adaptaciones"
            loading="lazy"
          />
        </div>
      </div>

      <div className="text-center mt-5">
        <a
          className="relative group inline-block py-4 px-6 text-white font-semibold rounded-full overflow-hidden border bg-gray-900 "
          href="/nosotros"
        >
          <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
          <div className="relative flex items-center justify-center">
            <span className="mr-4">Conocenos</span>
            <span>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
