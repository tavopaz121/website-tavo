import { Form, useActionData } from "@remix-run/react";
import { useState } from "react";
import { json, type ActionArgs } from "@remix-run/node";
import fields from "./data/fields";
import TextField from "../admin/TextField/TextField";
import TextArea from "../admin/TextArea/TextArea";
import { createPage } from "~/firebase/models/pages.server";
import { handleFieldChange } from "./functions/handleFieldChange";
import SelectFile from "../admin/SelectFile/SelectFile";
import { IconClose } from "../admin/Icons";

type MetaObject = {
  name: string;
  content: string | File;
};

type DataObject = {
  title?: string | File;
  image?: File;
  slug?: string | File;
  description?: { name: string; content: string | File };
  metas?: MetaObject[];
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const formDataArray = Array.from(formData.entries());
  const formDataObject: { [key: string]: string | File } = {};
  const errors: { [key: string]: string | undefined } = {};
  const image = formData.get("image") as File;

  for (const [name, value] of formDataArray) {
    if (value instanceof File) {
      formDataObject[name] = value;
    } else {
      const trimmedValue = String(value).trim();
      formDataObject[name] = trimmedValue;

      if (["title", "description", "slug"].includes(name) && !trimmedValue) {
        // if (!trimmedValue && name !== "files")
        errors[name] = "Este campo no puede estar vacío";
      }
    }
  }

  const data: DataObject = {
    title: formDataObject.title,
    image,
    slug: formDataObject.slug.toLowerCase(),
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

  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  return json(result);
};

export default function CrearPages() {
  const actionData = useActionData<typeof action>();
  const [metas, setMetas] = useState(fields);
  const [srcImage, setSrcImage] = useState(null);

  function getFieldValue(fieldName: any, metas: any) {
    switch (fieldName) {
      case "og:title":
      case "twitter:title":
        return metas?.general[0].content;
      case "og:description":
      case "twitter:description":
        return metas?.general[1].content;
      default:
        return null;
    }
  }

  const onFileChange = (evt) => {
    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.onload = handleReaderLoad;
    reader.readAsDataURL(file);
  };

  const handleReaderLoad = (evt) => {
    const imageUrl = evt.target.result;

    setSrcImage(imageUrl);
  };

  const removeImage = () => {
    setSrcImage(null);
  };

  const textFieldClasses = {
    label: "block text-gray-200 text-base font-normal mb-1",
    input:
      "form-input bg-black autofill:!bg-black p-4 w-full text-white autofill:!text-white focus:outline-none focus:border-[1px] focus:border-pink-600 border-[1px] border-transparent placeholder-slate-400",
    error: "text-red-500 text-sm mt-2",
  };

  const selectFileClasses = {
    label: "block text-gray-200 text-base font-normal mb-1",
    input:
      "form-input bg-black autofill:!bg-black w-full text-white autofill:!text-white focus:outline-none focus:border-[1px] focus:border-pink-600 border-[1px] border-transparent placeholder-slate-400",
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

        <Form method="POST" encType="multipart/form-data">
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
                  onChange={(e) =>
                    handleFieldChange(metas.general[0].name, setMetas, e)
                  }
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
                  onChange={(e) =>
                    handleFieldChange(metas.general[1].name, setMetas, e)
                  }
                />
              </div>

              <div className="w-full mb-4 md:mb-0">
                <TextField
                  label={metas.general[2].label}
                  customClasses={textFieldClasses}
                  type="text"
                  name={metas.general[2].name}
                  required
                  placeholder={metas.general[2].placeholder}
                  value={metas.general[2].content}
                  error={actionData?.errors && actionData.errors.slug}
                  onChange={(e) =>
                    handleFieldChange(metas.general[2].name, setMetas, e)
                  }
                />
              </div>

              <div className="w-full mb-4 md:mb-0">
                <SelectFile
                  customClasses={selectFileClasses}
                  title="Imagen"
                  placeholder="Selecciona una imagen"
                  accept=".jpg, .png, .jpeg, .webp, .gif"
                  onChange={onFileChange}
                  name="image"
                />
              </div>

              {srcImage && (
                <div className="relative">
                  <img
                    data-testid="image-preview"
                    src={srcImage}
                    alt={srcImage}
                    className="min-w-full border-2 p-1 border-pw-green max-h-[300px] max-md:h-[200px] object-cover mb-4"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute bg-red-500 rounded-sm top-2.5 right-2.5"
                  >
                    <IconClose />
                  </button>
                </div>
              )}
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
                    value={getFieldValue(meta.name, metas) || meta.content}
                    type="text"
                    label={meta.label}
                    customClasses={textFieldClasses}
                    name={meta.name}
                    placeholder={meta.placeholder}
                    onChange={(e) => handleFieldChange(meta.name, setMetas, e)}
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
                    value={getFieldValue(meta.name, metas) || meta.content}
                    label={meta.label}
                    type="text"
                    customClasses={textFieldClasses}
                    name={meta.name}
                    onChange={(e) => handleFieldChange(meta.name, setMetas, e)}
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
