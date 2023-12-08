import type { CardServiceProps } from "./CardService.d";
import { Link } from "@remix-run/react";

export default function CardService({
  title,
  description,
  list,
  children,
}: CardServiceProps) {
  return (
    <div className="overflow-hidden bg-white border-2 border-pink-50 rounded-md">
      <div className="p-8 xl:px-12 h-full flex flex-col justify-between">
        <p className="text-3xl font-bold text-black mt-7">{title}</p>
        <p className="mt-3 text-base text-gray-800">{description}</p>

        <ul className="flex flex-col items-start space-y-5 text-left mt-9">
          {list &&
            list.map((item, index) => (
              <li className="inline-flex items-center space-x-2" key={index}>
                <svg
                  className="flex-shrink-0 w-5 h-5 text-pink-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium text-gray-900">
                  {item}
                </span>
              </li>
            ))}
        </ul>

        <Link
          target="_blank"
          rel="noreferrer"
          className="relative group inline-block py-2.5 px-6 mt-10 text-white font-semibold bg-black rounded overflow-hidden w-full"
          to={`https://api.whatsapp.com/send?phone=+522781092116&text=Hola,%20estoy%20interesad@%20en%20adquirir%20el%20paquete%20${title}`}
        >
          <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
          <div className="relative flex items-center justify-center">
            <span className="mr-4">Necesito esto</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
