export function metaFn({ data }) {
  const { metas = [], title, image, description } = data?.seo || {};

  return [
    {
      title: `${title || "Desarrollo ágil, apps y web"} - Pensemos web`,
    },
    description && {
      name: "description",
      content: description?.content,
    },
    ...metas,
    image && {
      name: "og:image",
      content: image,
    },
    image && {
      name: "twitter:image",
      content: image,
    },
  ];
}
