import { SiFacebook, SiGoogle } from 'react-icons/si';

export default function AlterLogin() {
  const styleDescripcion = {
    before: `before:content-[''] before:absolute before:top-3 before:-left-1/2 before:w-2/5 before:h-0.5 before:bg-slate-900 `,
    after: `after:content-[''] after:absolute after:top-3 after:-right-1/2 after:w-2/5 after:h-0.5 after:bg-slate-900 `,
    style: `text-semibase font-semibold inline-block relative `
  }

  const styleBoton = "face-login w-2/5 text-center text-white text-lg font-medium bg-slate-600 px-5 py-1 border-spacing-1 border-2 border-slate-700 rounded-lg shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-slate-700 flex justify-center";

  return (
    <div className="alter-login mb-6">
      <div className="descripcion text-center mb-3">
        <p className={styleDescripcion.before + styleDescripcion.style + styleDescripcion.after}>Puede ingresar con</p>
      </div>
      <div className="botones flex justify-around">
        <div className={`${styleBoton}`}>
          <button className='h-12 w-28 flex justify-around items-center'><SiFacebook />Facebook</button>
        </div>
        <div className={styleBoton}>
          <button className='h-12 w-28 flex justify-around items-center'><SiGoogle />Google</button>
        </div>
      </div>
    </div>
  )
}