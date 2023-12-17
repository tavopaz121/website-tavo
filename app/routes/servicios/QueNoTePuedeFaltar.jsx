import { tools } from "~/data/tools.js";

export default QueNoTePuedoFaltarServicios() {
  return (
          <section className="py-8">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              ¿Qué no debe faltar en tu{" "}
              <span className="font-serif italic">sitio web</span>?
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed ">
              Que para tu tranquilidad, lo incluimos en todos nuestros
              proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((item, index) => (
              <div
                className="overflow-hidden bg-white rounded shadow"
                key={index}
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      decoding="async"
                      loading="lazy"
                      src={item.img}
                      alt=""
                      className="w-12"
                    />

                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed  mt-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
