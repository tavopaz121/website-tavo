import Particles from "~/components/Particles/Particles";
import Highlighter, {
  HighlighterItem,
} from "~/components/HighLighter/HighLighter";

export default function Proyectos({ list = [] }) {
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
            <Highlighter className="grid [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] gap-6 group auto-rows-[100px] grid-flow-dense">
              {list.map((item, index) => {
                const delay = 150;

                return (
                  <div
                    className="col-span-full row-span-5 md:col-span-3 lg:col-span-4"
                    data-aos="fade-down"
                    data-aos-delay={delay + 150}
                    key={item.title}
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
                                {item.title}
                              </h3>
                              <p className="text-slate-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          {/* img */}
                          <div className="relative overflow-hidden z-30">
                            <img
                              className="block mx-auto object-contain object-center w-full h-full"
                              src={item.img}
                              alt={item.title}
                            />
                          </div>
                        </div>
                      </div>
                    </HighlighterItem>
                  </div>
                );
              })}
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
