import heroImg from "~/assets/imgs/services/hero-img.webp";
import CardService from "~/components/CardServices/CardService";
import { services } from "~/data/services.js";
import { tools } from "~/data/tools.js";
import { Link } from "@remix-run/react";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

export const meta = metaFn;
export const loader = loaderSeoFn("servicios");

export default function Servicios() {
  return (
    <>
      <section className="max-md:h-full max-md:mb-4 pt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-20">
          <div className="grid items-center grid-cols-1 max-lg:gap-12 lg:grid-cols-2 gap-6">
            <div>
              <h1
                className="sm:motion-safe:animate-fadeInDown text-4xl font-bold text-black sm:text-5xl lg:text-7xl"
                style={{
                  animationDelay: "1.5s",
                  animationFillMode: "both",
                }}
              >
                ¡Desbloquea el{" "}
                <strong className="font-serif italic">Éxito Digital</strong>!
                <div className="relative">
                  <span
                    className="relative text-4xl font-bold text-black sm:text-4xl lg:text-4xl after:w-full after:h-3 after:bg-pink-500 after:absolute after:left-0 after:bottom-[-5px] after:-z-10"
                    style={{ content: " " }}
                  >
                    Desarrollo ágil simplificado
                  </span>
                </div>
              </h1>

              <p
                className="mt-8 text-base sm:text-xl sm:motion-safe:animate-fadeIn"
                style={{
                  animationDelay: "2s",
                  animationFillMode: "both",
                }}
              >
                ¿<strong className="font-bold">Sitios web</strong> obsoletos o
                poco funcionales? 🚫 ¿Tu presencia en línea no refleja la{" "}
                <strong className="font-bold">grandeza de tu empresa</strong>?
                🏢 ¿Te sientes frustrado porque tus visitantes no se{" "}
                <strong className="font-bold">convierten en clientes</strong>?
                😟 ¿Necesitas una herramienta accesible desde cualquier
                dispositivo con una{" "}
                <strong className="font-bold">web app</strong> 💻📱? ¿Quieres
                llevar tu negocio al bolsillo de tus clientes con una{" "}
                <strong className="font-bold">app móvil 📱</strong>?
              </p>
            </div>

            <div className="relative">
              <img
                decoding="async"
                loading="lazy"
                className="w-full object-cover relative z-auto sm:motion-safe:animate-fadeInUp"
                src={heroImg}
                alt=""
                style={{
                  animationDelay: "1s",
                  animationFillMode: "both",
                }}
              />
              <div
                className="bg-pink-500 absolute top-[-10rem] max-lg:hidden max-md:hidden left-[30%] h-[640px] w-[250px] -z-10 sm:motion-safe:animate-fadeInUp"
                style={{
                  animationDelay: "0.5s",
                  animationFillMode: "both",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 bg-white sm:py-5 lg:py-20 `}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:motion-safe:animate-fadeIn font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              ¿En qué te podemos{" "}
              <span className="font-serif italic">ayudar</span>?
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed ">
              🌟 Con métodos ágiles innovadores, aceleramos el desarrollo,
              asegurando resultados efectivos y adaptativos. 👨‍💻👩‍💻 Cada proyecto
              es un lienzo donde la creatividad y la eficiencia se fusionan
              gracias a nuestras prácticas ágiles. De esta forma te
              proporcionamos el mayor valor en el menor tiempo posible.
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-2">
            {services.map((service, index) => (
              <CardService
                key={index}
                title={service.name}
                description={service.description}
                list={service.benefices}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 2xl:py-24 2xl:bg-white">
        <div className="px-4 mx-auto overflow-hidden bg-gray-900 max-w-7xl sm:px-6 lg:px-8">
          <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Contrata tu paquete de desarrollo web{" "}
                </h2>
                <p className="mt-4 text-base text-gray-50">
                  Llega a las personas adecuadas, en el momento adecuado, atrae
                  a más clientes con una nueva página web.
                </p>

                <div className="flex flex-row items-center mt-4 space-x-4 lg:mt-8">
                  <Link
                    className="relative group inline-block py-2.5 px-6 mt-10 text-white font-semibold bg-black rounded overflow-hidden w-1/2 max-md:w-full"
                    to="/contacto"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                    <div className="relative flex items-center justify-center">
                      <span className="mr-4">Cotiza tu página web</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="relative px-12">
                <svg
                  className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-gray-800 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                <img
                  decoding="async"
                  loading="lazy"
                  className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              ¿Qué no debe faltar en tu{" "}
              <span className="font-serif italic">sitio web</span>?
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed ">
              Que para tu tranquilidad, lo incluimos en todos nuestros
              proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((item, index) => (
              <div
                className="overflow-hidden bg-white rounded shadow"
                key={index}
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      decoding="async"
                      loading="lazy"
                      src={item.img}
                      alt=""
                      className="w-12"
                    />

                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed  mt-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
