export default function Hero({ videoSrc }: { videoSrc: string }) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-[100vb] object-cover"
        src={videoSrc}
      ></video>

      <div className="absolute top-0 h-[100vb] text-white w-full flex justify-center items-start flex-col mx-auto">
        <span
          className="motion-safe:animate-fadeInDown text-4xl lg:text-5xl font-bold mb-6 lg:mb-11"
          style={{
            animationDelay: "1s",
            animationFillMode: "both",
          }}
        >
          <mark className="text-white bg-black bg-opacity-70 p-2 px-4">
            Creá con
          </mark>
        </span>
        <span
          className="motion-safe:animate-fadeInUp font-bold text-5xl lg:text-7xl mb-5 tracking-tighter"
          style={{
            animationDelay: "1.5s",
            animationFillMode: "both",
          }}
        >
          <mark className="text-white bg-black bg-opacity-70 p-2 px-4 uppercase">
            pensemosweb
          </mark>
        </span>
        <span
          className="motion-safe:animate-fadeInLeft font-bold text-center text-2xl lg:text-3xl lg:mt-3"
          style={{
            animationDelay: "2s",
            animationFillMode: "both",
          }}
        >
          <mark className="text-white bg-gradient-pink p-2 px-4">
            Desarrollo web ágil
          </mark>
        </span>
      </div>
    </>
  );
}
