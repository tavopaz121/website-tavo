import Particles from "~/components/Particles/Particles";
import Highlighter, {
  HighlighterItem,
} from "~/components/Highlighter/Highlighter";
import healthyFoodWebApp from "~/assets/imgs/proyectos/healthy-food-web-app.webp";
import partyRentalsWebApp from "~/assets/imgs/proyectos/party-rentals-android-ios-app.webp";
import insumoEstructuralWebApp from "~/assets/imgs/proyectos/insumo-estructural-web-app.webp";
import partyRentalsWebsite from "~/assets/imgs/proyectos/party-rentals-website.webp";
import cakesDesignWebsiteDesktop from "~/assets/imgs/proyectos/cakes-design-desktop.webp";
import dasepResponsiveWebsite from "~/assets/imgs/proyectos/daseb-website-responsive.webp";
import cmsMunicipios from "~/assets/imgs/proyectos/sitioweb-noticias-blog-citas.webp";

export default function Proyectos() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-full h-full -mt-24 -ml-32">
        <Particles className="absolute inset-0" quantity={200} staticity={1} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-32">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2
              className="h2 font-bold text-4xl lg:text-6xl bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-down"
            >
              Proyectos ágiles
            </h2>
            <p
              className="text-lg text-slate-400"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              🌟 Con métodos ágiles innovadores, aceleramos el desarrollo,
              asegurando resultados efectivos y adaptativos. 👨‍💻👩‍💻 Cada proyecto
              es un lienzo donde la creatividad y la eficiencia se fusionan
              gracias a nuestras prácticas ágiles. De esta forma te
              proporcionamos el mayor valor en el menor tiempo posible.
            </p>
          </div>

          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] gap-6 group auto-rows-auto grid-flow-dense">
              {/* Box #1 */}
              <div
                className="col-span-full md:col-span-3 lg:col-span-4"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                <HighlighterItem className="!h-full">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex h-full flex-col justify-between">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="p-8">
                        <div>
                          <h3 className="inline-flex text-2xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            RLD sitio web responsive
                          </h3>
                          <p className="text-slate-400">
                            Rebecca, Lucas & David! Family Operated Menifee
                            based. Sitio web de un negocio familiar de renta de
                            muebles y artefactos para fiestas. 🎉🎈
                          </p>
                        </div>
                      </div>
                      {/* img */}
                      <div className="relative overflow-hidden z-30">
                        <img
                          className="block mx-auto"
                          src={partyRentalsWebsite}
                          alt="Party rentals sitio web"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>

              {/* Box #2 */}
              <div
                className="col-span-full md:col-span-3 lg:col-span-4"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <HighlighterItem className="!h-full">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex h-full flex-col justify-between">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="p-8">
                        <div>
                          <h3 className="inline-flex text-2xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            Daseb sitio web responsive
                          </h3>
                          <p className="text-slate-400">
                            En DASEB, nos dedicamos apasionadamente a ayudar a
                            las personas a superar las limitaciones físicas y a
                            recuperar su calidad de vida
                          </p>
                        </div>
                      </div>
                      {/* img */}
                      <div className="relative overflow-hidden z-30">
                        <img
                          className="block mx-auto"
                          src={dasepResponsiveWebsite}
                          alt="Daseb sitio web responsivo"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>

              {/* Box #3 */}
              <div
                className="col-span-full md:col-span-3 lg-col-span-3"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                <HighlighterItem className="!h-full">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col h-full justify-between">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="p-8">
                        <div>
                          <h3 className="inline-flex text-2xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            RLD App móvil
                          </h3>
                          <p className="text-slate-400">
                            Rebecca, Lucas & David! Family Operated Menifee
                            based. Sitio web, Tienda en línea y también app
                            móvil de un negocio familiar de renta de muebles y
                            artefactos para fiestas. 🎉🎈
                          </p>
                        </div>
                      </div>
                      {/* img */}
                      <div className="relative overflow-hidden">
                        <img
                          className="mx-auto relative overflow-hidden z-30"
                          src={partyRentalsWebApp}
                          width="200"
                          alt="RLD party rentals web app y app móvil."
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>

              {/* Box #5 */}
              <div
                className="col-span-full md:col-span-3 lg:col-span-5"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <HighlighterItem className="!h-full">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex h-full flex-col justify-between">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="p-8">
                        <div>
                          <h3 className="inline-flex text-2xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            CMS autoadministrable
                          </h3>
                          <p className="text-slate-400">
                            ¡Potencia tu presencia en línea con un sitio web
                            totalmente responsive! 🌐 Incorpora secciones
                            autoadministrables que mantienen a tu audiencia
                            actualizada con noticias, eventos y un blog
                            dinámico. Además, ofrece áreas exclusivas y la
                            facilidad de agendar citas de manera rápida y
                            sencilla. 📅✨
                          </p>
                        </div>
                      </div>
                      {/* img */}
                      <div className="relative overflow-hidden z-30">
                        <img
                          className="w-full block mx-auto"
                          src={cmsMunicipios}
                          alt="Daseb sitio web responsivo"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>

              {/* Box #4 */}
              <div
                className="col-span-full md:col-span-3 lg:col-span-5"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                <HighlighterItem className="h-full">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex h-full flex-col justify-between">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="p-8">
                        <div>
                          <h3 className="inline-flex text-2xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            Diseño pastel responsivo
                          </h3>
                          <p className="text-slate-400">
                            "¡Crea tu sitio web con tonos pastel y un diseño
                            totalmente responsive! 🎨📱 Perfecto para
                            smartphones, tabletas, laptops y computadoras de
                            escritorio. Además, ofrece la opción de agregar
                            videos en la portada y secciones autoadministrables.
                            🍰🎬 ¡Haz que tu contenido destaque con un diseño
                            atractivo y fácil de gestionar!"
                          </p>
                        </div>
                      </div>
                      {/* img */}
                      <div className="relative overflow-hidden">
                        <img
                          className="w-full mx-auto relative z-30"
                          src={cakesDesignWebsiteDesktop}
                          width="200"
                          alt="Insumo estructural web app"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>

              {/* Box #6 */}
              <div
                className="col-span-full md:col-span-2 lg:col-span-3"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <HighlighterItem className="!h-full">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex h-full flex-col justify-center">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop
                                offset="100%"
                                stopColor="#ec4899"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>

                      {/* Text */}
                      <div className="p-8">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-2xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                              HealthyFood web app
                            </h3>
                            <p className="text-slate-400">
                              Iniciativa de pensemosweb, web app y app móvil.
                              🥗📲 ¡Optimiza tu tiempo mientras mejoras tu
                              salud! Menos visitas médicas, más momentos en
                              familia. Únete a una comunidad de apoyo para
                              hábitos saludables. 💪🌍 ¡Contribuye a menos
                              contaminación y más oportunidades locales! 💰💡
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* img */}
                      <div className="w-full relative overflow-hidden z-30">
                        <img
                          className="block mx-auto"
                          src={healthyFoodWebApp}
                          width="200"
                          alt="HealthyFood web app"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>

              {/* Box #7 */}
              <div
                className="col-span-full md:col-span-2 lg:col-span-3"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                <HighlighterItem className="!h-full">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex h-full flex-col justify-between">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="p-8">
                        <div>
                          <h3 className="inline-flex text-2xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            Insumo estructural web app
                          </h3>
                          <p className="text-slate-400">
                            Insumo estructural 🔨💡 Orgullosos distribuidores
                            oficiales de Holcim Apasco. Venta de materiales para
                            construcción 🏗️, insumos, tuberías, láminas,
                            fontanería y más. ¡Construye con calidad y
                            confianza! 💪🏗️
                          </p>
                        </div>
                      </div>
                      {/* img */}
                      <div className="relative overflow-hidden">
                        <img
                          className="mx-auto relative z-30"
                          src={insumoEstructuralWebApp}
                          alt="Insumo estructural web app"
                          width="200"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
