import { Transition } from "@headlessui/react";
import Particles from "~/components/Particles/Particles";
import Illustration from "~/assets/imgs/proyectos/glow-top.svg";
import { useState } from "react";
import colaboraYAprendeImg from "~/assets/imgs/equipo/Unsplash-colaborayaprende.webp";
import creaASAPImg from "~/assets/imgs/equipo/Unsplash-creaASAP.webp";
import retroalimentaImg from "~/assets/imgs/equipo/Unsplash-retroalimenta.webp";
import adaptaMejoraImg from "~/assets/imgs/equipo/Unsplash-adapta.webp";

export default function Features() {
  const [tab, setTab] = useState(1);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 bg-slate-900 pb-20">
        {/* Illustration */}
        <div
          className="absolute inset-0 z-0 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <img
              src={Illustration}
              className="max-w-none hue-rotate-[374deg]"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div
                className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
                data-aos="`fade`-down"
              >
                {/* Content #1 */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-pink-500 to-pink-200 pb-3">
                    Cuiadamos tu recurso máximo no renovable: tu tiempo.
                  </div>
                </div>
                <h3 className="h3 text-4xl lg:text-6xl font-bold bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-200/60 pb-3">
                  Método <span className={`font-serif italic`}>ágil</span>
                </h3>

                {tab === 1 && (
                  <div
                    className="motion-safe:animate-fadeIn"
                    style={{
                      animationFillMode: "both",
                    }}
                  >
                    <h3 className="h3 text-white pb-3">
                      💡Colabora y aprende.
                    </h3>
                    <p className="text-lg text-slate-400 mb-8 min-h-[84px]">
                      Trabajamos codo a codo contigo para comprender tus
                      objetivos y necesidades.
                    </p>
                  </div>
                )}

                {tab === 2 && (
                  <div
                    className="motion-safe:animate-fadeIn"
                    style={{
                      animationFillMode: "both",
                    }}
                  >
                    <h3 className="h3 text-white pb-3">🚀Crea ASAP</h3>
                    <p className="text-lg text-slate-400 mb-8 min-h-[84px]">
                      Entregamos resultados en iteraciones rápidas y manejables.
                      Permitiéndote ver el progreso de manera constante.
                    </p>
                  </div>
                )}

                {tab === 3 && (
                  <div
                    className="motion-safe:animate-fadeIn"
                    style={{
                      animationFillMode: "both",
                    }}
                  >
                    <h3 className="h3 text-white pb-3">🔄Retroalimenta.</h3>
                    <p className="text-lg text-slate-400 mb-8 min-h-[84px]">
                      Ponemos a prueba lo que hemos construido y recopilamos tus
                      comentarios permitiéndonos identificar áreas de mejora y
                      ajustar nuestro camino.
                    </p>
                  </div>
                )}

                {tab === 4 && (
                  <div
                    className="motion-safe:animate-fadeIn"
                    style={{
                      animationFillMode: "both",
                    }}
                  >
                    <h3 className="h3 text-white pb-3">🌟Adapta/mejora.</h3>
                    <p className="text-lg text-slate-400 mb-8 min-h-[84px]">
                      Adaptamos nuestro enfoque y mejoramos continuamente
                      nuestros procesos.
                    </p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4 items-baseline items mt-8 space-y-2">
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 1
                        ? "border-slate-700 opacity-50"
                        : "border-pink-500 shadow shadow-pink-500/25"
                    }`}
                    onClick={() => setTab(1)}
                  >
                    <span>1.💡Colabora y aprende.</span>
                  </button>
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 2
                        ? "border-slate-700 opacity-50"
                        : "border-pink-700 shadow shadow-pink-500/25"
                    }`}
                    onClick={() => setTab(2)}
                  >
                    <span>2.🚀Crea ASAP</span>
                  </button>
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 3
                        ? "border-slate-700 opacity-50"
                        : "border-pink-700 shadow shadow-pink-500/25"
                    }`}
                    onClick={() => setTab(3)}
                  >
                    <span>3.🔄Retroalimenta.</span>
                  </button>
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 4
                        ? "border-slate-700 opacity-50"
                        : "border-pink-700 shadow shadow-pink-500/25"
                    }`}
                    onClick={() => setTab(4)}
                  >
                    <span>4.🌟Adapta/mejora.</span>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className="md:w-5/12 lg:w-1/2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative py-24 -mt-12">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0"
                    quantity={50}
                    staticity={10}
                  />

                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48 flex justify-center items-center">
                      {/* Halo effect */}
                      <svg
                        className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                        width="480"
                        height="480"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="pulse-a"
                            x1="50%"
                            x2="50%"
                            y1="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="76.382%" stopColor="#FAF5FF" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path
                            className="pulse"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-1"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-2"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                        </g>
                      </svg>
                      {/* Grid */}
                      <div className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)] [-webkit-mask-image:_radial-gradient(black,_transparent_60%)]">
                        <div className="h-[200%] animate-endless">
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.pink.500)_48px,_theme(colors.pink.500)_49px)]" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.pink.500)_48px,_theme(colors.pink.500)_49px)]" />
                        </div>
                      </div>
                      {/* Icons */}
                      <Transition
                        show={tab === 1}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex items-center justify-center overflow-hidden border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={colaboraYAprendeImg}
                            alt="Colabora y aprende"
                          />
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 2}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex items-center justify-center overflow-hidden border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={creaASAPImg}
                            alt="Crea ASAP"
                          />
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 3}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex items-center justify-center overflow-hidden border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={retroalimentaImg}
                            alt="Retroalimenta"
                          />
                        </div>
                      </Transition>

                      <Transition
                        show={tab === 4}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex items-center justify-center overflow-hidden border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={adaptaMejoraImg}
                            alt="Adapta y mejora"
                          />
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
