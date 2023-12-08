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
