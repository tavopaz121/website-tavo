import blog from "app/assets/imgs/icons/blogging.png";
import landgin from "app/assets/imgs/icons/contenido.png";
import corporativo from "app/assets/imgs/icons/corporativo.png";
import aplicaciones from "app/assets/imgs/icons/desarrollo-de-aplicaciones.png";
import exito from "app/assets/imgs/icons/desarrollo-de-carrera.png";
import progresivo from "app/assets/imgs/icons/progresivo.png";
import seo from "app/assets/imgs/icons/seo.png";
import tienda from "app/assets/imgs/icons/tienda-online.png";
import servicesImg from "~/assets/imgs/inicio/services.webp";

import CardServicio from "./CardServicio";
import { useEffect, useState } from "react";

interface ProListServices {
  referenceTitle: React.MutableRefObject<null>;
}

const serviciosUno = [
  {
    urlImg: blog,
    servive: "Blogs",
    description: "Crea contenido con nuestros blogs",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    urlImg: landgin,
    servive: "Landing Pages",
    description: "Captura leads y promociona ofertas",
    iconColor: "bg-orange-100",
    isUltimate: false,
  },
  {
    urlImg: corporativo,
    servive: "Páginas Web Corporativas",
    description: "Diseñamos páginas web personalizadas",
    iconColor: "bg-gray-300",
    isUltimate: false,
  },
  {
    urlImg: aplicaciones,
    servive: "Aplicaciones Web",
    description: "Apps que satisfacen tus necesidades específicas",
    iconColor: "bg-red-200",
    isUltimate: true,
  },
];

const serviciosDos = [
  {
    urlImg: exito,
    servive: "Tu Éxito, Nuestra Prioridad",
    description: "¡Contáctanos hoy mismo!",
    iconColor: "bg-yellow-200",
    isUltimate: false,
  },
  {
    urlImg: progresivo,
    servive: "Aplicaciones Web Progresivas",
    description: "Ofrece una experiencia aumentando la retención de usuarios",
    iconColor: "bg-green-200",
    isUltimate: false,
  },
  {
    urlImg: seo,
    servive: "SEO",
    description: "Atrae clientes potenciales con estrategias de SEO",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    urlImg: tienda,
    servive: "Tiendas Online",
    description:
      "Aumentan ventas y ofrecen una experiencia de compra impecable",
    iconColor: "bg-orange-100",
    isUltimate: true,
  },
];

export default function ListServicios({ referenceTitle }: ProListServices) {
  const [isHidden, setIsHidden] = useState("hidden");
  let gridColumns = isHidden == "hidden" ? "grid-cols-1" : "grid-cols-3";
  let delayListLeft = 0.5;
  let delayListRight = 0.5;

  const options = { root: null, rootMargin: "0px", threshold: 1.0 };

  useEffect(() => {
    const observer = new IntersectionObserver(showListServices, options);
    observer.observe(referenceTitle.current);
  });

  function showListServices(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsHidden("");
      }
    });
  }

  return (
    <div data-testid="list-services" className="mx-auto">
      <div className={`grid ${gridColumns} items-center justify-around`}>
        <div
          className={`flex xl:flex-col max-w-lg overflow-hidden ${isHidden}`}
        >
          <div className="xl:w-auto px-4 mb-16 lg:mb-0">
            {serviciosUno.map((servicio) => (
              <CardServicio
                key={servicio.servive}
                {...servicio}
                position="left"
                delay={(delayListLeft += 0.25)}
              />
            ))}
          </div>
        </div>

        <img
          className="motion-safe:animate-fadeIn rounded-[50%] h-[600px] bg-cover bg-center bg-no-repeat mx-auto mb-8 object-cover"
          style={{
            animationDelay: "0.5s",
            animationFillMode: "both",
            animationDuration: "1.5s",
          }}
          src={servicesImg}
          alt="Mujer sonriendo con una latop"
        />

        <div
          className={`flex xl:flex-col max-w-lg overflow-hidden ${isHidden}`}
        >
          <div className="xl:w-auto px-4 mb-16 lg:mb-0">
            {serviciosDos.map((servicio) => (
              <CardServicio
                key={servicio.servive}
                {...servicio}
                position="right"
                delay={(delayListRight += 0.25)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
//iconos <a href="https://www.flaticon.es/iconos-gratis/empresa" title="empresa iconos">Empresa iconos creados por Freepik - Flaticon</a>
