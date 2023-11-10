import CardInfo from "~/components/CardInfo/CardInfo";

import definicionImg from "~/assets/vectors/Frame 55.webp";
import disenioImg from "../assets/vectors/Frame 51-p-500.webp";
import desarrolloImg from "../assets/vectors/Frame 10.webp";
import lanzamientoImg from "../assets/vectors/Frame 18-p-500.webp";
import startElement from "../assets/imgs/features/star-element-right.png";
import heroImg from "../assets/imgs/hero-img.webp";
import CardService from "~/components/CardServices/CardService";
import { services } from "~/data/services.js";
import { tools } from "~/data/tools.js";

export default function productos() {
  return (
    <>
      <section className="mb-5 grid h-screen max-md:h-full">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Desarrollo Web simplificado,
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[22px] border-[#fb5975]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    para tu éxito.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-gray-500 sm:text-xl">
                ¡Bienvenido a la puerta de entrada al éxito en línea! En
                <strong> PensemosWeb</strong>, estamos dedicados a ofrecerte
                soluciones innovadoras y de vanguardia para que tu presencia en
                la web destaque y alcance nuevos niveles de éxito.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="/"
                  title=""
                  className="inline-flex items-center justify-center px-15 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#fa788e] hover:bg-[#fb5975] focus:bg-[#fb5975] max-md:w-full"
                  role="button"
                >
                  Ver Servicios
                </a>
              </div>
            </div>

            <div>
              <img className="w-full" src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-5 pb-5 lg:pb-5 overflow-hidden">
        <img
          className="absolute top-[-4rem] right-0 max-md:opacity-40"
          src={startElement}
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-md lg:max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 mb-10 items-center">
              <div className="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="w-full">
                  <h1 className="font-heading text-4xl font-bold text-gray-900">
                    <span>
                      Cuenta tu historia con una experiencia digital atractiva
                      para que tu negocio conecte con las personas.
                    </span>
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-1/4 xl:w-1/2 px-4">
                <div className="max-w-lg lg:ml-auto">
                  <p className="text-lg text-gray-500">
                    Imagina un enfoque que maximice la colaboración, acelere la
                    entrega de resultados, fomente la mejora constante y se
                    adapte a los cambios en el camino.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <CardInfo
                img={definicionImg}
                title="Colabora y Aprende"
                description="En esta fase, trabajamos juntos como equipo, escuchamos tus ideas y necesidades, definimos objetivos en colaboración y mantenemos una comunicación abierta y continua, sin importar tu nivel de experiencia en tecnología."
              />
              <CardInfo
                img={disenioImg}
                title=" Crea ASAP"
                description="Una vez entendida tu visión, avanzamos rápidamente en el desarrollo web sin demora. Priorizamos resultados en iteraciones ágiles, acercándote gradualmente a tu producto final para que veas el progreso constantemente."
              />
              <CardInfo
                img={desarrolloImg}
                title="Retroalimenta"
                description="En esta etapa, tu opinión y la de tus usuarios son cruciales. Probamos lo construido, recopilamos tus comentarios y ajustamos nuestro enfoque. La retroalimentación constante garantiza que el producto final cumpla con tus necesidades y expectativas."
              />
              <CardInfo
                img={lanzamientoImg}
                title="Adapta/Mejora"
                description="Nos adaptamos al cambio constante en el mundo digital, mejorando continuamente nuestros procesos. Te entregamos un producto excepcional y te capacitamos para mantenerlo relevante en un mercado en evolución."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Nuestras Soluciones
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

      <section className="py-8">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              ¿Qué no debe faltar en tu sitio web?
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
