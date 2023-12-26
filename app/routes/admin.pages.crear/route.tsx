import { Form } from "@remix-run/react";
import { useState } from "react";
import TextField from "~/components/AdminPages/TextField/TextField";
import TextArea from "~/components/AdminPages/TextArea/TextArea";

export default function CrearPages() {
  const [metas, setMetas] = useState({
    openGraph: [
      {
        name: "og:locale",
        content: "es-MX",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:title",
        content: "",
      },
      {
        name: "og:description",
        content: "",
      },
      {
        name: "og:url",
        content: "",
      },
      {
        name: "og:site_name",
        content: "",
      },
    ],
    twitter: [
      {
        name: "twitter:card",
        content: "",
      },
      {
        name: "twitter:site",
        content: "",
      },
      {
        name: "twitter:creator",
        content: "",
      },
      {
        name: "twitter:title",
        content: "",
      },
      {
        name: "twitter:description",
        content: "",
      },
    ],
  });
  return (
    <section className="grid place-items-center items-start my-10">
      <div className="w-full lg:w-[60%]">
        <div className="w-full">
          <h1 className="text-4xl font-extrabold mb-2 text-white">
            Agregar nueva página
          </h1>
          <div className="text-gray-500">
            Los campos con * son obligatorios. Ingresa todos los datos
            correspondientes.
          </div>
        </div>

        <Form>
          <div className="py-6">
            <div className="text-lg font-bold text-white mb-5">
              <span className="text-indigo-500">1.</span> Datos generales
            </div>
            <div className="space-y-4">
              <div className="w-full mb-4 md:mb-0">
                <TextField
                  title="Titulo"
                  name="title"
                  placeholder="Ingresa el titulo de la página"
                  required
                />
              </div>
              <div className="w-full mb-4 md:mb-0">
                <TextArea
                  title="Descripción"
                  name="description"
                  placeholder="Ingresa la descripción de la página"
                  required
                  rows={6}
                />
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className="text-lg font-bold text-white mb-5">
              <span className="text-indigo-500">2.</span> Open Graph
            </div>
            <div className="space-y-4">
              {metas.openGraph?.map((meta, index) => (
                <div className="w-full mb-4 md:mb-0" key={index}>
                  <TextField
                    title={meta.name}
                    name="title"
                    placeholder={`Ingresa el '${meta.name}' de la aplicación`}
                    value={meta.content}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="py-6">
            <div className="text-lg font-bold text-white mb-5">
              <span className="text-indigo-500">3.</span> Twitter
            </div>
            <div className="space-y-4">
              {metas.twitter?.map((meta, index) => (
                <div className="w-full mb-4 md:mb-0" key={index}>
                  <TextField
                    title={meta.name}
                    name="title"
                    placeholder={`Ingresa el '${meta.name}' de la aplicación`}
                    value={meta.content}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button
                type="submit"
                className="btn text-white bg-gradient-pink hover:opacity-80 w-full mx-auto"
              >
                Enviar
              </button>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}
