import { items as principles } from "~/data/principles.js";

import AOS from "aos";
import aosStyles from "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "~/components/pages/proyectos/Hero";
import Lenguajes from "~/components/pages/proyectos/Lenguajes";
import MetodoAgil from "~/components/pages/proyectos/MetodoAgil";
import pulseAnimationCss from "~/css/pulseAnimation.css";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

export const meta = metaFn;
export const loader = loaderSeoFn("proyectos");

export function links() {
  return [
    { rel: "stylesheet", href: aosStyles, content: "text/css" },
    { rel: "stylesheet", href: pulseAnimationCss, content: "text/css" },
  ];
}

export default function Mentorias() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidde bg-slate-900">
      <Hero />
      <Lenguajes />
      <MetodoAgil />
    </div>
  );
}
