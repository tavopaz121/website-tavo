import { useState } from "react";
import AlterLogin from "./AlterLogin";
import BotonLogin from "./BotonLogin";
import HeaderLogin from "./HeaderLogin";
import InputCorreoLogin from "./InputCorreoLogin";
import InputPassLogin from "./InputPassLogin";
import NormalLogin from "./NormalLogin";

export default function FormLogin({ onSubmit, onGoogle, onFace, clientAction, actionData }) {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    setSending(!sending);
    await onSubmit(e);
    setSending(false);
  }

  return (
    <div
      className="flex flex-col justify-center bg-slate-100 px-12 pt-5 pb-8 border-solid border-2 border-slate-400 rounded-lg shadow-xl shadow-slate-700 w-3/5 max-w-screen-sm max-[640px]:px-6 max-[640px]:w-4/5 max-[640px]:mx-auto"
      data-testid="FormLogin"
    >
      <HeaderLogin />

      <AlterLogin
        onClickGoogle={onGoogle}
        onClickFace={onFace}
        isSubmit={sending}
      />

      <NormalLogin />

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
          <InputCorreoLogin />
          <InputPassLogin />
          
          <BotonLogin
            isSubmit={sending}
            changeSubmit={setSending}
          />
        </div>
      </form>
    </div>
  )
}
