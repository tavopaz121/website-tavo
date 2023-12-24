import AOS from "aos";
import aosStyles from "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Lenguajes from "./components/Lenguajes";
import MetodoAgil from "./components/MetodoAgil";
import proyectosStyles from "./styles.css";
import Proyectos from "./components/Proyectos";
import Principios from "./components/Principios";

import { metaFn } from "~/functions/shared/meta";
import { json, type LoaderArgs } from "@remix-run/node";
import { getPage } from "~/firebase/models/pages.server";
import { useLoaderData } from "@remix-run/react";

export const meta = metaFn;
export async function loader({ params }: LoaderArgs) {
  const page = await getPage("proyectos");

  return json(page);
}

export function links() {
  return [
    { rel: "stylesheet", href: aosStyles, content: "text/css" },
    { rel: "stylesheet", href: proyectosStyles, content: "text/css" },
  ];
}

export default function ProyectosRoute() {
  const data = useLoaderData();
  const projects = data.projects;
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });

  console.log(data)

  return (
    <div className="flex flex-col min-h-screen overflow-hidde bg-slate-900 pb-48 overflow-hidden">
      <Hero />
      <Lenguajes />
      <MetodoAgil />
      <Principios />
      <Proyectos list={projects} />
    </div>
  );
}
