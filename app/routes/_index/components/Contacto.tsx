import orangeEmail from "~/assets/imgs/icons/icon-orange-email.svg";
import orangePhone from "~/assets/imgs/icons/icon-orange-headphones.svg";
import CardContact from "./CardContaco";
import Email from "../../../components/Icons/Email";
import Phone from "../../../components/Icons/Phone";
import type { PropsCardCotact } from "./CardContaco";

import { useRef, useState, useEffect } from "react";

const cardMail: PropsCardCotact = {
  urlImg: orangeEmail,
  isEmail: true,
  description: "Envíanos un correo para atenderte a la brevedad posible",
  medio: "pensemoswebjs@gmail.com",
  icon: <Email />,
  anchor: "/contacto",
};

const cardPhone: PropsCardCotact = {
  urlImg: orangePhone,
  isEmail: false,
  description:
    "Puede marcar a nuestro número si desea obtener infomación personalizada",
  medio: "278 688 3881",
  icon: <Phone />,
  anchor: "tel:2786883881",
};

export default function Contacto() {
  const [animation, setAnimation] = useState("");
  const section = useRef(null);

  const options = { root: null, rootMargin: "0px", threshold: 1 };

  useEffect(() => {
    const observer = new IntersectionObserver(showContacs, options);
    observer.observe(section.current);
  });

  const showContacs = (
    entris: IntersectionObserverEntry[],
    oberver: IntersectionObserver,
  ) => {
    entris.forEach((entry) => {
      if (entry.isIntersecting) {
        setAnimation("motion-safe:animate-fadeInLeft motion-safe:opacity-100");
      }
    });
  };

  return (
    <section
      id="contacto"
      className="relative py-10 lg:py-20 overflow-hidden"
      ref={section}
    >
      <div className={`relative container px-4 mx-auto`}>
        <div className="max-w-2xl mx-auto mb-18 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-pink-500 bg-orange-50 rounded-full">
            ¿QUIERES CONTACTARNOS?
          </span>
          <h2
            className={
              "font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4 " +
              animation
            }
            style={{
              animationFillMode: "both",
              animationDuration: "1s",
            }}
          >
            <span>¿Alguna duda o </span>
            <span className="font-serif italic">necesitas ayuda </span>
            <span>?</span>
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            Tranquilo, estamos para atenderte cuanto antes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <CardContact {...cardMail} />

          <CardContact {...cardPhone} />
        </div>
      </div>
    </section>
  );
}
