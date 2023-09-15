import { dataPoint } from "../db.server";
import type { FirestorePost } from "~/types/publish";
import type { CollectionReference } from "firebase-admin/firestore";

export const collections = {
  posts: () => dataPoint<FirestorePost>("posts"),
};

export async function getPosts() {
  const posts = await collections.posts().get();
  const postData = posts.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return postData;
}

export async function getPost(
  slug: string,
  collection: CollectionReference<FirestorePost> = collections.posts(),
) {
  try {
    const post = await collection.where("slug", "==", slug).get();

    if (post.empty) {
      return {
        errorMessage: "No se encontró el post",
      };
    }
    return post?.docs[0]?.data();
  } catch (error: any) {
    return {
      errorMessage: "Algo salio mal al buscar/obtener el post",
    };
  }
}
