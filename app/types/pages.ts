import type { Timestamp } from "firebase-admin/firestore";

export type Page =
  | {
      id?: string;
      metas: Array<{
        name?: string;
        content: string;
        order?: number;
        property?: string;
      }>;
      title?: string;
      description?: {
        name?: string;
        content?: string;
      };
    }
  | { [k: string]: FormDataEntryValue };

export type FirestorePage = Page & {
  createdAt?: Timestamp;
};
