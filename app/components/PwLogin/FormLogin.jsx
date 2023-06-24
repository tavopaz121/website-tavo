import { useState } from "react";
import AlterLogin from "./AlterLogin";
import BotonLogin from "./BotonLogin";
import EncabezadoLogin from "./EncabezadoLogin";
import InputCorreoLogin from "./InputCorreoLogin";
import InputPassLogin from "./InputPassLogin";
import NormalLogin from "./NormalLogin";

export default function FormLogin() {
  const [correo, setCorreo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert("Formulario enviado");
  }

  function handleCorreo(e){
    setCorreo(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <EncabezadoLogin />
      <AlterLogin />
      <NormalLogin />
      <form onSubmit={handleSubmit}>
        <div className="content-form">
          <InputCorreoLogin eMail={correo} onChange={handleCorreo} />
          <InputPassLogin />
          <BotonLogin />
        </div>
      </form>
    </>
  )
}