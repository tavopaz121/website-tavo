import AOS from "aos";
import aosStyles from "aos/dist/aos.css";
import { useEffect } from "react";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";
import HeroEquipo from "../equipo/HeroEquipo";
import MetodoAgil from "../equipo/MetodoAgil";
import CardsEquipo from "../equipo/CardsEquipo";
import feedbackLoop from "~/assets/imgs/inicio/feedback-loop.webp";
export const meta = metaFn;
export const loader = loaderSeoFn("equipo");

export function links() {
  return [{ rel: "stylesheet", href: aosStyles, content: "text/css" }];
}
export default function EquipoRoute() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });
  return (
    <div>
      <HeroEquipo />
      <div className="mt-20 mb-8 px-4" data-aos="fade-up">
        <h1 className="text-center text-5xl tracking-tight mt-10 mb-10 mx-4 md:text-7xl font-bold">
          <span className="font-heading">Nuestro </span>
          <span className="font-serif italic">Método ágil</span>
        </h1>
        <img
          decoding="async"
          loading="lazy"
          width="600"
          className="block rounded-3xl mx-auto"
          src={feedbackLoop}
          alt="Ciclo de retroalimentación y adaptaciones"
        />
      </div>
      <MetodoAgil />
      <CardsEquipo />
    </div>
  );
}
