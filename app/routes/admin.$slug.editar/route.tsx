import type { ActionArgs } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { marked } from "marked";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { XcircleSolidIcon, IconClose } from "../admin/Icons";
import TextField from "../admin/TextField/TextField";
import SelectFile from "../admin/SelectFile/SelectFile";
import { getPost, updatePost } from "~/firebase/models/posts.server";
import type { Post } from "~/types/publish";
import { json, type LoaderArgs, redirect } from "@remix-run/node";

export async function loader({ params }: LoaderArgs) {
  const { slug } = params;
  const post: Post = await getPost(slug || "");

  const content: string | undefined = post.content as string;

  if (!content) {
    throw new Response(`El articulo "${slug}" no existe 😥`, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json(post);
}

type ActionData = {
  title: null | string;
  slug: null | string;
  content: null | string;
  image: null | string;
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as String;

  const errors: ActionData = {
    id: id ? null : "Id is required",
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    content: content ? null : "Content is required",
  };

  const hasErrors = Object.values(errors).some((errMsg) => errMsg);

  if (hasErrors) {
    return json<ActionData>(errors);
  }

  await updatePost(
    {
      id,
      title,
      slug,
      content,
    },
    image || null,
    {
      displayName: "Jaime Cervantes",
      email: "jaime.cervantes.ve@gmail.com",
    },
  );

  return redirect(`/${slug}`);
}

const inputClassName =
  "w-full rounded border border-gray-500 px-2 py-1 text-lg dark:text-black";
const errorClassName =
  "pt-1 flex items-center gap-1 text-red-700 dark:text-red-400";

export default function Publicar() {
  const errors = useActionData();
  const post = useLoaderData();
  const transition = useNavigation();
  const isSubmitting = Boolean(transition.state !== "idle");
  const [title, setTitle] = useState(post.title);
  const [slug, setSlug] = useState(post.slug);
  const [preview, setPreview] = useState(post.content);
  const titleRef = useRef<HTMLInputElement>(null);
  const slugRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [srcImage, setSrcImage] = useState(post.image);

  useEffect(() => {
    if (errors?.title) {
      titleRef.current?.focus();
      return;
    }

    if (errors?.slug) {
      slugRef?.current?.focus();
      return;
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

  return (
    <div className="grid grid-cols-12 gap-3">
      <Form
        method="post"
        className="max-md:col-span-12 md:col-span-6"
        encType="multipart/form-data"
      >
        <h1 className="mb-4">Creating:</h1>

        {errors?.id ? (
          <div className={errorClassName}>
            <XcircleSolidIcon />
            {errors.id}
          </div>
        ) : null}

        <input type="hidden" name="id" value={post.id} />

        <TextField
          label="Post Title: "
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

        <div className="mb-4">
          <label htmlFor="content">
            Content in "markdown" format:
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
        <div className="text-right">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Editando`..." : "Editar Post"}
          </button>
        </div>
      </Form>
      <section className="max-md:col-span-12 md:col-span-6">
        <h1 className="mb-4">{title}</h1>
        <div
          data-testid="preview"
          dangerouslySetInnerHTML={{ __html: marked(preview) }}
        ></div>
      </section>
    </div>
  );
}
