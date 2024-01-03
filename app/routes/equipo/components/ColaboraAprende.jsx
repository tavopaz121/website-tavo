import colaboraAprende from "../../../assets/imgs//equipo/Unsplash-colaborayaprende.webp";
export default function ColaboraAprende({
  image = {
    src: colaboraAprende,
    alt: "Colabora y aprende",
    width: "500",
    height: "350",
  },
  titlea = "Colabora y ",
  titleb = "aprende",
  description = "En esta fase, trabajamos juntos como equipo, escuchamos tus ideas y necesidades, definimos objetivos en colaboración y mantenemos una comunicación abierta y continua, sin importar tu nivel de experiencia en tecnología.",
}) {
  return (
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
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </div>
              <div className="relative pt-5">
                <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                  {titlea}{" "}
                  <span className="font-serif italic text-2xl lg:text-3xl">
                    {titleb}
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
  );
}
