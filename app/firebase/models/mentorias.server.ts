import { dataPoint } from "../db.server";
import invariant from "tiny-invariant";
import type {
  MentoringSingUp,
  FirestoreMentoringSingUp,
} from "~/types/MentoringSignUp";
import { Timestamp } from "firebase-admin/firestore";

export const collections = {
  signUps: () => dataPoint<FirestoreMentoringSingUp>("mentoringSignUp"),
};

export async function signUp(signUp: MentoringSingUp) {
  validateFields(signUp);

  try {
    const post = await collections.signUps().add({
      ...signUp,
      createdAt: Timestamp.now(),
    });

    return { id: post.id, ...signUp };
  } catch (error: any) {
    return {
      error,
      errorMessage: "Algo salio mal al crear el registro",
    };
  }
}

function validateFields(info: MentoringSignUp) {
  invariant(info.firstname, "El nombre es requerido");
  invariant(info.lastname, "Los apellidos son requeridos");
  invariant(info.email, "El email son requeridos");
  invariant(info.phone, "El teléfono es requerido");
  invariant(info.course, "La mentoría es requerida");
}
