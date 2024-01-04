import colaboraAprende from "../../../assets/imgs//equipo/Unsplash-colaborayaprende.webp";
import creaAsap from "../../../assets/imgs/equipo/Unsplash-creaASAP.webp";
import retroalimenta from "../../../assets/imgs/equipo/Unsplash-retroalimenta.webp";
import adaptaMejora from "../../../assets/imgs//equipo/Unsplash-adapta.webp";
import { dataAgileMethod } from "../data/dataAgileMethod";
function Container(props) {
  return (
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
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
              />
            </div>
            <div className="relative pt-5">
              <h2 className="mb-4 text-2xl lg:text-3xl font-heading">
                {props.titlea}{" "}
                <span className="font-serif italic text-2xl lg:text-3xl">
                  {props.titleb}
                </span>
              </h2>
              <h4 className="mb-4 text-base sm:text-justify">
                {props.description}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function ColaboraAprende() {
  return (
    <div data-aos="fade-right">
      <Container
        src={colaboraAprende}
        alt={dataAgileMethod[0].alt}
        width={dataAgileMethod[0].width}
        height={dataAgileMethod[0].height}
        titlea={dataAgileMethod[0].titlea}
        titleb={dataAgileMethod[0].titleb}
        description={dataAgileMethod[0].description}
      />
      <Container
        src={creaAsap}
        alt={dataAgileMethod[1].alt}
        width={dataAgileMethod[1].width}
        height={dataAgileMethod[1].height}
        titlea={dataAgileMethod[1].titlea}
        titleb={dataAgileMethod[1].titleb}
        description={dataAgileMethod[1].description}
      />
      <Container
        src={retroalimenta}
        alt={dataAgileMethod[2].alt}
        width={dataAgileMethod[2].width}
        height={dataAgileMethod[2].height}
        titlea={dataAgileMethod[2].titlea}
        description={dataAgileMethod[2].description}
      />
      <Container
        src={adaptaMejora}
        alt={dataAgileMethod[3].alt}
        width={dataAgileMethod[3].width}
        height={dataAgileMethod[3].height}
        titlea={dataAgileMethod[3].titlea}
        titleb={dataAgileMethod[3].titleb}
        description={dataAgileMethod[3].description}
      />
    </div>
  );
}
