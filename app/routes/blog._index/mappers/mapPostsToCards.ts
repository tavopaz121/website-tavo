import type { FirestorePost } from "~/types/publish";

export function mapPostsToCards(posts: FirestorePost[]) {
  return posts.map((item: FirestorePost) => {
    return {
      id: item.id,
      title: item.title,
      status: item.status,
      price: item.price,
      description: item.description,
      image: {
        src: item.image,
        alt: item.title,
      },
      // for initial versions, we will only be focused in Mexico
      createdAt: item.createdAt?.toDate(),
      createdAtLocale: item.createdAt?.toDate()?.toLocaleString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      user: item.user,
      summary: item.summary,
      tags: item.tags,
      to:
        item.slug ??
        `${item.title?.toLowerCase()?.replace(/\s/g, "-")}-${item.id}`,
    };
  });
}
