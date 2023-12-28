import { Form, useActionData } from "@remix-run/react";
import { type ChangeEvent, useState } from "react";
import { json, type ActionArgs } from "@remix-run/node";
import fields from "./data/fields";
import TextField from "../admin/TextField/TextField";
import TextArea from "../admin/TextArea/TextArea";
import { createPage } from "~/firebase/models/pages.server";

type MetaObject = {
  name: string;
  content: string | File;
};

type DataObject = {
  title?: string | File;
  description?: { name: string; content: string | File };
  metas?: MetaObject[];
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const formDataArray = Array.from(formData.entries());
  const formDataObject: { [key: string]: string | File } = {};
  const errors: { [key: string]: string | undefined } = {};

  for (const [name, value] of formDataArray) {
    if (value instanceof File) {
      formDataObject[name] = value;
    } else {
      const trimmedValue = String(value).trim();
      formDataObject[name] = trimmedValue;

      if (["title", "description"].includes(name) && !trimmedValue) {
        // if (!trimmedValue && name !== "files")
        errors[name] = "Este campo no puede estar vacío";
      }
    }
  }

  const data: DataObject = {
    title: formDataObject.title,
    description: { name: "description", content: formDataObject.description },
    metas: [],
  };

  for (const key in formDataObject) {
    if (
      (formDataObject.hasOwnProperty(key) && key.startsWith("og:")) ||
      key.startsWith("twitter:")
    ) {
      const content: string | File = formDataObject[key] || "";
      data?.metas?.push({ name: key, content });
    }
  }

  const result = await createPage(data);

  console.log(result);

  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  return json(formDataObject);
};

export default function CrearPages() {
  const actionData = useActionData<typeof action>();
  const [metas, setMetas] = useState(fields);

  const handleFieldChange = (
    fieldName: string,
    value: string | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const fieldValue = typeof value === "string" ? value : value.target.value;

    setMetas((prevMetas) => {
      const updatedOpenGraph = prevMetas.openGraph.map((meta) =>
        meta.name === fieldName ? { ...meta, content: fieldValue } : meta,
      );

      const updatedOpenGraphWithGeneralValues = updatedOpenGraph.map((meta) =>
        prevMetas.general.find((generalMeta) => generalMeta.name === meta.name)
          ? { ...meta, content: fieldValue }
          : meta,
      );

      return {
        ...prevMetas,
        general: prevMetas.general.map((meta) =>
          meta.name === fieldName ? { ...meta, content: fieldValue } : meta,
        ),
        openGraph: updatedOpenGraphWithGeneralValues,
        twitter: prevMetas.twitter.map((meta) =>
          meta.name === fieldName ? { ...meta, content: fieldValue } : meta,
        ),
      };
    });
  };

  console.log(metas);

  const textFieldClasses = {
    label: "block text-gray-200 text-base font-normal mb-1",
    input:
      "form-input bg-black autofill:!bg-black p-4 w-full text-white autofill:!text-white focus:outline-none focus:border-[1px] focus:border-pink-600 border-[1px] border-transparent placeholder-slate-400",
    error: "text-red-500 text-sm mt-2",
  };

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

        <Form method="POST">
          <div className="py-6">
            <div className="text-lg font-bold text-white mb-5">
              <span className="text-indigo-500">1.</span> Datos generales
            </div>
            <div className="space-y-4">
              <div className="w-full mb-4 md:mb-0">
                <TextField
                  label={metas.general[0].label}
                  customClasses={textFieldClasses}
                  type="text"
                  name={metas.general[0].name}
                  required
                  placeholder={metas.general[0].placeholder}
                  value={metas.general[0].content}
                  error={actionData?.errors && actionData.errors.title}
                  onChange={(e) => handleFieldChange(metas.general[0].name, e)}
                />
              </div>

              <div className="w-full mb-4 md:mb-0">
                <TextArea
                  title={metas.general[1].label}
                  name={metas.general[1].name}
                  rows={6}
                  required
                  placeholder={metas.general[1].placeholder}
                  value={metas.general[1].content}
                  error={actionData?.errors && actionData.errors.description}
                  onChange={(e) => handleFieldChange(metas.general[1].name, e)}
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
                    value={meta.content}
                    type="text"
                    label={meta.label}
                    customClasses={textFieldClasses}
                    name={meta.name}
                    placeholder={meta.placeholder}
                    onChange={(e) => handleFieldChange(meta.name, e)}
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
                    value={meta.content}
                    label={meta.label}
                    type="text"
                    customClasses={textFieldClasses}
                    name={meta.name}
                    onChange={(e) => handleFieldChange(meta.name, e)}
                    placeholder={meta.placeholder}
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
