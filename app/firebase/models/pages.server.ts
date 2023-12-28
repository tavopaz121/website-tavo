import { Timestamp } from "firebase-admin/firestore";
import { dataPoint } from "../db.server";
import type { FirestorePage } from "~/types/pages";

export const collections = {
  pages: () => dataPoint<FirestorePage>("pages"),
};

export async function getPages() {
  const page = await collections.pages().get();
  const postData = page.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return postData;
}

export async function getPage(id: string) {
  const doc = await collections.pages().doc(id).get();

  if (doc.exists) {
    const data = doc.data();
    return data;
  }

  return {};
}

export async function getPageByTitle(title: string) {
  const doc = await collections.pages().doc(title).get();

  if (doc.exists) {
    const data = doc.data();
    return data;
  }

  return {};
}

export async function createPage(data: any) {
  try {
    const { id, ...restOfData } = data;

    const page = await collections.pages().add({
      id,
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
