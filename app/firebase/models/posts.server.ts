import { dataPoint } from "../db.server";
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import invariant from "tiny-invariant";
import type { Post, FirestorePost, PostUser } from "~/types/publish";
import { Timestamp } from "firebase-admin/firestore";
import type { CollectionReference } from "@google-cloud/firestore";

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

    const postInfo = {
      id: post.docs[0]?.id,
      ...post.docs[0]?.data(),
    };

    return postInfo;
  } catch (error: any) {
    return {
      errorMessage: "Algo salio mal al buscar/obtener el post",
    };
  }
}

export async function createPost(postInfo: Post, image: File, user: PostUser) {
  invariant(
    postInfo?.constructor === {}.constructor,
    `"postInfo" debe ser un objeto, no un ${postInfo && postInfo?.constructor}`,
  );

  invariant(
    image?.constructor === File,
    `"image" debe ser un File, no un ${image && image?.constructor}`,
  );

  invariant(
    user?.constructor === {}.constructor,
    `"user" debe ser un objeto, no un ${user && user?.constructor}`,
  );

  const bucket = getStorage().bucket();
  const buffer = Buffer.from(await image.arrayBuffer());

  await bucket
    .file(`posts/${image.name}`)
    .save(buffer, { contentType: image.type });

  const imageUrl = await getDownloadURL(bucket.file(`posts/${image.name}`));

  const post = await collections.posts().add({
    ...postInfo,
    image: imageUrl,
    user,
    createdAt: Timestamp.now(),
  });

  return post.id;
}

export async function updatePost(postInfo: Post, image: any, user: PostUser) {
  if (postInfo.id === undefined) {
    throw new Error("No se puede actualizar un post sin su id");
  }

  invariant(
    postInfo?.constructor === {}.constructor,
    `"postInfo" debe ser un objeto, no un ${postInfo && postInfo?.constructor}`,
  );

  if (image) {
    invariant(
      image?.constructor === File,
      `"image" debe ser un File, no un ${image && image?.constructor}`,
    );
  }

  invariant(
    user?.constructor === {}.constructor,
    `"user" debe ser un objeto, no un ${user && user?.constructor}`,
  );

  let editingPost = {};
  if (image) {
    const bucket = getStorage().bucket();
    const buffer = Buffer.from(await image.arrayBuffer());

    await bucket
      .file(`posts/${image.name}`)
      .save(buffer, { contentType: image.type });

    editingPost.image = await getDownloadURL(
      bucket.file(`posts/${image.name}`),
    );
  }
  const post = await collections
    .posts()
    .doc(postInfo.id)
    .update({
      ...postInfo,
      ...editingPost,
      modifiedBy: user,
      modifiedAt: Timestamp.now(),
    });

  return post.id;
}
