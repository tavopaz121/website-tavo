import colaboraAprende from "../../assets/imgs/equipo/Unsplash-colaborayaprende.webp";
import creaAsap from "../../assets/imgs/equipo/Unsplash-creaASAP.webp";
import retroalimenta from "../../assets/imgs/equipo/Unsplash-retroalimenta.webp";
import adaptaMejora from "../../assets/imgs/equipo/Unsplash-adapta.webp";
export default function MetodoAgil(){
    return(
        <section className="max-w-7xl lg:mx-auto px-4">
        <div data-aos="fade-right">
          <div className="pb-4">
            <div className="relative">
              {/* Gray box */}
              <div className="absolute inset-0 -z-10 rounded-lg border border-pink-500" />
              {/* Content */}
              <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                {/* Testimonial */}
                <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                  <div className="shrink-0 relative ">
                    <img
                      className="rounded-lg sm:mx-auto"
                      src={colaboraAprende}
                      width={500}
                      height={350}
                      alt="Colabora y aprende"
                    />
                  </div>
                  <div className="relative pt-5">
                    <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                      Colabora y{" "}
                      <span className="font-serif italic text-2xl lg:text-3xl">
                        aprende
                      </span>
                    </h2>
                    <h4 className="mb-4 text-base sm:text-justify">
                      En esta fase, trabajamos juntos como equipo, escuchamos
                      tus ideas y necesidades, definimos objetivos en
                      colaboración y mantenemos una comunicación abierta y
                      continua, sin importar tu nivel de experiencia en
                      tecnología.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-7xl mx-4 lg:mx-auto"
          data-aos="fade-left"
        >
          <div className="pb-4">
            <div className="relative">
              {/* Gray box */}
              <div className="absolute inset-0 -z-10 rounded-lg border border-pink-500" />
              {/* Content */}
              <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                {/* Testimonial */}
                <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                  <div className="relative pt-5">
                    <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                      Crea{" "}
                      <span className="font-serif italic text-2xl lg:text-3xl">
                        ASAP
                      </span>
                    </h2>
                    <h4 className="mb-4 text-base sm:text-justify">
                      Una vez entendida tu visión, avanzamos rápidamente en el
                      desarrollo web sin demora. Priorizamos resultados en
                      iteraciones ágiles, acercándote gradualmente a tu producto
                      final para que veas el progreso constantemente.
                    </h4>
                  </div>
                  <div className="shrink-0 relative ">
                    <img
                      className="rounded-lg sm:mx-auto"
                      src={creaAsap}
                      width={500}
                      height={350}
                      alt="Colabora y aprende"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-7xl mx-4 lg:mx-auto"
          data-aos="fade-right"
        >
          <div className="pb-4">
            <div className="relative">
              {/* Gray box */}
              <div className="absolute inset-0 rotate -z-10 rounded-lg border border-pink-500" />
              {/* Content */}
              <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                {/* Testimonial */}
                <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                  <div className="shrink-0 relative ">
                    <img
                      className="rounded-lg sm:mx-auto"
                      src={retroalimenta}
                      width={500}
                      height={350}
                      alt="Colabora y aprende"
                    />
                  </div>
                  <div className="relative pt-5">
                    <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                      <span className="font-serif italic text-2xl lg:text-3xl">
                        Retroalimenta
                      </span>
                    </h2>
                    <h4 className="mb-4 text-base sm:text-justify">
                      En esta etapa, tu opinión y la de tus usuarios son
                      cruciales. Probamos lo construido, recopilamos tus
                      comentarios y ajustamos nuestro enfoque. La
                      retroalimentación constante garantiza que el producto
                      final cumpla con tus necesidades y expectativas.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-7xl mx-4 lg:mx-auto mb-12"
          data-aos="fade-left"
        >
          <div className="pb-4">
            <div className="relative">
              {/* Gray box */}
              <div className="absolute inset-0 rotate -z-10 rounded-lg border border-pink-500" />
              {/* Content */}
              <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                {/* Testimonial */}
                <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                  <div className="relative pt-5">
                    <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                      Adapta /{" "}
                      <span className="font-serif italic text-2xl lg:text-3xl">
                        Mejora
                      </span>
                    </h2>
                    <h4 className="mb-4 text-base sm:text-justify">
                      "Nos adaptamos al cambio constante en el mundo digital,
                      mejorando continuamente nuestros procesos. Te entregamos
                      un producto excepcional y te capacitamos para mantenerlo
                      relevante en un mercado en evolución."
                    </h4>
                  </div>
                  <div className="shrink-0 relative ">
                    <img
                      className="rounded-lg sm:mx-auto"
                      src={adaptaMejora}
                      width={500}
                      height={350}
                      alt="Colabora y aprende"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}