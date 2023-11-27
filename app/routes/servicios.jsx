import heroImg from "~/assets/imgs/services/3D_Animation_pink3.webp";
import CardService from "~/components/CardServices/CardService";
import { services } from "~/data/services.js";
import { tools } from "~/data/tools.js";

export default function Productos() {
  return (
    <>
      <section className="max-md:h-full max-md:mb-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 max-lg:gap-12 lg:grid-cols-2">
            <div>
              <h1
                className="motion-safe:animate-fadeInDown text-4xl font-bold text-black sm:text-6xl lg:text-7xl"
                style={{
                  animationDelay: "1.5s",
                  animationFillMode: "both",
                }}
              >
                Desarrollo Web simplificado,
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[22px] border-[#fb5975]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    para tu <span className="font-serif italic">éxito</span>.
                  </h1>
                </div>
              </h1>

              <p
                className="mt-8 text-base text-gray-500 sm:text-xl motion-safe:animate-fadeIn"
                style={{
                  animationDelay: "2s",
                  animationFillMode: "both",
                }}
              >
                ¡Bienvenido a la puerta de entrada al éxito en línea! En
                <strong> PensemosWeb</strong>, estamos dedicados a ofrecerte
                soluciones innovadoras y de vanguardia para que tu presencia en
                la web destaque y alcance nuevos niveles de éxito.
              </p>

              <div
                className="mt-10 sm:flex sm:items-center sm:space-x-8 motion-safe:animate-fadeIn"
                style={{
                  animationDelay: "2s",
                  animationFillMode: "both",
                }}
              >
                <a
                  className="relative max-sm:w-full w-1/2 group inline-block py-2.5 px-6 text-white font-semibold bg-pink-700 rounded overflow-hidden"
                  href="/"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                  <div className="relative flex items-center justify-center">
                    <span className="mr-4">Ver servivios</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                className="w-full object-cover relative z-auto motion-safe:animate-fadeInUp"
                src={heroImg}
                alt=""
                style={{
                  animationDelay: "1s",
                  animationFillMode: "both",
                }}
              />
              <div
                className="bg-[#fb5975] absolute top-[-10rem] max-lg:hidden max-md:hidden left-[30%] h-[640px] w-[250px] -z-10 motion-safe:animate-fadeInUp"
                style={{
                  animationDelay: "0.5s",
                  animationFillMode: "both",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 bg-white sm:py-5 lg:py-8 `}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl motion-safe:animate-fadeIn font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Nuestras <span className="font-serif italic">Soluciones</span>
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Explora nuestras soluciones y elige la que mejor se adapte a tus
              necesidades
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
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
                  <a
                    className="relative group inline-block py-2.5 px-6 mt-10 text-white font-semibold bg-pink-700 rounded overflow-hidden w-1/2 max-md:w-full"
                    href="/contacto"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                    <div className="relative flex items-center justify-center">
                      <span className="mr-4">Cotiza tu página web</span>
                    </div>
                  </a>
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
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
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
                    <img src={item.img} alt="" className="w-12" />

                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
