import { getPost } from "~/firebase/models/posts.server";
import type { Post } from "~/types/publish";
import { json, type LoaderArgs } from "@remix-run/node";
import PublishForm from "../admin/PublishForm/PublishForm";
import { getPublishAction } from "../admin/actions/publish";

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

export const action = getPublishAction("edit");

export default PublishForm({ mode: "edit" });
