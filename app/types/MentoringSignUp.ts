import type { Timestamp } from "firebase-admin/firestore";

export type MentoringSingUp =
  | {
      id?: string;
      firstname: string;
      lastname: string;
      email: string;
      phone: string;
      course: string;
    }
  | { [k: string]: FormDataEntryValue };

export type FirestoreMentoringSingUp = MentoringSingUp & {
  createdAt: Timestamp;
};
