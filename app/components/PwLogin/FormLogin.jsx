import { useState } from "react";
import SingInGoogleLogin from "./SingInGoogleLogin";
import SubmitLogin from "./SubmitLogin";
import HeaderLogin from "./HeaderLogin";
import MailLogin from "./MailLogin";
import PasswordLogin from "./PasswordLogin";
import DescriptionLogin from "./DescriptionLogin";

export default function FormLogin({ onSubmit, onGoogle, onFace, clientAction, actionData }) {
  const [sending, setSending] = useState(false);

  const contentStyle = "flex flex-col justify-center bg-slate-100 px-12 pt-5 pb-8 border-solid border-2 border-slate-400 rounded-lg shadow-xl shadow-slate-700 w-3/5 max-w-screen-sm max-[640px]:px-6 max-[640px]:w-4/5 max-[640px]:mx-auto";

  async function handleSubmit(e) {
    setSending(!sending);
    await onSubmit(e);
    setSending(false);
  }

  return (
    <div
      className={`${contentStyle}`}
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
        <div className="font-bold text-center bg-red-200 border-2 border-red-300 rounded-md">
          <p>{clientAction?.error || actionData?.error}</p>
        </div>
      ) : null}

      <form
        method="post"
        onSubmit={handleSubmit}
        data-cy="login-form"
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
