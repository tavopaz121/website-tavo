import { getPost } from "~/firebase/models/posts.server";
import type { Post } from "~/types/publish";
import { json, type LoaderArgs } from "@remix-run/node";
import PublishForm from "../admin/PublishForm/PublishForm";
import { getPublishAction } from "../admin/actions/publish";
import type { FormDataEntryValue } from "types/form-data";

export async function loader({ params }: LoaderArgs) {
  const { slug } = params;

  const post: Post | FormDataEntryValue = await getPost(slug || "");

  const content: string | undefined = post.content as string;

  if (!content) {
    throw new Response(`El artículo "${slug}" no existe 😥`, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json(post);
}

export const action = getPublishAction("edit");

export default PublishForm({ mode: "edit" });
