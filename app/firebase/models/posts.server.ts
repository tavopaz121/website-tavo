import { dataPoint } from "../db.server";
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import invariant from "tiny-invariant";
import type { Post, FirestorePost, PostUser } from "~/types/publish";
import { Timestamp } from "firebase-admin/firestore";
import type { WhereFilterOp } from "firebase-admin/firestore";
import type { CollectionReference } from "@google-cloud/firestore";

export const collections = {
  posts: () => dataPoint<FirestorePost>("posts"),
};

const firstPage = 1;
export async function getPosts(
  page: number = 1,
  pageSize: number = 10,
  by: null | { field: string; operator: string; value: string } = null,
) {
  page = Math.max(Number(page), firstPage);
  let query: any = collections.posts();

  if (by?.field && by?.operator && by?.value) {
    query = query.where(by.field, by.operator as WhereFilterOp, by.value);
  }

  const total = (await query.count().get()).data().count;

  const posts = await query
    .orderBy("createdAt", "desc")
    .limit(pageSize)
    .offset(page === firstPage ? 0 : Number(page - 1) * pageSize)
    .get();

  const postData = posts.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return {
    posts: postData,
    nextPage: page + 1,
    prevPage: page === firstPage ? firstPage : page - 1,
    total: total,
  };
}

export async function getRelatedPost(
  {
    field,
    operator,
    value,
  }: {
    field: string;
    operator: string;
    value: any;
  },
  slug: string,
) {
  try {
    const collectioPost = collections.posts();
    const postsFiltrados = await collectioPost
      .where(field, operator, value)
      .where("slug", "!=", slug)
      .limit(3)
      .get();

    const posts = postsFiltrados.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return { posts };
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(
  slug: string,
  collection: CollectionReference<FirestorePost> = collections.posts(),
) {
  try {
    const queryResult = await collection.where("slug", "==", slug).get();

    if (queryResult.empty) {
      return {
        errorMessage: "No se encontró el post",
      };
    }

    const postInfo = {
      ...queryResult.docs[0]?.data(),
      id: queryResult.docs[0]?.id, // at the if by error we insert an empty id field in the post, so this return the real id from firebase
    };

    return postInfo;
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salio mal al buscar/obtener el post",
    };
  }
}

export async function createPost(postInfo: Post, image: File, user: PostUser) {
  validateFields(postInfo, image, user);

  const slug = await defineSlug(postInfo.title, postInfo.slug);

  try {
    const post = await collections.posts().add({
      ...postInfo,
      slug,
      image: await createImageInStorage(image),
      user,
      createdAt: Timestamp.now(),
    });

    return { id: post.id, slug };
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salio mal al crear el post",
    };
  }
}

export async function updatePost(
  id: string,
  postInfo: Post,
  image: File | null,
  user: PostUser,
) {
  invariant(id, "No se puede actualizar un post sin su id");
  invariant(postInfo.slug, "No se puede actualizar un post sin su slug");

  validateFields(postInfo, image, user);

  let editingPost = { slug: postInfo.slug };
  if (image) {
    const downloadURL = await createImageInStorage(image);
    editingPost.image = downloadURL;
  }

  try {
    const result = await collections
      .posts()
      .doc(id)
      .update({
        ...postInfo,
        ...editingPost,
        modifiedBy: user,
        modifiedAt: Timestamp.now(),
      });

    return result.writeTime;
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salio mal al crear el post",
    };
  }
}

export async function updatePostStatus(id: string, newStatus: string) {
  invariant(id, "Se requiere el ID del post");

  try {
    const result = await collections.posts().doc(id).update({
      status: newStatus,
      modifiedAt: Timestamp.now(),
    });

    return result.writeTime;
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salió mal al actualizar el estado del post",
    };
  }
}

export async function createSlug(
  title: string,
  collection: CollectionReference<FirestorePost> = collections.posts(),
) {
  const slug = title
    .toLowerCase()
    .normalize("NFD") // Normal Form Decomposition, convierte un character en dos o más, por ejemplo, su forma base y su acento
    .replace(/[\u0300-\u036f]/g, "") // Remueve los acentos de las letras (diacríticos)
    .replace(/[^a-z0-9]+/g, "-") // Remueve los carácteres que no sean letras o números, (incluyendo acentos)
    .replace(/(^-|-$)+/g, ""); // Remueve los guiones al inicio y al final

  const doc = await collection.where("slug", "==", slug).get();

  if (doc.size) {
    return `${slug}-${doc.size}`;
  }

  return slug;
}

function validateFields(postInfo: Post, image: any, user: PostUser) {
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

  invariant(postInfo.title, "El título es requerido");
  invariant(postInfo.summary, "El resumen es requerido");
  invariant(postInfo.tags, "Los tags son requeridos");
  invariant(postInfo.content, "El contenido es requerido");
}

async function defineSlug(title, slug) {
  if (!slug || slug?.trim() === "") {
    slug = await createSlug(title, collections.posts());
  }

  return slug;
}

async function createImageInStorage(image: File) {
  const bucket = getStorage().bucket();
  const buffer = Buffer.from(await image.arrayBuffer());

  await bucket
    .file(`posts/${image.name}`)
    .save(buffer, { contentType: image.type });

  const imageUrl = await getDownloadURL(bucket.file(`posts/${image.name}`));

  return imageUrl;
}
