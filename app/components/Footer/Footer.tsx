import logoPensemosWeb from "~/assets/svgs/PensemosWeb.svg";
import iconPhone from "~/assets/imgs/contacto/icons8-phone-white.png";
import notice1Img from "~/assets/imgs/corazon-agilidad.webp";

export default function Footer() {
  return (
    <>
      <section className="py-6 sm:pt-16 lg:pt-24 bg-gray-900">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-md:grid-cols-1 grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12 max-md:gap-x-0">
            <div className=" max-md:col-span-1 max-md:w-full">
              <img className="h-8" src={logoPensemosWeb} alt="" />

              <p className="text-base leading-relaxed text-gray-400 mt-7">
                En PensemosWeb, estamos dedicados a ofrecerte soluciones
                innovadoras y de vanguardia para que tu presencia en la web
                destaque y alcance nuevos niveles de éxito.
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                últimos artículos
              </p>

              <ul className="mt-6 space-y-4">
                <li className="w-full gap-2">
                  <a href="/" className="flex gap-4">
                    <img
                      src={notice1Img}
                      alt=""
                      className="w-full h-18 object-cover"
                    />
                    <span className="text-sm text-white hover:underline">
                      El manifiesto ágil, siempre he pensado que las cosas
                      simples son las mejores.
                    </span>
                  </a>
                </li>

                <li className="w-full gap-2">
                  <a href="/" className="flex gap-4">
                    <img
                      src={notice1Img}
                      alt=""
                      className="w-full h-18 object-cover"
                    />
                    <span className="text-sm text-white hover:underline">
                      El manifiesto ágil, siempre he pensado que las cosas
                      simples son las mejores.
                    </span>
                  </a>
                </li>

                <li className="w-full gap-2">
                  <a href="/" className="flex gap-4">
                    <img
                      src={notice1Img}
                      alt=""
                      className="w-full h-18 object-cover"
                    />
                    <span className="text-sm text-white hover:underline">
                      El manifiesto ágil, siempre he pensado que las cosas
                      simples son las mejores.
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Enlaces
              </p>

              <ul className="mt-6 space-y-4 max-md:flex max-md:space-y-0 max-md:gap-4 max-md:flex-wrap">
                <li>
                  <a
                    href="/"
                    title=""
                    className="text-base text-gray-300 transition-all duration-200 hover:text-pink-500 focus:text-pink-500"
                  >
                    Inicio
                  </a>
                </li>

                <li>
                  <a
                    href="/equipo"
                    title=""
                    className="text-base text-gray-300 transition-all duration-200 hover:text-pink-500 focus:text-pink-500"
                  >
                    Equipo
                  </a>
                </li>

                <li>
                  <a
                    href="/servicios"
                    title=""
                    className="text-base text-gray-300 transition-all duration-200 hover:text-pink-500 focus:text-pink-500"
                  >
                    Servicios
                  </a>
                </li>

                <li>
                  <a
                    href="/contacto"
                    title=""
                    className="text-base text-gray-300 transition-all duration-200 hover:text-pink-500 focus:text-pink-500"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    title=""
                    className="text-base text-gray-300 transition-all duration-200 hover:text-pink-500 focus:text-pink-500"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Ubicación
              </p>

              <figure className="mt-6">
                <iframe
                  className="rounded"
                  title="Mapa de ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1120.330192056294!2d-96.68780304380684!3d18.60068214710177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1700419607129!5m2!1ses-419!2smx"
                  width="full"
                  height="250"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gray-800">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div className="xl:flex xl:items-center xl:justify-start"></div>

            <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                <li className="flex items-center gap-2">
                  <img
                    src={iconPhone}
                    className="w-4 h-4"
                    alt="Icon Telefono celular"
                  />
                  <a
                    href="tel:2786883881"
                    title=""
                    className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    278 688 3881
                  </a>
                </li>

                <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/40"></div>

                <li className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 23.02H32.84C33.1032 23.0215 33.3641 22.9711 33.6078 22.8715C33.8515 22.772 34.0731 22.6254 34.26 22.44L43.42 13.28C43.6075 13.0941 43.7562 12.8729 43.8578 12.6291C43.9593 12.3854 44.0116 12.124 44.0116 11.86C44.0116 11.596 43.9593 11.3346 43.8578 11.0908C43.7562 10.8471 43.6075 10.6259 43.42 10.44L38.58 5.59999C38.3941 5.41253 38.1729 5.26374 37.9292 5.16221C37.6854 5.06067 37.424 5.00839 37.16 5.00839C36.896 5.00839 36.6346 5.06067 36.3908 5.16221C36.1471 5.26374 35.9259 5.41253 35.74 5.59999L26.58 14.76C26.2145 15.1433 26.0074 15.6505 26 16.18V21.02C26 21.5504 26.2107 22.0591 26.5858 22.4342C26.9609 22.8093 27.4696 23.02 28 23.02ZM30 17.02L37.16 9.85999L39.16 11.86L32 19.02H30V17.02ZM42 21.02C41.4696 21.02 40.9609 21.2307 40.5858 21.6058C40.2107 21.9808 40 22.4896 40 23.02V37.02C40 37.5504 39.7893 38.0591 39.4142 38.4342C39.0391 38.8093 38.5304 39.02 38 39.02H10C9.46957 39.02 8.96086 38.8093 8.58579 38.4342C8.21071 38.0591 8 37.5504 8 37.02V17.8L19.76 29.58C20.3181 30.1454 20.983 30.5943 21.716 30.9007C22.449 31.2071 23.2355 31.3649 24.03 31.3649C24.8245 31.3649 25.611 31.2071 26.344 30.9007C27.077 30.5943 27.7419 30.1454 28.3 29.58C28.6665 29.2061 28.8717 28.7035 28.8717 28.18C28.8717 27.6565 28.6665 27.1538 28.3 26.78C28.1137 26.5895 27.8913 26.4381 27.6457 26.3348C27.4002 26.2315 27.1364 26.1782 26.87 26.1782C26.6036 26.1782 26.3398 26.2315 26.0943 26.3348C25.8487 26.4381 25.6263 26.5895 25.44 26.78C25.0661 27.1464 24.5635 27.3517 24.04 27.3517C23.5165 27.3517 23.0139 27.1464 22.64 26.78L10.82 14.98H20C20.5304 14.98 21.0391 14.7693 21.4142 14.3942C21.7893 14.0191 22 13.5104 22 12.98C22 12.4496 21.7893 11.9408 21.4142 11.5658C21.0391 11.1907 20.5304 10.98 20 10.98H10C8.4087 10.98 6.88258 11.6121 5.75736 12.7373C4.63214 13.8626 4 15.3887 4 16.98V36.98C4 38.5713 4.63214 40.0974 5.75736 41.2226C6.88258 42.3478 8.4087 42.98 10 42.98H38C39.5913 42.98 41.1174 42.3478 42.2426 41.2226C43.3679 40.0974 44 38.5713 44 36.98V22.98C44 22.4496 43.7893 21.9408 43.4142 21.5658C43.0391 21.1907 42.5304 20.98 42 20.98V21.02Z"
                      fill="white"
                    />
                  </svg>

                  <a
                    href="mailto:pensemoswebjs@gmail.com"
                    title=""
                    className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    pensemoswebjs@gmail.com
                  </a>
                </li>
              </ul>

              <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/40"></div>

              <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                <li>
                  <a
                    href="https://www.facebook.com/pensemosweb"
                    title=""
                    rel="noreferrer"
                    target="_blank"
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    title=""
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
