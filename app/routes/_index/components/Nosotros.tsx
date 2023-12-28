import feedbackLoop from "~/assets/imgs/inicio/feedback-loop.webp";
import WorkMetodo from "./WorkNosotros";
import ButtonLinkWebsite from "~/components/Button/ButtonLinkWebsite";
import Mayorque from "~/components/Icons/MayorQue";

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
        left: "sm:motion-safe:animate-fadeInLeft sm:motion-safe:opacity-100",
        right: "sm:motion-safe:animate-fadeInRight sm:motion-safe:opacity-100",
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
          left: "sm:motion-safe:animate-fadeInLeft sm:motion-safe:opacity-100",
          right:
            "sm:motion-safe:animate-fadeInRight sm:motion-safe:opacity-100",
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
          className={`xs:max-w-xs sm:max-w-lg lg:max-w-xl sm:motion-safe:opacity-0 ${animations.left}`}
          style={{
            animationDelay: "0s",
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
          className={`w-full lg:w-1/3 xl:w-1/2 flex items-center sm:motion-safe:opacity-0 ${animations.right}`}
          style={{
            animationDelay: "0s",
            animationFillMode: "both",
          }}
        >
          <img
            decoding="async"
            loading="lazy"
            className="w-full object-cover rounded-3xl"
            src={feedbackLoop}
            alt="Ciclo de retroalimentación y adaptaciones"
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <ButtonLinkWebsite
          icon={<Mayorque />}
          href="/equipo"
          color="black"
          typeHover="pinkBar"
          rounded
        >
          Conócenos
        </ButtonLinkWebsite>
      </div>
    </section>
  );
}
