import nestor from "~/assets/imgs/equipo/nestor.webp";
import fatima from "~/assets/imgs/equipo/fatima.webp";
import octavio from "~/assets/imgs/equipo/octavio.webp";
import jaime from "~/assets/imgs/equipo/jaime.webp";
import norberto from "~/assets/imgs/equipo/norberto.webp";
import team from "~/assets/imgs/equipo/bg-section-team.webp";
import codigores from "~/assets/imgs/equipo/bg-codigo.webp";
import codigoresfatima from "~/assets/imgs/equipo/bg-codigo-fatima.webp";
import codigoresnestor from "~/assets/imgs/equipo/bg-codigo-nestor.webp";
import codigoresoctavio from "~/assets/imgs/equipo/bg-codigo-octavio.webp";
import codigoresnorberto from "~/assets/imgs/equipo/bg-codigo-norberto.webp";
export default function CardsEquipo() {
  const shadowImg = {
    boxShadow: "5px 5px 20px rgba(0,0,0,0.1)",
  };
  return (
    <section className="relative max-w-7xl mx-auto px-4 pb-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={team}
          width={1440}
          height={394}
          alt=""
        />
        <div
          className="absolute inset-0 bg-gray-900 opacity-75"
          aria-hidden="true"
        ></div>
      </div>
      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-20 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl text-white tracking-tight mx-4 md:text-7xl font-bold">
              <span
                className="font-heading"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Conoce nuestro{" "}
              </span>
              <span
                className="font-serif italic"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                equipo
              </span>
            </h1>
            <p
              className="text-xl text-gray-300 pt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Permitimos a los desarrolladores crear cosas increibles
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap  gap-8 mt-10 relative items-center pb-12">
        <div className="grid flex-auto relative md:min-w-[300px]">
          {/* Section content */}
          <div className="md:max-w-none items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="w-full " data-aos-id-cards>
              {/* Column 1 */}
              <div style={shadowImg} className="mx-4 lg:mx-0">
                {/* Item */}
                <div
                  className="text-center"
                  data-aos-anchor="[data-aos-id-cards]"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <img
                    className="w-full h-30 object-cover"
                    src={codigoresoctavio}
                    width={500}
                    height={200}
                    alt="Fondo"
                  />
                  <div className="bg-white pb-6">
                    <div className="relative inline-flex -mt-15 mb-5">
                      <img
                        className="inline-flex rounded-full"
                        src={octavio}
                        width={200}
                        height={200}
                        alt="Octavio Paz"
                      />
                    </div>
                    <div className="mb-5">
                      <h4 className="font-heading font-bold inline-block text-3xl">
                        Octavio Paz
                      </h4>
                      <div className="text-lg font-medium text-gray-500">
                        JS FULLSTACK DEVELOPER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-auto   relative md:min-w-[300px]">
          {/* Section content */}
          <div className=" md:max-w-none md:items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="w-full " data-aos-id-cards>
              {/* Column 1 */}
              <div style={shadowImg} className="mx-4 lg:mx-0">
                {/* Item */}
                <div
                  className="text-center"
                  data-aos-anchor="[data-aos-id-cards]"
                  data-aos="fade-down"
                  data-aos-delay="800"
                >
                  <img
                    className="w-full h-30 object-cover"
                    src={codigoresnestor}
                    width={500}
                    height={200}
                    alt="Fondo"
                  />
                  <div className="bg-white pb-6">
                    <div className="relative inline-flex -mt-15 mb-5">
                      <img
                        className="inline-flex rounded-full"
                        src={nestor}
                        width={200}
                        height={200}
                        alt="Nestor"
                      />
                    </div>
                    <div className="mb-5">
                      <h4 className="font-heading font-bold inline-block text-3xl">
                        Néstor
                      </h4>
                      <div className="text-lg font-medium text-gray-500">
                        FRONTEND DEVELOPER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-auto   relative md:min-w-[300px]">
          {/* Section content */}
          <div className="flex flex-wrap md:max-w-none items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="w-full " data-aos-id-cards>
              {/* Column 1 */}
              <div style={shadowImg} className="mx-4 lg:mx-0">
                {/* Item */}
                <div
                  className="text-center"
                  data-aos-anchor="[data-aos-id-cards]"
                  data-aos="fade-down"
                  data-aos-delay="1200"
                >
                  <img
                    className="w-full h-30 object-cover "
                    src={codigoresnorberto}
                    width={500}
                    height={200}
                    alt="Fondo"
                  />
                  <div className="bg-white pb-6">
                    <div className="relative inline-flex -mt-15 mb-5">
                      <img
                        className="inline-flex rounded-full"
                        src={norberto}
                        width={200}
                        height={200}
                        alt="Norberto"
                      />
                    </div>
                    <div className="mb-5">
                      <h4 className="font-heading font-bold inline-block text-3xl">
                        Norberto
                      </h4>
                      <div className="text-lg font-medium text-gray-500">
                        AGILE JS DEVELOPER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-auto  relative md:min-w-[300px]">
          {/* Section content */}
          <div className="flex flex-wrap md:max-w-none items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="w-full " data-aos-id-cards>
              {/* Column 1 */}
              <div style={shadowImg} className="mx-4 lg:mx-0">
                {/* Item */}
                <div
                  className="text-center"
                  data-aos-anchor="[data-aos-id-cards]"
                  data-aos="fade-down"
                  data-aos-delay="1600"
                >
                  <img
                    className="w-full h-30 object-cover"
                    src={codigoresfatima}
                    width={500}
                    height={200}
                    alt="Fondo"
                  />
                  <div className="bg-white pb-6">
                    <div className="relative inline-flex -mt-15 mb-5">
                      <img
                        className="inline-flex rounded-full"
                        src={fatima}
                        width={200}
                        height={200}
                        alt="Fatima"
                      />
                    </div>
                    <div className="mb-5">
                      <h4 className="font-heading font-bold inline-block text-3xl">
                        Fatima
                      </h4>
                      <div className="text-lg font-medium text-gray-500">
                        FRONTEND DEVELOPER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-auto  relative md:min-w-[300px]">
          {/* Section content */}
          <div className="flex flex-wrap md:max-w-none items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="w-full " data-aos-id-cards>
              {/* Column 1 */}
              <div style={shadowImg} className="mx-4 lg:mx-0">
                {/* Item */}
                <div
                  className="text-center"
                  data-aos-anchor="[data-aos-id-cards]"
                  data-aos="fade-down"
                  data-aos-delay="2000"
                >
                  <img
                    className="w-full h-30 object-cover"
                    src={codigores}
                    width={500}
                    height={200}
                    alt="Fondo"
                  />
                  <div className="bg-white pb-6">
                    <div className="relative inline-flex -mt-15 mb-5">
                      <img
                        className="inline-flex rounded-full"
                        src={jaime}
                        width={200}
                        height={200}
                        alt="Jaime"
                      />
                    </div>
                    <div className="mb-5">
                      <h4 className="font-heading font-bold inline-block text-3xl">
                        Jaime Cervantes
                      </h4>
                      <div className="text-lg font-medium text-gray-500">
                        AGILE COACH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
