import adaptaMejora from "../../../assets/imgs/equipo/Unsplash-adapta.webp";
export default function CreaAsap(){
    return(
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
    )
}