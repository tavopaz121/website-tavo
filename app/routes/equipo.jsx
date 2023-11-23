import nestor from "../assets/imgs/equipo/nestor.webp";
import fatima from "../assets/imgs/equipo/fatima.webp";
import octavio from "~/assets/imgs/equipo/octavio.webp";
import jaime from "~/assets/imgs/equipo/jaime.webp";
import norberto from "~/assets/imgs/equipo/norberto.webp";
import colaboraAprende from "~/assets/imgs/equipo/3D_Animation_Style_Colaboracin_en_equipo_oficina_2.webp";
import creaAsap from "~/assets/imgs/equipo/3D_Animation_Style_equipo_oficina_computadora_trabajando_2.webp";
import retroalimenta from "~/assets/imgs/equipo/3D_Animation_Style_reuniones_virtuales_skype_0.webp";
import adaptaMejora from "~/assets/imgs/equipo/3D_Animation_Style_capacitacin_oficina_equipo_0.webp";
import fondotech from "~/assets/imgs/equipo/Tech Marvels_ Aesthetic Wonders in Modern Technologies.webp";
export default function Equipo() {
  const shadowImg = {
    boxShadow: "5px 5px 20px rgba(0,0,0,0.5)",
  };
  return (
    <div>
      <div className="bg-[#012e46] h-[450px] w-full relative mb-12">
        <img
          alt="Colabora y aprende"
          className="md:clip-path-diagonal absolute h-[450px] w-full max-w-none object-cover bg-center"
          src={fondotech}
        />
        <div className="px-4 top-[15%] w-full absolute">
          <h2 className="sm:ml-[5%] text-white font-bold text-5xl sm:text-6xl">
            Máximo
          </h2>
          <h2 className="sm:ml-[10%] text-white font-bold text-5xl sm:text-6xl">
            Rendimiento
          </h2>
          <p className="sm:ml-[5%] mt-[3%] w-full sm:w-[55%] md:w-[50%] lg:w-[40%] text-white text-2xl">
            Imagina un enfoque que maximice la colaboración, acelere la entrega
            de resultados, fomente la mejora constante y se adapte a los cambios
            en el camino.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12 place-items-center w-full px-4">
        <img
          style={shadowImg}
          alt="Colabora y aprende"
          className="h-[390px]  object-cover md:justify-self-start"
          src={colaboraAprende}
        />
        <div className="content-end">
          <h3 className="text-4xl text-center">Colabora y Aprende</h3>
          <p className="text-2xl text-gray-600">
            En esta fase, trabajamos juntos como equipo, escuchamos tus ideas y
            necesidades, definimos objetivos en colaboración y mantenemos una
            comunicación abierta y continua, sin importar tu nivel de
            experiencia en tecnología.
          </p>
        </div>

        <div className="">
          <h3 className="text-4xl">Crea ASAP</h3>
          <p className="text-2xl text-gray-600">
            Una vez entendida tu visión, avanzamos rápidamente en el desarrollo
            web sin demora. Priorizamos resultados en iteraciones ágiles,
            acercándote gradualmente a tu producto final para que veas el
            progreso constantemente.
          </p>
        </div>

        <img
          style={shadowImg}
          alt="Crea ASAP"
          className="h-[390px] object-cover md:justify-self-end"
          src={creaAsap}
        />
        <img
          style={shadowImg}
          alt="Retroalimenta"
          className="h-[390px]  shadow-lg object-cover md:justify-self-start"
          src={retroalimenta}
        />

        <div className="  ">
          <h3 className="text-4xl">Retroalimenta</h3>
          <p className="text-2xl text-gray-600">
            En esta etapa, tu opinión y la de tus usuarios son cruciales.
            Probamos lo construido, recopilamos tus comentarios y ajustamos
            nuestro enfoque. La retroalimentación constante garantiza que el
            producto final cumpla con tus necesidades y expectativas."
          </p>
        </div>

        <div className=" ">
          <h3 className="text-4xl">Adapta/mejora</h3>
          <p className="text-2xl text-gray-600">
            "Nos adaptamos al cambio constante en el mundo digital, mejorando
            continuamente nuestros procesos. Te entregamos un producto
            excepcional y te capacitamos para mantenerlo relevante en un mercado
            en evolución."
          </p>
        </div>
        <img
          style={shadowImg}
          alt="Adapta y mejora"
          className="h-[390px]  max-w-none shadow-lg object-cover md:justify-self-end"
          src={adaptaMejora}
        />
      </div>

      <div className="m-20">
        <h1 className="text-center text-5xl text-[#fb5975] font-pensemosweb shadow-black/80 text-shadow-sm tracking-tight mt-10 mb-10 mx-4">
          Conoce nuestro equipo
        </h1>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-12 mt-10 relative">
        <div className="grid relative place-items-center flex-auto">
          <img
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
          <h3 className="nombre text-4xl text-center text-neutral-800 top-20  absolute">
            Simplificamos la agilidad para ti
          </h3>
          <p className="puesto text-2xl text-center text-neutral-800 top-60 m-5  absolute">
            ¡Potencia tu presencia en linea con nuestros servicios de
            desarrolloo web ágil!{" "}
          </p>
        </div>
        <div className="grid relative place-items-center flex-auto">
          <img
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