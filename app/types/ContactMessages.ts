import type { Timestamp } from "firebase-admin/firestore";

export type ContactMessage =
  | {
      id?: string;
      name: string;
      email: string;
      tel?: string;
      content: number;
    }
  | { [k: string]: FormDataEntryValue };

export type FirestoreContactMessage = ContactMessage & {
  createdAt: Timestamp;
};
