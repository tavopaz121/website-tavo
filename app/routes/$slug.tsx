import { json, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { getPost } from "~/firebase/models/posts.server";
import { marked } from "marked";

export async function loader({ params }: LoaderArgs) {
  const { slug } = params;
  const post = await getPost(slug || "");

  return json({
    post,
    html: marked(post.content.replace(/#NEWLINE#/g, "\n")),
  });
}

export function meta({ data, params }: any) {
  const { title, description, image } = data.post;

  if (!title || !description)
    return [
      { title: `Post no disponible - Pensemosweb` },
      {
        name: "description",
        content: `No hay resultados con el nombre ${params.slug} 😥`,
      },
    ];

  return [
    { title: `${title} - Pensemosweb` },
    { name: "description", content: description },
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

export default function Post() {
  const { post, html } = useLoaderData();

  if (post.errorMessage) return <h1>Ops! El articulo no ha sido encontrado</h1>;

  const { image, title } = post;

  return (
    <div className="p-2 flex flex-wrap gap-3">
      <main className="flex-grow flex-shrink" style={{ flexBasis: "69%" }}>
        <article className="p-1 slug">
          <h1 className="mt-2 font-bold">{title}</h1>
          <figure className="relative">
            <img
              src={image}
              alt={title}
              className=" rounded-xl w-full object-contain"
            />

            <Link>
              <BiLeftArrowAlt className="text-white text-2xl" />
            </Link>
          </figure>

          <section
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: html }}
          ></section>
        </article>
      </main>
      <aside className="flex-grow flex-shrink" style={{ flexBasis: "29%" }}>
        Contenido secundario lateral
      </aside>
    </div>
  );
}
