import { json, type ActionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  let firstname = String(form.get("firstname")).trim();
  let lastname = String(form.get("lastname")).trim();
  let email = String(form.get("email")).trim();
  let phone = String(form.get("telephone")).trim();
  let interest = form.get("interest");
  let message = String(form.get("message")).trim();
  let politics = form.get("politics");

  const errors = {};

  if (firstname === "") {
    errors.firstname = "Ingrese su nombre";
  }
  if (lastname === "") {
    errors.lastname = "Ingrese su apellido";
  }
  if (!email.includes(".com")) {
    errors.email = "Ingrese correo valido";
  }
  if (interest === "none") {
    errors.interest = "Seleccione topico de interes valido";
  }
  if (politics === null) {
    errors.politics =
      "Marque la casilla para aceptar las politias de privaciadad";
  }

  if (Object.keys(errors).length > 0) {
    console.log(errors);
    return json({ errors });
  }

  const data = {
    firstname,
    lastname,
    email,
    phone,
    interest,
    message,
    politics,
  };

  return json(data);
};

export default function MentoriaForm() {
  const actionData = useActionData<typeof action>();

  return (
    <section className="relative text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1
              className="lg:text-6xl md:text-5xl text-4xl font-bold text-white"
              data-aos="fade-up"
            >
              Mandanos tus datos para contacarte
            </h1>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Para poder atenderte mejor puede mandarnos una descripcion tuya
              junto a las habilidades de este tipo de mentorias
            </p>
          </div>

          <Form
            className="max-w-2xl sm:p-5 mx-auto"
            data-aos="fade-left"
            data-aos-delay="400"
            method="post"
          >
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="first-name"
                >
                  Nombre(s) <span className="text-red-600">*</span>
                </label>
                <input
                  id="first-name"
                  name="firstname"
                  type="text"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Introcude tu nombre"
                />
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.email
                    ? actionData?.errors.firstname
                    : null}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="last-name"
                >
                  Apellido <span className="text-red-600">*</span>
                </label>
                <input
                  id="last-name"
                  name="lastname"
                  type="text"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Coloca tu apellido"
                />
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.email
                    ? actionData?.errors.lastname
                    : null}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Tu email va aquí"
                />
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.email ? actionData?.errors.email : null}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="subject"
                >
                  Telefono
                </label>
                <input
                  id="subject"
                  type="number"
                  name="telephone"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Tu número de telefono"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="country"
                >
                  Tema de interes <span className="text-red-600">*</span>
                </label>
                <select
                  id="country"
                  name="interest"
                  className="form-select bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                >
                  <option value="none">Elije el tema que te interese</option>
                  <option value="agile-frontend-developer">
                    Agile Frontend Developer
                  </option>
                  <option value="agile-node.js-developer">
                    Agile Node.js Developer
                  </option>
                  <option value="agile">Agile</option>
                  <option value="html5">HTML 5</option>
                  <option value="css3">CSS 3</option>
                  <option value="javascript">JavaScript</option>
                </select>
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.email
                    ? actionData?.errors.interest
                    : null}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  className="form-textarea bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600"
                  placeholder="Cuentanos tu interes o lo que quieres saber"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="politics"
                  />
                  <span className="text-gray-400 font-normal ml-2">
                    Acepto las politicas de privacidad{" "}
                    <span className="text-red-600">*</span>
                  </span>
                </label>
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.politics
                    ? actionData?.errors.politics
                    : null}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button
                  type="submit"
                  className="btn text-white bg-gradient-pink hover:opacity-80 lg:w-full w-auto mx-auto"
                >
                  Enviar
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
