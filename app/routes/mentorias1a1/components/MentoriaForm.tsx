import { Form } from "@remix-run/react";

export default function MentoriaForm() {
  return (
    <section className="relative text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
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

          <Form className="max-w-xl mx-auto">
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
                  type="text"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Enter your first name"
                  required
                />
                <p className="text-red-500 text-sm mt-2">
                  Este campo es requrido
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
                  type="text"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Enter your last name"
                  required
                />
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
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="subject"
                >
                  Telefono <span className="text-red-600">*</span>
                </label>
                <input
                  id="subject"
                  type="number"
                  className="form-input bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                  placeholder="How can we help you?"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="country"
                >
                  Tema de interes
                </label>
                <select
                  id="country"
                  className="form-select bg-black p-4 w-full text-white focus:outline-none focus:border-[1px] focus:border-pink-600 placeholder-slate-400"
                >
                  <option value="">Agile Frontend Developer</option>
                  <option value="">Agile Node.js Developer</option>
                  <option value="">Agile</option>
                  <option value="">HTML 5</option>
                  <option value="">CSS 3</option>
                  <option value="">JavaScript</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-200 text-base font-normal mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-textarea bg-black p-4 w-full text-slate-400 focus:outline-none focus:border-[1px] focus:border-pink-600"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-gray-400 ml-2">
                    I agree to the privacy policy
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button className="btn text-white bg-gradient-pink hover:opacity-80 lg:w-full w-auto mx-auto">
                  Send
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
