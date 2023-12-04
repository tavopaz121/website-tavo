import { dataPoint } from "../db.server";
import invariant from "tiny-invariant";
import type { Seo, FirestoreSeo } from "~/types/Seo";
import { Timestamp } from "firebase-admin/firestore";

export const collections = {
  seo: () => dataPoint<FirestoreSeo>("seo"),
};

export async function getSeo(id: string) {
  const doc = await collections.seo().doc(id).get();

  if (doc.exists) {
    const data = doc.data();
    return {
      title: data?.title,
      metas: data?.metas,
    };
  }

  return {
    title: "",
    metas: [],
  };
}

export async function createMessage(seoInfo: Seo) {
  invariant(
    seoInfo?.constructor === {}.constructor,
    `"seoInfo" debe ser un objeto, no un ${seoInfo && seoInfo?.constructor}`,
  );

  const obj = await collections.seo().add({
    ...seoInfo,
    createdAt: Timestamp.now(),
  });

  return obj.id;
}
