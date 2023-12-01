import blog from "app/assets/imgs/icons/blogging.png";
import landgin from "app/assets/imgs/icons/contenido.png";
import corporativo from "app/assets/imgs/icons/corporativo.png";
import aplicaciones from "app/assets/imgs/icons/desarrollo-de-aplicaciones.png";
import exito from "app/assets/imgs/icons/desarrollo-de-carrera.png";
import progresivo from "app/assets/imgs/icons/progresivo.png";
import seo from "app/assets/imgs/icons/seo.png";
import tienda from "app/assets/imgs/icons/tienda-online.png";

export const serviciosUno = [
  {
    urlImg: blog,
    servive: "Blogs",
    description: "Crea contenido con nuestros blogs.",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    urlImg: landgin,
    servive: "Landing Pages",
    description: "Captura leads y promociona ofertas.",
    iconColor: "bg-orange-100",
    isUltimate: false,
  },
  {
    urlImg: corporativo,
    servive: "Páginas Web Corporativas",
    description: "Diseñamos páginas web personalizadas.",
    iconColor: "bg-gray-300",
    isUltimate: false,
  },
  {
    urlImg: aplicaciones,
    servive: "Aplicaciones Web",
    description: "Apps que satisfacen tus necesidades específicas.",
    iconColor: "bg-red-200",
    isUltimate: true,
  },
];

export const serviciosDos = [
  {
    urlImg: exito,
    servive: "Aplicaciones móviles",
    description: "Soluciones que impulsan el éxito de tu negocio.",
    iconColor: "bg-yellow-200",
    isUltimate: false,
  },
  {
    urlImg: progresivo,
    servive: "Aplicaciones Web Progresivas",
    description: "Ofrece una experiencia aumentando la retención de usuarios.",
    iconColor: "bg-green-200",
    isUltimate: false,
  },
  {
    urlImg: seo,
    servive: "SEO",
    description: "Atrae clientes potenciales con estrategias de SEO.",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    urlImg: tienda,
    servive: "Tiendas Online",
    description:
      "Aumentan ventas y ofrecen una experiencia de compra impecable.",
    iconColor: "bg-orange-100",
    isUltimate: true,
  },
];
