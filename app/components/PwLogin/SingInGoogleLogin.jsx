import { SiFacebook, SiGoogle } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { googleStylesDescription, googleStylesButton } from './stylesLogin'
import Button from '../Button/Button'

export default function SingInGoogleLogin({
  onClickGoogle,
  onClickFace,
  isSubmit,
}) {
  let buttonStyle
  let hoverStyle

  if (isSubmit) {
    buttonStyle = googleStylesButton.isSubmit
    hoverStyle = ''
  } else {
    buttonStyle = googleStylesButton.notSubmit
    hoverStyle = googleStylesButton.hoverButton
  }

  let classButton = `${googleStylesButton.main} ${buttonStyle} ${hoverStyle} ${googleStylesButton.mediaQuery}`

  return (
    <div className="sign-in-with-google mb-6">
      <div className="content-description text-center mb-3">
        <p className={`descripcion ${googleStylesDescription.main}`}>
          Ingresar con
        </p>
      </div>
      <div className="buttons flex justify-around max-[640px]:flex-col max-[640px]:items-center ">
        <Button
          disabled={isSubmit ? true : false}
          onClick={onClickGoogle}
          data-testid="button-google"
          clsN={`flex items-center gap-3 ${
            isSubmit ? 'pointer-events-none' : ''
          }`}>
          <SiGoogle data-testid="icon-google" className="text-lg" />
          Iniciar sesión con google
        </Button>
      </div>
    </div>
  )
}
