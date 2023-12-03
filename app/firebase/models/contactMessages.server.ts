import { dataPoint } from "../db.server";
import invariant from "tiny-invariant";
import type {
  ContactMessage,
  FirestoreContactMessage,
} from "~/types/ContactMessages";
import { Timestamp } from "firebase-admin/firestore";

export const collections = {
  messages: () => dataPoint<FirestoreContactMessage>("contact_messages"),
};

export async function getMessages() {
  const messages = await collections.messages().get();
  const data = messages.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return data;
}

export async function createMessage(messageInfo: ContactMessage) {
  invariant(
    messageInfo?.constructor === {}.constructor,
    `"messageInfo" debe ser un objeto, no un ${
      messageInfo && messageInfo?.constructor
    }`,
  );

  const obj = await collections.messages().add({
    ...messageInfo,
    createdAt: Timestamp.now(),
  });

  return obj.id;
}
