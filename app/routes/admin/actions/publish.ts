import type { ActionArgs } from "@remix-run/node";
import { createPost, updatePost } from "~/firebase/models/posts.server";
import { json, redirect } from "@remix-run/node";
import type { Post } from "~/types/publish";
import { createPage } from "~/firebase/models/pages.server";

type ActionData = {
  title: null | string;
  slug?: null | string;
  content: null | string;
  image?: null | File | string;
  tags: null | string;
  summary: null | string;
};

export function getPublishAction(mode: string) {
  return async function publish({ request }: ActionArgs) {
    const formData = await request.formData();
    const formDataArray = Array.from(formData.entries());
    const formDataObject: { [key: string]: string | File } = {};

    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;
    const summary = formData.get("summary") as string;
    const tags = formData.get("tags") as string;
    const image = formData.get("image") as File;

    const errors: ActionData = {
      title: title ? null : "Title is required",
      content: content ? null : "Content is required",
      tags: tags ? null : "Tags is required",
      summary: summary ? null : "Summary is required",
    };

    for (const [name, value] of formDataArray) {
      if (value instanceof File) {
        formDataObject[name] = value;
      } else {
        const trimmedValue = String(value).trim();
        formDataObject[name] = trimmedValue;
      }
    }

    const hasErrors = Object.values(errors).some((errMsg) => errMsg);

    if (hasErrors) {
      return json<ActionData>(errors);
    }

    const tagList = tags.split(",").map((tag) => tag.trim());

    const postInfo: Post = {
      title,
      slug,
      content,
      summary,
      tags: tagList,
    };

    const dataSeo = {
      title,
      image,
      slug,
      description: {
        name: "description",
        content: summary,
      },
      metas: [],
    };

    for (const key in formDataObject) {
      if (
        (formDataObject.hasOwnProperty(key) && key.startsWith("og:")) ||
        key.startsWith("twitter:")
      ) {
        const content: string | File = formDataObject[key] || "";
        dataSeo?.metas?.push({ name: key, content });
      }
    }
    const user = {
      displayName: "Jaime Cervantes",
      email: "jaime.cervantes.ve@gmail.com",
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/pensemosweb-mx.appspot.com/o/avatars%2Fjaime.jpeg?alt=media&token=84b35111-f77e-4e0e-b858-ece32e707117",
    };

    if (mode === "edit") {
      await updatePost(id, postInfo, image || null, user);
      await createPage(dataSeo);

      return redirect(`/${slug}`);
    }

    const result: { id: string; slug: string } | any = await createPost(
      postInfo,
      image,
      user,
    );

    return redirect(`/${result.slug}`);
  };
}
