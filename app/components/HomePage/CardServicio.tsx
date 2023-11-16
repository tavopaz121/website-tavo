interface PropsServicio {
  urlImg: string;
  servive: string;
  description: string;
  iconColor: string;
  isUltimate: boolean;
  position: string;
  delay: number;
}

export default function Servicio({
  urlImg,
  servive,
  description,
  iconColor,
  isUltimate,
  position,
  delay,
}: PropsServicio) {
  return (
    <div
      className={`flex items-center min-h-[137px] ${
        isUltimate ? "" : "pb-12 mb-12 border-b border-gray-100"
      } motion-safe:animate-fadeIn${position === "left" ? "Right" : "Left"}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      <div
        className={`flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center ${iconColor} rounded-full`}
      >
        <img src={urlImg} alt="" width={50} />
      </div>
      <a href="/servicios">
        <h3 className="text-xl font-semibold">{servive}</h3>
        <span className="text-sm text-gray-400">{description}</span>
      </a>
    </div>
  );
}
