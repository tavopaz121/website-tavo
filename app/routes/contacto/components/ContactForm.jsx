
import React from "react";
import Form from "@remix-run/react";

function ContactForm({ isSubmitting, status, handleNameChange, nameWarning }) {
     return (
    <div
      id="formulario"
      className="flex items-center justify-center max-md:w-full"
      style={{ width: "100%" }}
    >
      <div className="w-full">
        <h3 className="text-3xl font-semibold text-center text-black-900 pt-6 pb-0">
          Envíanos un mensaje
        </h3>

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
                    placeholder="Nombre completo"
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
  );
}

export default ContactForm;
