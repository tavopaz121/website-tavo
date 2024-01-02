import { Link } from "@remix-run/react";
import Modal from "~/components/Modal/Modal";

export default function ContactModals({ status }) {
  return (
    <>
      <Modal
        isOpen={status === "success"}
        title="Mensaje enviado"
        shortDescription="Tu mensaje fue enviado con éxito."
        actions={
          <Link
            to="/servicios"
            className="inline-flex w-full justify-center rounded-md bg-gradient-pink px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
          >
            Aceptar
          </Link>
        }
      >
        <p>En breve nos pondremos en contacto contigo.</p>
        <p>¡Gracias por confiar en nosotros!</p>
      </Modal>

      <Modal
        isOpen={status === "error"}
        title="Error"
        shortDescription="Hubó un error al enviar tu mensaje."
        icon={<ErrorIcon />}
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
          También te puedes comunicar con whatsapp, e-mail o teléfono
        </p>
      </Modal>
    </>
  );
}

function ErrorIcon() {
  return (
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
  );
}
