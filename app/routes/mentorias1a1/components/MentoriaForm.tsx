import { Form } from "@remix-run/react";
import BgIllustration from "~/components/BgIlustration/BgIlustration";
import ButtonWebsite from "~/components/Button/ButtonWebsite";

export default function MentoriaForm({ actionData }) {
  return (
    <section className="relative text-white pb-20">
      <BgIllustration />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20" id="registro">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1
              className="lg:text-6xl md:text-5xl text-4xl font-bold text-white"
              data-aos="fade-up"
            >
              Regístrate
            </h1>
            <p className="text-xl" data-aos="fade-up" data-aos-delay="200">
              Te contactamos de inmediato para agendar tu mentoría.
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
                  className="form-input bg-black autofill:!bg-black p-4 w-full text-white autofill:!text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Tu nombre va aquí"
                />
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.firstname
                    ? actionData?.errors.firstname
                    : null}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="last-name"
                >
                  Apellidos <span className="text-red-600">*</span>
                </label>
                <input
                  id="last-name"
                  name="lastname"
                  type="text"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Tus apellidos"
                />
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.lastname
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
                  Teléfono <span className="text-red-600">*</span>
                </label>
                <input
                  id="subject"
                  type="tel"
                  name="phone"
                  required
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Tu número de telefono"
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 10))
                  }
                />
                <p className="text-red-500 text-sm mt-2">
                  {actionData?.errors?.phone ? actionData?.errors.phone : null}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="country"
                >
                  Mentoría <span className="text-red-600">*</span>
                </label>
                <select
                  id="country"
                  name="course"
                  className="form-select bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                >
                  <option value="none">
                    Elije la mentoría que te interesa
                  </option>
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
                  {actionData?.errors?.course
                    ? actionData?.errors.course
                    : null}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <ButtonWebsite type="submit" color="pink" typeHover="opacity">
                  Enviar
                </ButtonWebsite>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
