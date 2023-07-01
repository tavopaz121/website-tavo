import { Link } from "@remix-run/react";
import { botonLoginStylesBoton } from "./stylesLogin";

export default function BotonLogin({ isSubmit, changeSubmit }) {
  let submitStyle;
  let hover;
  let botonStyle;
  let contendorBotones;

  if (isSubmit) {
    submitStyle = botonLoginStylesBoton.isSubmit;
    hover = "";
  } else {
    submitStyle = botonLoginStylesBoton.notSubmit;
    hover = botonLoginStylesBoton.hoverBoton;
  }

  botonStyle = `${botonLoginStylesBoton.main} ${hover} ${submitStyle} ${botonLoginStylesBoton.mediaQuery}`;
  contendorBotones = "button-submit-login flex flex-row flex-wrap justify-evenly max-[640px]:flex-col max-[640px]:items-center";

  return (
    <div className={`${contendorBotones}`}>
      <button
        type="submit"
        className={`${botonStyle}`}
        data-cy="login-button"
        disabled={isSubmit}
      >
        Ingresar
      </button>

      {
        isSubmit ?
          <a
            className={`${botonStyle} text-center select-none `}
          >
            Registrar
          </a>
          :
          <Link
            to="/join"
            className={`${botonStyle} text-center `}
          >
            Registrar
          </Link>
      }
    </div>
  );
}
