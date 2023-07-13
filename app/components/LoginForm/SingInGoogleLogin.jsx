import { SiFacebook, SiGoogle } from 'react-icons/si';
import { googleStylesButton } from './stylesLogin';

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
      <div className="text-center mb-3">
        <p className="font-bold">
          Ingresar con
        </p>
      </div>
      <div className="flex justify-around max-[640px]:flex-col max-[640px]:items-center">
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