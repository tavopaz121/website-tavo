import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Nav from "./components/Navs/Nav";
import { items, secondaryItems } from "~/data/navItems";
import { htmlPageLinks } from "./data/htmlPageLinks";
import RootErrorBoundary from "./RootErrorBoundary";
import Footer from "./components/Footer/Footer";

export const ErrorBoundary = RootErrorBoundary;

export const links: LinksFunction = () => htmlPageLinks;

export const meta = () => [
  { title: "Desarrollo ágil, apps y web - Pensemosweb" },
];

export default function App() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

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
        <main className={`overflow-hidden`}>
          {isHome ? null : (
            <Nav
              items={items}
              secondaryItems={secondaryItems}
              isHome={isHome}
            />
          )}
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
