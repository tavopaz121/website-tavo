import { Link } from "@remix-run/react";
import BgIllustration from "~/components/BgIlustration/BgIlustration";

export default function MentoriasHero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <BgIllustration />
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-16">
            <h1
              className="mb-4 lg:text-7xl md:text-6xl text-4xl text-white "
              data-aos="fade-up"
            >
              Mentorías One to One personalizadas
            </h1>
            <p
              className="text-xl text-gray-100 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ama y cuida tu recurso máximo, no renovable, tu tiempo. Crea
              proyectos reales, no pierdas tu tiempo. Devs de calidad para crear
              productos de calidad.
            </p>
            <div className="flex justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  className="btn rounded-sm text-white bg-gradient-pink hover:scale-110 lg:w-full lg:mb-4 w-auto mb-0"
                  to="./registro"
                >
                  Iniciar
                </Link>
              </div>
              {/* <div data-aos="fade-up" data-aos-delay="600">
                  <Link
                    className="btn text-white bg-gray-700 hover:bg-gray-800 lg:w-full w-auto ml-4"
                    to="#principios"
                  >
                    Información
                  </Link>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
