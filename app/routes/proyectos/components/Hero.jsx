import Illustration from "~/assets/imgs/proyectos/glow-bottom.svg";
import ButtonLink from "~/components/Button/ButtonLink";

export default function Hero() {
  return (
    <section className="bg-black">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Illustration */}
        <div
          className="absolute inset-0 -z-0 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10 translate-y-30">
            <img
              src={Illustration}
              className="max-w-none hue-rotate-[374deg] brightness-60"
              width={2146}
              alt="Hero Illustration"
            />
          </div>
        </div>

        <div className="relative pt-32 pb-16 md:pt-52 md:pb-52">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="h1 text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-up"
              style={{
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
              }}
            >
              Proyectos
            </h1>
            <p
              className="text-2xl xl:4xl mb-8 font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-200/60"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              ¡Innovación con Agilidad en Cada Paso! 🚀 Nuestra agilidad no se
              limita a palabras. ¡Es una forma de vida!
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <ButtonLink
                  className="h-12 pw-btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out"
                  href="/contacto"
                >
                  Iniciar
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
