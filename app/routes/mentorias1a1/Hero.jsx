import BgIllustration from "~/components/BgIlustration/BgIlustration";
import ButtonLink from "~/components/Button/ButtonLink";

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
              ⏳🌟 Ama y cuida tu recurso máximo, no renovable: tu tiempo. Crea
              proyectos reales; la práctica hace al maestro, evita agotarte con
              información innecesaria. 👩‍💻👨‍💻 Desarrolladores de calidad para
              crear productos de calidad.
            </p>
            <div className="flex justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <ButtonLink href="./registro" color="pink" typeHover="scale">
                  Registrate
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
