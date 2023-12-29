import Modal from "~/components/Modal/Modal";
import { Link } from "@remix-run/react";

type ShowModalProps = {
  status?: "success" | "error";
};

export default function ShowModal({ status }: ShowModalProps) {
  return (
    <>
      <Modal
        isOpen={status === "success"}
        title="Página creada"
        shortDescription="La página fue creada con exito."
        actions={
          <Link
            to="/admin/pages"
            className="inline-flex w-full justify-center rounded-md bg-gradient-pink px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
          >
            Aceptar
          </Link>
        }
      ></Modal>

      <Modal
        isOpen={status === "error"}
        title="Error"
        shortDescription="Hubó un error al crear la página."
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
              to="/admin/pages/crear"
              className="inline-flex w-full justify-center rounded-md bg-gradient-pink px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
            >
              Cerrar
            </Link>
          </>
        }
      >
        <p>Sentimos mucho los inconvenientes.</p>
      </Modal>
    </>
  );
}
