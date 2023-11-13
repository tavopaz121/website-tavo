import nestor from '../assets/img/nestor.png'; 
import fatima from '../assets/img/fatima.png';
import octavio from '../assets/img/octavio.png'; 
import jaime from  '../assets/img/jaime.jpg';
import norberto from '../assets/img/norberto.png';  
export default function Equipo() {

    const shadowImg = {
        boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
      };
    return (
        <div className='m-10 bg-gray-50'><br/>
            <div>
                <h1 className="text-center text-6xl text-neutral-800 font-semibold font-pensemosweb shadow-black/80 text-shadow-sm">CONOCE NUESTRO EQUIPO PENSEMOS WEB</h1>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-12 mx-10 mt-10 relative">
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-md relative" src={octavio}/>
                    <h3 className="puesto text-2xl text-white bottom-15 text-shadow shadow-black/80 text-shadow absolute">JS FULLSTACK DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">OCTAVIO</p>
                </div>
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl relative" src={jaime}/>
                    <h3 className="puesto text-2xl text-white bottom-15 shadow-black/80 text-shadow absolute">AGILE COACH</h3>
                    <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">JAIME</p>
                </div>
                <div className="grid relative place-items-center flex-auto">
                    <img  style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl relative" src={norberto}/>
                    <h3 className="puesto text-2xl text-white bottom-15 shadow-black/80 text-shadow absolute">AGILE JS DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-5 shadow-black/80 text-shadow absolute">NORBERTO</p>
                </div>
                <div className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl relative" src={fatima}/>
                    <h3 className="puesto text-2xl text-white bottom-20 shadow-black/80 text-shadow absolute">FRONT END DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-9 shadow-black/80 text-shadow absolute">FATIMA</p>
                </div>
                <div style={shadowImg} className="h-[450px] w-[350px] max-w-none shadow-2xl grid relative place-items-center flex-auto">
                    <h3 className="nombre text-4xl text-center text-neutral-800 top-20 shadow-black/80 text-shadow absolute">SIMPLIFICAMOS LA AGILIDAD PARA TI</h3>
                    <p className="puesto text-2xl text-center text-neutral-800 top-60 m-5 shadow-black/80 text-shadow absolute">¡POTENCIA TU PRESENCIA EN LÍNEA CON NUESTROS SERVICIOS DE DESARROLLO WEB ÁGIL! </p>
                </div>
                <div  className="grid relative place-items-center flex-auto">
                    <img style={shadowImg} className="h-[390px] w-[350px] max-w-none shadow-2xl relative" src={nestor}/>
                    <h3 className="puesto text-2xl text-white bottom-20 shadow-black/80 text-shadow absolute">FRONT END DEVELOPER</h3>
                    <p className="nombre text-5xl text-white bottom-9 shadow-black/80 text-shadow absolute">NESTOR</p>
                </div>
            </div><br />
        </div>
        
    );
  }