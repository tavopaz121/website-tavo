import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { getSession } from "~/sessions";
import { getSessionCookieHeader, login } from "~/functions/login";

import { checkSessionCookie } from "~/firebase/auth.server";
import { getRestConfig } from "~/firebase/firebase.server";
import TextField from "~/components/TextField/TextField";
import FormLogin from "~/components/PwLogin/FormLogin";
import useLogin from "~/functions/useLogin";
import { useState } from "react";

export async function loader({ request }: LoaderArgs) {
  const cookie = request.headers.get("cookie");
  const session = await getSession(cookie);
  const { uid } = await checkSessionCookie(session);
  const headers = await getSessionCookieHeader(cookie);
  if (uid) {
    return redirect("/", { headers });
  }

  const { apiKey, domain } = getRestConfig();
  return json({ apiKey, domain }, { headers });
}

export async function action({ request }: ActionArgs) {
  return await login(request);
}

export default function Login() {
  const actionData = useActionData<typeof action>();
  const restConfig = useLoaderData<typeof loader>();
  const { handleSubmit, loginWithGoogle, loginWithFacebook, clientAction } = useLogin(restConfig);

  return (
<<<<<<< HEAD
    <div className="w-screen h-screen flex flex-col items-center justify-center max-[640px]:inline-block">
      <FormLogin
        onSubmit={handleSubmit}
        onGoogle={loginWithGoogle}
        onFace={loginWithFacebook}
        clientAction={clientAction}
        actionData={actionData}
      />
=======
    <div>
      <h1>Iniciar sesión</h1>
      {clientAction?.error || actionData?.error ? (
        <p>{clientAction?.error || actionData?.error}</p>
      ) : null}
      <form
        method="post" onSubmit={handleSubmit} data-cy="login-form">
        <TextField
          label="Correo electrónico"
          name="email"
          data-cy='email-field'
          placeholder="tu@pensemosweb.com"
          type="email"
        ></TextField>

        <TextField
          label="Contraseña"
          data-cy='password-field'
          name="password"
          placeholder="Tu contraseña"
          type="password"
        ></TextField>

        <button
          data-cy='login-button'
          style={{ display: "block" }} type="submit">
          Iniciar sesión
        </button>
      </form>
      <button onClick={loginWithGoogle}>Entrar con google</button>
      <button onClick={loginWithFacebook}>Entrar con Facebook</button>

      <p>
        <Link to="/join">Registrarme</Link>
      </p>
>>>>>>> 824080ed1cad795704452c2df8bb88615fad3846
    </div>
  );
}
