import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useActionData, useLoaderData } from "@remix-run/react";
import { getSession } from "~/sessions";
import { getSessionCookieHeader, login } from "~/functions/login";

import { checkSessionCookie } from "~/firebase/auth.server";
import { getRestConfig } from "~/firebase/firebase.server";
import TextField from "~/components/TextField/TextField";
import FormLogin from "~/components/PwLogin/FormLogin";
import useLogin from "~/functions/useLogin";

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
  const { handleSubmit, loginWithGoogle, loginWithFacebook, clientAction } =
    useLogin(restConfig);

  return (
    <div className="w-screen">
      {clientAction?.error || actionData?.error ? (
        <p>{clientAction?.error || actionData?.error}</p>
      ) : null}

      <FormLogin />

      <form method="post" onSubmit={handleSubmit} data-cy="login-form">
        <TextField
          label="Correo electrónico"
          name="email"
          placeholder="tu@pensemosweb.com"
          type="email"
        ></TextField>

        <TextField
          label="Contraseña"
          name="password"
          placeholder="Tu contraseña"
          type="password"
        ></TextField>

        <button style={{ display: "block" }} type="submit">
          Iniciar sesión
        </button>
      </form>
      <button onClick={loginWithGoogle}>Entrar con google</button>
      <button onClick={loginWithFacebook}>Entrar con Facebook</button>

      <p>
        <Link to="/join">Registrarme</Link>
      </p>
    </div>
  );
}
