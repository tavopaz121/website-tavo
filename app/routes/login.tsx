import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { getSession } from "~/sessions";
import { getSessionCookieHeader, login } from "~/functions/login";

import { checkSessionCookie } from "~/firebase/auth.server";
import { getRestConfig } from "~/firebase/firebase.server";
import FormLogin from "~/components/LoginForm/FormLogin";
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
    <FormLogin
      onSubmit={handleSubmit}
      onGoogle={loginWithGoogle}
      onFace={loginWithFacebook}
      clientAction={clientAction}
      actionData={actionData}
    />
  );
}
