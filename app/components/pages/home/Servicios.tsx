import ListServicios from "~/components/HomePage/ListServicios";
import servicesImg from "~/assets/imgs/inicio/services.webp";

export default function SectionServicios() {
  return (
    <section data-testid="servicios" className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-pink-500 bg-orange-50 rounded-full">
            SERVICIOS
          </span>
          <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            <span>Nuestros </span>
            <span className="font-serif italic">servicios</span>
          </h2>
        </div>
        <div
          className="rounded-[50%] w-[600px] h-[600px] bg-cover bg-center bg-no-repeat mx-auto mb-8"
          style={{
            backgroundImage: `url(${servicesImg})`,
          }}
        ></div>
        <ListServicios />
      </div>
    </section>
  );
}
