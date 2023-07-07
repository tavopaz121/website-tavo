import { Link } from '@remix-run/react'
import { submitLoginStyle } from './stylesLogin'
import Button from '../Button/Button'

export default function SubmitLogin({ isSubmit, changeSubmit }) {
  let submitStyle
  let hoverStyle
  let buttonStyle
  let contentButtons

  if (isSubmit) {
    submitStyle = submitLoginStyle.isSubmit
    hoverStyle = ''
  } else {
    submitStyle = submitLoginStyle.notSubmit
    hoverStyle = submitLoginStyle.hoverButton
  }

  buttonStyle = `${submitLoginStyle.main} ${hoverStyle} ${submitStyle} ${submitLoginStyle.mediaQuery}`
  contentButtons =
    'button-submit-login flex justify-evenly max-[640px]:flex-col max-[640px]:items-center'

  return (
    <div className={`${contentButtons}`}>
      <Button
        data-cy="login-button"
        data-testid="sing-in"
        type="submit"
        primary
        text="Ingresar"
        clsN='w-full'
      />

      <Link
        to="/join"
        className='w-full'
        data-testid="to-register">
        <Button alternative text="Registrar" clsN='w-full' />
      </Link>
    </div>
  )
}
