import type { CardInfoProps } from "./CardInfo.d";

export default function CardInfo({
  title,
  description,
  img,
  children,
}: CardInfoProps) {
  return (
    <>
      {img && (
        <div className="w-full lg:w-1/4 px-4 mb-12 lg:mb-0">
          <div>
            <img
              className="block mb-6 shadow-md w-full h-100 object-cover"
              src={img}
              alt={title}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div>
              <p className="text-2xl font-semibold mb-3">{title}</p>
              <span className="">{description}</span>
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
