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

      <div className="absolute top-0 h-[100vb] text-white w-full xl:w-[50%] flex justify-center items-start flex-col mx-auto">
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
          className="relative motion-safe:animate-fadeInLeft font-bold max-[375px]:text-3xl text-5xl lg:text-7xl mb-4 lg:mb-5 tracking-tighter"
          style={{
            animationDelay: "1.5s",
            animationFillMode: "both",
          }}
        >
          <mark className="text-white bg-transparent uppercase p-2 px-4 relative lg:pr-8">
            <span className="absolute -left-12 inset-0 bg-gradient-pink bg-opacity-70 transform -skew-x-12 -z-10 h-full">
              {" "}
            </span>
            pensemosweb
          </mark>
          <span
            className="tracking-normal absolute max-lg:left-0 max-lg:top-[110%] lg:-right-[20%] lg:-bottom-[85%] motion-safe:animate-fadeInLeft text-center max-[375px]:text-xl text-2xl lg:text-3xl lg:mt-[9px] font-heading"
            style={{
              animationDelay: "2s",
              animationFillMode: "both",
            }}
          >
            <mark className="text-white bg-transparent relative p-2 px-4">
              <span className="opacity-0 h-full p-2">Desarrollo web ágil</span>
              <span className="absolute -left-12 inset-0 bg-black transform -skew-x-12 -z-20 h-full">
                {" "}
              </span>
              <span className="absolute left-0 transform h-full">
                Desarrollo web ágil
              </span>
            </mark>
          </span>
        </span>
      </div>
      <Particles className="absolute inset-0" />
    </>
  );
}
