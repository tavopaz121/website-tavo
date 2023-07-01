import { SiFacebook, SiGoogle } from 'react-icons/si';
import { alterLoginStyleDescripcion, alterLoginStylesBoton } from './stylesLogin';

export default function SingInGoogleLogin({ onClickGoogle, onClickFace, isSubmit }) {
  let boton;
  let hover;

  if (isSubmit) {
    boton = alterLoginStylesBoton.isSubmit;
    hover = "";
  } else {
    boton = alterLoginStylesBoton.notSubmit;
    hover = alterLoginStylesBoton.hoverBoton;
  }

  let classBoton = `${alterLoginStylesBoton.main} ${boton} ${hover} ${alterLoginStylesBoton.mediaQuery}`;

  return (
    <div className="sign-in-with-google mb-6">
      <div className="contenedor-descripcion text-center mb-3">
        <p className={`descripcion ${alterLoginStyleDescripcion.style}`}>
          Ingresar con
        </p>
      </div>
      <div className="botones flex justify-around max-[640px]:flex-col max-[640px]:items-center ">
        <button
          onClick={onClickGoogle}
          className={`${classBoton}`}
          disabled={isSubmit}
        >
          <div className={`${alterLoginStylesBoton.content}`}>
            <SiGoogle />Google
          </div>
        </button>
      </div>
    </div>
  )
}