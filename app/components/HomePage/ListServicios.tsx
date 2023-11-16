import blog from "app/assets/imgs/icons/blogging.png";
import landgin from "app/assets/imgs/icons/contenido.png";
import corporativo from "app/assets/imgs/icons/corporativo.png";
import aplicaciones from "app/assets/imgs/icons/desarrollo-de-aplicaciones.png";
import exito from "app/assets/imgs/icons/desarrollo-de-carrera.png";
import progresivo from "app/assets/imgs/icons/progresivo.png";
import seo from "app/assets/imgs/icons/seo.png";
import tienda from "app/assets/imgs/icons/tienda-online.png";
import laptop from "app/assets/imgs/laptop.jpeg";
import laptopPink from "app/assets/imgs/laptop-pink.jpeg";

import CardServicio from "./CardServicio";

export default function Servicios() {
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

  return (
    <div data-testid="list-services" className="max-w-7xl mx-auto">
      <div className="flex flex-wrap -mx-4 items-center justify-around">
        <div className="flex flex-col xs:items-center xl:items-start max-w-lg">
          <div className="xl:w-auto px-4 lg:pb-10 mb-16 lg:mb-0">
            {serviciosUno.map((servicio, i) => (
              <CardServicio key={i} {...servicio} position="left" delay={1} />
            ))}
          </div>
          <div className="xl:w-auto lg:mb-0 mx-auto px-4 mb-16">
            <img
              className="block h-auto md:h-100 lg:h-auto xl:h-150 mx-auto"
              src={laptop}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-col max-w-lg">
          <div className="xl:w-auto lg:mb-0 mx-auto px-4 mb-16">
            <img
              className="block h-auto md:h-100 lg:h-auto xl:h-150 mx-auto"
              src={laptopPink}
              alt=""
            />
          </div>
          <div className="xl:w-auto px-4 lg:pb-10 mb-16 lg:mb-0">
            {serviciosDos.map((servicio, i) => (
              <CardServicio key={i} {...servicio} position="right" delay={1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
//iconos <a href="https://www.flaticon.es/iconos-gratis/empresa" title="empresa iconos">Empresa iconos creados por Freepik - Flaticon</a>
