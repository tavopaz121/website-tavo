import { Link } from "@remix-run/react";

export default function BotonLogin({ isSubmit, changeSubmit }) {

  const stylesBoton = {
    main: "mb-6 w-1/3 text-lg font-medium px-5 py-1 border-spacing-1 border-2 rounded-lg shadow-sm shadow-slate-800 ",
    hoverBoton: "hover:shadow-md hover:shadow-slate-700 ",
    notSubmit: "text-white bg-slate-600 border-slate-700 ",
    isSubmit: "text-slate-500 bg-slate-100 border-slate-200 ",
    mediaQuery: "max-[740px]:w-2/5 max-[640px]:w-4/5 max-[340px]:w-auto "
  }

  return (
    <div className="button-submit-login flex flex-row flex-wrap justify-evenly max-[640px]:flex-col max-[640px]:items-center">
      <button
        type="submit"
        className={`${stylesBoton.main} ${isSubmit ? "" : stylesBoton.hoverBoton} ${isSubmit ? stylesBoton.isSubmit : stylesBoton.notSubmit} ${stylesBoton.mediaQuery}`}
        data-cy="login-button"
        disabled={isSubmit}
      >
        Ingresar
      </button>

      {
        isSubmit ?
          <div
            className={`${stylesBoton.main} ${stylesBoton.isSubmit} ${stylesBoton.mediaQuery} text-center select-none `}
          >
            Registrar
          </div>
          :
          <Link
            to="/join"
            className={`${stylesBoton.main} ${stylesBoton.notSubmit} ${stylesBoton.hoverBoton} ${stylesBoton.mediaQuery} text-center `}
          >
            Registrar
          </Link>
      }
    </div>
  );
}

/*
  < div
className = {`${styleBoton} ${hoverBoton} ${bgColor} max-[740px]:w-2/5 max-[640px]:w-4/5 max-[340px]:w-auto select-none text-center`}
onClick = {() => changeSubmit(!isSubmit)}
      >
  Cambiar
      </div >

  <Link
    to="/join"
    className={`${styleBoton} ${hoverBoton} ${bgColor} text-center`}
  >
    Registrar
  </Link>
*/
