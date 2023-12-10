import type { Timestamp } from "firebase-admin/firestore";

export type Seo =
  | {
      id?: string;
      metas: Array<{
        name?: string;
        content: string;
        order?: number;
        property?: string;
      }>;
      title: string;
    }
  | { [k: string]: FormDataEntryValue };

export type FirestoreSeo = Seo & {
  createdAt: Timestamp;
};
