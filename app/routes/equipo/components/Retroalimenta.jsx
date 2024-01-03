import retroalimenta from "../../../assets/imgs/equipo/Unsplash-retroalimenta.webp";
export default function ColaboraAprende({
  image = {
    src: retroalimenta,
    alt: "Retroalimenta",
    width: "500",
    height: "350",
  },
  title = "Retroalimenta",
  description = "En esta etapa, tu opinión y la de tus usuarios son cruciales. Probamos lo construido, recopilamos tus comentarios y ajustamos nuestro enfoque. La retroalimentación constante garantiza que el producto final cumpla con tus necesidades y expectativas.",
}) {
    return(
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
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
                  </div>
                  <div className="relative pt-5">
                    <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                      <span className="font-serif italic text-2xl lg:text-3xl">
                        {title}
                      </span>
                    </h2>
                    <h4 className="mb-4 text-base sm:text-justify">
                      {description}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}