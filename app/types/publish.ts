import type { Timestamp } from "firebase-admin/firestore";

export type PostUser = {
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
};

export type Post =
  | {
      id?: string;
      title: string;
      summary: string;
      content: string;
      tags: string;
      status: "published" | "draft";
      slug?: string;
    }
  | { [k: string]: FormDataEntryValue };

export type FirestorePost = Post & {
  image: string;
  user: PostUser;
  modifiedBy?: PostUser;
  modifiedAt?: Timestamp;
  createdAt: Timestamp;
};
