import AOS from "aos";
import aosStyles from "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Lenguajes from "./components/Lenguajes";
import MetodoAgil from "./components/MetodoAgil";
import proyectosStyles from "./styles.css";
import Proyectos from "./components/Proyectos";
import Principios from "./components/Principios";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

export const meta = metaFn;
export const loader = loaderSeoFn("proyectos");

export function links() {
  return [
    { rel: "stylesheet", href: aosStyles, content: "text/css" },
    { rel: "stylesheet", href: proyectosStyles, content: "text/css" },
  ];
}

export default function ProyectosRoute() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidde bg-slate-900 pb-48">
      <Hero />
      <Lenguajes />
      <MetodoAgil />
      <Principios />
      <Proyectos />
    </div>
  );
}
