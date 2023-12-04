import nestor from "../assets/imgs/equipo/nestor.webp";
import fatima from "../assets/imgs/equipo/fatima.webp";
import octavio from "~/assets/imgs/equipo/octavio.webp";
import jaime from "~/assets/imgs/equipo/jaime.webp";
import norberto from "~/assets/imgs/equipo/norberto.webp";
import colaboraAprende from "../assets/imgs/equipo/Unsplash-colaborayaprende.webp";
import creaAsap from "../assets/imgs/equipo/Unsplash-creaASAP.webp";
import retroalimenta from "../assets/imgs/equipo/Unsplash-retroalimenta.webp";
import adaptaMejora from "../assets/imgs/equipo/Unsplash-adapta.webp";
import fondotech from "~/assets/imgs/equipo/Tech Marvels_ Aesthetic Wonders in Modern Technologies.webp";
export default function Equipo() {
  const shadowImg = {
    boxShadow: "5px 5px 20px rgba(0,0,0,0.2)",
  };
  return (
    <div>
      <div className="bg-[#012e46] h-[550px] w-full relative mb-12">
        <img
          decoding="async"
          loading="lazy"
          alt="Maximo rendimiento"
          className="md:clip-path-diagonal absolute h-[550px] w-full max-w-none object-cover bg-center"
          src={fondotech}
        />
        <div className="px-4 top-[22%] w-full absolute">
          <h2 className="sm:ml-[2%] text-white font-bold text-5xl sm:text-7xl font-heading">
            Máximo
          </h2>
          <h2 className="sm:ml-[8%] text-white font-bold text-4xl sm:text-7xl font-serif italic">
            Rendimiento
          </h2>
          <p className="sm:ml-[2%] mt-[2%] w-full sm:w-[55%] md:w-[50%] lg:w-[40%] text-white text-xl">
            Imagina un enfoque que maximice la colaboración, acelere la entrega
            de resultados, fomente la mejora constante y se adapte a los cambios
            en el camino.
          </p>
        </div>
      </div>
      
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="pb-2">
          <div className="relative">
            {/* Gray box */}
            <div className="absolute inset-0 bg-gray-50 -z-10 rounded-lg border border-sky-200"  />
            {/* Content */}
            <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                  {/* Testimonial */}
                  <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                    <div className="shrink-0 relative ">
                      <img className="rounded-lg" src={colaboraAprende} width={500} height={350} alt="Colabora y aprende" />
                    </div>
                    <div className="relative pt-5">
                      <h2 className="mb-4 text-3xl font-heading">Colabora y <span className="font-serif italic">aprende</span></h2>
                      <h4 className="mb-4 text-base">En esta fase, trabajamos juntos como equipo, escuchamos tus ideas y necesidades, definimos objetivos en colaboración y mantenemos una comunicación abierta y continua, sin importar tu nivel de experiencia en tecnología.</h4>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pb-2">
          <div className="relative">
            {/* Gray box */}
            <div className="absolute inset-0 bg-gray-100 rotate -z-10 rounded-lg border border-sky-200"  />
            {/* Content */}
            <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                  {/* Testimonial */}
                  <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                    
                    <div className="relative pt-5">
                      <h2 className="mb-4 text-3xl font-heading">Crea <span className="font-serif italic">ASAP</span></h2>
                      <h4 className="mb-4 text-base">Una vez entendida tu visión, avanzamos rápidamente en el desarrollo web sin demora. Priorizamos resultados en iteraciones ágiles, acercándote gradualmente a tu producto final para que veas el progreso constantemente.</h4>
                    </div>
                    <div className="shrink-0 relative ">
                      <img className="rounded-lg" src={creaAsap} width={500} height={350} alt="Colabora y aprende" />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pb-2">
          <div className="relative">
            {/* Gray box */}
            <div className="absolute inset-0 bg-gray-100 rotate -z-10 rounded-lg border border-sky-200"  />
            {/* Content */}
            <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                  {/* Testimonial */}
                  <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                    <div className="shrink-0 relative ">
                      <img className="rounded-lg" src={retroalimenta} width={500} height={350} alt="Colabora y aprende" />
                    </div>
                    <div className="relative pt-5">
                      <h2 className="mb-4 text-3xl font-heading"><span className="font-serif italic">Retroalimenta</span></h2>
                      <h4 className="mb-4 text-base">En esta etapa, tu opinión y la de tus usuarios son cruciales. Probamos lo construido, recopilamos tus comentarios y ajustamos nuestro enfoque. La retroalimentación constante garantiza que el producto final cumpla con tus necesidades y expectativas.</h4>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pb-2">
          <div className="relative">
            {/* Gray box */}
            <div className="absolute inset-0 bg-gray-100 rotate -z-10 rounded-lg border border-sky-200"  />
            {/* Content */}
            <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
                  {/* Testimonial */}
                  <div className="lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left pt-5 lg:py-10">
                    <div className="relative pt-5">
                      <h2 className="mb-4 text-3xl font-heading">Adapta / <span className="font-serif italic">Mejora</span></h2>
                      <h4 className="mb-4 text-base">"Nos adaptamos al cambio constante en el mundo digital, mejorando continuamente nuestros procesos. Te entregamos un producto excepcional y te capacitamos para mantenerlo relevante en un mercado en evolución."</h4>
                    </div>
                    <div className="shrink-0 relative ">
                      <img className="rounded-lg" src={adaptaMejora} width={500} height={350} alt="Colabora y aprende" />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <div className="pt-20">
        <h1 className="text-center text-5xl tracking-tight mt-10 mx-4 md:text-7xl font-bold">
          <span className="font-heading">Conoce nuestro </span>
          <span className="font-serif italic">equipo</span>
        </h1>
      </div>

      <section>
         {/* Section header */}
      <div className="max-w-6xl mx-auto text-center md:pb-20">
          <h2 className="text-gray-500">Permitimos a los desarrolladores crear cosas increibles</h2>
      </div>
      <div className="flex flex-wrap  gap-y-12 mt-10 relative px-8 items-center">
      <div className="grid flex-auto  mx-auto px-8 sm:px-6 relative">
            {/* Section content */}
            <div className=" md:max-w-none items-center space-y-8 md:space-y-0">
              {/* Creatives cards */}
              <div className="w-full md:max-w-sm lg:max-w-sm" data-aos-id-cards>
                  {/* Column 1 */}
                  <div style={shadowImg}>
                    {/* Item */}
                    <div className="text-center " data-aos-anchor="[data-aos-id-cards]" data-aos="fade-down">
                      <img className="w-full h-30 object-cover opacity-60" src={colaboraAprende} width={500} height={200} alt="Fondo" />
                      <div className="bg-white pb-6">
                        <div className="relative inline-flex -mt-15 mb-5">
                          <img className="inline-flex rounded-full" src={octavio} width={200} height={200} alt="Octavio Paz" />
                          <svg className="absolute top-6 right-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-blue-500"
                              d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
                            />
                            <path className="fill-white" d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z" />
                          </svg>
                        </div>
                        <div className="mb-5">
                          <h4 className="font-heading font-bold inline-block text-3xl">Octavio Paz</h4>
                          <div className="text-lg font-medium text-gray-500">JS FULLSTACK DEVELOPER</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
        <div className="grid flex-auto  mx-auto px-8 sm:px-6 relative">
            {/* Section content */}
            <div className=" md:max-w-none md:items-center space-y-8 md:space-y-0">
              {/* Creatives cards */}
              <div className="w-full md:max-w-sm lg:max-w-sm" data-aos-id-cards>
                  {/* Column 1 */}
                  <div style={shadowImg}>
                    {/* Item */}
                    <div className="text-center " data-aos-anchor="[data-aos-id-cards]" data-aos="fade-down">
                      <img className="w-full h-30 object-cover opacity-60" src={colaboraAprende} width={500} height={200} alt="Fondo" />
                      <div className="bg-white pb-6">
                        <div className="relative inline-flex -mt-15 mb-5">
                          <img className="inline-flex rounded-full" src={jaime} width={200} height={200} alt="Jaime Cervantes" />
                          <svg className="absolute top-6 right-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-blue-500"
                              d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
                            />
                            <path className="fill-white" d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z" />
                          </svg>
                        </div>
                        <div className="mb-5">
                          <h4 className="font-heading font-bold inline-block text-3xl">Jaime Cervantes</h4>
                          <div className="text-lg font-medium text-gray-500">AGILE COACH </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            <div className="grid flex-auto mx-auto px-8 sm:px-6 relative">
            {/* Section content */}
            <div className="flex flex-wrap md:max-w-none items-center space-y-8 md:space-y-0">
              {/* Creatives cards */}
              <div className="w-full md:max-w-sm lg:max-w-sm" data-aos-id-cards>
                  {/* Column 1 */}
                  <div style={shadowImg}>
                    {/* Item */}
                    <div className="text-center " data-aos-anchor="[data-aos-id-cards]" data-aos="fade-down">
                      <img className="w-full h-30 object-cover opacity-60" src={colaboraAprende} width={500} height={200} alt="Fondo" />
                      <div className="bg-white pb-6">
                        <div className="relative inline-flex -mt-15 mb-5">
                          <img className="inline-flex rounded-full" src={norberto} width={200} height={200} alt="Norberto" />
                          <svg className="absolute top-6 right-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-blue-500"
                              d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
                            />
                            <path className="fill-white" d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z" />
                          </svg>
                        </div>
                        <div className="mb-5">
                          <h4 className="font-heading font-bold inline-block text-3xl">Norberto</h4>
                          <div className="text-lg font-medium text-gray-500">AGILE JS DEVELOPER</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            <div className="grid flex-auto mx-auto px-8 sm:px-6 relative">
            {/* Section content */}
            <div className="flex flex-wrap md:max-w-none items-center space-y-8 md:space-y-0">
              {/* Creatives cards */}
              <div className="w-full md:max-w-sm lg:max-w-sm" data-aos-id-cards>
                  {/* Column 1 */}
                  <div style={shadowImg}>
                    {/* Item */}
                    <div className="text-center " data-aos-anchor="[data-aos-id-cards]" data-aos="fade-down">
                      <img className="w-full h-30 object-cover opacity-60" src={colaboraAprende} width={500} height={200} alt="Fondo" />
                      <div className="bg-white pb-6">
                        <div className="relative inline-flex -mt-15 mb-5">
                          <img className="inline-flex rounded-full" src={fatima} width={200} height={200} alt="Fatima" />
                          <svg className="absolute top-6 right-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-blue-500"
                              d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
                            />
                            <path className="fill-white" d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z" />
                          </svg>
                        </div>
                        <div className="mb-5">
                          <h4 className="font-heading font-bold inline-block text-3xl">Fatima</h4>
                          <div className="text-lg font-medium text-gray-500">FRONTEND DEVELOPER</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="grid flex-auto mx-auto px-8 sm:px-6 relative">
            {/* Section content */}
            <div className="flex flex-wrap md:max-w-none items-center space-y-8 md:space-y-0">
              {/* Creatives cards */}
              <div className="w-full md:max-w-sm lg:max-w-sm" data-aos-id-cards>
                  {/* Column 1 */}
                  <div style={shadowImg}>
                    {/* Item */}
                    <div className="text-center " data-aos-anchor="[data-aos-id-cards]" data-aos="fade-down">
                      <img className="w-full h-30 object-cover opacity-60" src={colaboraAprende} width={500} height={200} alt="Fondo" />
                      <div className="bg-white pb-6">
                        <div className="relative inline-flex -mt-15 mb-5">
                          <img className="inline-flex rounded-full" src={nestor} width={200} height={200} alt="Fatima" />
                          <svg className="absolute top-6 right-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-blue-500"
                              d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
                            />
                            <path className="fill-white" d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z" />
                          </svg>
                        </div>
                        <div className="mb-5">
                          <h4 className="font-heading font-bold inline-block text-3xl">Nestor</h4>
                          <div className="text-lg font-medium text-gray-500">FRONTEND DEVELOPER</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>              
      </div>
    </section>





      <div className="flex flex-wrap gap-x-8 gap-y-12 mt-10 relative">
        <div className="grid relative place-items-center flex-auto">
          <img
            decoding="async"
            loading="lazy"
            style={shadowImg}
            alt="Octavio JS Fullstack Developer"
            className="h-[390px] w-[350px] max-w-none shadow-md object-cover relative"
            src={octavio}
          />
          <h3 className="puesto text-2xl text-white bottom-15 text-shadow shadow-black/80 absolute">
            JS FULLSTACK DEVELOPER
          </h3>
          <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">
            OCTAVIO
          </p>
        </div>
        <div className="grid relative place-items-center flex-auto">
          <img
            decoding="async"
            loading="lazy"
            style={shadowImg}
            alt="Jaime Agile Coach"
            className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative"
            src={jaime}
          />
          <h3 className="puesto text-2xl text-white bottom-15 shadow-black/80 text-shadow object-cover absolute">
            AGILE COACH
          </h3>
          <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">
            JAIME
          </p>
        </div>
        <div className="grid relative place-items-center flex-auto">
          <img
            decoding="async"
            loading="lazy"
            style={shadowImg}
            alt="Norberto Agile JS Developer"
            className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative"
            src={norberto}
          />
          <h3 className="puesto text-2xl text-white bottom-15 shadow-black/80 text-shadow absolute">
            AGILE JS DEVELOPER
          </h3>
          <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">
            NORBERTO
          </p>
        </div>
        <div className="grid relative place-items-center flex-auto">
          <img
            decoding="async"
            loading="lazy"
            style={shadowImg}
            alt="Fatima Fronend Developer"
            className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative"
            src={fatima}
          />
          <h3 className="puesto text-2xl text-white bottom-20 shadow-black/80 text-shadow absolute">
            FRONTEND DEVELOPER
          </h3>
          <p className="nombre text-5xl text-white bottom-9 shadow-black/80 text-shadow absolute">
            FATIMA
          </p>
        </div>
        <div
          style={shadowImg}
          className="h-[450px] w-[350px] max-w-none shadow-2xl grid relative place-items-center flex-auto"
        >
          <h3 className="nombre text-4xl text-center text-neutral-800 top-20  font-heading absolute">
            Simplificamos la agilidad para ti
          </h3>
          <p className="puesto text-2xl text-center text-neutral-800 top-60 m-5  absolute">
            ¡Potencia tu presencia en linea con nuestros servicios de
            desarrolloo web ágil!{" "}
          </p>
        </div>
        <div className="grid relative place-items-center flex-auto">
          <img
            decoding="async"
            loading="lazy"
            style={shadowImg}
            alt="Nestor Frontend Developer"
            className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative"
            src={nestor}
          />
          <h3 className="puesto text-2xl text-white bottom-20 shadow-black/80 text-shadow absolute">
            FRONTEND DEVELOPER
          </h3>
          <p className="nombre text-5xl text-white bottom-9 shadow-black/80 text-shadow absolute">
            NESTOR
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
