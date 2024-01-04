import creaAsap from "../../../assets/imgs/equipo/Unsplash-creaASAP.webp";
export default function CreaAsap(){
    return(
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
    )
}