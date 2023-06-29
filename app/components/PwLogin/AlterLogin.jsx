import { SiFacebook, SiGoogle } from 'react-icons/si';

export default function AlterLogin({ onClickGoogle, onClickFace, isSubmit }) {
  const styleDescripcion = {
    before: `before:content-[''] before:absolute before:top-3 before:-left-1/2 before:w-2/5 before:h-0.5 before:bg-slate-900 `,
    after: `after:content-[''] after:absolute after:top-3 after:-right-1/2 after:w-2/5 after:h-0.5 after:bg-slate-900 `,
    style: `text-semibase font-semibold inline-block relative `
  }

  const stylesBoton = {
    main: "face-login w-2/5 text-center text-lg font-medium px-5 py-1 border-spacing-1 border-2 rounded-lg shadow-sm shadow-slate-800 flex justify-center ",
    hoverBoton: "hover:shadow-md hover:shadow-slate-700 ",
    notSubmit: "text-white bg-slate-600 border-slate-700 ",
    isSubmit: "text-slate-500 bg-slate-100 border-slate-200 ",
    mediaQuery: "max-[740px]:w-2/5 max-[640px]:w-4/5 max-[340px]:w-auto max-[640px]:mb-2 ",
    content: "h-12 w-28 flex justify-around items-center "
  }

  return (
    <div className="sign-in-with-google mb-6">
      <div className="contenedor-descripcion text-center mb-3">
        <p className={`descripcion ${styleDescripcion.style}`}>
          Ingresar con
        </p>
      </div>
      <div className="botones flex justify-around max-[640px]:flex-col max-[640px]:items-center ">
        <button
          onClick={onClickGoogle}
          className={`${stylesBoton.main} ${isSubmit ? stylesBoton.isSubmit : stylesBoton.notSubmit} ${isSubmit ? "" : stylesBoton.hoverBoton} ${stylesBoton.mediaQuery}`}
          disabled={isSubmit}
        >
          <div className={`${stylesBoton.content}`}>
            <SiGoogle />Google
          </div>
        </button>
      </div>
    </div>
  )
}

/*
<button
  onClick={onClickFace}
  className={`${stylesBoton.main} ${isSubmit ? stylesBoton.isSubmit : stylesBoton.notSubmit} ${isSubmit ? "" : stylesBoton.hoverBoton} ${stylesBoton.mediaQuery}`}
  disabled={isSubmit}
>
  <div
    className={`${stylesBoton.content}`}
  >
    <SiFacebook />Facebook
  </div>
</button>

<div className={styleBoton}>
  <button onClick={onClickFace} className='h-12 w-28 flex justify-around items-center'><SiFacebook />Facebook</button>
</div>
*/