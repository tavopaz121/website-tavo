import { json, type ActionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { signUp } from "~/firebase/models/mentorias.server";
import MentoriaForm from "../mentorias1a1/components/MentoriaForm";
import { validateEmail } from "~/functions/validateEmail";
import { validateTel } from "~/functions/validateTel";
import Modal from "~/components/Modal/Modal";
import { Link } from "@remix-run/react";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  let firstname = String(form.get("firstname")).trim();
  let lastname = String(form.get("lastname")).trim();
  let email = String(form.get("email")).trim();
  let phone = String(form.get("phone")).trim();
  let course = form.get("course");

  const errors = {};

  if (firstname === "") {
    errors.firstname = "Ingresa tu nombre";
  }
  if (lastname === "") {
    errors.lastname = "Ingresa su apellido";
  }
  if (!validateEmail(email)) {
    errors.email = "Ingresa un correo valido";
  }

  if (!validateTel(phone)) {
    errors.phone = "Ingresa un teléfono valido";
  }
  if (course === "none") {
    errors.course = "Selecciona tu mentoría";
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  const data = {
    firstname,
    lastname,
    email,
    phone,
    course,
  };

  const result = await signUp(data);

  return json({
    status: result.error ? "error" : "success",
    ...result,
  });
};

export default function MentoriasRegistro() {
  const actionData = useActionData<typeof action>();

  const status = actionData?.status;

  return (
    <>
      <MentoriaForm actionData={actionData} />
      <Modal
        isOpen={status === "success"}
        title="Registro"
        shortDescription="Tu registro fue todo un éxito."
        actions={
          <Link
            to="/mentorias1a1"
            className="inline-flex w-full justify-center rounded-md bg-gradient-pink px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
          >
            Aceptar
          </Link>
        }
      >
        <p>En breve nos pondremos en contacto contigo.</p>
      </Modal>

      <Modal
        isOpen={status === "error"}
        title="Error"
        shortDescription="Hubó un error al registrarte."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        }
        actions={
          <>
            <Link
              to="/contacto"
              className="inline-flex w-full justify-center rounded-md bg-gradient-pink px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
            >
              Cerrar
            </Link>
          </>
        }
      >
        <p>Sentimos mucho los inconvenientes.</p>
        <p className="font-bold">
          También te puedes comunicar con whatsapp, e-mail o teléfono para
          completar tu registro. Solo da clic en "Cerrar" y te ayudamos.
        </p>
      </Modal>
    </>
  );
}
