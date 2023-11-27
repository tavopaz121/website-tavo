import Particles from "~/components/Particles/Particles";

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
          className="motion-safe:animate-fadeInDown max-[375px]:text-3xl text-4xl lg:text-5xl font-heading mb-2 lg:mb-4"
          style={{
            animationDelay: "1s",
            animationFillMode: "both",
          }}
        >
          <mark className="text-white bg-transparent p-2 px-4">Creá con</mark>
        </span>
        <span
          className="motion-safe:animate-fadeInUp font-bold max-[375px]:text-4xl text-5xl lg:text-7xl mb-5 tracking-tighter"
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
          className="motion-safe:animate-fadeInLeft text-center max-[375px]:text-xl text-2xl lg:text-3xl lg:mt-[9px] font-heading"
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
      <Particles className="absolute inset-0" />
    </>
  );
}
