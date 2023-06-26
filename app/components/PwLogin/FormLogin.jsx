import { useState } from "react";
import AlterLogin from "./AlterLogin";
import BotonLogin from "./BotonLogin";
import EncabezadoLogin from "./EncabezadoLogin";
import InputCorreoLogin from "./InputCorreoLogin";
import InputPassLogin from "./InputPassLogin";
import NormalLogin from "./NormalLogin";

export default function FormLogin({ onSubmit, onGoogle, onFace }) {
  const [sending, setSending] = useState(false);

  return (
    <div
      className="flex flex-col justify-center bg-slate-100 px-12 pt-5 pb-8 border-solid border-2 border-slate-500 rounded-lg shadow-xl shadow-slate-700 w-3/5 max-w-screen-sm max-[640px]:px-6 max-[640px]:w-4/5"
      data-testid="FormLogin"
    >
      <EncabezadoLogin />
      <AlterLogin onClickGoogle={onGoogle} onClickFace={onFace} isSubmit={sending} />
      <NormalLogin />
      <form method="post" onSubmit={onSubmit} data-cy="login-form" >
        <div className="content-form">
          <InputCorreoLogin />
          <InputPassLogin />
          <BotonLogin isSubmit={sending} changeSubmit={setSending} />
        </div>
      </form>
    </div>
  )
}