import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { XcircleSolidIcon, IconClose } from "../Icons";
import TextField from "../TextField/TextField";
import SelectFile from "../SelectFile/SelectFile";
import fieldsSeo from "~/data/fieldsSeo";
import TextArea from "../TextArea/TextArea";
import { handleFieldChange } from "~/routes/admin.pages.crear/functions/handleFieldChange";

const inputClassName =
  "w-full rounded border border-gray-500 px-2 py-1 text-lg dark:text-black";
const errorClassName =
  "pt-1 flex items-center gap-1 text-red-700 dark:text-red-400";

export default function PublishForm({ mode = "create" }) {
  return function PublishFormInner() {
    const errors = useActionData();
    const { post } = useLoaderData();
    const { page } = useLoaderData();
    const transition = useNavigation();
    const isSubmitting = Boolean(transition.state !== "idle");
    const [title, setTitle] = useState(post?.title || "");
    const [slug, setSlug] = useState(post?.slug || "");
    const [preview, setPreview] = useState(post?.content || "");
    const [summary, setSummary] = useState(post?.summary || "");
    const [tags, setTags] = useState(post?.tags || "");

    const titleRef = useRef<HTMLInputElement>(null);
    const slugRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const summaryRef = useRef<HTMLTextAreaElement>(null);
    const tagsRef = useRef<HTMLInputElement>(null);
    const [srcImage, setSrcImage] = useState(post?.image || null);

    const [metas, setMetas] = useState(fieldsSeo);

    useEffect(() => {
      if (errors?.title) {
        titleRef.current?.focus();
        return;
      }

      if (errors?.slug) {
        slugRef?.current?.focus();
        return;
      }

      if (errors?.summary) {
        summaryRef.current?.focus();
      }

      if (errors?.content) {
        contentRef.current?.focus();
      }
    }, [errors]);

    function onChangeContent(e: ChangeEvent<HTMLTextAreaElement>) {
      const content = e.target.value;
      setPreview(content);
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

    function getFieldValue(fieldName: any, metas: any) {
      switch (fieldName) {
        case "og:title":
        case "twitter:title":
          return title;
        case "og:description":
        case "twitter:description":
          return summary;
        default:
          return null;
      }
    }

    return (
      <Form
        method="post"
        className="max-md:col-span-12 md:col-span-6 p-4 mt-10"
        encType="multipart/form-data"
      >
        <h1 className="mb-4">{mode === "edit" ? "Editar" : "Publicar"}:</h1>

        {errors?.id ? (
          <div className={errorClassName}>
            <XcircleSolidIcon />
            {errors.id}
          </div>
        ) : null}

        <input type="hidden" name="id" value={post?.id} />

        <TextField
          label="Título: "
          ref={titleRef}
          required={true}
          autoFocus={true}
          name="title"
          value={title}
          type="text"
          autoComplete="title"
          error={errors?.title}
          isInvalid={errors?.title ? true : undefined}
          aria-describedby="title-error"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />

        <TextField
          label="Post Slug: "
          required={true}
          autoFocus={true}
          name="slug"
          type="text"
          autoComplete="slug"
          error={errors?.slug}
          isInvalid={errors?.slug ? true : undefined}
          aria-describedby="slug-error"
          ref={slugRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSlug(e.target.value);
          }}
          value={slug}
        />

        <TextField
          label="Etiquetas: "
          required={true}
          autoFocus={true}
          name="tags"
          type="text"
          autoComplete="tags"
          error={errors?.tags}
          isInvalid={errors?.tags ? true : undefined}
          aria-describedby="tags-error"
          ref={tagsRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTags(e.target.value);
          }}
          value={tags}
        />

        <TextField
          label="Resumen: "
          required={true}
          autoFocus={true}
          name="summary"
          type="text"
          value={summary}
          autoComplete="summary"
          error={errors?.summary}
          isInvalid={errors?.summary ? true : undefined}
          aria-describedby="summary-error"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSummary(e.target.value);
          }}
        />

        <div className="mb-4">
          <label htmlFor="content">
            Contenido en formato "markdown":
            {errors?.content ? (
              <div className={errorClassName} id="slug-content">
                <XcircleSolidIcon />
                {errors.content}
              </div>
            ) : null}
          </label>
          <br />
          <textarea
            id="content"
            rows={20}
            name="content"
            className={`${inputClassName} font-mono`}
            onChange={onChangeContent}
            ref={contentRef}
            value={preview}
            aria-invalid={errors?.slug ? true : undefined}
            aria-describedby="content-error"
          />

          <SelectFile
            accept=".jpg, .png, .jpeg, .webp, .gif"
            onChange={onFileChange}
            title="Seleccionar un archivo:"
            placeholder="Selecciona tu imagen..."
            name="image"
            data-testid="image-publish"
          >
            {errors?.image ? (
              <div className={errorClassName}>
                <XcircleSolidIcon />
                {errors.image}
              </div>
            ) : null}
          </SelectFile>

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

        <h1 className="mb-4">
          {mode === "edit" ? "Editar seo" : "Agregar seo"}:
        </h1>

        <TextArea
          title="Descripción"
          customClasses={{
            input: "bg-white border border-black w-full p-2.5",
            label: "block mb-1",
          }}
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSummary(e.target.value);
          }}
          name="description"
          value={summary}
        />

        <h1 className="mb-4">OpenGraph:</h1>

        {metas.openGraph.map((meta, index) => (
          <TextField
            type="text"
            key={index}
            value={getFieldValue(meta.name, metas) || meta.content}
            label={meta.label}
            name={meta.name}
            onChange={(e) => handleFieldChange(meta.name, setMetas, e)}
          />
        ))}

        <h1 className="mb-4">Twitter:</h1>

        {metas.twitter.map((meta, index) => (
          <TextField
            type="text"
            key={index}
            value={getFieldValue(meta.name, metas) || meta.content}
            label={meta.label}
            name={meta.name}
            onChange={(e) => handleFieldChange(meta.name, setMetas, e)}
          />
        ))}

        <div className="text-right">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? mode === "edit"
                ? "Editando..."
                : "Creando"
              : mode === "edit"
              ? "Editar Post"
              : "Crear Post"}
          </button>
        </div>
      </Form>
    );
  };
}
