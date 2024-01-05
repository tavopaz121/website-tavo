import { type ActionArgs, json, type LoaderArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { getPageBySlug, updatePage } from "~/firebase/models/pages.server";
import TextField from "../admin/TextField/TextField";
import { useState } from "react";
import TextArea from "../admin/TextArea/TextArea";
import ShowModal from "./Components/ShowModal";

const textFieldClasses = {
  label: "block text-gray-200 text-base font-normal mb-1",
  input:
    "form-input bg-black autofill:!bg-black p-4 w-full text-white autofill:!text-white focus:outline-none focus:border-[1px] focus:border-pink-600 border-[1px] border-transparent placeholder-slate-400",
  error: "text-red-500 text-sm mt-2",
};

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

export async function loader({ params }: LoaderArgs) {
  const { pageSlug } = params;
  const page = await getPageBySlug(pageSlug);

  return json({ page });
}

export const action = async ({ request, params }: ActionArgs) => {
  const formData = await request.formData();
  const formDataArray = Array.from(formData.entries());
  const formDataObject: { [key: string]: string | File } = {};
  const image = formData.get("image") as File;
  const { pageSlug } = params;
  const page = await getPageBySlug(pageSlug);

  for (const [name, value] of formDataArray) {
    if (value instanceof File) {
      formDataObject[name] = value;
    } else {
      const trimmedValue = String(value).trim();
      formDataObject[name] = trimmedValue;
    }
  }

  const data: DataObject = {
    title: formDataObject.title,
    image,
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

  const result = await updatePage(page.id, data);

  return json({
    status: result.error ? "error" : "success",
    ...result,
  });
};

export default function EditarPage() {
  const { page } = useLoaderData();
  const actionData = useActionData<typeof action>();

  const [title, setTitle] = useState(page?.title || "");
  const [description, setDescription] = useState(
    page?.description?.content || "",
  );
  const [metas, setMetas] = useState(page?.metas || []);

  const status = actionData?.status;

  const handleTextFieldChange = (name: string, value: string) => {
    setMetas((prevMetas: any[]) => {
      const updatedMetas = [...prevMetas];
      const index = updatedMetas.findIndex((meta) => meta?.name === name);
      updatedMetas[index] = { ...updatedMetas[index], content: value };
      return updatedMetas;
    });
  };

  function getFieldValue(fieldName: any) {
    switch (fieldName) {
      case "og:title":
      case "twitter:title":
        return title;
      case "og:description":
      case "twitter:description":
        return description;
      default:
        return null;
    }
  }
  return (
    <>
      <ShowModal status={status} slug={page?.slug} />
      <section className="grid place-items-center items-start my-10">
        <div className="w-full lg:w-[60%]">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold mb-2 text-white">
              Editar Página {page?.title}
            </h1>
            <div className="text-gray-500"></div>
          </div>

          <Form method="POST" encType="multipart/form-data">
            <div className="w-full my-4 md:mb-0">
              <TextField
                type="text"
                name="title"
                onChange={(evt) => setTitle(evt.target.value)}
                label="Titulo"
                value={title}
                customClasses={textFieldClasses}
              />
            </div>

            <div className="w-full mb-4 md:mb-0">
              <TextArea
                name={page?.description?.name}
                onChange={(evt) => setDescription(evt.target.value)}
                title="Descripción"
                rows={6}
                value={description}
                customClasses={textFieldClasses}
              />
            </div>

            {metas.map(
              (meta: { name: string; content: string }, index: number) => (
                <div key={index} className="w-full my-4 md:mb-0">
                  <TextField
                    type="text"
                    name={meta.name}
                    label={meta.name}
                    customClasses={textFieldClasses}
                    value={getFieldValue(meta.name) || meta.content}
                    onChange={(e) =>
                      handleTextFieldChange(meta.name, e.target.value)
                    }
                  />
                </div>
              ),
            )}

            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button
                  type="submit"
                  className="btn text-white bg-gradient-pink hover:opacity-80 w-full mx-auto"
                >
                  Editar
                </button>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
