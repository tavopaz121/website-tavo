import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/firebase/models/posts.server";
import { marked } from "marked";
import stylesSlug from "./styles.css";
import type { Post } from "~/types/publish";
import SideBarList from "~/components/Siderbar/sidebarList";
import { listCategorysTags } from "~/data/listCategorysTags";
import AOS from "aos";
import asoStyles from "aos/dist/aos.css";

import styleCode from "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

export async function loader({ params }: LoaderArgs) {
  const { slug } = params;

  const post: Post = await getPost(slug || "");

  const content: string | undefined = post.content as string;

  if (!content) {
    throw new Response(`El artículo "${slug}" no existe 😥`, {
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
  return [
    { rel: "stylesheet", href: stylesSlug, content: "text/css" },
    { rel: "stylesheet", href: styleCode, content: "text/css" },
    { rel: "stylesheet", href: asoStyles, content: "text/css" },
  ];
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
  const contentBlog = useRef(null);

  const { image, title } = post;

  useEffect(() => {
    hljs.highlightAll();
    AOS.init();
  }, []);

  return (
    <section className="px-4 mt-10 py-20 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-8 grid-cols-12 container-slug-blg">
        <article className="slug-blog col-span-12 lg:col-span-9">
          <h1
            className="font-bold"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="300"
          >
            {title}
          </h1>
          <figure className="relative text-center mb-12">
            <img
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="300"
              data-aos-delay="500"
              decoding="async"
              loading="lazy"
              src={image}
              alt={title}
              className="rounded-xl block mx-auto"
            />
          </figure>

          <section
            ref={contentBlog}
            id="slug-content"
            className="slug-blog-content mx-auto overflow-hidden"
            dangerouslySetInnerHTML={{ __html: html }}
          ></section>
        </article>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-delay="500"
          className="col-span-12 lg:col-span-3"
        >
          <SideBarList
            listCategorys={listCategorysTags}
            title="Categorías"
          ></SideBarList>
        </div>
      </div>
    </section>
  );
}
