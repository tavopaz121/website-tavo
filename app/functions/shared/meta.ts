export function metaFn({ data }) {
  const { metas = [], title } = data?.seo || {};
  return [
    {
      title: `${title || "Desarrollo ágil, apps y web"} - Pensemos web`,
    },
    ...metas,
  ];
}
