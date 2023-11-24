export interface PropsCardCotact {
  urlImg: string;
  isEmail: boolean;
  description: string;
  medio: string;
  icon: any;
  anchor: string;
}

export default function CardContact({
  urlImg,
  isEmail,
  description,
  medio,
  icon,
  anchor,
}: PropsCardCotact) {
  return (
    <div
      className={`w-full md:w-1/2 lg:w-auto px-4 xl:px-10 ${
        isEmail ? "mb-10 md:mb-0" : null
      } motion-safe:animate-fadeInUp`}
      style={{
        animationDelay: "0.8s",
        animationFillMode: "both",
      }}
    >
      <div className="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
        <div className="max-w-2xs mx-auto text-center">
          <img className="block mx-auto mb-3" src={urlImg} alt="" />
          <h5 className="text-2xl font-bold text-gray-900 mb-3">
            {isEmail ? "Envía un correo" : "Puedes marcar a"}
          </h5>
          <p className="text-gray-600 mb-3">{description}</p>
          <span className="block text-sm text-pink-500 mb-8">{medio}</span>
          <a
            className="relative group inline-block py-4 px-6 text-white font-semibold bg-gray-900 rounded-full overflow-hidden"
            href={anchor}
          >
            <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
            <div className="relative flex items-center justify-center">
              <span className="mr-4">
                {isEmail ? "Contáctanos" : "Llama ahora"}
              </span>
              <span>{icon}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
