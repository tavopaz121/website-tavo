import { useState } from "react";
import AlterLogin from "./AlterLogin";
import BotonLogin from "./BotonLogin";
import EncabezadoLogin from "./EncabezadoLogin";
import InputCorreoLogin from "./InputCorreoLogin";
import InputPassLogin from "./InputPassLogin";
import NormalLogin from "./NormalLogin";
import TextField from "../TextField/TextField";

export default function FormLogin() {
  const [correo, setCorreo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert("Formulario enviado");
  }

  function handleCorreo(e) {
    setCorreo(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div
      className="flex flex-col justify-center bg-slate-400 px-12 pt-5 pb-8 border-solid border-2 border-slate-500 rounded-lg shadow-xl shadow-slate-700 w-3/5 max-w-screen-md"
    >
      <EncabezadoLogin />
      <AlterLogin />
      <NormalLogin />
      <form onSubmit={handleSubmit}>
        <div className="content-form">
          <InputCorreoLogin />
          <InputPassLogin />
          <BotonLogin />
        </div>
      </form>
    </div>
  )
}