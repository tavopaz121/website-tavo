import { submitLoginStyle } from "./stylesLogin";
import Button from "~/components/Button/Button";

export default function SubmitLogin({ isSubmit }) {
  let buttonStyle;
  let contentButtons;

  buttonStyle = `${submitLoginStyle.main} ${submitLoginStyle.mediaQuery}`;
  contentButtons =
    "flex flex-row justify-evenly max-[640px]:flex-col max-[640px]:items-center";

  return (
    <div className={`${contentButtons}`}>
      <Button
        type="submit"
        color="green"
        className={`${buttonStyle}  bg-gradient-pink`}
        disabled={isSubmit}
        data-cy="login-button"
        data-testid="sing-in"
      >
        Ingresar
      </Button>
    </div>
  );
}
