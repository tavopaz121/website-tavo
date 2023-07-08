import { SiFacebook, SiGoogle } from 'react-icons/si';
import { googleStylesDescription, googleStylesButton } from './stylesLogin';

export default function SingInGoogleLogin({ onClickGoogle, onClickFace, isSubmit }) {
  let buttonStyle;
  let hoverStyle;

  if (isSubmit) {
    buttonStyle = googleStylesButton.isSubmit;
    hoverStyle = "";
  } else {
    buttonStyle = googleStylesButton.notSubmit;
    hoverStyle = googleStylesButton.hoverButton;
  }

  let classButton = `${googleStylesButton.main} ${buttonStyle} ${hoverStyle} ${googleStylesButton.mediaQuery}`;

  return (
    <div className="sign-in-with-google mb-6">
      <div className="content-description text-center mb-3">
        <p className={`descripcion ${googleStylesDescription.main}`}>
          Ingresar con
        </p>
      </div>
      <div className="buttons flex justify-around max-[640px]:flex-col max-[640px]:items-center ">
        <button
          onClick={onClickGoogle}
          className={`${classButton}`}
          disabled={isSubmit}
        >
          <div data-testid="button-google" className={`${googleStylesButton.content}`}>
            <SiGoogle data-testid="icon-google" />Google
          </div>
        </button>
      </div>
    </div>
  )
}