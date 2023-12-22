import LadingPageSvg from "../components/svgs/LadingPageSvg";
import SeoSvg from "../components/svgs/SeoSvg";
import SvgAppMovil from "../components/svgs/SvgAppMovil";
import SvgAppWeb from "../components/svgs/SvgAppWeb";
import SvgBlog from "../components/svgs/SvgBlog";
import SvgEcommerce from "../components/svgs/SvgEcommerce";
import SvgWebCorporativa from "../components/svgs/SvgWebCorporativa";
import SvgWebProgressive from "../components/svgs/SvgWebProgressive";

export const serviciosUno = [
  {
    svgIcon: <SvgBlog title="Blogs" />,
    servive: "Blogs",
    description: "¿Tu sitio necesita un impulso de contenido?",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    svgIcon: <LadingPageSvg title="Landing Pages" />,
    servive: "Landing Pages",
    description: "¿Tienes dificultades para convertir visitantes en clientes?",
    iconColor: "bg-orange-100",
    isUltimate: false,
  },
  {
    svgIcon: <SvgWebCorporativa title="Páginas Web Corporativas" />,
    servive: "Páginas Web Corporativas",
    description: "¿Tu presencia en línea no refleja la grandeza de tu empresa?",
    iconColor: "bg-gray-300",
    isUltimate: false,
  },
  {
    svgIcon: <SvgAppWeb title="Aplicaciones Web" />,
    servive: "Aplicaciones Web",
    description:
      "¿Necesitas una herramienta potente accesible desde cualquier navegador?",
    iconColor: "bg-red-200",
    isUltimate: true,
  },
];

export const serviciosDos = [
  {
    svgIcon: <SvgAppMovil title="Aplicaciones móviles" />,
    servive: "Aplicaciones móviles",
    description: "¿Quieres llevar tu negocio al bolsillo de tus clientes?",
    iconColor: "bg-yellow-200",
    isUltimate: false,
  },
  {
    svgIcon: <SvgWebProgressive title="Aplicaciones Web Progresivas" />,
    servive: "Aplicaciones Web Progresivas",
    description:
      "¿Quieres una experiencia móvil sin la necesidad de una descarga de app?",
    iconColor: "bg-green-200",
    isUltimate: false,
  },
  {
    svgIcon: <SeoSvg title="SEO" />,
    servive: "SEO",
    description:
      "¿Tu negocio no se encuentra en los primeros resultados de búsqueda?",
    iconColor: "bg-blue-100",
    isUltimate: false,
  },
  {
    svgIcon: <SvgEcommerce title="Tiendas Online" />,
    servive: "Tiendas Online",
    description: " ¡Transforma tu tienda, en un e-commerce imán de ventas!.",
    iconColor: "bg-orange-100",
    isUltimate: true,
  },
];
