import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Particles from "~/components/Particles/Particles";
import ButtonLink from "~/components/Buttons/ButtonLink";

import principles from "~/assets/imgs/inicio/principios-1200x740.webp";
import principlesSmall from "~/assets/imgs/inicio/principios-600x370.webp";
import { items } from "~/data/principles";

export default function Principios({
  hasParticles = false,
}: {
  hasParticles?: boolean;
}) {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const [autorotateTiming] = useState<number>(7000);
  const principlesRef = useRef<HTMLDivElement>(null);
  const referenceTitle = useRef<HTMLHeadingElement>(null);
  const [animations, setAnimations] = useState({
    left: "",
    right: "",
  });

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : (active) => active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, autorotateTiming]);

  const heightFix = () => {
    if (principlesRef.current && principlesRef.current.parentElement)
      principlesRef.current.parentElement.style.height = `${principlesRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimations({
            left: "sm:motion-safe:animate-fadeInLeft sm:motion-safe:opacity-100",
            right:
              "sm:motion-safe:animate-fadeInRight sm:motion-safe:opacity-100",
          });
        }
      });
    }, options);
    observer.observe(referenceTitle.current);

    //This is useful when reloading page and/or when user scroll up to the target
    const scrollPosition = window.scrollY;
    if (
      referenceTitle &&
      referenceTitle.current &&
      scrollPosition > referenceTitle?.current?.offsetHeight
    ) {
      setAnimations({
        left: "sm:motion-safe:animate-fadeInLeft sm:motion-safe:opacity-100",
        right: "sm:motion-safe:animate-fadeInRight sm:motion-safe:opacity-100",
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="container mx-auto px-4 relative py-10 lg:py-20">
      <div className="pb-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase inline-block py-1 px-3 mb-4 text-xs font-semibold text-pink-500 bg-orange-50 rounded-full">
            Principios
          </span>
          <h2
            ref={referenceTitle}
            className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8"
          >
            <span>Nuestros </span>
            <span className="font-serif italic relative">Principios</span>
          </h2>
        </div>
        <picture
          className={`flex justify-center w-full mb-12 sm:motion-safe:opacity-0 ${animations.left}`}
          style={{
            animationDelay: "0s",
            animationFillMode: "both",
          }}
        >
          <img
            decoding="async"
            loading="lazy"
            className="rounded-3xl"
            width={600}
            height={370}
            src={principlesSmall}
            srcSet={`
              ${principlesSmall} 600w,
              ${principles} 1200w
              `}
            sizes="(min-width: 680px) 600px, 92.22vw"
            alt="Principios"
          />
        </picture>
        <section
          className={`relative overflow-hidden py-8 sm:rounded-r-full sm:rounded-l-full sm:motion-safe:opacity-0 ${animations.right}`}
          style={{
            animationDelay: "0.5s",
            animationFillMode: "both",
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl -mx-20 -z-10 overflow-hidden mb-12 mt-0 md:mb-0"
            aria-hidden="true"
          >
            {/* Illustration */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10 blur-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2106"
                height="1327"
              >
                <defs>
                  <filter
                    id="hi-a"
                    width="133.3%"
                    height="131.3%"
                    x="-16.7%"
                    y="-15.6%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                  <filter
                    id="hi-b"
                    width="133.3%"
                    height="131.3%"
                    x="-16.7%"
                    y="-15.6%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                  <filter
                    id="hi-c"
                    width="159.9%"
                    height="145%"
                    x="-29.9%"
                    y="-22.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#6D28D9"
                    fillOpacity=".72"
                    d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                    filter="url(#hi-a)"
                    transform="translate(0 -605)"
                  />
                  <path
                    fill="#67E8F9"
                    fillOpacity=".64"
                    d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                    filter="url(#hi-b)"
                    transform="translate(0 -605)"
                  />
                  <path
                    fill="#F472B6"
                    fillOpacity=".8"
                    d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
                    filter="url(#hi-c)"
                    transform="translate(0 -605)"
                  />
                </g>
              </svg>
            </div>
          </div>
          {/* Particles animation */}
          {hasParticles ? (
            <div className="absolute left-0 top-0 w-[100%] h-[100%] -mt-6">
              <Particles
                className="absolute inset-0 -z-1"
                quantity={100}
                staticity={20}
              />
            </div>
          ) : null}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
            <div className="relative w-full">
              {/* Carousel */}
              <div className="text-center sm:w-[50%] mx-auto">
                {/* Testimonial image */}
                <div className="relative h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]">
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none 
                    before:rounded-full rounded-full 
                    before:absolute before:inset-0 before:bg-gradient-to-b 
                    before:from-slate-400/20 before:to-transparent before:to-30% after:rounded-full 
                    
                      `}
                  >
                    {/* after:absolute after:inset-0 after:bg-slate-900 after:m-px before:-z-20 after:-z-30 */}
                    {items.map((item, index) => (
                      <Transition
                        key={index}
                        show={active === index}
                        className="absolute inset-0 h-full -z-10"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                        beforeEnter={() => heightFix()}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          className="relative mt-5 left-1/2 -translate-x-1/2"
                          src={item.img}
                          width={150}
                          height={150}
                          alt={item.name}
                        />
                      </Transition>
                    ))}
                  </div>
                </div>
                {/* Text */}
                <div className="mt-15 mb-10 md:mb-5 transition-all duration-150 delay-300 ease-in-out font-body font-light">
                  <div className="relative flex flex-col" ref={principlesRef}>
                    {items.map((item, index) => (
                      <Transition
                        key={index}
                        show={active === index}
                        enter="transition ease-in-out duration-500 delay-200 order-first"
                        enterFrom="opacity-0 -translate-x-4"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-out duration-300 delay-300 absolute"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-4"
                        beforeEnter={() => heightFix()}
                      >
                        <div className=" text-white">
                          <span className=" text-xl font-bold font-heading">
                            {item.title}
                          </span>
                          {". "}
                          <span className="font-body text-lg">{item.text}</span>
                        </div>
                      </Transition>
                    ))}
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex flex-wrap justify-center -m-1.5 mt-5 sm:mt-0">
                  {items.map((item, index) => (
                    <button
                      className={`text-slate-300 transition duration-150 ease-in-out px-4 py-2 m-1.5 rounded-full bg-gradient-to-br from-slate-900 to-slate-800
                      
                      relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none ${
                        active === index
                          ? "opacity-100"
                          : "opacity-30 hover:opacity-60"
                      }`}
                      key={index}
                      onClick={() => {
                        setActive(index);
                        setAutorotate(false);
                      }}
                    >
                      <span className="relative">
                        <span className="text-white">{item.name}</span>{" "}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center mt-5">
        <ButtonLink to="/nosotros">Más sobre Principios</ButtonLink>
      </div>
    </section>
  );
}
