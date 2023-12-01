import servicesImg from "~/assets/imgs/inicio/services.webp";
import { serviciosUno, serviciosDos } from "~/data/servicesHome";

import CardServicio from "./CardServicio";
import { useCallback, useEffect, useState } from "react";

interface ProListServices {
  referenceTitle: React.MutableRefObject<null>;
}

export default function ListServicios({ referenceTitle }: ProListServices) {
  const [animation, setAnimation] = useState("");
  const [start, setStart] = useState<boolean>(false);
  let gridColumns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  let delayListLeft = 1;
  let delayListRight = 1;

  function showListServices(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setAnimation("motion-safe:animate-fadeInUp motion-safe:opacity-100");
        setStart(true);
      }
    });
  }

  const showListServicesCb = useCallback(showListServices, []);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    const observer = new IntersectionObserver(showListServicesCb, options);
    observer.observe(referenceTitle.current!);

    //This is useful when reloading page and/or when user scroll up to the target
    const scrollPosition = window.scrollY;
    if (
      referenceTitle &&
      referenceTitle.current &&
      scrollPosition > referenceTitle?.current?.offsetHeight
    ) {
      setAnimation("motion-safe:animate-fadeInUp motion-safe:opacity-100");
      setStart(true);
    }

    return () => {
      observer.disconnect();
    };
  }, [showListServicesCb, referenceTitle]);

  return (
    <div
      data-testid="list-services"
      className={`motion-safe:opacity-0 ${animation}`}
      style={{
        animationDelay: "0.5s",
        animationFillMode: "both",
      }}
    >
      <div
        className={`grid gap-0 lg:gap-10 ${gridColumns} items-center md:justify-between`}
      >
        <div
          className={`flex xl:flex-col max-w-lg overflow-hidden order-2 justify-self-center md:order-1`}
        >
          <div className="px-4 lg:mb-0">
            {serviciosUno.map((servicio) => (
              <CardServicio
                key={servicio.servive}
                {...servicio}
                position="left"
                start={start}
                delay={(delayListLeft += 0.25)}
              />
            ))}
          </div>
        </div>

        <img
          decoding="async"
          loading="lazy"
          className="md:order-2 motion-safe:animate-fadeIn rounded-full block  h-[300px] w-[300px] lg:h-[600px] lg:w-[400px] bg-cover bg-center bg-no-repeat mx-auto mb-8 object-cover"
          style={{
            animationDelay: "0.5s",
            animationFillMode: "both",
            animationDuration: "1.5s",
          }}
          src={servicesImg}
          alt="Mujer sonriendo con una latop"
          loading="lazy"
        />

        <div
          className={`flex xl:flex-col max-w-lg overflow-hidden order-1 justify-self-center md:order-3 col-span-2 lg:col-span-1`}
        >
          <div className="xl:w-auto px-4 lg:mb-0">
            {serviciosDos.map((servicio) => (
              <CardServicio
                key={servicio.servive}
                {...servicio}
                position="right"
                delay={(delayListRight += 0.25)}
                start={start}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
