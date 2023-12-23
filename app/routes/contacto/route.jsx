import { json } from "@remix-run/node";
import { useActionData, useNavigation, Link } from "@remix-run/react";
import { validateFields } from "~/functions/validatedFields";
import { createMessage } from "~/firebase/models/contactMessages.server";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

import Modal from "~/components/Modal/Modal";
import IconContact from "./components/IconContact";
import equipo from "~/assets/imgs/contacto/img-formulario.webp";
import { iconsContact } from "./data/icons";

export const meta = metaFn;
export const loader = loaderSeoFn("contacto");

// Función para validar el nombre completo en tres partes
function validateFullName(name) {
  const nameRegex = /^\s*\S+(\s+\S+){1,}\s*$/;
  return nameRegex.test(name);
}

export async function action({ request }) {
  const form = await request.formData();
  const data = Object.fromEntries(form);
  const errorDescriptions = validateFields(data);

  if (errorDescriptions.length === 0) {
    const messageId = await createMessage(data);
    if (messageId) {
      return json({
        errorDescriptions: [],
        status: "success",
        message: "Mensaje enviado correctamente",
      });
    }
  }

  return json({
    errorDescriptions,
    status: errorDescriptions.length === 0 ? "success" : "error",
    message: "Error al enviar el mensaje",
  });
}

export default function Contacto() {
  const response = useActionData() || {};
  const { status, message } = response;
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction === "/contacto";

  // Estado para manejar la advertencia del nombre
  const [nameWarning, setNameWarning] = useState("");

  // Función para manejar el cambio en el campo de nombre
  const handleNameChange = (e) => {
    const newName = e.target.value;

    if (!validateFullName(newName)) {
      setNameWarning("Ingrese nombre, apellido paterno, materno");
    } else {
      setNameWarning("");
    }
  };

  return (
    <section className="relative pb-20 overflow-hidden pt-30">
      <section>
        <div
          style={{
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "20px", // Espaciado interno
            color: "black", // Texto en color blanco
            textAlign: "center",
          }}
        >
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-b-[14px] border-pink-500"></span>
            <a href="#formulario">
              {" "}
              <h1 className="relative text-4xl font-bold text-whit sm:text-6xl lg:text-7xl ">
                ¡Contáctanos ahora!
              </h1>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto mt-8">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 min-w-0 gap-6 px-8 text-center md:px-0">
          {iconsContact.map((icon) =>
            icon?.href ? (
              <a
                key={`Icono de ${icon.text}`}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
              >
                <IconContact srcImge={icon.icon} text={icon.text} />
              </a>
            ) : (
              <IconContact
                key={`Icono de ${icon.text}`}
                srcImge={icon.icon}
                text={icon.text}
              />
            ),
          )}
        </div>
      </div>

      <div className="gap-4 flex flex-col md:flex-row w-full px-4">
        {/* Sección de formulario */}
        <div
          id="formulario"
          className="flex items-center justify-center max-md:w-full"
          style={{ width: "100%" }}
        >
          <div className="w-full ">
            <div className="mt-6 overflow-hidden border border-pink-500  rounded-xl ">
              <div className="px-6 py-12 sm:p-6">
             

                {status === "success" && <p>{message}</p>}

                <ContactForm
                  isSubmitting={isSubmitting}
                  status={status}
                  handleNameChange={handleNameChange}
                  nameWarning={nameWarning}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="mt-6 overflow-hidden border border-pink-500  rounded-xl pt-6">
          <div
            className="flex items-center justify-center "
            style={{ width: "100%" }}
          >
            <div>
              <h3 className="text-3xl font-semibold text-center text-black-900 pt-6 p-6">
                Con dedicación y creatividad, damos vida a cada proyecto
              </h3>

              <img
                decoding="async"
                loading="lazy"
                src={equipo}
                className="w-50 h-auto"
                alt="Imagen"
              />
            </div>
          </div>
        </div>
      </div>
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
          También te puedes comunicar con whatsapp, e-mail o teléfono
        </p>
      </Modal>
    </section>
  );
}
