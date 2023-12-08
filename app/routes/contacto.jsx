import icons from "../assets/imgs/contacto/icons8-phone.webp";
import React, { useState } from "react";
import email from "../assets/imgs/contacto/icon-orange-email.svg";
import equipo from "../assets/imgs/contacto/img-formulario.webp";
import hour from "../assets/imgs/contacto/icons8-hour.webp";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { validateFields } from "../functions/validatedFields";
import WhatsAppLink from "../components/Buttons/WhatsApp";
import { createMessage } from "../firebase/models/contactMessages.server";
import Modal from "../components/Modal/Modal";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

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
          {/* Información de contacto */}
          <div className="overflow-hidden bg-white rounded-xl">
            <div className="p-6">
              <a href="tel:2786883881" target="_blank" rel="noreferrer">
                <img
                  decoding="async"
                  loading="lazy"
                  className="block mx-auto mb-3 w-15 h-15 filter hue-rotate-[310deg]"
                  src={icons}
                  alt=""
                />
              </a>
              <p className="mt-6 text-lg font-medium text-center text-gray-900">
                278-688-3881
              </p>
            </div>
          </div>

          {/* Información de correo electrónico */}
          <div className="bg-white rounded-xl">
            <div className="p-6">
              <a
                href="mailto:pensemoswebjs@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  decoding="async"
                  loading="lazy"
                  className="block mx-auto mb-3 w-15 h-15 filter hue-rotate-[310deg]"
                  src={email}
                  alt=""
                />
              </a>
              <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                pensemoswebjs@gmail.com
              </p>
            </div>
          </div>

          {/* Dirección */}
          <div className="overflow-hidden bg-white rounded-xl">
            <div className="p-6 flex flex-col items-center text-center text-pink-500">
              <WhatsAppLink
                width={70}
                height={70}
                iconClasses="text-pink-500 hover:text-black transition duration-200"
              />
              <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                278-109-2116
              </p>
            </div>
          </div>
          {/* Horario */}
          <div className="overflow-hidden bg-white rounded-xl">
            <div className="p-6">
              <img
                decoding="async"
                loading="lazy"
                className="block mx-auto mb-3 w-15 h-15 filter hue-rotate-[310deg]"
                src={hour}
                alt=""
              />
              <p className="mt-6 text-lg font-medium text-center text-gray-900">
                Lunes a Viernes de 9:00 AM a 5:00 PM
              </p>
            </div>
          </div>
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
                <h3 className="text-3xl font-semibold text-center text-black-900 pt-6 pb-0">
                  Envíanos un mensaje
                </h3>

                {status === "success" && <p>{message}</p>}

                <Form action="/contacto" method="POST" className="mt-14">
                  <fieldset disabled={isSubmitting}>
                    <div className="gap-x-5 gap-y-4 px-8 md:p-8 pl-0 pr-0">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="text-base font-medium text-gray-900 "
                        >
                          Nombre completo
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            id="nombre"
                            name="name"
                            required
                            placeholder="Nombre Completo"
                            onChange={handleNameChange}
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                          />
                          {nameWarning && (
                            <div style={{ color: "red" }}>{nameWarning}</div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-base font-medium text-gray-900"
                        >
                          Dirección de correo electrónico
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="E-mail"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="telefono"
                          className="text-base font-medium text-gray-900"
                        >
                          Número de teléfono
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="tel"
                            id="telefono"
                            name="tel"
                            placeholder="Número de teléfono"
                            required
                            onInput={(e) =>
                              (e.target.value = e.target.value
                                .replace(/[^0-9]/g, "")
                                .slice(0, 10))
                            }
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="empresa"
                          className="text-base font-medium text-gray-900"
                        >
                          Nombre de la empresa
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            id="empresa"
                            name="company"
                            required
                            placeholder="Empresa"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="mensaje"
                          className="text-base font-medium text-gray-900"
                        >
                          Mensaje
                        </label>
                        <div className="mt-2.5 relative">
                          <textarea
                            id="mensaje"
                            name="message"
                            required
                            placeholder="¿En qué podemos ayudarte?"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-pink-500 caret-pink-500"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-gradient-pink border border-transparent rounded-md focus:outline-none hover:scale-105"
                        >
                          {isSubmitting ? "Enviando..." : "Enviar"}
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </Form>
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
          <a
            href="/servicios"
            className="inline-flex w-full justify-center rounded-md bg-gradient-pink px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
          >
            Aceptar
          </a>
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
            <a
              href="/contacto"
              className="inline-flex w-full justify-center rounded-md bg-gradient-pink px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
            >
              Cerrar
            </a>
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
