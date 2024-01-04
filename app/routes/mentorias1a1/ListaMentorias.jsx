import ButtonLink from "../../components/Button/ButtonLink";

import AOS from "aos";
import aosStyles from "aos/dist/aos.css";
import { useEffect } from "react";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";
import { mentorias } from "./data/principles";

export const meta = metaFn;
export const loader = loaderSeoFn("mentorias1a1");

export function links() {
  return [{ rel: "stylesheet", href: aosStyles, content: "text/css" }];
}

export default function ListaMentorias() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
        <h2
          className="lg:text-6xl md:text-5xl text-4xl font-bold text-white"
          data-aos="fade-up"
        >
          Inscribete a cualquiera de nuestras mentorias
        </h2>
      </div>
      <div className="max-w-6xl grid grid-cols-12 gap-6 px-4 mx-auto pb-12">
        {mentorias.map((mentoria) => {
          return (
            <CardMentoria
              key={mentoria.title}
              title={mentoria.title}
              srcImg={mentoria.srcImg}
              altImg={mentoria.title}
            />
          );
        })}
      </div>
    </section>
  );
}

function CardMentoria({ title, srcImg, altImg }) {
  return (
    <div
      className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h2>
      </header>
      <div className="px-5 py-1">
        <div className="flex flex-wrap ">
          {/* Unique Visitors */}
          <div className="flex items-center py-2">
            <div className="text-center">
              <div className="pb-5">
                <img
                  className="mx-auto w-full"
                  src={srcImg}
                  width={210}
                  height={200}
                  alt={altImg}
                />
              </div>

              <ButtonLink href="./registro" color="pink" typeHover="scale">
                Obtener
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
