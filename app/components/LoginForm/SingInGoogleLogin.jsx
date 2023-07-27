import { SiGoogle } from "react-icons/si";
import { googleStylesButton } from "./stylesLogin";
import Button from "../Button/Button";

export default function SingInGoogleLogin({
  onClickGoogle,
  onClickFace,
  isSubmit,
}) {
  let classButton = `${googleStylesButton.main} ${googleStylesButton.mediaQuery}`;

  return (
    <div className="sign-in-with-google mb-6">
      <div className="text-center mb-3">
        <p className="font-black">Ingresar con</p>
      </div>
      <div className="flex justify-around max-[640px]:flex-col max-[640px]:items-center">
        <Button
          onClick={onClickGoogle}
          className={`${classButton}`}
          disabled={isSubmit}
        >
          <div
            data-testid="button-google"
            className={`${googleStylesButton.content}`}
          >
            <SiGoogle data-testid="icon-google" /> Google
          </div>
        </Button>
      </div>
    </div>
  );
}
