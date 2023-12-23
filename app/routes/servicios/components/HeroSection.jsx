import React from "react";
import hero from "~/assets/imgs/services/hero-img.webp";

export default function HeroSection() {
  return (
    <section className="max-md:h-full max-md:mb-4 pt-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-20">
        <div className="grid items-center grid-cols-1 max-lg:gap-12 lg:grid-cols-2 gap-6">
          <div>
            <h1 className="sm:motion-safe:animate-fadeInDown text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
              ¡Desbloquea el{" "}
              <strong className="font-serif italic">Éxito Digital</strong>!
            </h1>
            <p className="mt-8 text-base sm:text-xl sm:motion-safe:animate-fadeInLeft">
              ¿<strong className="font-bold">Sitios web</strong> obsoletos o
              poco funcionales? 🚫 ¿Tu presencia en línea no refleja la{" "}
              <strong className="font-bold">grandeza de tu empresa</strong>? 🏢
              ¿Te sientes frustrado porque tus visitantes no se{" "}
              <strong className="font-bold">convierten en clientes</strong>? 😟
              ¿Necesitas una herramienta accesible desde cualquier dispositivo
              con una <strong className="font-bold">web app</strong> 💻📱?
              ¿Quieres llevar tu negocio al bolsillo de tus clientes con una{" "}
              <strong className="font-bold">app móvil 📱</strong>?
            </p>
          </div>
          <div className="relative">
            <img
              decoding="async"
              loading="lazy"
              className="w-full object-cover relative z-auto sm:motion-safe:animate-fadeInRight"
              src={hero}
              alt=""
            />
            <div className="bg-gradient-pink absolute top-[-10rem] max-lg:hidden max-md:hidden left-[30%] h-[640px] w-[250px] -z-10 sm:motion-safe:animate-fadeInUp"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
