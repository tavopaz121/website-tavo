import React from "react";
import ButtonLink from "../../../components/Button/ButtonLink";

const ContrataPaquete = () => {
  return (
    <>
      <div className="px-4 mx-auto overflow-hidden bg-gray-900 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                Contrata tu paquete de desarrollo web{" "}
              </h2>
              <p className="mt-4 text-base text-gray-50">
                Llega a las personas adecuadas, en el momento adecuado, atrae a
                más clientes con una nueva página web.
              </p>

              <div className="flex flex-row items-center mt-4 space-x-4 lg:mt-8 pt-10">
                <ButtonLink
                  className="w-1/2 h-12"
                  color="black"
                  href="/contacto"
                  typeHover="bottomBar"
                >
                  Cotiza tu página web
                </ButtonLink>
              </div>
            </div>

            <div className="relative px-12">
              <svg
                className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-gray-800 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              <img
                decoding="async"
                loading="lazy"
                className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContrataPaquete;
