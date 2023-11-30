import icons from "../assets/imgs/contacto/icons8-phone.webp";
import React, { useState } from "react";
import email from "../assets/imgs/contacto/icon-orange-email.svg";
import map from "../assets/imgs/contacto/map-pin.svg";
import equipo from "../assets/imgs/contacto/img-formulario.webp";
import hour from "../assets/imgs/contacto/icons8-hour.webp";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { validateFields } from "../functions/validatedFields";

// Función para validar el nombre completo en tres partes
function validateFullName(name) {
  const nameRegex = /^\s*\S+(\s+\S+){2,}\s*$/;
  return nameRegex.test(name);
}

export async function action({ request }) {
  const form = await request.formData();
  const data = Object.fromEntries(form);
  const errorDescriptions = validateFields(data);

  return json({
    errorDescriptions,
    status: errorDescriptions.length === 0 ? "success" : "error",
  });
}

export default function Contacto() {
  const response = useActionData();
  console.log(response);

  // Estado para manejar la advertencia del nombre
  const [nameWarning, setNameWarning] = useState("");

  // Función para manejar el cambio en el campo de nombre
  const handleNameChange = (e) => {
    const newName = e.target.value;

    // Validar el nombre completo
    if (!validateFullName(newName)) {
      setNameWarning("Ingrese nombre, apellido paterno, materno");
    } else {
      setNameWarning("");
    }

    // Resto de tu lógica de manejo de cambios en el nombre
  };
  return (
    <section className="relative pb-20 overflow-hidden -mt-4">
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
              <img
                decoding="async"
                loading="lazy"
                className="block mx-auto mb-3 w-15 h-15 "
                src={icons}
                alt=""
              />
              <p className="mt-6 text-lg font-medium text-center text-gray-900">
                278-688-3881
              </p>
            </div>
          </div>

          {/* Información de correo electrónico */}
          <div className="bg-white rounded-xl">
            <div className="p-6">
              <img
                decoding="async"
                loading="lazy"
                className="block mx-auto mb-3 w-15 h-15 "
                src={email}
                alt=""
              />
              <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                pensemoswebjs@gmail.com
              </p>
            </div>
          </div>

          {/* Dirección */}
          <div className="overflow-hidden bg-white rounded-xl">
            <div className="p-6">
              <img
                decoding="async"
                loading="lazy"
                className="block mx-auto mb-3 w-15 h-15 "
                src={map}
                alt=""
              />
              <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                Melchor Ocampo, 2, Las Flores, 95096
              </p>
            </div>
          </div>
          {/* Horario */}
          <div className="overflow-hidden bg-white rounded-xl">
            <div className="p-6">
              <img
                decoding="async"
                loading="lazy"
                className="block mx-auto mb-3 w-15 h-15 "
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

      <div className="gap-4 flex flex-col md:flex-row w-full px-8">
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
                  Mandanos un mensaje
                </h3>

                <Form action="/contacto" method="POST" className="mt-14">
                  <div className="gap-x-5 gap-y-4 px-8">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="text-base font-medium text-gray-900 "
                      >
                        Nombre Completo
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          id="nombre"
                          name="name"
                          placeholder="Ingresa tu Nombre Completo"
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
                        Direccion de correo electronico
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Ingresa tu correo electronico"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#fb5975] caret-[#fb5975]"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="text-base font-medium text-gray-900"
                      >
                        Numero de Telefono
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          id="telefono"
                          name="tel"
                          placeholder="Ingresa tu numero de telefono"
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
                          placeholder="Ingresa el nombre de la empresa"
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
                          placeholder="¿En que podemos ayudarte?"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-pink-500 caret-pink-500"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-pink-500 border border-transparent rounded-md focus:outline-none hover:bg-pink-500 focus:bg-pink-500"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
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
    </section>
  );
}
