import type { ActionArgs } from "@remix-run/node";
import * as postFns from "~/firebase/models/posts.server";
import { json, redirect } from "@remix-run/node";

type ActionData = {
  title: null | string;
  slug: null | string;
  content: null | string;
  image: null | string;
};

export function getPublishAction(mode: string) {
  return async function publish({ request }: ActionArgs) {
    const formData = await request.formData();

    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;
    const summary = formData.get("summary") as string;
    const image = formData.get("image") as String;
    const tags = formData.get("tags") as String;

    const errors: ActionData = {
      title: title ? null : "Title is required",
      slug: slug ? null : "Slug is required",
      content: content ? null : "Content is required",
      tags: tags ? null : "Tags is required",
      summary: summary ? null : "Summary is required",
    };

    const hasErrors = Object.values(errors).some((errMsg) => errMsg);

    if (hasErrors) {
      return json<ActionData>(errors);
    }

    await postFns[mode === "edit" ? "updatePost" : "createPost"](
      {
        id,
        title,
        slug,
        content,
        summary,
        tags,
      },
      image || null,
      {
        displayName: "Jaime Cervantes",
        email: "jaime.cervantes.ve@gmail.com",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/avatars%2Fjaime.jpeg?alt=media&token=84b35111-f77e-4e0e-b858-ece32e707117",
      },
    );

    return redirect(`/${slug}`);
  };
}
