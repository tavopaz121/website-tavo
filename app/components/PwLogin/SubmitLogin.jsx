import { Link } from "@remix-run/react";
import { submitLoginStyle } from "./stylesLogin";

export default function SubmitLogin({ isSubmit, changeSubmit }) {
  let submitStyle;
  let hoverStyle;
  let buttonStyle;
  let contentButtons;

  if (isSubmit) {
    submitStyle = submitLoginStyle.isSubmit;
    hoverStyle = "";
  } else {
    submitStyle = submitLoginStyle.notSubmit;
    hoverStyle = submitLoginStyle.hoverButton;
  }

  buttonStyle = `${submitLoginStyle.main} ${hoverStyle} ${submitStyle} ${submitLoginStyle.mediaQuery}`;
  contentButtons = "button-submit-login flex flex-row flex-wrap justify-evenly max-[640px]:flex-col max-[640px]:items-center";

  return (
    <div className={`${contentButtons}`}>
      <button
        type="submit"
        className={`${buttonStyle}`}
        data-cy="login-button"
        data-testid="sing-in"
        disabled={isSubmit}
      >
        Ingresar
      </button>

      {
        isSubmit ?
          <a
            className={`${buttonStyle} text-center select-none `}
          >
            Registrar
          </a>
          :
          <Link
            to="/join"
            className={`${buttonStyle} text-center `}
            data-testid="to-register"
          >
            Registrar
          </Link>
      }
    </div>
  );
}