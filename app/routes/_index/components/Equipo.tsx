import circle from "~/assets/imgs/cta/circle-bg.svg";
import equipo from "~/assets/imgs/equipo.webp";
import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";
import ButtonLink from "~/components/Button/ButtonLink";
import Mayorque from "~/components/Icons/MayorQue";

export default function Equipo() {
  const section = useRef(null);
  const [isHidden, setIsHidden] = useState("hidden");

  const options = { root: null, rootMargin: "0px", threshold: 0.8 };

  useEffect(() => {
    const observer = new IntersectionObserver(showEquipo, options);
    observer.observe(section.current);
  });

  const showEquipo = (
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
    <section className="py-20 md:py-24" ref={section}>
      <div className="container px-20 max-lg:px-0 mx-auto">
        <div
          className={`relative max-w-7xl mx-auto px-6 max-xl:px-0 py-16 max-xl:pt-0 rounded-4xl max-xl:rounded-none bg-gray-900 overflow-hidden flex flex-row-reverse max-xl:flex-col items-center motion-safe:animate-fadeInLeft ${isHidden}`}
          style={{
            animationDelay: `0s`,
            animationFillMode: "both",
          }}
        >
          <img
            decoding="async"
            loading="lazy"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full object-cover"
            src={circle}
            alt=""
          />
          <img
            decoding="async"
            loading="lazy"
            src={equipo}
            alt="Un equipo trabajando"
            className="absolute max-xl:static top-0 left-0 transform translate-x-0 h-full max-xl:h-auto max-xl:w-full object-cover motion-safe:animate-fadeInRight"
            style={{
              animationDelay: `0.4s`,
              animationFillMode: "both",
            }}
          />

          <div className="relative text-right max-xl:text-center w-[50%] max-xl:w-3/4 max-xl:mt-8 max-xl:flex flex-col items-center">
            <span
              className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 mb-6 motion-safe:animate-fadeInLeft"
              style={{
                animationDelay: `0.6s`,
                animationFillMode: "both",
              }}
            >
              ¿Listo para la colaboracion?
            </span>
            <h2
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 motion-safe:animate-fadeInLeft"
              style={{
                animationDelay: `1s`,
                animationFillMode: "both",
              }}
            >
              <span>Conoce a nuestro equipo de trabajo</span>
              <span className="font-serif italic"></span>
            </h2>
            <ButtonLink
              href="/equipo"
              icon={<Mayorque />}
              color="pink"
              typeHover="bottomBar"
              rounded
            >
              ¡Vamos!
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
