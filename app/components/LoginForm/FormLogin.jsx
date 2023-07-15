import { useState } from "react";
import SingInGoogleLogin from "./SingInGoogleLogin";
import SubmitLogin from "./SubmitLogin";
import HeaderLogin from "./HeaderLogin";
import MailLogin from "./MailLogin";
import PasswordLogin from "./PasswordLogin";
import DescriptionLogin from "./DescriptionLogin";
import { formLoginStyels } from "./stylesLogin";

export default function FormLogin({ onSubmit, onGoogle, onFace, clientAction, actionData }) {
  const [sending, setSending] = useState(false);

  const contentStyleDefault = `${formLoginStyels.main} ${formLoginStyels.border} ${formLoginStyels.shadow} ${formLoginStyels.mediaQuery1}`;

  async function handleSubmit(e) {
    setSending(!sending);
    await onSubmit(e);
    setSending(false);
  }

  return (
    <div
      className={`${contentStyleDefault} max-[450px]:w-full max-[450px]:shadow-none max-[450px]:rounded-none max-[450px]:border-0`}
      data-testid="FormLogin"
    >
      <HeaderLogin />

      <SingInGoogleLogin
        onClickGoogle={onGoogle}
        onClickFace={onFace}
        isSubmit={sending}
      />

      <DescriptionLogin />

      {clientAction?.error || actionData?.error ? (
        <div
          className="font-bold text-center bg-red-200 border-2 border-red-300 rounded-md"
        >
          <p data-testid="error-login" >
            {clientAction?.error || actionData?.error}
          </p>
        </div>
      ) : null}

      <form
        method="post"
        onSubmit={handleSubmit}
        data-cy="login-form"
        data-testid="form-login"
      >
        <div className="content-form">
          <MailLogin />
          <PasswordLogin />

          <SubmitLogin
            isSubmit={sending}
            changeSubmit={setSending}
          />
        </div>
      </form>
    </div>
  )
}