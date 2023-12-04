import Particles from "~/components/Particles/Particles";

export default function Hero({
  videoSrcs,
  preText,
  title,
  subtitle,
  videoPoster,
  timing = 1,
}: {
  videoSrcs: { mp4: string; webm: string; ogv: string };
  preText: string;
  title: string;
  subtitle: string;
  videoPoster?: string;
  timing?: number;
}) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-[100vb] object-cover"
        poster={videoPoster}
        preload="auto"
      >
        <source src={videoSrcs.mp4} type="video/mp4" />
        <source src={videoSrcs.webm} type="video/webm" />
        <source src={videoSrcs.ogv} type="video/ogg" />
      </video>

      <h1 className="absolute h-[100vb] text-white w-full max-xs:w-[100vi] xl:w-[100vi] flex justify-start sm:justify-center top-40 sm:top-0 items-start flex-col mx-auto">
        <span
          className="sm:motion-safe:animate-fadeInDown text-2xl sm:text-3xl lg:text-4xl font-heading mb-2 lg:mb-4"
          style={{
            animationDuration: `${timing}s`,
            animationDelay: "0s",
            animationFillMode: "both",
          }}
        >
          <mark className="text-white bg-transparent p-2">{preText}</mark>
        </span>
        <span
          className="relative max-xs:w-full sm:motion-safe:animate-fadeInLeft font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl mt-3 mb-4 lg:mb-5 tracking-tighter"
          style={{
            animationDuration: `${timing}s`,
            animationDelay: "0.25s",
            animationFillMode: "both",
          }}
        >
          <mark className="text-white bg-transparent uppercase p-2 relative xs:pr-8">
            <span className="absolute -left-12 inset-0 bg-gradient-pink bg-opacity-70 max-xs:w-[100vi] transform -skew-x-12 sm:-z-10 h-full scale-x-110 xs:scale-x-100">
              {" "}
            </span>
            <span className="relative">{title}</span>
          </mark>
          <span
            className="tracking-normal px-2 absolute max-lg:left-0 max-lg:top-[110%] lg:-right-[20%] lg:-bottom-[85%] sm:motion-safe:animate-fadeInLeft text-center max-[375px]:text-xl text-2xl lg:text-3xl lg:mt-[9px] font-heading"
            style={{
              animationDuration: `${timing}s`,
              animationDelay: "0.5s",
              animationFillMode: "both",
            }}
          >
            <mark className="text-white bg-transparent relative p-2 sm:px-4 top-4 sm:top-3 lg:top-0">
              <span className="opacity-0  h-full p-2">{subtitle}</span>
              <span className="absolute -left-8 sm:-left-12 inset-0 bg-black transform max-xs:w-[100vi] -skew-x-12 sm:-z-20 h-full">
                {" "}
              </span>
              <span className="absolute left-0 transform h-full">
                {subtitle}
              </span>
            </mark>
          </span>
        </span>
      </h1>
      <Particles className="absolute inset-0" staticity={1} />
    </>
  );
}
