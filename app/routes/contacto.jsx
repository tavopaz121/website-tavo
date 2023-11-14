import banner from "../assets/imgs/contacto/img-formulario.png";
import icons from "../assets/imgs/contacto/icons8-phone.png";
import start from "../assets/imgs/contacto/star-element-right.png";
import dots from "../assets/imgs/contacto/dots-side-2.svg";
import email from "../assets/imgs/contacto/icon-orange-email.svg";
import map from "../assets/imgs/contacto/map-pin.svg";
export default function contacto() {
  return (
    <section className="relative pb-20 overflow-hidden">
      <img className="absolute top-0 right-0" src={start} alt="" />
      <img
        className="absolute bottom-0 right-0 mb-8 lg:mb-24"
        src={dots}
        alt=""
      />
      <div className=" relative z-10 text-center">
        <div className="relative inline-flex pt-4">
          <span className="absolute inset-x-0 bottom-0 border-b-[22px] border-[#fb5975]"></span>
          <h2 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
            Contactanos
          </h2>
        </div>
      </div>
      <section className="py-8 bg-gray-100">
        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            {/* Información de contacto */}
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <div
                  className="block mx-auto mb-3 w-15 h-15"
                  style={{ width: "50%" }}
                >
                  <img src={icons} className="w-50 h-auto" alt="Imagen" />
                </div>

                <p className="mt-6 text-lg font-medium text-gray-900">
                  278-688-3881
                </p>
              </div>
            </div>

            {/* Información de correo electrónico */}
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <img
                  className="block mx-auto mb-3 w-15 h-15 "
                  src={email}
                  alt=""
                />

                <p className="mt-6 text-lg font-medium text-gray-900">
                  pensemoswebjs@gmail.com
                </p>
              </div>
            </div>

            {/* Dirección */}
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <img
                  className="block mx-auto mb-3 w-10 h-10"
                  src={map}
                  alt=""
                />
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  Melchor Ocampo, 2, , Las Flores, 95096
                </p>
              </div>
            </div>
          </div>

          <div className="gap-8 flex flex-col md:flex-row w-full">
            {/* Sección de formulario */}
            <div
              className="flex items-center justify-center max-md:w-full"
              style={{ width: "100%" }}
            >
              <form className="max-w-md">
                <div className="mt-6 overflow-hidden bg-white rounded-xl">
                  <div className="px-6 py-12 sm:p-12">
                    <h3 className="text-3xl font-semibold text-center text-black-900  py">
                      Mandanos un mensaje
                    </h3>
                    <div class="border-t-2 border-[#fb5975] mb-px "></div>
                    <form action="#" method="POST" className="mt-14">
                      <div className="gap-x-5 gap-y-4 ">
                        <div>
                          <label
                            htmlFor="nombre"
                            className="text-base font-medium text-gray-900 "
                          >
                            Nombre Completo
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              id="nombre"
                              placeholder="Ingresa tu Nombre Completo"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="text-base font-medium text-gray-900"
                          >
                            Direccion de correo electronico
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="email"
                              id="email"
                              placeholder="Ingresa tu correo electronico"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="telefono"
                            className="text-base font-medium text-gray-900"
                          >
                            Numero de Telefono
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="tel"
                              id="telefono"
                              placeholder="Ingresa tu numero de telefono"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="empresa"
                            className="text-base font-medium text-gray-900"
                          >
                            Nombre de la empresa
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              id="empresa"
                              placeholder="Ingresa el nombre de la empresa"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="mensaje"
                            className="text-base font-medium text-gray-900"
                          >
                            Mensaje
                          </label>
                          <div className="mt-2.5 relative">
                            <textarea
                              id="mensaje"
                              placeholder=""
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#fb5975] border border-transparent rounded-md focus:outline-none hover:bg-bg-[#fb5975] focus:bg-bg-[#fb5975]"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>

            {/* Sección de imagen */}
            <div className="mt-6 overflow-hidden bg-white rounded-xl pt-6">
              <div
                className="flex items-center justify-center "
                style={{ width: "100%" }}
              >
                <div>
                  <h3 className="text-3xl font-semibold text-center text-black-900 pt-4">
                    Con dedicación y creatividad, damos vida a cada proyecto
                  </h3>
                  <div class="border-t-2 border-[#fb5975] mb-px pb-4"></div>
                  <img src={banner} className="w-50 h-auto" alt="Imagen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
