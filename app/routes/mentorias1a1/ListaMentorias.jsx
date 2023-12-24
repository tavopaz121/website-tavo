import pictureagilefed from "~/assets/imgs/clasesonetoone/picture-js-front.webp";
import picturenjsd from "~/assets/imgs/clasesonetoone/picture-js-back-code.webp";
import pictureagile from "~/assets/imgs/clasesonetoone/picture-agile-devops.webp";
import picturehtml5 from "~/assets/imgs/clasesonetoone/picture-html5-code.webp";
import picturecss3 from "~/assets/imgs/clasesonetoone/picture-css-code.webp";
import picturejs from "~/assets/imgs/clasesonetoone/picture-javascript-code.webp"
import { Link } from "@remix-run/react";

import AOS from "aos";
import aosStyles from "aos/dist/aos.css";
import { useEffect } from "react";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

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
        {/* Cards a */}
        <div
          className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Agile Frontend Developer
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
                      src={pictureagilefed}
                      width={210}
                      height={200}
                      alt="JavaScript Frontend"
                    />
                  </div>
                  <Link
                    className="btn text-white bg-gradient-pink hover:scale-110 lg:w-full w-auto mx-auto"
                    to="./registro"
                  >
                    Obtener
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards b */}
        <div
          className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Agile Node.js Developer
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={picturenjsd}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <Link
                    className="btn text-white bg-gradient-pink hover:scale-110 lg:w-full w-auto mx-auto"
                    to="./registro"
                  >
                    Obtener
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards c */}
        <div
          className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <header className="px-5 py-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Agile
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={pictureagile}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <Link
                    className="btn text-white bg-gradient-pink hover:scale-110 lg:w-full w-auto mx-auto"
                    to="./registro"
                  >
                    Obtener
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards d */}
        <div
          className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              HTML 5
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={picturehtml5}
                        width={105}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <Link
                    className="btn text-white bg-gradient-pink hover:scale-110 lg:w-full w-auto mx-auto"
                    to="./registro"
                  >
                    Obtener
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards e */}
        <div
          className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              CSS 3
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap ">
              {/* Unique Visitors */}
              <div className="flex items-center py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={picturecss3}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <Link
                    className="btn text-white bg-gradient-pink hover:scale-110 lg:w-full w-auto mx-auto"
                    to="./registro"
                  >
                    Obtener
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards f */}
        <div
          className="flex flex-col items-center col-span-full xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              JavaScript
            </h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap items-center">
              {/* Unique Visitors */}
              <div className="flex py-2">
                <div className="text-center">
                  <div>
                    <div className="pb-5">
                      <img
                        className="mx-auto w-full"
                        src={picturejs}
                        width={150}
                        height={200}
                        alt="JavaScript Frontend"
                      />
                    </div>
                  </div>
                  <Link
                    className="btn text-white bg-gradient-pink hover:scale-110 lg:w-full w-auto mx-auto"
                    to="./registro"
                  >
                    Obtener
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
