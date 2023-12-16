import metodoAgile from "~/assets/imgs/clasesonetoone/feedback_loo_transparent_noTitle.webp";
import dontLoseFocus from "~/assets/svgs/dontLoseFocus.svg";
import sectionScrum from "~/assets/imgs/clasesonetoone/section_scrum.webp";
import { items as principles } from "~/data/principles.js";
import { Link, Outlet } from "@remix-run/react";
import ListaMentorias from "~/components/pages/mentorias1a1/ListaMentorias";

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

export default function MentoriasRoute() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="bg-gray-900 overflow-hidden">
      <Outlet />
      <section id="principios">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-10 pb-12 md:pt-16 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2
                className="lg:text-6xl md:text-5xl text-white text-4xl font-bold leading-tight mb-4 font-heading"
                data-aos="fade-up"
              >
                Principios ágiles
              </h2>
              <p
                className="text-xl text-gray-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                La aplicación de principios ágiles en el proceso de aprendizaje
                en programación conlleva a una evolución continua, facilitando
                la adaptación progresiva a cambios, maximizando la eficiencia y
                calidad del estudiante.
              </p>
            </div>
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="relative flex flex-col items-center"
                  data-aos="fade-up"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    width={64}
                    height={64}
                    className=""
                  />
                  <div
                    aria-hidden="true"
                    className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                    style={{
                      width: "calc(100% - 32px)",
                      left: "calc(50% + 48px)",
                      top: "32px",
                    }}
                    data-aos="fade-in"
                    data-aos-delay="200"
                  ></div>
                  <h4 className="h4 mb-2 text-white text-2xl text-center">
                    <span className="text-gray-300">1</span>. {item.title}
                  </h4>
                  <p className="text-lg text-gray-300 text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Titulo ágile */}
      <section>
        <div className="grid place-items-center ">
          <h2
            className="lg:text-6xl md:text-5xl text-4xl font-bold text-white text-center"
            data-aos="fade-up"
          >
            Método de aprendizaje
          </h2>
          <figure className="px-4 mb-10">
            <img src={metodoAgile} alt="Método ágile" data-aos="fade-up" />
          </figure>
        </div>
      </section>
      {/* Enseñanza ágile */}
      <article className="max-w-6xl relative mx-auto px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-800 p-8" data-aos="fade-up">
          <h4 className="text-lg text-white">Enseñanza ágil</h4>
          <p className="text-lg text-gray-400 mb-5">
            El Método de enseñanza ágil se aplica en todos los niveles y
            aspectos de la capacitación.
          </p>
          <h4 className="text-lg text-white">Capacitación individual</h4>
          <p className="text-lg text-gray-400 mb-5">
            Se capacita individualmente porque cada estudiante es diferente, y
            brinda la oportunidad de un aprendizaje más eficaz, adaptado y
            enfocado en las necesidades particulares de cada persona.
          </p>
          <h4 className="text-lg text-white">Capacitación en equipo</h4>
          <p className="text-lg text-gray-400 ">
            Fortalece la dinámica grupal y el rendimiento colectivo, generando
            un impacto positivo en el funcionamiento general de una organización
            y también porque 1 + 1 = 3 o 5.
          </p>
          <Link
            className="btn-sm text-white bg-gradient-pink hover:scale-110 mt-6"
            to="/contacto"
          >
            <span className="text-sm">Mas información</span>
            <svg
              className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 5H0v2h6v4l6-5-6-5z" />
            </svg>
          </Link>
        </div>
        <figure className="w-full md:w-1/2 mt-5 mb-15">
          <img
            className="w-full h-full"
            src={dontLoseFocus}
            width={516}
            height={387}
            alt="Tabs 01"
            data-aos="fade-up"
          />
        </figure>
      </article>
      {/* Agilidad en todo momento */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
              <h2
                className="lg:text-6xl md:text-5xl text-4xl font-bold text-white"
                data-aos="fade-up"
              >
                Agilidad en todo momento
              </h2>
            </div>

            {/* Items */}
            <div className="grid gap-20" data-aos-id-target>
              {/* Item */}
              <div className="grid grid-cols-1 gap-y-12 lg:grid lg:grid-cols-12 lg:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-anchor="[data-aos-id-target]"
                >
                  <img
                    className="mx-auto lg:w-full"
                    src={sectionScrum}
                    width={540}
                    height={620}
                    alt="Features 02"
                  />
                </div>

                {/* Content */}
                <div className="lg:max-w-xl max-w-none w-full mx-auto md:col-span-8 lg:col-span-6">
                  <div className="mx-2 lg:mx-4 text-center lg:text-left">
                    <div
                      className="font-heading lg:text-3xl text-2xl text-pink-500 text-center lg:text-left"
                      data-aos="fade-left"
                      data-aos-anchor="[data-aos-id-target]"
                    >
                      Agilidad y prácticas ágiles
                    </div>
                    <div
                      className="mt-4"
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-anchor="[data-aos-id-target]"
                    >
                      {/* <h4 className="h4 mb-2"><span className="text-purple-600">.</span> For developers</h4> */}
                      <p className="text-lg text-gray-400">
                        Usarás Xtreme programming y Scrum para la creación de
                        proyectos reales de alta calidad.
                      </p>
                      <p className="text-lg text-gray-400 pt-2">
                        Se aplica prácticas ágiles de forma sencilla para
                        agilizar e interiorizar lo aprendido.
                      </p>
                    </div>
                    <ul className="flex flex-col items-start space-y-5 text-left text-gray-300 mt-9">
                      <li className="flex items-center mx-2 my-1">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Simple Design</span>
                      </li>
                      <li className="flex items-center mx-2 my-1">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Mob Programming</span>
                      </li>
                      <li className="flex items-center mx-2 my-1">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Pair Programming</span>
                      </li>
                      <li className="flex items-center mx-2 my-1">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>BDD</span>
                      </li>
                      <li className="flex items-center mx-2 my-1">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>TDD</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListaMentorias />
    </div>
  );
}
