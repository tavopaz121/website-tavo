import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import type { UserRecord } from "firebase-admin/auth";
import { json } from "@remix-run/node";

import stylesheet from "~/tailwind.css";
import { getLoggedUser } from "./firebase/auth.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet, content: "text/css" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "./icons/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "./icons/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "./icons/favicon-16x16.png",
  },
  { rel: "manifest", href: "./icons/site.webmanifest" },
  //{ rel: "mask-icon", href: "./icons/safari-pinned-tab.svg", color: "#5DBF17" },
];

export const meta = () => [{ title: "Pensemos web" }];

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);

  return json({ user });
}

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="msapplication-TileColor" content="#fd2284" />
        <meta name="theme-color" content="#fd2284" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="p-2 pb-20">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
