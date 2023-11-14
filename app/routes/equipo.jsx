import nestor from '../assets/img/nestor.webp';
import fatima from '../assets/img/fatima.webp';
import octavio from '../assets/img/octavio.webp';
import jaime from '../assets/img/jaime.webp';
import norberto from '../assets/img/norberto.webp';
import CardInfo from "~/components/CardInfo/CardInfo";
import definicionImg from "~/assets/vectors/Frame 55.webp";
import disenioImg from "../assets/vectors/Frame 51-p-500.webp";
import desarrolloImg from "../assets/vectors/Frame 10.webp";
import lanzamientoImg from "../assets/vectors/Frame 18-p-500.webp";
export default function Equipo() {

    const shadowImg = {
        boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
    };
    return (
        <div><br />
            <div>
                <h2 className='text-5xl text-black text-center shadow-black/50 text-shadow-sm'>Maximo rendimiento</h2>
                <p className="text-4xl text-gray-600 text-center mb-20 mx-40">
                    Imagina un enfoque que maximice la colaboración, acelere la
                    entrega de resultados, fomente la mejora constante y se
                    adapte a los cambios en el camino.
                </p>
            </div>
            <div className="flex flex-wrap text-justify mx-4">
                <CardInfo
                    img={definicionImg}
                    title="Colabora y Aprende"
                    description="En esta fase, trabajamos juntos como equipo, escuchamos tus ideas y necesidades, definimos objetivos en colaboración y mantenemos una comunicación abierta y continua, sin importar tu nivel de experiencia en tecnología."
                    />
                <CardInfo
                    img={disenioImg}
                    title=" Crea ASAP"
                    description="Una vez entendida tu visión, avanzamos rápidamente en el desarrollo web sin demora. Priorizamos resultados en iteraciones ágiles, acercándote gradualmente a tu producto final para que veas el progreso constantemente."
                    />
                <CardInfo
                    img={desarrolloImg}
                    title="Retroalimenta"
                    description="En esta etapa, tu opinión y la de tus usuarios son cruciales. Probamos lo construido, recopilamos tus comentarios y ajustamos nuestro enfoque. La retroalimentación constante garantiza que el producto final cumpla con tus necesidades y expectativas."
                    />
                <CardInfo
                    img={lanzamientoImg}
                    title="Adapta/Mejora"
                    description="Nos adaptamos al cambio constante en el mundo digital, mejorando continuamente nuestros procesos. Te entregamos un producto excepcional y te capacitamos para mantenerlo relevante en un mercado en evolución."
                    />
            </div><br /><hr />
            <div>
                <h1 className="text-center text-5xl text-gray-600 font-pensemosweb shadow-black/80 text-shadow-sm tracking-tight mt-10 mx-4">Conoce nuestro equipo Pensemos Web</h1>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-12 mt-10 relative">
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-md object-cover relative" src={octavio} />
                    <h3 className="puesto text-2xl text-white bottom-15 text-shadow shadow-black/80 text-shadow absolute">JS FULLSTACK DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">OCTAVIO</p>
                </div>
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative" src={jaime} />
                    <h3 className="puesto text-2xl text-white bottom-15 shadow-black/80 text-shadow object-cover absolute">AGILE COACH</h3>
                    <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">JAIME</p>
                </div>
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative" src={norberto} />
                    <h3 className="puesto text-2xl text-white bottom-15 shadow-black/80 text-shadow absolute">AGILE JS DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">NORBERTO</p>
                </div>
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative" src={fatima} />
                    <h3 className="puesto text-2xl text-white bottom-20 shadow-black/80 text-shadow absolute">FRONTEND DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-9 shadow-black/80 text-shadow absolute">FATIMA</p>
                </div>
                <div style={shadowImg} className="h-[450px] w-[350px] max-w-none shadow-2xl grid relative place-items-center flex-auto">
                    <h3 className="nombre text-4xl text-center text-neutral-800 top-20  absolute">Simplificamos la agilidad para ti</h3>
                    <p className="puesto text-2xl text-center text-neutral-800 top-60 m-5  absolute">¡Potencia tu presencia en linea con nuestros servicios de desarrolloo web ágil! </p>
                </div>
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl object-cover relative" src={nestor} />
                    <h3 className="puesto text-2xl text-white bottom-20 shadow-black/80 text-shadow absolute">FRONTEND DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-9 shadow-black/80 text-shadow absolute">NESTOR</p>
                </div>
            </div><br />
        </div>
    );
}