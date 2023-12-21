export default function IconContact({
  srcImge,
  text = "Ingrese texto",
  altImage = "Un icono",
}) {
  return (
    <div className="overflow-hidden bg-white rounded-xl">
      <div className="p-6 flex flex-col items-center text-center text-pink-500 group">
        <div className="relative inline-block overflow-hidden transition duration-1000 rounded-full text-white p-3">
          <div
            className={`absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-102 transition duration-500`}
          />
          <span className={`relative text-pink-500 transition duration-200`}>
            <img
              decoding="async"
              loading="lazy"
              className="block mx-auto w-15 h-15 hue-rotate-[310deg] group-hover:brightness-0 group-hover:invert-0"
              src={srcImge}
              alt={altImage}
            />
          </span>
        </div>
        <p className="mt-6 text-lg font-medium text-center text-gray-900">
          {text}
        </p>
      </div>
    </div>
  );
}
