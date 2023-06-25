import { SiFacebook, SiGoogle } from 'react-icons/si';

export default function AlterLogin({ onClickGoogle, onClickFace, isSubmit }) {
  const styleDescripcion = {
    before: `before:content-[''] before:absolute before:top-3 before:-left-1/2 before:w-2/5 before:h-0.5 before:bg-slate-900 `,
    after: `after:content-[''] after:absolute after:top-3 after:-right-1/2 after:w-2/5 after:h-0.5 after:bg-slate-900 `,
    style: `text-semibase font-semibold inline-block relative `
  }

  const styleBoton = "face-login w-2/5 text-center text-lg font-medium px-5 py-1 border-spacing-1 border-2 rounded-lg shadow-sm shadow-slate-800 flex justify-center ";
  const bgBoton = "text-white bg-slate-600 border-slate-700 ";
  const bgBotonSub = "text-slate-500 bg-slate-100 border-slate-200 ";
  const hoverBoton = "hover:shadow-md hover:shadow-slate-700 ";

  return (
    <div className="alter-login mb-6">
      <div className="descripcion text-center mb-3">
        <p className={styleDescripcion.style}>Ingresar con</p>
      </div>
      <div className="botones flex justify-around max-[640px]:flex-col max-[640px]:items-center ">
        <button
          onClick={isSubmit ? null : onClickFace}
          className={`${styleBoton} ${isSubmit ? bgBotonSub : bgBoton} ${isSubmit ? "" : hoverBoton} max-[740px]:w-2/5 max-[640px]:w-4/5 max-[340px]:w-auto max-[640px]:mb-2`}
        >
          <div
            className="h-12 w-28 flex justify-around items-center"
          >
            <SiFacebook />Facebook
          </div>
        </button>
        <button
          onClick={isSubmit ? null : onClickGoogle}
          className={`${styleBoton} ${isSubmit ? bgBotonSub : bgBoton} ${isSubmit ? "" : hoverBoton} max-[740px]:w-2/5 max-[640px]:w-4/5 max-[340px]:w-auto`}
        >
          <div className="h-12 w-28 flex justify-around items-center">
            <SiGoogle />Google
          </div>
        </button>
      </div>
    </div>
  )
}

/*
  <div className={styleBoton}>
    <button onClick={onClickFace} className='h-12 w-28 flex justify-around items-center'><SiFacebook />Facebook</button>
  </div>
*/