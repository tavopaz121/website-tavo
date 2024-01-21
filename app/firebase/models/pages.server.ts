import { Timestamp } from "firebase-admin/firestore";
import { dataPoint } from "../db.server";
import type { FirestorePage } from "~/types/pages";
import { getDownloadURL, getStorage } from "firebase-admin/storage";

export const collections = {
  pages: () => dataPoint<FirestorePage>("pages"),
};

export async function getPages() {
  const querySnapshot = await collections.pages().get();

  const postData = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return postData;
}

export async function getPage(id: string) {
  const doc = await collections.pages().doc(id).get();

  if (doc.exists && doc.data()?.status === "published") {
    const data = doc.data();
    return { id: doc.id, ...data };
  }

  throw new Error(`No published page found with id: ${id}`);
}

export async function getPageBySlug(slug: string) {
  try {
    const querySnapshot = await collections
      .pages()
      .where("slug", "==", slug.toLowerCase())
      .get();

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();

      if (data.status === "published") {
        return data;
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching published data from Firestore:", error);
    throw error;
  }
}

export async function createPage(data: any) {
  try {
    const { id, image, ...restOfData } = data;

    let URLImage;

    if (image) {
      URLImage = await createImageInStorage(image);
    }

    const page = await collections.pages().add({
      id,
      image: URLImage || null,
      status: "draft",
      createdAt: Timestamp.now(),
      ...restOfData,
    });

    return { id: page.id, ...restOfData };
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salió mal al crear la página",
    };
  }
}

export async function deletePage(id: string) {
  try {
    await collections.pages().doc(id).delete();
    return { success: true, message: "Página eliminada exitosamente" };
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salió mal al eliminar la página",
    };
  }
}

export async function updatePage(id: string, updatedData: any) {
  try {
    const { image, ...restOfData } = updatedData;

    let URLImage;

    if (image) {
      const downloadURL = await createImageInStorage(image);
      URLImage = downloadURL;
    }

    const updatedPageData = {
      image: URLImage || null,
      updatedAt: Timestamp.now(),
      ...restOfData,
    };

    await collections.pages().doc(id).update(updatedPageData);

    return { id, ...updatedPageData };
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salió mal al actualizar la página",
    };
  }
}

async function createImageInStorage(image: File) {
  const bucket = getStorage().bucket();
  const buffer = Buffer.from(await image.arrayBuffer());

  await bucket
    .file(`pages/${image.name}`)
    .save(buffer, { contentType: image.type });

  const imageUrl = await getDownloadURL(bucket.file(`pages/${image.name}`));

  return imageUrl;
}
