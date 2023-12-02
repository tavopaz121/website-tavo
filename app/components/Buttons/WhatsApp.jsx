import { whatsApp as data } from "~/data/navItems";
import WhatsAppIcon from "~/components/Icons/WhatsApp";

export default function WhatsApp({
  width = 32,
  height = 32,
  message = " tus servicios",
  iconClasses = "text-white",
  children,
}) {
  return (
    <a
      href={`${data.to}${encodeURI(message)}`}
      className={`relative group inline-block overflow-hidden transition duration-1000 px-0 py-0 rounded-full text-white`}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500`}
      />
      <span className={`relative ${iconClasses}`}>
        <WhatsAppIcon width={width} height={height} />
        {children}
      </span>
    </a>
  );
}
