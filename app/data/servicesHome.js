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
    description: "¿Tu sitio necesita un impulso de contenido?",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    urlImg: landgin,
    servive: "Landing Pages",
    description: "¿Tienes dificultades para convertir visitantes en clientes?",
    iconColor: "bg-orange-100",
    isUltimate: false,
  },
  {
    urlImg: corporativo,
    servive: "Páginas Web Corporativas",
    description: "¿Tu presencia en línea no refleja la grandeza de tu empresa?",
    iconColor: "bg-gray-300",
    isUltimate: false,
  },
  {
    urlImg: aplicaciones,
    servive: "Aplicaciones Web",
    description:
      "¿Necesitas una herramienta potente accesible desde cualquier navegador?",
    iconColor: "bg-red-200",
    isUltimate: true,
  },
];

export const serviciosDos = [
  {
    urlImg: exito,
    servive: "Aplicaciones móviles",
    description: "¿Quieres llevar tu negocio al bolsillo de tus clientes?",
    iconColor: "bg-yellow-200",
    isUltimate: false,
  },
  {
    urlImg: progresivo,
    servive: "Aplicaciones Web Progresivas",
    description:
      "¿Quieres una experiencia móvil sin la necesidad de una descarga de app?",
    iconColor: "bg-green-200",
    isUltimate: false,
  },
  {
    urlImg: seo,
    servive: "SEO",
    description:
      "¿Tu negocio no se encuentra en los primeros resultados de búsqueda?",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    urlImg: tienda,
    servive: "Tiendas Online",
    description: " ¡Transforma tu tienda, en un e-commerce imán de ventas!.",
    iconColor: "bg-orange-100",
    isUltimate: true,
  },
];
