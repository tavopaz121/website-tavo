import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Link,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { useCallback, useState } from "react";

import * as firebaseRest from "~/firebase/firebase-rest";
import {
  checkSessionCookie,
  signIn,
  signInWithToken,
} from "~/firebase/auth.server";
import { getRestConfig } from "~/firebase/firebase.server";
import { commitSession, getSession } from "~/sessions";
import app from "~/firebase/firebase.client";
import * as auth from "firebase/auth";
import type { UserCredential } from "firebase/auth";
import TextField from "~/components/TextField/TextField";

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get("cookie"));
  const { uid } = await checkSessionCookie(session);
  const headers = {
    "Set-Cookie": await commitSession(session),
  };
  if (uid) {
    return redirect("/", { headers });
  }
  const { apiKey, domain } = getRestConfig();
  return json({ apiKey, domain }, { headers });
};

type ActionData = {
  error?: string;
};
export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const idToken = form.get("idToken");
  let sessionCookie;
  try {
    if (typeof idToken === "string") {
      sessionCookie = await signInWithToken(idToken);
    } else {
      const email = form.get("email");
      const password = form.get("password");
      const formError = json(
        { error: "¡Por favor, llena todos los campos!" },
        { status: 400 }
      );
      if (typeof email !== "string") return formError;
      if (typeof password !== "string") return formError;
      sessionCookie = await signIn(email, password);
    }
    const session = await getSession(request.headers.get("cookie"));
    session.set("session", sessionCookie);
    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error) {
    console.error(error);
    return json({ error: String(error) }, { status: 401 });
  }
};

export default function Login() {
  const [clientAction, setClientAction] = useState<ActionData>();
  const actionData = useActionData<typeof action>();
  const restConfig = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // To avoid rate limiting, we sign in client side if we can.
      const login = await firebaseRest.signInWithPassword(
        {
          email: event.currentTarget.email.value,
          password: event.currentTarget.password.value,
          returnSecureToken: true,
        },
        restConfig
      );
      if (firebaseRest.isError(login)) {
        setClientAction({ error: login.error.message });
        return;
      }
      submit({ idToken: login.idToken }, { method: "post" });
    },
    [submit, restConfig]
  );

  async function onProviderSignIn(credentials: UserCredential) {
    const idToken = await credentials.user.getIdToken();
    submit({ idToken }, { method: "post" });
  }

  function signInWithGoogle() {
    const clientAuth = auth.getAuth(app);
    auth
      .signInWithPopup(clientAuth, new auth.GoogleAuthProvider())
      .then(onProviderSignIn)
      .catch((error: Error) => {
        console.log(error);
        alert(error.message);
      });
  }

  function signInWithFacebook() {
    const clientAuth = auth.getAuth(app);
    auth
      .signInWithPopup(clientAuth, new auth.FacebookAuthProvider())
      .then(onProviderSignIn)
      .catch((error: Error) => {
        console.log(error);
        alert(error.message);
      });
  }

  return (
    <div>
      <h1>Iniciar sesión</h1>
      {clientAction?.error || actionData?.error ? (
        <p>{clientAction?.error || actionData?.error}</p>
      ) : null}
      <form method="post" onSubmit={handleSubmit} data-cy="login-form">
        <TextField
          label="Correo electrónico"
          name="email"
          placeholder="tu@pensemosweb.com"
          type="email"
        >
        </TextField>

        <TextField
          label="Contraseña"
          name="password"
          placeholder="Tu contraseña"
          type="password"
        >
        </TextField>

        <button style={{ display: "block" }} type="submit">
          Iniciar sesión
        </button>
      </form>
      <button onClick={signInWithGoogle}>Entrar con google</button>
      <button onClick={signInWithFacebook}>Entrar con Facebook</button>

      <p>
        <Link to="/join">Registrarme</Link>
      </p>
    </div>
  );
}
