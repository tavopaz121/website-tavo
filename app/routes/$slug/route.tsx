import { json, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPost } from "~/firebase/models/posts.server";
import { marked } from "marked";
import stylesSlug from "./styles.css";
import type { Post } from "~/types/publish";
import { useEffect, useRef, useState } from "react";

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

  return json({
    post,
    html: marked(content),
  });
}

export function links() {
  return [{ rel: "stylesheet", href: stylesSlug, content: "text/css" }];
}

export function meta({ data, params }: any) {
  const { title, description, image } = data.post;
  let metaTitle = "";
  let metaDescription = "";

  if (!title) {
    metaTitle = "Post no disponible - Pensemosweb";
  } else {
    metaTitle = title;
  }

  if (!description) {
    metaDescription = `No hay descripción de ${params.slug} 😥`;
  } else {
    metaDescription = description;
  }

  return [
    { title: `${metaTitle} - Pensemosweb` },
    { name: "description", content: metaDescription },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:image",
      content: image,
    },
  ];
}

export default function SlugRoute() {
  const { post, html } = useLoaderData();

  const { image, title } = post;

  return (
    <div className="px-4 mt-10 py-20 container-slug-blg">
      <article className="mx-auto slug-blog">
        <h1 className="font-bold">{title}</h1>
        <figure className="relative text-center mb-12">
          <img
            decoding="async"
            loading="lazy"
            src={image}
            alt={title}
            className="rounded-xl block mx-auto"
          />
        </figure>

        <section
          id="slug-content"
          className="slug-blog-content max-w-7xl mx-auto"
          dangerouslySetInnerHTML={{ __html: html }}
        ></section>
      </article>
    </div>
  );
}
