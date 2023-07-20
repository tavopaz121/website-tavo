import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet, content: "text/css" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "./icons/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "./icons/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "./icons/favicon-16x16.png" },
  { rel: "manifest", href: "./icons/site.webmanifest" },
  { rel: "mask-icon", href: "./icons/safari-pinned-tab.svg", color: "#5bbad5" },
];

export const meta = () => ([
  { charset: "utf-8" },
  { title: "Comida sana" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "msapplication-TileColor", content: "#da532c" },
  { name: "theme-color", content: "#ffffff" }
]);

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
