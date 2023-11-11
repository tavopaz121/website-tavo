import { Links, Meta, Scripts } from "@remix-run/react";
import { useRouteError, isRouteErrorResponse } from "@remix-run/react";
import Nav from "./components/Navs/Nav";
import { items, secondaryItems } from "~/data/navItems";
import { useState } from "react";
import Logo from "~/components/Logo/Logo";

export default function RootErrorBoundary() {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  function handleMenuButton() {
    setIsHidden(!isHidden);
  }

  const error = useRouteError();

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="msapplication-TileColor" content="#fd2284" />
        <meta name="theme-color" content="#fd2284" />
        <title>Ups! Algo no está bien - Pensemos web</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="pt-[108px]">
          <Nav
            handleMenuButton={handleMenuButton}
            logo={<Logo className="h-10 fill-white" color="#000000" />}
            items={items}
            secondaryItems={secondaryItems}
            hasLogo={true}
            aLign="center"
            isHidden={isHidden}
          />
          <section className="px-4">
            <h1>
              {isRouteErrorResponse(error)
                ? `${error.data}. ${error.status} ${error.statusText}.`
                : error instanceof Error
                ? error.message
                : "Unknown Error"}
            </h1>
          </section>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
