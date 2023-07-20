import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import type { UserRecord } from "firebase-admin/auth";
import { json } from "@remix-run/node";

import stylesheet from "~/tailwind.css";
import FooterNav from "./components/FooterNav/FooterNav";
import { getLoggedUser } from "./firebase/auth.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet, content: "text/css" },
];

export const meta = () => [
  { charset: "utf-8" },
  { title: "Comida sana" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);

  return json({ user });
}

export default function App() {
  const loaderData = useLoaderData();
  const { user } = loaderData;

  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <FooterNav user={user} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
