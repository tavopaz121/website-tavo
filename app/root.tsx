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
import type { LoaderArgs } from "@remix-run/node";
import type { UserRecord } from "firebase-admin/auth";
import { json } from "@remix-run/node";
import { getLoggedUser } from "./firebase/auth.server";
import Nav from "./components/Navs/Nav";
import { items, secondaryItems } from "~/data/navItems";
import { useState } from "react";
import Logo from "~/components/Logo/Logo";
import { linkItems } from "./data/linkItems";

export const links: LinksFunction = () => linkItems;

export const meta = () => [{ title: "Pensemos web" }];

export async function loader({ request }: LoaderArgs) {
  const user: UserRecord | null = await getLoggedUser(request);

  return json({ user });
}

export default function App() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  function handleMenuButton() {
    setIsHidden(!isHidden);
  }

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
        <main className={`${isHome ? "" : "pt-[108px]"}`}>
          <Nav
            handleMenuButton={handleMenuButton}
            logo={
              <Logo
                className="h-10 fill-white"
                color={`${isHome ? "#ffffff" : "#000000"}`}
              />
            }
            items={items}
            secondaryItems={secondaryItems}
            hasLogo={true}
            aLign="center"
            isHidden={isHidden}
            isHome={isHome}
          />
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
