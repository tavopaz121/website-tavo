import icons from "~/assets/imgs/contacto/icons8-phone.webp";
import email from "~/assets/imgs/contacto/icon-orange-email.svg";
import hour from "~/assets/imgs/contacto/icons8-hour.webp";
import WhatsAppLink from "~/components/Buttons/WhatsApp";

export default function Header() {
  return (
    <>
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
    </>
  );
}
