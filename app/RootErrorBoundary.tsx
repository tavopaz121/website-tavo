import { Links, Meta, Scripts } from "@remix-run/react";
import { useRouteError, isRouteErrorResponse } from "@remix-run/react";
import Nav from "./components/Navs/Nav";
import { items, secondaryItems } from "~/data/navItems";
import img from "./assets/imgs/error/tristeza.webp";

export default function RootErrorBoundary() {
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
          <Nav items={items} secondaryItems={secondaryItems} />
          <section className="flex flex-wrap relative lg:mx-20">
            <div className="grid relative place-items-center flex-auto">
              <img
                decoding="async"
                loading="lazy"
                alt="Error 404"
                className="h-[300px] w-[300px] object-cover relative lg:h-[400px] lg:w-[400px]"
                src={img}
              />
            </div>
            <div className="grid relative place-items-center text-center flex-auto lg:my-[13%]">
              <h1 className="lg:text-7xl">Lo sentimos .....</h1>
              <h4 className="w-[60%] lg:text-2xl lg:w-[60%] lg:mt-[5%]">
                ¡La página que estas buscando esta en construcción o no existe!
              </h4>
            </div>
            {process?.env?.NODE_ENV === "development" && (
              <h1>
                {isRouteErrorResponse(error)
                  ? `${error.data}. ${error.status} ${error.statusText}.`
                  : error instanceof Error
                  ? error.message
                  : "Unknown Error"}
              </h1>
            )}
          </section>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
