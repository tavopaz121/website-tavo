import { useState } from "react";
import SubmitLogin from "./SubmitLogin";
import MailLogin from "./MailLogin";
import PasswordLogin from "./PasswordLogin";
import { formLoginStyles } from "./stylesLogin";

export default function FormLogin({ onSubmit, clientAction, actionData }) {
  const [sending, setSending] = useState(false);

  const contentStyleDefault = `${formLoginStyles.main}`;

  async function handleSubmit(e) {
    setSending(!sending);
    await onSubmit(e);
    setSending(false);
  }

  return (
    <div
      className={`${contentStyleDefault} pt-30 px-4`}
      data-testid="FormLogin"
    >
      <h1 className="text-center mb-2">INICIAR SESIÓN</h1>

      {clientAction?.error || actionData?.error ? (
        <div className="font-bold text-center bg-red-200 border-2 border-red-300 rounded-md">
          <p data-testid="error-login">
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
          <SubmitLogin isSubmit={sending} changeSubmit={setSending} />
        </div>
      </form>
    </div>
  );
}
